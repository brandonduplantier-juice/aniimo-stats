/* Local-only test reports for the Team Lab. Based on the v11 reporting module; schema 2 records
   every hit with its model, BREAK state, buffs, equipment and confidence. Nothing is uploaded. */
(function (root) {
'use strict';
const R = { schema: 2 };
/* the full combat setup, in a fixed order, so two reports only count as the same test when everything matches */
const canon = v => Array.isArray(v) ? '[' + v.map(canon).join(',') + ']' : v && typeof v === 'object' ? '{' + Object.keys(v).sort().filter(k => v[k] !== undefined).map(k => JSON.stringify(k) + ':' + canon(v[k])).join(',') + '}' : JSON.stringify(v === undefined ? null : v);
const fnv = str => { let h = 0x811c9dc5; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return ('0000000' + h.toString(16)).slice(-8); };
R.fingerprint = function (cfg, assumptions, model) {
  const c = cfg || {};
  return fnv(canon({ members: (c.members || []).map(m => ({ st: m.st, moves: m.moves, boost: m.boost || 0 })), actions: c.actions, target: c.target, model: model || c.model, mightTotal: c.mightTotal !== false, startEP: c.startEP, maxEP: c.maxEP, assumptions: assumptions || {} }));
};
const num = (v, lo, hi, what, allowNull) => { if (v == null || v === '') { if (allowNull) return; throw Error(what + ' is missing'); } if (!Number.isFinite(+v) || +v < lo || +v > hi) throw Error(`${what} must be ${lo} to ${hi}`); };
R.checkConfig = function (cfg) {
  if (!cfg || !Array.isArray(cfg.members) || !Array.isArray(cfg.actions)) throw Error('Missing team or rotation');
  if (cfg.members.length < 1 || cfg.members.length > 4) throw Error('A team has 1 to 4 Aniimo');
  if (cfg.model != null && !['A', 'B'].includes(cfg.model)) throw Error('Unknown damage model');
  cfg.members.forEach((m, i) => { const st = m && m.st, w = `Slot ${i + 1}`;
    if (!st || typeof st.slug !== 'string' || !st.slug) throw Error(w + ': no Aniimo');
    num(st.level, 1, 70, w + ' level'); num(st.rank, 1, 7, w + ' Star Up rank'); num(st.itemLv, 0, 15, w + ' item level', true);
    Object.entries(st.stats || {}).forEach(([k, x]) => { num(x.inn, 0, 10, `${w} ${k} Innate`, true); num(x.aq, 0, 20, `${w} ${k} Acquired`, true); num(x.raw, 0, 100000, `${w} raw ${k}`, true); });
    if (!Array.isArray(m.moves) || m.moves.length > 30) throw Error(w + ': bad move list');
    m.moves.forEach(mv => { const n = `${w} move "${String(mv.name || '').slice(0, 40)}"`;
      num(mv.might, 0, 5000, n + ' Might'); num(mv.hits, 1, 50, n + ' hits'); num(mv.ep, 0, 1000, n + ' EP', true); num(mv.cooldown, 0, 600, n + ' cooldown', true); num(mv.epGain || 0, 0, 1000, n + ' EP back');
      const b = mv.buff || {}; num(b.amp || 0, -100, 500, n + ' buff amp'); num(b.crit || 0, -100, 100, n + ' buff crit'); num(b.shred || 0, 0, 100, n + ' DEF shred'); num(b.duration || 0, 0, 600, n + ' buff length'); }); });
  const T = cfg.target || {};
  num(T.hp, 1, 1e10, 'Target HP'); num(T.def, 0, 1e6, 'Target DEF'); num(T.type == null ? 1 : T.type, 0.01, 10, 'Type matchup'); num(T.resist || 0, -100, 100, 'Elemental resistance');
  num(T.breakMult, 0, 20, 'BREAK multiplier', true); num(T.recoveryMult, 0, 20, 'Recovery multiplier', true);
  if (cfg.actions.length > 2000) throw Error('Rotation is too long');
  cfg.actions.forEach((a, i) => { if (!Number.isInteger(+a.slot) || +a.slot < 0 || +a.slot >= cfg.members.length) throw Error(`Rotation step ${i + 1}: no such slot`);
    if (!Number.isInteger(+a.move) || +a.move < 0) throw Error(`Rotation step ${i + 1}: no such move`); num(a.wait || 0, 0, 600, `Rotation step ${i + 1} wait`);
    if (a.state && !['normal', 'break', 'recovery'].includes(a.state)) throw Error(`Rotation step ${i + 1}: bad target state`); });
  return true;
};
const clone = x => JSON.parse(JSON.stringify(x)), finite = x => x !== '' && x != null && Number.isFinite(Number(x)), r2 = x => Math.round(x * 100) / 100;
R.make = function (cfg, out, meta) {
  meta = meta || {};
  const steps = out.log.map((x, i) => ({ index: i + 1, action: x.action, time: x.time, slot: x.slot, who: x.who || null, move: x.move || null, hit: x.hit || null, hits: x.hits || null,
    state: x.state, buffs: x.buffs || [], epBefore: x.epBefore == null ? null : r2(x.epBefore), epAfter: x.epAfter == null ? null : r2(x.epAfter), confidence: x.confidence || null, predicted: finite(x.damage) ? r2(x.damage) : null, error: x.error || null, observed: null, crit: null, note: '', status: 'unverified' }));
  return { schema: R.schema, id: 'run-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8), createdAt: new Date().toISOString(), label: meta.label || '',
    model: { version: out.version, id: out.model, label: out.modelLabel, mightTotal: cfg.mightTotal !== false, dataVersion: meta.dataVersion || null },
    assumptions: meta.assumptions || {}, configuration: clone(cfg), fingerprint: R.fingerprint(cfg, meta.assumptions || {}, out.model), complete: out.complete !== false, incomplete: out.incomplete || [],
    equipment: (cfg.members || []).map(m => ({ name: m.name, slug: m.st.slug, form: m.st.form, level: m.st.level, rank: m.st.rank, item: m.st.item || '', itemLv: m.st.itemLv || 0, pers: m.st.pers || '', alpha: m.st.alpha || 'no', contract: m.st.contract || 'none' })),
    summary: { predictedTotal: r2(out.total), steps: steps.length }, steps, warnings: out.warnings || [] };
};
R.summarize = function (rec, tol) {
  tol = tol == null ? 5 : tol; if (!(tol >= 0 && tol <= 100)) throw Error('Tolerance must be 0 to 100%');
  rec.tolerancePct = tol; let pr = 0, ob = 0, match = 0, off = 0, n = 0;
  rec.steps.forEach(s => { s.status = 'unverified'; s.errorPct = null;
    if (!finite(s.observed) || +s.observed < 0 || !finite(s.predicted)) return;
    n++; pr += +s.predicted; ob += +s.observed;
    const pct = +s.predicted === 0 ? (+s.observed === 0 ? 0 : null) : 100 * (+s.observed - s.predicted) / s.predicted;
    s.errorPct = pct == null ? null : r2(pct); s.status = pct != null && Math.abs(pct) <= tol ? 'match' : 'discrepancy'; if (s.status === 'match') match++; else off++; });
  rec.summary = { ...rec.summary, compared: n, matched: match, discrepancies: off, observedTotal: n ? r2(ob) : null, comparedPredicted: n ? r2(pr) : null, deltaPct: n && pr > 0 ? r2(100 * (ob - pr) / pr) : null };
  return rec;
};
R.validate = function (x) {
  if (!x || x.schema !== 2 || !Array.isArray(x.steps) || !x.configuration || !Array.isArray(x.configuration.members) || !Array.isArray(x.configuration.actions) || typeof x.id !== 'string' || !x.id) throw Error('Not a Team Lab report (schema 2)');
  if (x.steps.length > 5000 || JSON.stringify(x).length > 3000000 || x.configuration.members.length > 4) throw Error('Report is larger than allowed');
  R.checkConfig(x.configuration);
  x.fingerprint = R.fingerprint(x.configuration, x.assumptions || {}, x.model && x.model.id); // recomputed, never trusted
  x.steps.forEach(s => { if (!s || !(Number(s.index) >= 1)) throw Error('Bad step');
    ['predicted', 'observed'].forEach(f => { if (s[f] != null && (!finite(s[f]) || +s[f] < 0)) throw Error('Bad ' + f + ' damage'); });
    if (s.note && String(s.note).length > 300) throw Error('Note too long');
    if (s.state && !['normal', 'break', 'recovery'].includes(s.state)) throw Error('Bad BREAK state'); });
  return R.summarize(x, finite(x.tolerancePct) && +x.tolerancePct >= 0 && +x.tolerancePct <= 100 ? +x.tolerancePct : 5); // never trust imported totals
};
R.groupEvidence = function (reports) {
  const G = {};
  reports.map(R.validate).forEach(r => r.steps.forEach(s => {
    if (s.status === 'unverified' || !(s.predicted > 0) || !Number.isFinite(s.errorPct)) return;
    const key = JSON.stringify([r.fingerprint, s.action, s.slot, s.move, s.hit, s.state, (s.buffs || []).slice().sort()]);
    const g = G[key] || (G[key] = { setup: r.fingerprint, complete: r.complete !== false, model: r.model.id, target: (r.configuration.target && r.configuration.target.name) || 'Target', aniimo: s.who, move: s.move, hit: s.hit, state: s.state, errors: [], runs: new Set(), within: 0 });
    g.errors.push(s.errorPct); g.runs.add(r.id); if (s.status === 'match') g.within++; }));
  return Object.values(G).map(g => { const e = g.errors.slice().sort((a, b) => a - b); return { setup: g.setup, complete: g.complete, model: g.model, target: g.target, aniimo: g.aniimo, move: g.move, hit: g.hit, state: g.state, samples: e.length, runs: g.runs.size, within: g.within,
    medianErrorPct: e[Math.floor((e.length - 1) / 2)], evidence: e.length >= 3 && g.runs.size >= 2 ? 'repeated' : 'not enough yet' }; }).sort((a, b) => b.samples - a.samples);
};
R.csv = function (rec) {
  const q = v => { const s = v == null ? '' : String(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const head = ['report', 'setup', 'complete', 'model', 'mightTotal', 'step', 'time', 'aniimo', 'move', 'hit', 'state', 'epBefore', 'epAfter', 'buffs', 'confidence', 'predicted', 'observed', 'errorPct', 'status', 'crit', 'note'];
  return [head.join(','), ...rec.steps.map(s => [rec.id, rec.fingerprint, rec.complete !== false, rec.model.id, rec.model.mightTotal, s.index, s.time, s.who, s.move, s.hit, s.state, s.epBefore, s.epAfter, (s.buffs || []).join('; '), s.confidence, s.predicted, s.observed, s.errorPct, s.status, s.crit, s.note].map(q).join(','))].join('\n');
};
if (typeof module !== 'undefined' && module.exports) module.exports = R; else root.AniimoReports = R;
})(typeof window !== 'undefined' ? window : this);
