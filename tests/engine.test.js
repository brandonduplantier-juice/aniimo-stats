/* Run with:  node tests/engine.test.js   (from the site folder) */
global.window = {};
const assert = require('assert');
const GAME = require('../data/game-data.js');
const E = require('../js/engine.js').init(GAME);
let pass = 0, fail = 0;
const t = (name, fn) => { try { fn(); pass++; console.log('ok   ' + name); } catch (e) { fail++; console.log('FAIL ' + name + '\n     ' + e.message); } };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= (tol || 1e-3), `${msg || ''} expected ${b}, got ${a}`);
const blank = () => Object.fromEntries(E.STATS.map(s => [s, { inn: 0, aq: 0, raw: null }]));
const st = (slug, o) => ({ slug, level: 60, rank: 6, capa: false, reset: false, pers: '', stats: blank(), ...(o || {}) });
const set = o => E.settingsFrom(o);
const all15 = () => GAME.items.map(i => ({ id: i.id, lvl: 15 }));

/* points and Potential */
t('allowance 60/6 = 43, 70/7 = 78, 1/1 = 5', () => { assert.strictEqual(E.allowance(60, 6), 43); assert.strictEqual(E.allowance(70, 7), 78); assert.strictEqual(E.allowance(1, 1), 5); });
t('multiplier table (multiplied model)', () => { [[4, 1.073], [8, 1.149], [12, 1.228], [16, 1.309], [20, 1.392]].forEach(([p, m]) => near(E.M(p, 'mult'), m, 6e-4, 'M(' + p + ')')); });
t('multiplier at 20 (added model) = 1.36', () => near(E.M(20, 'add'), 1.36, 1e-9));
t('materials for points 1 to 20', () => { const m = E.materials(0, 20); assert.deepStrictEqual(m, { dust: 10, sand: 10, ess: 15 + 35 }); });
t('level gates', () => { assert.strictEqual(E.gate(39), 10); assert.strictEqual(E.gate(40), 12); assert.strictEqual(E.gate(50), 15); assert.strictEqual(E.gate(55), 19); assert.strictEqual(E.gate(60), 20); });

/* input checks (review item: Innate + Acquired above 20) */
t('Innate 8 + Acquired 20 is rejected and clamped to 12', () => { const s = st('emberpup'); s.stats.ATK = { inn: 8, aq: 20 }; const v = E.validate(s);
  assert(v.errors.some(e => e.includes('caps the total at 20'))); assert.strictEqual(v.stats.ATK.aq, 12); });
t('Capafruit counts toward the 20 cap', () => { const s = st('emberpup', { capa: true }); s.stats.HP = { inn: 9, aq: 11 }; const v = E.validate(s); assert.strictEqual(v.stats.HP.aq, 10); });
t('More Acquired than the level gives is an error', () => { const s = st('emberpup', { level: 30, rank: 1 }); s.stats.ATK = { inn: 0, aq: 8 }; assert(E.validate(s).errors.some(e => e.includes('only gives 5'))); });
t('Innate above 10 is an error', () => { const s = st('emberpup'); s.stats.ATK = { inn: 14, aq: 0 }; assert(E.validate(s).errors.length); });

/* data */
t('data checks all pass', () => { const r = E.checkData(); r.forEach(x => assert(x.pass, x.name + ' ' + x.detail)); });
t('every assumption has a range and a reason', () => { for (const k in GAME.assumptions) { const a = GAME.assumptions[k]; assert(a.lo <= a.v && a.v <= a.hi && a.why, k); } });

/* allocation limits */
t('allocation never exceeds budget, gates or the 20 cap', () => {
  for (const a of GAME.aniimo.filter(x => x.released).slice(0, 40)) for (const lv of [35, 50, 60, 70]) for (const goal of ['hit', 'surv', 'kit']) {
    const s = st(a.slug, { level: lv, rank: 7 }); const r = E.rankItems(s, set(), goal, [{ id: 'h02', lvl: 15 }]);
    for (const row of r.rows) { let used = 0; for (const k of E.STATS) { const d = row.al.d[k]; assert(d >= r.c.S[k].d0 && d <= Math.max(r.c.S[k].d0, E.gate(lv)) && d <= 20, `${a.name} ${k}=${d}`); used += d - r.c.S[k].d0; }
      assert(used <= r.c.budget, `${a.name} used ${used} of ${r.c.budget}`); } } });
