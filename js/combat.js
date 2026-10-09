/* Team Lab combat simulator. Uses the planner engine (js/engine.js) for every stat, item,
   Potential and personality number, so there is one set of rules. Damage formula models are
   replaceable and labelled; nothing here is presented as verified unless the source says so. */
(function (root) {
'use strict';
const C = { version: 'combat-1' };
/* how Might turns into damage: both are experimental until in-game damage confirms one */
C.MODELS = {
  A: { label: 'Model A: (attack − DEF, at least 10%) × Might ÷ 100', status: 'experimental',
       about: 'Follows the order AniimoTools lists (defense, then the skill). The ÷100 scale is an assumption.',
       base: (att, def, might) => Math.max(att - def, 0.1 * att) * might / 100 },
  B: { label: 'Model B: attack × Might ÷ 100 − DEF (v11.4)', status: 'experimental',
       about: 'The formula the v11 simulator used. Not the documented order.',
       base: (att, def, might) => Math.max(att * might / 100 - def, 0.1 * att * might / 100) }
};
C.STATES = { normal: 'Normal', break: 'BREAK', recovery: 'Recovery' };
/* type matchup from the chart: the move's element against each of the target's elements, multiplied. null when either is unknown. */
C.matchup = (chart, moveEl, targetEls) => {
  if (!chart || !moveEl || !targetEls || !targetEls.length || !chart.attack[moveEl]) return null;
  const a = chart.attack[moveEl]; return targetEls.reduce((t, e) => t * (a.strong.includes(e) ? chart.strong : a.weak.includes(e) ? chart.weak : 1), 1);
};
const conf = list => (list = list.map(x => x === 'measured' || x === 'manual' ? 'assumption' : x), list.includes('placeholder')) ? 'placeholder' : list.includes('unknown') ? 'unknown' : list.includes('experimental') ? 'experimental' : list.includes('assumption') ? 'assumption' : 'verified';

/* member: {st (planner state), moves:[...], name} ; cfg: {members, actions, target, model, mightTotal, startEP, maxEP} */
C.simulate = function (E, set, cfg) {
  const T = cfg.target || {}, maxHP = Math.max(1, +T.hp || 1), model = C.MODELS[cfg.model] || C.MODELS.A;
  const sc0 = set.scenarios[set.scenario] || { behind: 0.2, stackUptime: 0.8 };
  let hp = maxHP, time = 0, total = 0, gauge = 0;
  const maxEP = Math.max(1, +cfg.maxEP || 100); let ep = Math.min(maxEP, Math.max(0, +cfg.startEP || 0)); // one shared team pool
  const cds = {}, buffs = [], log = [], warnings = new Set(), incomplete = new Map();
  const ctx = (cfg.members || []).map(m => { try { return E.context(m.st, set); } catch (e) { return null; } });
  ctx.forEach((c, i) => { if (c && c.usesPlaceholder.length) warnings.add(`${E.bySlug[c.st.slug].name}: blank raw stats (${c.usesPlaceholder.join(', ')}) use the placeholder of ${set.A.rawPlaceholder.v}.`); });
  (cfg.actions || []).forEach((a, ai) => {
    if (hp <= 0) return;
    const c = ctx[a.slot], m = (cfg.members || [])[a.slot];
    time += Math.max(0, +a.wait || 0);
    const base = { action: ai + 1, time: +time.toFixed(2), slot: a.slot, state: a.state || 'normal' };
    if (!c || !m) { log.push({ ...base, error: 'No Aniimo in this slot' }); return; }
    const mv = (m.moves || [])[a.move]; if (!mv) { log.push({ ...base, who: m.name, error: 'No such move' }); return; }
    const key = a.slot + ':' + a.move;
    if ((cds[key] || 0) > time + 1e-9) { log.push({ ...base, who: m.name, move: mv.name, error: `Cooldown: ready at ${cds[key].toFixed(1)}s` }); return; }
    const cost = mv.ep == null ? 0 : Math.max(0, +mv.ep);
    if (ep < cost) { log.push({ ...base, who: m.name, move: mv.name, epBefore: ep, epAfter: ep, error: `Not enough team EP (${ep.toFixed(0)} of ${cost})` }); return; }
    if (mv.ep == null) warnings.add(`${mv.name}: EP cost not listed, so it costs nothing here.`);
    const miss = [mv.ep == null ? 'EP cost' : null, mv.cooldown == null ? 'cooldown' : null].filter(Boolean);
    if (miss.length) incomplete.set(m.name + ': ' + mv.name, miss);
    const epBefore = ep, gain = Math.max(0, +mv.epGain || 0); ep -= cost; const epAfter = Math.min(maxEP, ep + gain);
    const live = buffs.filter(b => b.until > time);
    const bAmp = live.reduce((t, b) => t + (+b.amp || 0) / 100, 0), bCrit = live.reduce((t, b) => t + (+b.crit || 0) / 100, 0), shred = Math.min(1, live.reduce((t, b) => t + (+b.shred || 0) / 100, 0));
    const hits = Math.max(1, Math.round(+mv.hits || 1)), total_ = (mv.mightTotal != null ? mv.mightTotal : cfg.mightTotal) !== false;
    const perHitMight = Math.max(0, +mv.might || 0) / (total_ && hits > 1 ? hits : 1);
    const def = Math.max(0, (+T.def || 0) * (1 - shred));
    let cdrUsed = 0;
    for (let h = 1; h <= hits && hp > 0; h++) {
      const hpPct = 100 * hp / maxHP, sc = { ...sc0, hpFrom: hpPct, hpTo: Math.max(0, hpPct - 0.01), omega: !!T.omega };
      const fx = m.st.item ? E.itemEffects(m.st.item, m.st.itemLv || 0, c, sc) : E.itemEffects(null, 0, c, sc);
      const f = fx.blocked ? E.itemEffects(null, 0, c, sc) : fx;
      const P = E.hitParts(c, f, null, bCrit); cdrUsed = P.cdr;
      const fi = (c.a.formInfo || []).find(f => f.form === (m.st.form || c.a.forms[0])), els = fi ? fi.elements : (c.a.element ? [c.a.element] : []), autoSame = mv.element && els.length ? els.includes(mv.element) : null;
      const autoType = C.matchup(E.G && E.G.typeChart, mv.element, T.elements), typeM = autoType != null ? autoType : Math.max(0, T.type == null ? 1 : +T.type), same = (autoSame == null ? !!mv.sameElement : autoSame) ? 1.1 : 1, elem = Math.max(0, 1 + (+m.boost || 0) / 100 - (+T.resist || 0) / 100);
      const ampM = Math.max(0.2, 1 + P.amp + bAmp), finalM = 1 + P.final, alpha = T.wild === false ? 1 : 0.625;
      const mult = v => (v === '' || v == null || !Number.isFinite(+v)) ? 1 : Math.max(0, +v), stM = base.state === 'break' ? mult(T.breakMult) : base.state === 'recovery' ? mult(T.recoveryMult) : 1;
      const b = model.base(P.attack, def, perHitMight);
      const dmg = mv.kind === 'buff' ? 0 : b * typeM * same * elem * P.crit * ampM * finalM * P.persS * P.hitMult * alpha * stM;
      const mods = [
        { name: 'Attack', value: +P.attack.toFixed(1), status: c.usesPlaceholder.some(s => s === 'ATK' || s === 'BREAK') && !c.hitByLevel ? 'placeholder' : 'verified' },
        { name: 'Target DEF' + (shred ? ` (−${Math.round(shred * 100)}% shred)` : '') + (T.defStatus === 'measured' ? ' (your measurement)' : ''), value: +def.toFixed(1), status: T.defStatus === 'measured' ? 'measured' : 'assumption' },
        { name: `Might${total_ && hits > 1 ? ` (${mv.might} ÷ ${hits} hits)` : ''}`, value: +perHitMight.toFixed(2), status: hits > 1 ? 'assumption' : (mv.status && mv.status.might) || 'assumption' },
        { name: model.label, value: +b.toFixed(1), status: 'experimental' },
        { name: autoType != null ? `Type matchup (${mv.element} → ${T.elements.join('/')}, type chart)` : `Type matchup (set by hand: ${!mv.element ? 'move element unknown' : 'target element unknown'})`, value: +typeM.toFixed(4), status: autoType != null ? 'verified' : 'manual' },
        { name: autoSame == null ? 'Same element (ticked by hand)' : `Same element (move ${mv.element}, form ${els.join('/')})`, value: same, status: autoSame == null ? 'assumption' : 'verified' },
        { name: 'Elemental Boost − resistance', value: +elem.toFixed(3), status: 'assumption' },
        { name: 'Crit (expected)', value: +P.crit.toFixed(3), status: 'assumption' },
        { name: 'Damage Amp (item, settings, buffs)', value: +ampM.toFixed(3), status: 'assumption' },
        { name: 'Final Damage Amp', value: +finalM.toFixed(3), status: 'assumption' },
        { name: 'Personality S', value: P.persS, status: 'verified' },
        { name: 'Item roll / extra', value: +P.hitMult.toFixed(3), status: P.hitMult === 1 ? 'verified' : 'assumption' },
        { name: T.wild === false ? 'Not a wild Aniimo or Alpha' : 'Alpha / wild ×0.625', value: alpha, status: 'verified' },
        { name: `${C.STATES[base.state]} state`, value: stM, status: base.state === 'normal' ? 'verified' : 'unverified' }
      ];
      hp = Math.max(0, hp - dmg); total += dmg;
      if (mv.kind === 'break' || (c.a.role === 'Break')) gauge += P.brk * perHitMight / 100;
      log.push({ ...base, who: m.name, move: mv.name, hit: h, hits, attackEl: mv.element || null, targetEls: T.elements || [], typeM, typeStatus: autoType != null ? 'verified' : 'manual', damage: dmg, hpLeft: hp, hpPct: 100 * hp / maxHP, epBefore, epCost: cost, epGain: gain, epAfter, ep: epAfter, buffs: live.map(x => x.label), mods,
        confidence: conf(mods.map(x => x.status).concat(c.usesPlaceholder.length ? ['placeholder'] : [])), itemNotes: f.unscored.concat(fx.blocked ? [fx.blocked] : []) });
      f.unscored.forEach(n => warnings.add(`${m.name}: ${n}`));
    }
    cds[key] = time + Math.max(0, +mv.cooldown || 0) * (1 - cdrUsed);
    ep = epAfter;
    const bf = mv.buff || {}; if ((+bf.duration || 0) > 0) buffs.push({ until: time + (+bf.duration), amp: +bf.amp || 0, crit: +bf.crit || 0, shred: +bf.shred || 0, label: `${m.name}: ${mv.name}` });
  });
  return { log, total, gauge, hpLeft: hp, maxHP, defeated: hp <= 0, elapsed: time, ep, warnings: [...warnings], model: cfg.model || 'A', modelLabel: model.label, version: C.version,
    complete: incomplete.size === 0, incomplete: [...incomplete].map(([move, missing]) => ({ move, missing })) };
};
if (typeof module !== 'undefined' && module.exports) module.exports = C; else root.AniimoCombat = C;
})(typeof window !== 'undefined' ? window : this);
