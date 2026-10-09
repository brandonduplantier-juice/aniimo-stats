/* Aniimo optimizer engine.
   Pure calculation code: no page code, no game data. Game data and every adjustable
   assumption live in data/game-data.js, so a patch means editing that file only.
   Works in the browser (window.AniimoEngine) and in Node (require) for the tests. */
(function (root) {
'use strict';
const STATS = ['ATK', 'BREAK', 'REGEN', 'HP', 'P.DEF', 'M.DEF'];
const E = { STATS };
let G = null;               // game data, set by E.init
E.init = game => { G = game; E.G = game; E.bySlug = {}; game.aniimo.forEach(a => E.bySlug[a.slug] = a);
  E.item = {}; game.items.forEach(i => E.item[i.id] = i); return E; };

/* ---------- Potential, points, materials ---------- */
// 'mult' = (1+0.008p)(1+0.04*floor(p/4))  (gives the quoted "about 39%" at 20)
// 'add'  = 1+0.008p+0.04*floor(p/4)       (gives 36% at 20)
E.M = (p, model) => model === 'add' ? 1 + 0.008 * p + 0.04 * Math.floor(p / 4)
                                    : (1 + 0.008 * p) * (1 + 0.04 * Math.floor(p / 4));
E.allowance = (lv, rk) => (lv >= 70 ? 55 : lv >= 65 ? 40 : lv >= 60 ? 30 : lv >= 55 ? 20 : lv >= 45 ? 10 : 5) + (rk >= 7 ? 23 : rk >= 6 ? 13 : rk >= 5 ? 5 : 0);
E.maxRank = lv => { const L = (G && G.rankLevels) || { 2: 35, 3: 35, 4: 40, 5: 50, 6: 60, 7: 65 }; let r = 1; for (let k = 2; k <= 7; k++) if (lv >= L[k]) r = k; return r; };
E.rankBlue = rk => rk >= 7 ? 4 : rk >= 6 ? 2 : rk >= 5 ? 1 : 0;
E.gate = lv => lv >= 60 ? 20 : lv >= 55 ? 19 : lv >= 50 ? 15 : lv >= 40 ? 12 : 10;
E.pointCost = p => p <= 4 ? ['dust', p] : p <= 8 ? ['sand', p - 4] : p <= 13 ? ['ess', p - 8] : ['ess', 5];
E.materials = (from, to) => { const m = { dust: 0, sand: 0, ess: 0 }; for (let p = from + 1; p <= to; p++) { const [k, c] = E.pointCost(p); m[k] += c; } return m; };
// rarity from enhancement level: Blue max +5, Purple max +10, Gold max +15 (GameWith item pages)
E.rarityFor = lvl => lvl > 10 ? 'Gold' : lvl > 5 ? 'Purple' : 'Blue';
E.tierOf = lvl => lvl >= 15 ? 2 : lvl >= 10 ? 1 : 0;

/* personality: at most one letter from each pair; a pair with both letters counts as unknown */
const PAIRS = [['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']];
E.normPers = str => { const L = new Set(String(str || '').toUpperCase().replace(/[^EISNTFJP]/g, '')), letters = [], conflicts = [];
  PAIRS.forEach(([a, b]) => { if (L.has(a) && L.has(b)) conflicts.push(a + '/' + b); else if (L.has(a)) letters.push(a); else if (L.has(b)) letters.push(b); });
  return { letters, conflicts, str: PAIRS.map(p => p.find(x => letters.includes(x)) || '').join('') }; };
const int = (v, d) => { const n = Math.round(Number(v)); return Number.isFinite(n) ? n : d; };

/* ---------- input checks ----------
   st = {slug, form, level, rank, capa, reset, build, pers, stats:{ATK:{inn,aq,raw},...}} */
E.validate = function (st) {
  const errors = [], warnings = [];
  const lv = Math.min(70, Math.max(1, int(st.level, 60))); let rk = Math.min(7, Math.max(1, int(st.rank, 1)));
  if (int(st.level, 60) !== lv) warnings.push(`Level must be 1 to 70, so ${lv} was used.`);
  if (rk > E.maxRank(lv)) { warnings.push(`Star Up rank ${rk} needs a higher level than ${lv}, so rank ${E.maxRank(lv)} was used.`); rk = E.maxRank(lv); }
  const stats = {}; let spent = 0;
  for (const s of STATS) {
    const x = (st.stats && st.stats[s]) || {};
    let inn = int(x.inn, 0), aq = int(x.aq, 0);
    if (inn < 0 || inn > 10) { errors.push(`${s}: Innate must be 0 to 10 (you entered ${inn}).`); inn = Math.min(10, Math.max(0, inn)); }
    const innEff = Math.min(10, inn + (st.capa && inn < 10 ? 1 : 0));
    if (aq < 0) { errors.push(`${s}: Acquired can't be negative.`); aq = 0; }
    const maxAq = 20 - innEff;
    if (aq > maxAq) { errors.push(`${s}: Innate ${innEff} + Acquired ${aq} = ${innEff + aq}, but the game caps the total at 20. Acquired can be at most ${maxAq}, so ${maxAq} was used.`); aq = maxAq; }
    let raw = x.raw === '' || x.raw == null ? null : Number(x.raw);
    if (raw != null && !(raw >= 0)) { errors.push(`${s}: raw stat must be a positive number.`); raw = null; }
    stats[s] = { inn: innEff, aq, raw, d0: innEff + aq };
    if (innEff + aq > E.gate(lv)) warnings.push(`${s}: ${innEff + aq} points is above the level ${lv} gate of ${E.gate(lv)}. That is possible only if level gates count Acquired points alone (not yet confirmed).`);
    spent += aq;
  }
  const np = E.normPers(st.pers);
  if (np.conflicts.length) warnings.push(`Personality had both letters of ${np.conflicts.join(' and ')}, which the game doesn't allow, so that pair was treated as unknown.`);
  const budget = E.allowance(lv, rk);
  if (spent > budget) errors.push(`You entered ${spent} Acquired points in total, but level ${lv} at Star Up rank ${rk} only gives ${budget}. Check the numbers against the game screen.`);
  return { errors, warnings, lv, rk, stats, budget, spent };
};

/* ---------- context: everything about one Aniimo setup ---------- */
/* enhanced core skill: wild Alpha, or a contract on the equipped +15 item. It never changes the six stats;
   it only switches on rules that belong to the enhanced skill (enhancedCaps in the data). */
E.enhanced = st => {
  if (st.alpha === 'wild') return { active: true, why: 'Alpha' };
  if (st.contract === 'this' && st.item && (st.itemLv || 0) >= 15) return { active: true, why: 'contract' };
  return { active: false, why: st.alpha === 'egg' ? 'egg' : st.contract === 'this' ? 'needs15' : 'none' };
};
function meta(a, form, enh) {
  const m = { rec: [...(a.recommended || [])], caps: { ...(a.capMap || {}), ...(enh && a.enhancedCaps ? a.enhancedCaps : {}) } };
  const o = (a.formOverrides || {})[form];
  if (o && o.capMap) Object.assign(m.caps, o.capMap);
  return m;
}
E.meta = meta;
const PERS_MULT = { E: { ATK: 1.02, BREAK: 1.02 }, I: { REGEN: 1.04 }, T: { 'P.DEF': 1.06 }, F: { 'M.DEF': 1.06 }, J: { HP: 1.04 } };
E.context = function (st, set) {
  const a = E.bySlug[st.slug]; if (!a) throw new Error('Unknown Aniimo ' + st.slug);
  const v = E.validate(st), A = set.A, form = st.form || a.forms[0], enh = E.enhanced(st), m = meta(a, form, enh.active);
  const pers = E.normPers(st.pers).letters;
  const blue = E.rankBlue(v.rk), S = {};
  for (const s of STATS) {
    const x = v.stats[s]; let pm = 1; pers.forEach(c => { if (PERS_MULT[c] && PERS_MULT[c][s]) pm *= PERS_MULT[c][s]; });
    S[s] = { inn: x.inn, aq: x.aq, d0: st.reset ? x.inn : x.d0, dNow: x.d0, raw: x.raw, rawUsed: (x.raw != null ? x.raw : A.rawPlaceholder.v) * pm, pm, entered: x.raw != null, blue };
  }
  const budget = st.reset ? v.budget : Math.max(0, v.budget - v.spent);
  // which stat drives hit damage
  let attack = 'max';
  const bothRaw = S.ATK.entered && S.BREAK.entered;
  if (!bothRaw) attack = a.role === 'Break' ? (a.buildChoice ? (st.build || 'ATK') : 'BREAK') : 'ATK';
  if (st.forceAttack) attack = st.forceAttack;
  const hitByLevel = ['Support', 'Heal', 'Regen'].includes(a.role);
  const kitStats = STATS.filter(s => m.caps[s] || (hitByLevel && m.rec.includes(s)));
  const usesPlaceholder = STATS.filter(s => !S[s].entered);
  return { a, st, v, set, A, form, m, S, enh, budget, gate: E.gate(v.lv), lv: v.lv, rk: v.rk, pers, attack, bothRaw, hitByLevel, kitStats, usesPlaceholder };
};

/* ---------- held item effects ----------
   Turns an item's rule list (data/game-data.js) into numbers for one context and scenario. */
function shareAbove(sc, t) { const lo = Math.max(sc.hpTo, t), hi = sc.hpFrom; return sc.hpFrom > sc.hpTo ? Math.max(0, hi - lo) / (sc.hpFrom - sc.hpTo) : 0; }
function shareBelow(sc, t) { const hi = Math.min(sc.hpFrom, t), lo = sc.hpTo; return sc.hpFrom > sc.hpTo ? Math.max(0, hi - lo) / (sc.hpFrom - sc.hpTo) : 0; }
E.shareAbove = shareAbove; E.shareBelow = shareBelow;
function rampAvg(sc, per, step, max) { // average of min(max, step*floor(lost/per)) over the scenario's HP range
  let t = 0, n = 0; for (let hp = sc.hpFrom; hp > sc.hpTo; hp -= 0.25) { const lost = 100 - hp; t += Math.min(max, step * Math.floor(lost / per)); n++; } return n ? t / n : 0; }
function pityRate(c, add) { // average crit rate when each non-crit adds `add` until a crit lands
  let surv = 1, exp = 0; for (let k = 1; k < 200 && surv > 1e-9; k++) { exp += surv; const p = Math.min(1, c + add * (k - 1)); surv *= 1 - p; } return 1 / exp; }
E.pityRate = pityRate;

E.itemEffects = function (id, lvl, c, sc) {
  const it = E.item[id], A = c.A, tier = E.tierOf(lvl);
  const fx = { id, lvl, tier, blue: {}, flat: {}, statPct: [], amp: [], final: 0, critRate: 0, critDmg: 0, forcedCrit: 0, hitMult: 1, cdr: [], gaugeMult: 1,
    dr: [], hpOne: false, team: [], parts: [], unscored: [], uses: new Set(), blocked: null };
  if (!it) return fx;
  if (it.notOn && it.notOn.includes(c.a.role)) fx.blocked = `${it.name} can't be used on ${c.a.role} Aniimo.`;
  if (it.onlyFor && !it.onlyFor.includes(c.a.name)) fx.blocked = `${it.name} only does something for ${it.onlyFor.join(', ')}.`;
  const tiers = [it.rules.core || [], tier >= 1 ? it.rules.t10 || [] : [], tier >= 2 ? it.rules.t15 || [] : []];
  let dice = 1, pity = 0, extraHit = null;
  const use = k => fx.uses.add(k), av = k => { use(k); return A[k].v; };
  const active = []; tiers.forEach((list, ti) => list.forEach(r => active.push([ti, r])));
  const replaced = new Set(active.map(([, r]) => r.replaces).filter(Boolean));
  active.filter(([, r]) => !(r.key && replaced.has(r.key))).forEach(([ti, r]) => {
    const tag = ['Base', 'At +10', 'At +15'][ti];
    const P = t => fx.parts.push(`${tag}: ${t}`);
    switch (r.type) {
      case 'flat': { const n = r.perLevel * c.lv; (r.stat === 'DEF2' ? ['P.DEF', 'M.DEF'] : [r.stat]).forEach(s => fx.flat[s] = (fx.flat[s] || 0) + n); P(`+${n.toFixed(0)} raw ${r.stat === 'DEF2' ? 'P.DEF and M.DEF' : r.stat} (0.7 × level ${c.lv})`); break; }
      case 'pot': (r.stat === 'DEF2' ? ['P.DEF', 'M.DEF'] : [r.stat]).forEach(s => fx.blue[s] = (fx.blue[s] || 0) + 2); P(`+2 blue ${r.stat === 'DEF2' ? 'P.DEF and M.DEF' : r.stat} Potential`); break;
      case 'statPct': fx.statPct.push(r); P(`${r.stat} +${r.v * 100}%${r.double15 ? `, doubled while ${r.double15} Potential is above 15` : ''}`); break;
      case 'amp': fx.amp.push(r); P(`Damage Amp +${r.v * 100}%${r.double15 ? `, doubled while ${r.double15} Potential is above 15` : ''}`); break;
      case 'ampPerEP': { const v = r.v * av('avgEP') / 10; fx.amp.push({ v }); P(`+${(r.v * 100)}% Damage Amp per 10 EP held, about +${(v * 100).toFixed(0)}% at the assumed average EP`); break; }
      case 'ampWhen': { const sh = sc[r.share]; fx.amp.push({ v: r.v * sh }); use('scenario'); P(`+${r.v * 100}% Damage Amp on ${Math.round(sh * 100)}% of hits (${r.share === 'behind' ? 'from behind or in stealth' : r.share})`); break; }
      case 'finalAbove': { const sh = shareAbove(sc, r.hp); fx.final += r.v * sh; use('scenario'); P(`+${r.v * 100}% final damage above ${r.hp}% HP: ${Math.round(sh * 100)}% of this fight`); break; }
      case 'finalBelow': { const sh = shareBelow(sc, r.hp); fx.final += r.v * sh; use('scenario'); P(`+${r.v * 100}% final damage below ${r.hp}% HP: ${Math.round(sh * 100)}% of this fight`); break; }
      case 'finalRamp': { const sc2 = c.set.rampBelow30 ? { ...sc, hpFrom: Math.min(sc.hpFrom, 30) } : sc, v = sc.hpFrom > sc2.hpTo && sc2.hpFrom > sc2.hpTo ? rampAvg(sc2, r.per, r.step, r.max) * (sc2.hpFrom - sc2.hpTo) / (sc.hpFrom - sc.hpTo) : 0; fx.final += v; use('scenario'); P(`+${r.step * 100}% per ${r.per}% HP lost (max ${r.max * 100}%), about +${(v * 100).toFixed(1)}% on average here (reading of the item text, not confirmed)`); break; }
      case 'execute': if (sc.omega) P('Defeat below 10% HP: does nothing on Omega targets'); else if (sc.hpTo < r.hp && sc.hpFrom > r.hp) { const w = sc.hpFrom - sc.hpTo, m = w / (sc.hpFrom - r.hp); fx.hitMult *= m; use('scenario'); P(`Skips the last ${r.hp}% HP: about ${((m - 1) * 100).toFixed(0)}% faster kill here`); } else P(`Defeat below ${r.hp}% HP: the target doesn't get that low in this fight`); break;
      case 'critAbove': { const sh = shareAbove(sc, r.hp); fx.forcedCrit = Math.max(fx.forcedCrit, sh); use('scenario'); if (r.v) fx.final += r.v * sh; P(`${r.v ? `+${r.v * 100}% final damage and ` : ''}every hit crits above ${r.hp}% HP: ${Math.round(sh * 100)}% of this fight`); break; }
      case 'critRate': { const sh = r.share ? sc[r.share] : 1; fx.critRate += r.v * sh; if (r.share) use('scenario'); P(`+${r.v * 100}% crit rate${r.share ? ` on ${Math.round(sh * 100)}% of hits` : ''}`); break; }
      case 'critDmg': { const sh = r.share ? (r.share in sc ? sc[r.share] : av(r.share) / 100) : 1; fx.critDmg += r.v * sh; if (r.share in sc) use('scenario'); P(`+${(r.v * 100).toFixed(0)}% crit damage, active ${Math.round(sh * 100)}% of the time`); break; }
      case 'extraHitOnCrit': extraHit = { chance: r.chance, might: r.might }; use('mightPerHit'); use('critRate'); P(`${r.chance * 100}% chance of an extra ${r.might} Might hit after a crit`); break;
      case 'critPity': pity = r.v; use('critRate'); P(`+${r.v * 100}% crit rate after each non-crit until you crit`); break;
      case 'dice': dice = Math.max(dice, r.mean); P(`average roll about ${r.mean.toFixed(3)}× (assumes rolls are evenly spread)`); break;
      case 'basicDouble': { const b = av('basicShare') / 100, m = 1 + r.chance * b; fx.hitMult *= m; P(`basic attacks have a ${r.chance * 100}% chance to deal double: +${((m - 1) * 100).toFixed(1)}% overall at the assumed basic attack share`); break; }
      case 'ultAmp': { const u = av('ultShare') / 100; fx.hitMult *= (1 - u) + u * (1 + r.v); P(`Ultimate damage +${r.v * 100}%: +${(u * r.v * 100).toFixed(1)}% overall at the assumed Ultimate share`); break; }
      case 'ultRefund': { const u = av('ultShare') / 100, f = 1 / (1 - r.v); fx.hitMult *= (1 - u) + u * f; P(`refunds ${r.v * 100}% of Ultimate points: about ${((f - 1) * 100).toFixed(0)}% more Ultimates`); break; }
      case 'cdr': fx.cdr.push(r); use('cdShare'); P(`cooldowns −${r.v * 100}%${r.double15 ? `, doubled while ${r.double15} Potential is above 15` : ''}`); break;
      case 'gaugeMark': { const s = av('markShare') / 100; fx.gaugeMult *= 1 + r.v * s; P(`next BREAK damage +${r.v * 100}% after you're hit: on about ${Math.round(s * 100)}% of BREAK hits`); break; }
      case 'repeat': { const st = av('repeatStacks'), v = r.per * Math.min(r.max, st); fx.amp.push({ v }); P(`+${r.per * 100}% per repeat of the same skill (max ${r.max}): +${(v * 100).toFixed(0)}% at ${st} average stacks`); break; }
      case 'repeatBonus': { const st = av('repeatStacks'), sh = Math.min(1, Math.max(0, (st - 2) / 3)); fx.amp.push({ v: r.v * sh }); P(`+${r.v * 100}% after 3 repeats: counted on ${Math.round(sh * 100)}% of hits`); break; }
      case 'repeatCrit': { const st = av('repeatStacks'), sh = Math.min(1, Math.max(0, st - 4)); fx.critRate += r.v * sh; P(`+${r.v * 100}% crit rate at max stacks: counted on ${Math.round(sh * 100)}% of hits`); break; }
      case 'cloneAmp': { const cs = av('cloneShare') / 100; fx.hitMult *= 1 + r.v * cs; P(`clones deal +${r.v * 100}%: +${(r.v * cs * 100).toFixed(1)}% overall at the assumed clone share`); break; }
      case 'clonePerStack': { const n = Math.min(r.max, av('clones')); fx.amp.push({ v: r.amp * n }); fx.critRate += r.crit * n; P(`+${r.amp * 100}% Damage Amp and crit rate per clone: ${n} clone(s) assumed`); break; }
      case 'dr': fx.dr.push(r); P(`damage taken −${r.v * 100}%${r.kind !== 'all' ? ` (${r.kind === 'phys' ? 'physical' : 'magic'})` : ''}${r.if15 ? ` while ${r.if15} Potential is above 15` : ''}`); break;
      case 'drWhen': { const sh = av(r.share) / 100; fx.dr.push({ v: r.v * sh, kind: 'all' }); P(`−${r.v * 100}% damage taken, active ${Math.round(sh * 100)}% of the time (assumed)`); break; }
      case 'hpOne': fx.hpOne = true; fx.final += r.v; P(`+${r.v * 100}% final damage, but max HP becomes 1`); break;
      case 'finalPerDef': { fx.finalPerDef = { per: r.per, max: r.max }; if (!c.S['P.DEF'].entered && !c.S['M.DEF'].entered) use('rawPlaceholder'); P(`+1% final damage per ${r.per} P.DEF or M.DEF (the higher one, after the points are spent), up to ${r.max * 100}%`); break; }
      case 'teamCrit': fx.team.push({ kind: 'critRate', v: r.v * r.stacks * av('luckUptime') / 100 }); P(`team crit rate +${r.v * 100}% per Luck stack (max ${r.stacks}), at full stacks ${A.luckUptime.v}% of the time`); break;
      case 'utility': fx.unscored.push(`${tag}: ${r.text}`); break;
      default: fx.unscored.push(`${tag}: ${r.type}`);
    }
  });
  if (dice > 1) fx.hitMult *= dice;
  fx._pity = pity; fx._extraHit = extraHit;
  return fx;
};

/* ---------- score terms ----------
   Each term depends on one stat group, so the point search below finds the true best
   allocation for the score (not a rule of thumb). */
function above15(c, s, d, blue) { const b = c.set.t15Basis; const v = b === 'acquired' ? d - c.S[s].inn : b === 'effective' ? d + blue : d; return v > 15; }
function statAt(c, fx, s, d) { // raw stat after Potential d (displayed) with the item's blue bonus and flat/percent bonuses
  const x = c.S[s], model = c.set.potModel, bNew = x.blue + (fx.blue[s] || 0);
  let v = x.rawUsed * E.M(d + bNew, model) / E.M(x.dNow + x.blue, model) + (fx.flat[s] || 0);
  fx.statPct.forEach(r => { if (r.stat === s) v *= 1 + r.v * (r.double15 && above15(c, r.double15, d, bNew) ? 2 : 1); });
  return v;
}
E.statAt = statAt;
function critFactor(c, fx, team) {
  const A = c.A; let cr = A.critRate.v / 100 + (c.pers.includes('N') ? 0.05 : 0) + fx.critRate + (team || 0); let cd = A.critDmg.v / 100 + fx.critDmg;
  if (fx._pity) cr = pityRate(Math.min(1, cr), fx._pity);
  cr = Math.min(1, cr); cd = Math.min(2, cd); // crit is capped at ×3 (AniimoTools damage formula)
  let f = fx.forcedCrit * (1 + cd) + (1 - fx.forcedCrit) * (1 + cr * cd);
  if (fx._extraHit) f += Math.max(cr, fx.forcedCrit) * fx._extraHit.chance * fx._extraHit.might / A.mightPerHit.v;
  return f;
}
function makeTerms(c, fx, opt) {
  const A = c.A, w = opt.weights, set = c.set, team = opt.teamCrit || 0;
  const base = { hit: 0, gauge: 0, surv: 0, kit: 0 };
  // fixed part of hit damage
  const ampConst = fx.amp.filter(r => !r.double15).reduce((t, r) => t + r.v, 0);
  const finalM = 1 + A.otherFinal.v / 100 + fx.final;
  const constHit = finalM * critFactor(c, fx, team) * fx.hitMult * (c.pers.includes('S') ? 1.04 : 1);
  const noItem = opt.noItemFx;
  const attackOf = (fx2, dA, dB) => {
    if (c.hitByLevel) return 10.5 * c.lv;
    const atk = statAt(c, fx2, 'ATK', dA), brk = 0.85 * statAt(c, fx2, 'BREAK', dB);
    return c.attack === 'ATK' ? atk : c.attack === 'BREAK' ? brk : Math.max(atk, brk);
  };
  const att0 = attackOf(noItem, c.S.ATK.dNow, c.S.BREAK.dNow) / (c.hitByLevel ? 1 : c.S.ATK.pm), tdef = A.targetDefPct.v / 100 * att0;
  const ampAt = dA => 1 + A.otherAmp.v / 100 + ampConst + fx.amp.filter(r => r.double15).reduce((t, r) => t + r.v * (above15(c, r.double15, dA, c.S[r.double15].blue + (fx.blue[r.double15] || 0)) ? 2 : 1), 0);
  const cdrAt = dR => { let cdr = 0; fx.cdr.forEach(r => cdr += r.v * (r.double15 && above15(c, r.double15, dR, c.S.REGEN.blue + (fx.blue.REGEN || 0)) ? 2 : 1)); const sh = A.cdShare.v / 100; return (1 - sh) + sh / (1 - Math.min(0.9, cdr)); };
  const gaugeAmp = set.ampToGauge ? constHit : 1;
  const T = {
    AB(dA, dB) {
      const out = { hit: 0, gauge: 0, kit: 0 };
      const att = attackOf(fx, dA, dB), hit = Math.max(att - tdef, 0.1 * att) * constHit * (opt.ampAffectsAB ? ampAt(dA) : 1);
      out.hit = Math.log(hit);
      out.gauge = Math.log(Math.max(1e-9, statAt(c, fx, 'BREAK', dB) * fx.gaugeMult * gaugeAmp * (set.ampToGauge ? ampAt(dA) : 1)));
      out.kit = kitLog(c, fx, 'ATK', dA) + kitLog(c, fx, 'BREAK', dB);
      return out;
    },
    R(dR) { const f = Math.log(cdrAt(dR)); return { hit: f, gauge: f, kit: kitLog(c, fx, 'REGEN', dR) }; },
    HP(d) { return { surv: fx.hpOne ? 0 : Math.log(statAt(c, fx, 'HP', d)), kit: kitLog(c, fx, 'HP', d) }; },
    DEFS(dP, dM) { // both defenses together: Supreme Elixir +15 reads the higher one
      const p = T.DEF('P.DEF', dP), m = T.DEF('M.DEF', dM); const out = { surv: p.surv + m.surv, kit: p.kit + m.kit, hit: 0, gauge: 0 };
      if (fx.finalPerDef) { const d = Math.max(statAt(c, fx, 'P.DEF', dP), statAt(c, fx, 'M.DEF', dM)), b = Math.min(fx.finalPerDef.max, d / fx.finalPerDef.per / 100);
        out.hit = Math.log((finalM + b) / finalM); if (set.ampToGauge) out.gauge = out.hit; }
      return out;
    },
    DEF(s, d) {
      const sh = s === 'P.DEF' ? A.physShare.v / 100 : 1 - A.physShare.v / 100;
      const base0 = statAt(c, noItem, s, c.S[s].dNow) / c.S[s].pm, EA = A.enemyAtkRatio.v * base0, def = statAt(c, fx, s, d);
      let dr = 0; fx.dr.forEach(r => { if ((r.kind === 'all' || (r.kind === 'phys') === (s === 'P.DEF')) && (!r.if15 || (r.if15 === s && above15(c, s, d, c.S[s].blue + (fx.blue[s] || 0))))) dr += r.v; });
      const taken = Math.max(EA - def, 0.1 * EA) * (1 - Math.min(0.9, dr)) * (c.pers.includes('P') ? 0.96 : 1);
      return { surv: -sh * Math.log(taken), kit: kitLog(c, fx, s, d) };
    }
  };
  T.ampLogAt = dA => Math.log(ampAt(dA));
  return T;
}
function kitLog(c, fx, s, d) {
  if (!c.kitStats.includes(s)) return 0;
  const cap = c.m.caps[s] || Infinity, v = Math.min(cap, statAt(c, fx, s, d));
  return Math.log(Math.max(1e-9, v)) / c.kitStats.length;
}
const W = (w, o) => (w.hit || 0) * (o.hit || 0) + (w.gauge || 0) * (o.gauge || 0) + (w.surv || 0) * (o.surv || 0) + (w.kit || 0) * (o.kit || 0);
const MAT_W = { dust: 1, sand: 2, ess: 4 };
const matScore = (from, to) => { const m = E.materials(from, to); return m.dust * MAT_W.dust + m.sand * MAT_W.sand + m.ess * MAT_W.ess; };

/* ---------- exact point search ----------
   Groups: ATK+BREAK together (attack uses the larger one), REGEN, HP, P.DEF, M.DEF.
   A knapsack over the groups gives the allocation with the highest score for the budget.
   Ties go to the allocation that costs fewer materials. */
E.allocate = function (c, fx, opt) {
  const T = makeTerms(c, fx, { ...opt, ampAffectsAB: true }), w = opt.weights, S = c.S, g = c.gate, B = c.budget;
  const top = s => Math.max(S[s].d0, g);
  const tiny = 1e-7;
  const groups = [];
  { const best = {}; for (let dA = S.ATK.d0; dA <= top('ATK'); dA++) for (let dB = S.BREAK.d0; dB <= top('BREAK'); dB++) {
      const cost = dA - S.ATK.d0 + dB - S.BREAK.d0; if (cost > B) continue;
      const val = W(w, T.AB(dA, dB)) - tiny * (matScore(S.ATK.d0, dA) + matScore(S.BREAK.d0, dB));
      if (!best[cost] || val > best[cost].val) best[cost] = { val, d: { ATK: dA, BREAK: dB } }; }
    groups.push(best); }
  const one = (s, f) => { const best = {}; for (let d = S[s].d0; d <= top(s); d++) { const cost = d - S[s].d0; if (cost > B) break; best[cost] = { val: W(w, f(d)) - tiny * matScore(S[s].d0, d), d: { [s]: d } }; } groups.push(best); };
  one('REGEN', d => T.R(d)); one('HP', d => T.HP(d));
  { const best = {}; for (let dP = S['P.DEF'].d0; dP <= top('P.DEF'); dP++) for (let dM = S['M.DEF'].d0; dM <= top('M.DEF'); dM++) {
      const cost = dP - S['P.DEF'].d0 + dM - S['M.DEF'].d0; if (cost > B) continue;
      const val = W(w, T.DEFS(dP, dM)) - tiny * (matScore(S['P.DEF'].d0, dP) + matScore(S['M.DEF'].d0, dM));
      if (!best[cost] || val > best[cost].val) best[cost] = { val, d: { 'P.DEF': dP, 'M.DEF': dM } }; }
    groups.push(best); }
  // knapsack
  let dp = [{ val: 0, pick: [] }];
  for (const best of groups) {
    const nd = [];
    dp.forEach((cur, b) => { if (!cur) return; for (const k in best) { const cost = +k, nb = b + cost; if (nb > B) continue; const val = cur.val + best[k].val;
      if (!nd[nb] || val > nd[nb].val + 1e-12) nd[nb] = { val, pick: [...cur.pick, best[k].d] }; } });
    dp = nd;
  }
  let bi = 0; dp.forEach((x, b) => { if (x && x.val > dp[bi].val + 1e-12) bi = b; });
  const d = {}; dp[bi].pick.forEach(p => Object.assign(d, p));
  const used = STATS.reduce((t, s) => t + d[s] - S[s].d0, 0);
  return { d, used, left: B - used, logScore: dp[bi].val };
};

/* score an allocation on every axis (so builds made for one goal can be compared on all) */
E.evaluate = function (c, fx, d, opt) {
  const T = makeTerms(c, fx, { ...opt, ampAffectsAB: true });
  const ab = T.AB(d.ATK, d.BREAK), r = T.R(d.REGEN), hp = T.HP(d.HP), df = T.DEFS(d['P.DEF'], d['M.DEF']);
  return { hit: ab.hit + r.hit + df.hit, gauge: ab.gauge + r.gauge + df.gauge, surv: hp.surv + df.surv, kit: ab.kit + r.kit + hp.kit + df.kit };
};

/* ---------- goals, scenarios, settings ---------- */
E.goalWeights = function (goal, custom) {
  const G2 = G.goals[goal] || G.goals.hit; return goal === 'custom' && custom ? custom : G2.weights;
};
E.defaultGoal = a => ['Support', 'Heal', 'Regen'].includes(a.role) ? 'kit' : a.role === 'Break' ? 'hitgauge' : 'hit';
E.settingsFrom = function (over) { // copy of the defaults with any overrides
  const A = {}; for (const k in G.assumptions) A[k] = { ...G.assumptions[k] };
  const s = { potModel: 'mult', t15Basis: 'displayed', ampToGauge: false, rampBelow30: false, scenario: 'full', A, scenarios: JSON.parse(JSON.stringify(G.scenarios)) };
  if (over) { for (const k in over) if (k !== 'A' && k !== 'scenarios') s[k] = over[k];
    if (over.A) for (const k in over.A) if (A[k]) A[k].v = typeof over.A[k] === 'object' ? over.A[k].v : over.A[k];
    if (over.scenarios) for (const k in over.scenarios) s.scenarios[k] = { ...s.scenarios[k], ...over.scenarios[k] }; }
  return s;
};

/* ---------- one Aniimo: rank held items with points chosen jointly ----------
   pool: [{id, lvl}] candidates; returns rows sorted best first, 'none' row included. */
E.rankItems = function (st, set, goal, pool, extra) {
  extra = extra || {};
  const c = E.context(st, set), sc = set.scenarios[set.scenario], weights = extra.weights || E.goalWeights(goal, extra.custom);
  const noFx = E.itemEffects(null, 0, c, sc);
  const opt = { weights, noItemFx: noFx, teamCrit: extra.teamCrit || 0 };
  const bound = st.contract === 'this' ? st.item : null;
  const ctxFor = (id, lvl) => (bound || st.item) && st.alpha !== 'wild' ? E.context({ ...st, item: id === bound ? id : null, itemLv: lvl }, set) : c;
  const run = (id, lvl) => { const c2 = ctxFor(id, lvl), fx = id ? E.itemEffects(id, lvl, c2, sc) : noFx; if (fx.blocked) return { id, lvl, blocked: fx.blocked, fx };
    const al = E.allocate(c2, fx, opt); const ev = E.evaluate(c2, fx, al.d, opt); return { id, lvl, fx, al, ev, log: W(weights, ev), enh: c2.enh }; };
  const base = run(null, 0), all = pool.map(p => run(p.id, p.lvl));
  const rows = [base, ...all.filter(r => !r.blocked)], blocked = all.filter(r => r.blocked);
  rows.forEach(r => { r.rel = Math.exp(r.log - base.log); r.axes = {}; ['hit', 'gauge', 'surv', 'kit'].forEach(k => r.axes[k] = Math.exp(r.ev[k] - base.ev[k])); r.uses = r.fx ? [...r.fx.uses] : []; });
  rows.sort((x, y) => y.log - x.log);
  return { c, rows, base, blocked, weights, goal };
};

/* ---------- sensitivity: which uncertain inputs change the winner ---------- */
E.sensitivity = function (st, set, goal, pool, extra) {
  const ref = E.rankItems(st, set, goal, pool, extra), win = ref.rows[0], second = ref.rows[1];
  const name = r => r.id ? E.item[r.id].name : 'No held item';
  const flips = [], tested = [];
  const tryVar = (label, over) => { const Av = Object.fromEntries(Object.entries(set.A).map(([k, v]) => [k, v.v])); Object.assign(Av, over.A || {});
    const s2 = E.settingsFrom({ ...set, ...over, A: Av });
    const r = E.rankItems(st, s2, goal, pool, extra), w = r.rows[0]; tested.push(label);
    if (w.id !== win.id || w.lvl !== win.lvl) flips.push({ label, winner: name(w), margin: r.rows[1] ? (w.rel / r.rows[1].rel - 1) : 0 }); };
  const usedKeys = new Set(); ref.rows.slice(0, 6).forEach(r => (r.uses || []).forEach(k => usedKeys.add(k)));
  ref.c.usesPlaceholder.length && usedKeys.add('rawPlaceholder');
  ['targetDefPct', 'otherAmp', 'otherFinal', 'critRate', 'critDmg', 'enemyAtkRatio', 'physShare'].forEach(k => usedKeys.add(k));
  for (const k of usedKeys) { const a = set.A[k]; if (!a || a.lo == null) continue;
    for (const v of [a.lo, a.hi]) if (v !== a.v) tryVar(`${a.label} = ${v}${a.unit || ''}`, { A: { [k]: v } }); }
  for (const s in set.scenarios) if (s !== set.scenario) tryVar(`Fight: ${set.scenarios[s].label}`, { scenario: s });
  tryVar(`Potential model: ${set.potModel === 'mult' ? 'added' : 'multiplied'}`, { potModel: set.potModel === 'mult' ? 'add' : 'mult' });
  for (const b of ['displayed', 'effective', 'acquired']) if (b !== set.t15Basis) tryVar(`"Above 15" counts ${b} Potential`, { t15Basis: b });
  tryVar(`Finisher Bell +10 counts ${set.rampBelow30 ? 'at any HP' : 'only below 30% HP'}`, { rampBelow30: !set.rampBelow30 });
  tryVar(`Damage Amp ${set.ampToGauge ? "doesn't raise" : 'also raises'} BREAK gauge damage`, { ampToGauge: !set.ampToGauge });
  const margin = second ? win.rel / second.rel - 1 : Infinity;
  const verdict = !second ? 'only' : flips.length === 0 && margin >= 0.02 ? 'clear' : margin < 0.02 ? 'tie' : 'depends';
  return { ref, winner: name(win), runnerUp: second ? name(second) : null, margin, flips, tested: tested.length, verdict };
};

/* ---------- builds for one Aniimo ---------- */
E.buildsFor = function (a) {
  const out = [], hitRoles = ['DPS', 'Break'].includes(a.role);
  if (hitRoles) {
    if (a.role === 'DPS' || a.buildChoice) out.push({ id: 'atk', label: 'Hit damage (ATK)', goal: 'hit', forceAttack: 'ATK' });
    if (a.role === 'Break') out.push({ id: 'brkhit', label: 'Hit damage (BREAK)', goal: 'hit', forceAttack: 'BREAK' });
    if (a.role === 'Break') out.push({ id: 'gauge', label: 'BREAK gauge', goal: 'gauge' });
    out.push({ id: 'crit', label: 'Crit', goal: 'hit', items: G.itemGroups.crit });
    out.push({ id: 'cond', label: 'Opener or finisher', goal: 'hit', items: G.itemGroups.conditional });
  }
  out.push({ id: 'ult', label: 'Ultimate', goal: 'hit', items: G.itemGroups.ultimate });
  if (Object.keys(a.capMap || {}).length || !hitRoles) out.push({ id: 'kit', label: 'Skill effects', goal: 'kit' });
  out.push({ id: 'tank', label: 'Survival', goal: 'surv' });
  return out;
};
E.compareBuilds = function (st, set, poolFn) {
  const a = E.bySlug[st.slug], builds = E.buildsFor(a), res = [];
  let refEv = null;
  for (const b of builds) {
    const st2 = { ...st, forceAttack: b.forceAttack || null };
    const pool = poolFn().filter(p => !b.items || b.items.includes(p.id));
    const r = E.rankItems(st2, set, b.goal, pool);
    const best = b.items ? r.rows.find(x => x.id) || r.rows[0] : r.rows[0];
    res.push({ build: b, best, rank: r });
  }
  // common baseline: no item, plain plan for the default goal, normal attack rule
  const base = E.rankItems({ ...st, forceAttack: null }, set, E.defaultGoal(a), []).base;
  res.forEach(x => { x.axes = {}; ['hit', 'gauge', 'surv', 'kit'].forEach(k => x.axes[k] = Math.exp(x.best.ev[k] - base.ev[k])); });
  return { builds: res, base };
};

/* ---------- team of 3 ----------
   members: [{st, goal, weight}], pool per member via poolFn(i), inventory: {id:[levels]} or null (= every item at +15, duplicates allowed per setting).
   Team score = sum of weight × log(member score vs no item), plus team effects such as Auspicious Bell's Luck stacks. */
E.optimizeTeam = function (members, set, opts) {
  const K = opts.topK || 7, inv = opts.inventory;
  const cands = members.map((m, i) => {
    const pool = opts.poolFor(i);
    const off = E.rankItems(m.st, set, m.goal, pool);
    const teamItems = new Set(G.items.filter(it => JSON.stringify(it.rules).includes('teamCrit')).map(it => it.id));
    let list = off.rows.slice(0, K);
    pool.forEach(p => { if (teamItems.has(p.id) && !list.some(r => r.id === p.id && r.lvl === p.lvl)) { const r = off.rows.find(x => x.id === p.id && x.lvl === p.lvl); if (r) list.push(r); } });
    if (!list.some(r => !r.id)) list.push(off.base);
    return { m, off, list };
  });
  // team crit if someone holds a team-crit item
  const teamCritOf = combo => combo.reduce((t, r) => t + (r.fx ? r.fx.team.filter(x => x.kind === 'critRate').reduce((u, x) => u + x.v, 0) : 0), 0);
  const withTeam = new Map();
  const memberLog = (i, r, tc) => { if (!tc) return Math.log(r.rel);
    const key = i + '|' + (r.id || '') + '|' + r.lvl + '|' + tc.toFixed(4); if (withTeam.has(key)) return withTeam.get(key);
    const rr = E.rankItems(members[i].st, set, members[i].goal, r.id ? [{ id: r.id, lvl: r.lvl }] : [], { teamCrit: tc });
    const row = rr.rows.find(x => x.id === r.id) || rr.base; const v = row.log - cands[i].off.base.log; withTeam.set(key, v); return v; };
  let best = null; const n = members.length;
  const rec = (i, combo) => {
    if (i === n) {
      // inventory and duplicate checks
      const used = {}; for (const r of combo) if (r.id) { used[r.id] = used[r.id] || []; used[r.id].push(r.lvl); }
      for (const id in used) { if (inv) { const have = [...(inv[id] || [])].sort((x, y) => y - x), want = [...used[id]].sort((x, y) => y - x);
          if (want.length > have.length) return; for (let k = 0; k < want.length; k++) if (want[k] > have[k]) return; }
        else if (!opts.allowDuplicates && used[id].length > 1) return; }
      const tc = teamCritOf(combo);
      let score = 0; const parts = combo.map((r, k) => { const l = memberLog(k, r, tc); score += members[k].weight * l; return l; });
      if (!best || score > best.score + 1e-12) best = { score, combo: [...combo], parts, teamCrit: tc };
      return;
    }
    for (const r of cands[i].list) { combo.push(r); rec(i + 1, combo); combo.pop(); }
  };
  rec(0, []);
  // the naive answer: each member's own best item, ignoring the others
  const naive = cands.map(x => x.off.rows[0]);
  const notes = [];
  const roles = members.map(m => E.bySlug[m.st.slug].role);
  if (!roles.includes('Break')) notes.push('No Break Aniimo on this team, so BREAK gauge damage comes only from side stats.');
  if (!roles.some(r => ['Heal', 'Regen'].includes(r))) notes.push('No Heal or Regen Aniimo on this team.');
  return { best, naive, cands, notes };
};

/* ---------- per-hit numbers for the Team Lab (same rules as the optimizer) ---------- */
E.hitParts = function (c, fx, d, teamCrit) {
  const A = c.A, dd = d || Object.fromEntries(STATS.map(s => [s, c.S[s].dNow]));
  const atk = statAt(c, fx, 'ATK', dd.ATK), brk = statAt(c, fx, 'BREAK', dd.BREAK);
  const attack = c.hitByLevel ? 10.5 * c.lv : c.attack === 'ATK' ? atk : c.attack === 'BREAK' ? 0.85 * brk : Math.max(atk, 0.85 * brk);
  let amp = A.otherAmp.v / 100; fx.amp.forEach(r => amp += r.v * (r.double15 && above15(c, r.double15, dd[r.double15], c.S[r.double15].blue + (fx.blue[r.double15] || 0)) ? 2 : 1));
  let cdr = 0; fx.cdr.forEach(r => cdr += r.v * (r.double15 && above15(c, r.double15, dd.REGEN, c.S.REGEN.blue + (fx.blue.REGEN || 0)) ? 2 : 1));
  return { atk, brk, attack, amp, final: A.otherFinal.v / 100 + fx.final, crit: critFactor(c, fx, teamCrit || 0), hitMult: fx.hitMult, cdr: Math.min(0.9, cdr), persS: c.pers.includes('S') ? 1.04 : 1, placeholder: c.usesPlaceholder };
};

/* ---------- personality: try all 16 for this setup ---------- */
E.rankPersonalities = function (st, set, goal, extra) {
  extra = extra || {}; const weights = extra.weights || E.goalWeights(goal, extra.custom), sc = set.scenarios[set.scenario], out = [];
  for (const a of 'EI') for (const b of 'SN') for (const c3 of 'TF') for (const d of 'JP') {
    const pers = a + b + c3 + d, c = E.context({ ...st, pers }, set), nofx = E.itemEffects(null, 0, c, sc), fx = st.item ? E.itemEffects(st.item, st.itemLv || 0, c, sc) : nofx;
    const f = fx.blocked ? nofx : fx, opt = { weights, noItemFx: nofx }, al = E.allocate(c, f, opt), ev = E.evaluate(c, f, al.d, opt);
    out.push({ pers, log: W(weights, ev), al });
  }
  out.sort((x, y) => y.log - x.log);
  const best = out[0], find = p => out.find(x => x.pers === p);
  out.forEach(x => x.rel = Math.exp(x.log - best.log));
  const swaps = PAIRS.map((pair, i) => { const other = pair.find(l => l !== best.pers[i]), p2 = best.pers.slice(0, i) + other + best.pers.slice(i + 1); return { keep: best.pers[i], instead: other, loss: 1 - find(p2).rel }; });
  swaps.forEach(x => x.tie = x.loss < 0.0005);
  const label = PAIRS.map((pair, i) => swaps[i].tie ? pair.join('/') : best.pers[i]).join(' ');
  const runnerUp = out.find(x => x.pers !== best.pers && PAIRS.some((p2, i) => !swaps[i].tie && x.pers[i] !== best.pers[i])) || null;
  const a = E.bySlug[st.slug], base = (G.personalityBaseline || {})[a.role] || null;
  return { list: out, best, swaps, label, runnerUp, baseline: base, baselineRel: base ? base.map(p => find(p).rel) : null };
};

/* ---------- data check ---------- */
E.checkData = function (game) {
  const g = game || G, out = [];
  const ok = (name, pass, detail) => out.push({ name, pass: !!pass, detail: detail || '' });
  ok('25 held items', g.items.length === 25, `${g.items.length} found`);
  const ids = new Set(g.items.map(i => i.id)); ok('Held item ids are unique', ids.size === g.items.length);
  const slugs = new Set(g.aniimo.map(a => a.slug)); ok('Aniimo ids are unique', slugs.size === g.aniimo.length, `${g.aniimo.length} Aniimo`);
  const bad = []; g.aniimo.forEach(a => (a.items || []).forEach(id => { if (!ids.has(id)) bad.push(a.name + ' → ' + id); }));
  ok('Every recommended item exists', !bad.length, bad.join(', '));
  const badStat = g.aniimo.filter(a => STATS.some(s => !['core', 'flex', 'avoid', 'hardno'].includes(a.stats[s]))).map(a => a.name);
  ok('Every Aniimo rates all six stats', !badStat.length, badStat.join(', '));
  const noRules = g.items.filter(i => !i.rules || !i.rules.core).map(i => i.name); ok('Every item has calculation rules', !noRules.length, noRules.join(', '));
  const known = new Set(g.aniimo.map(a => a.name)), other = new Set((g.otherAniimo || []).map(o => o.name));
  const unknownRefs = [], notInGame = [];
  g.items.forEach(i => (i.for || []).forEach(n => { if (other.has(n)) notInGame.push(`${n} (${i.name})`); else if (!known.has(n)) unknownRefs.push(`${n} (${i.name})`); }));
  ok('Every Aniimo an item names is known', !unknownRefs.length, unknownRefs.length ? 'Not found anywhere: ' + unknownRefs.join(', ') : (notInGame.length ? 'Named but not in game: ' + notInGame.join(', ') : ''));
  const noForms = g.aniimo.filter(a => a.formInfo && a.formInfo.length !== a.forms.length).map(a => a.name);
  ok('Every form has element and picture info', !noForms.length, noForms.join(', '));
  const noChart = g.aniimo.filter(a => !a.chart).map(a => a.name), expected = (g.importInfo && g.importInfo.noChart) || [];
  ok('Stat chart for every Aniimo except the known gaps', noChart.every(n => expected.includes(n)), noChart.length ? 'No chart data: ' + noChart.join(', ') : '');
  const badKeys = (g.assets || []).filter(x => (x.key.match(/:/g) || []).length !== 1).map(x => x.key);
  ok('Image names are valid', !badKeys.length, badKeys.slice(0, 5).join(', '));
  if (g.importInfo) ok('Form count matches the source', g.importInfo.formsOnSite === g.importInfo.formsInSource, `${g.importInfo.formsOnSite} on this site, ${g.importInfo.formsInSource} in the source (includes Aniimo that aren't in game)`);
  ok('Allowance at level 60, rank 6 is 43', E.allowance(60, 6) === 43);
  return out;
};

if (typeof module !== 'undefined' && module.exports) module.exports = E; else root.AniimoEngine = E;
})(typeof window !== 'undefined' ? window : this);