t('existing Acquired points are kept unless reset is on', () => { const s = st('emberpup'); s.stats.HP = { inn: 0, aq: 6 };
  const r = E.rankItems(s, set(), 'hit', []); assert(r.base.al.d.HP >= 6); assert.strictEqual(r.c.budget, 37);
  const r2 = E.rankItems({ ...s, reset: true }, set(), 'hit', []); assert.strictEqual(r2.c.budget, 43); });
t('point search matches brute force (small budget)', () => {
  const s = st('emberpup', { level: 30, rank: 5 }); // 10 points
  const S = set(), c = E.context(s, S), sc = S.scenarios.full, fx = E.itemEffects('h02', 15, c, sc), nofx = E.itemEffects(null, 0, c, sc);
  const w = E.goalWeights('hit'), opt = { weights: w, noItemFx: nofx };
  const al = E.allocate(c, fx, opt); const val = d => { const ev = E.evaluate(c, fx, d, opt); return w.hit * ev.hit + (w.surv || 0) * ev.surv; };
  let best = -Infinity; const g = c.gate, B = c.budget; const d = {};
  const rec = (i, left) => { if (i === 6) { best = Math.max(best, val(d)); return; } for (let x = 0; x <= Math.min(g, left); x++) { d[E.STATS[i]] = x; rec(i + 1, left - x); } };
  rec(0, B); near(val(al.d), best, 1e-6, 'optimum'); });
t('Break role with blank raw stats spends nothing on ATK for hit damage', () => { const b = GAME.aniimo.find(a => a.name === 'Bolty');
  const r = E.rankItems(st(b.slug), set(), 'hit', []); assert.strictEqual(r.base.al.d.ATK, 0); assert(r.base.al.d.BREAK > 0); });
t('DPS spends on ATK for hit damage, reaching the last breakpoint (18 with +2 blue)', () => { const r = E.rankItems(st('emberpup'), set(), 'hit', []); assert(r.base.al.d.ATK >= 18, 'ATK ' + r.base.al.d.ATK); });
t('with a small budget a DPS puts every point into ATK up to the gate', () => { const r = E.rankItems(st('emberpup', { level: 45, rank: 1 }), set(), 'hit', []); assert.strictEqual(r.base.al.d.ATK, 10); });
t('Finisher Bell switch: bonus only below 30% is worth less in a full fight', () => { const a = E.rankItems(st('emberpup'), set(), 'hit', [{ id: 'h07', lvl: 15 }]).rows.find(r => r.id), b = E.rankItems(st('emberpup'), set({ rampBelow30: true }), 'hit', [{ id: 'h07', lvl: 15 }]).rows.find(r => r.id); assert(a.rel > b.rel); });
t('effect cap: no points into a stat already at its cap (skill-effect goal)', () => {
  const a = GAME.aniimo.find(x => x.released && x.capMap && Object.keys(x.capMap).length && ['Support', 'Heal', 'Regen'].includes(x.role)); assert(a, 'need a capped support');
  const k = Object.keys(a.capMap)[0], s = st(a.slug); s.stats[k].raw = a.capMap[k] + 50;
  const r = E.rankItems(s, set(), 'custom', [], { weights: { kit: 1 } }); assert.strictEqual(r.base.al.d[k], 0, a.name + ' ' + k); });

/* items */
t('Ferocious Fang +15: +2 blue ATK and Damage Amp doubled above 15', () => { const S = set(), c = E.context(st('emberpup'), S), fx = E.itemEffects('h02', 15, c, S.scenarios.full);
  assert.strictEqual(fx.blue.ATK, 2); near(fx.flat.ATK, 42); assert(fx.amp.some(r => r.v === 0.1 && r.double15 === 'ATK')); });
t('Fang at +9 has no Potential bonus', () => { const S = set(), c = E.context(st('emberpup'), S); assert(!E.itemEffects('h02', 9, c, S.scenarios.full).blue.ATK); });
t('Vanguard +15 in a full fight: 0.25 × 40% + 0.30 × 10% final, crits on 10%', () => { const S = set(), c = E.context(st('emberpup'), S), fx = E.itemEffects('h06', 15, c, S.scenarios.full);
  near(fx.final, 0.13, 1e-9); near(fx.forcedCrit, 0.1, 1e-9); });
