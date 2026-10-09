/* Local-only test reports for the Team Lab. Based on the v11 reporting module; schema 2 records
   every hit with its model, BREAK state, buffs, equipment and confidence. Nothing is uploaded. */
(function (root) {
'use strict';
const R = { schema: 2 };
const clone = x => JSON.parse(JSON.stringify(x)), finite = x => x !== '' && x != null && Number.isFinite(Number(x)), r2 = x => Math.round(x * 100) / 100;
R.make = function (cfg, out, meta) {
  meta = meta || {};
  const steps = out.log.map((x, i) => ({ index: i + 1, action: x.action, time: x.time, slot: x.slot, who: x.who || null, move: x.move || null, hit: x.hit || null, hits: x.hits || null,
    state: x.state, buffs: x.buffs || [], confidence: x.confidence || null, predicted: finite(x.damage) ? r2(x.damage) : null, error: x.error || null, observed: null, crit: null, note: '', status: 'unverified' }));
  return { schema: R.schema, id: 'run-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8), createdAt: new Date().toISOString(), label: meta.label || '',
    model: { version: out.version, id: out.model, label: out.modelLabel, mightTotal: cfg.mightTotal !== false, dataVersion: meta.dataVersion || null },
    assumptions: meta.assumptions || {}, configuration: clone(cfg),
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
  if (x.steps.length > 5000 || JSON.stringify(x).length > 3000000 || x.configuration.members.length > 3) throw Error('Report is larger than allowed');
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
    const eq = r.equipment[s.slot] || {}, key = JSON.stringify([r.model.id, r.model.mightTotal, r.configuration.target && r.configuration.target.name, eq.slug, eq.item, eq.itemLv, s.move, s.hit, s.state]);
    const g = G[key] || (G[key] = { model: r.model.id, target: (r.configuration.target && r.configuration.target.name) || 'Target', aniimo: s.who, move: s.move, hit: s.hit, state: s.state, errors: [], runs: new Set(), within: 0 });
    g.errors.push(s.errorPct); g.runs.add(r.id); if (s.status === 'match') g.within++; }));
  return Object.values(G).map(g => { const e = g.errors.slice().sort((a, b) => a - b); return { model: g.model, target: g.target, aniimo: g.aniimo, move: g.move, hit: g.hit, state: g.state, samples: e.length, runs: g.runs.size, within: g.within,
    medianErrorPct: e[Math.floor((e.length - 1) / 2)], evidence: e.length >= 3 && g.runs.size >= 2 ? 'repeated' : 'not enough yet' }; }).sort((a, b) => b.samples - a.samples);
};
R.csv = function (rec) {
  const q = v => { const s = v == null ? '' : String(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const head = ['report', 'model', 'mightTotal', 'step', 'time', 'aniimo', 'move', 'hit', 'state', 'buffs', 'confidence', 'predicted', 'observed', 'errorPct', 'status', 'crit', 'note'];
  return [head.join(','), ...rec.steps.map(s => [rec.id, rec.model.id, rec.model.mightTotal, s.index, s.time, s.who, s.move, s.hit, s.state, (s.buffs || []).join('; '), s.confidence, s.predicted, s.observed, s.errorPct, s.status, s.crit, s.note].map(q).join(','))].join('\n');
};
if (typeof module !== 'undefined' && module.exports) module.exports = R; else root.AniimoReports = R;
})(typeof window !== 'undefined' ? window : this);