t('Finisher Bell defeat effect is off against Omega bosses', () => { const S = set(), c = E.context(st('emberpup'), S);
  assert.strictEqual(E.itemEffects('h07', 15, c, S.scenarios.boss).hitMult, 1); assert(E.itemEffects('h07', 15, c, S.scenarios.full).hitMult > 1.1); });
t('Supreme Elixir is blocked on Support Aniimo', () => { const a = GAME.aniimo.find(x => x.role === 'Support' && x.released); const r = E.rankItems(st(a.slug), set(), 'kit', [{ id: 'h08', lvl: 15 }]); assert(r.blocked.length === 1); });
t('Floral Rainbow Feather only counts for its listed Aniimo', () => { const r = E.rankItems(st('emberpup'), set(), 'hit', [{ id: 'h25', lvl: 15 }]); assert(r.blocked.length === 1); });
t('"Above 15" basis switch changes Fang doubling', () => { const s = st('emberpup'); s.stats.ATK = { inn: 6, aq: 10 };
  const A1 = E.rankItems(s, set({ t15Basis: 'displayed' }), 'hit', [{ id: 'h02', lvl: 15 }]).rows.find(r => r.id), A2 = E.rankItems(s, set({ t15Basis: 'acquired' }), 'hit', [{ id: 'h02', lvl: 15 }]).rows.find(r => r.id);
  assert(A1.rel > A2.rel, `${A1.rel} vs ${A2.rel}`); });
t('crit pity: 10% base with +10% per miss averages 1/3.66 = 27.3%', () => near(E.pityRate(0.1, 0.1), 0.2732, 2e-4));
t('ranking runs for every released Aniimo with every item, no NaN', () => { for (const a of GAME.aniimo.filter(x => x.released)) { const r = E.rankItems(st(a.slug), set(), E.defaultGoal(a), all15()); r.rows.forEach(x => assert(Number.isFinite(x.rel), a.name + ' ' + x.id)); } });
t('sensitivity reports a verdict and lists flips', () => { const r = E.sensitivity(st('emberpup'), set(), 'hit', all15()); assert(['clear', 'tie', 'depends'].includes(r.verdict)); assert(r.tested > 10); });
t('builds compare for a DPS, a Break and a Support Aniimo', () => { for (const n of ['Emberpup', 'Popota', 'Bolty']) { const a = GAME.aniimo.find(x => x.name === n); const r = E.compareBuilds(st(a.slug), set(), all15); assert(r.builds.length >= 3, n); r.builds.forEach(b => assert(Number.isFinite(b.axes.hit))); } });

/* team */
const mem = (n, goal) => { const a = GAME.aniimo.find(x => x.name === n); return { st: st(a.slug), goal: goal || E.defaultGoal(a), weight: 1 }; };
t('owned mode: one Fang can only go to one Aniimo', () => { const m = [mem('Emberpup'), mem('Emberpup'), mem('Popota')];
  const r = E.optimizeTeam(m, set(), { inventory: { h02: [15] }, poolFor: () => [{ id: 'h02', lvl: 15 }] });
  assert.strictEqual(r.best.combo.filter(x => x.id === 'h02').length, 1); });
t('owned mode: a +10 copy can not stand in for +15', () => { const m = [mem('Emberpup')];
  const r = E.optimizeTeam(m, set(), { inventory: { h02: [10] }, poolFor: () => [{ id: 'h02', lvl: 15 }] }); assert(!r.best.combo[0].id); });
t('unrestricted mode without duplicates gives each item once', () => { const m = [mem('Emberpup'), mem('Emberpup'), mem('Emberpup')];
  const r = E.optimizeTeam(m, set(), { inventory: null, allowDuplicates: false, poolFor: () => all15() }); const ids = r.best.combo.map(x => x.id).filter(Boolean); assert.strictEqual(new Set(ids).size, ids.length); });
t('team crit from Auspicious Bell is counted for teammates', () => { const m = [mem('Emberpup'), mem('Emberpup'), mem('Emberpup')];
  const S = set(); S.A.luckUptime.v = 100;
  const r = E.optimizeTeam(m, S, { inventory: { h16: [15] }, poolFor: () => [{ id: 'h16', lvl: 15 }] }); assert(r.best.teamCrit > 0.09 && r.best.score > 0); });

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
