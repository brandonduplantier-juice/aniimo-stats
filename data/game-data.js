/* Aniimo planner game data. Edit this file after a patch; no code changes needed.
   version = date the data was last checked. */
window.ANIIMO_DATA = {
 "version": "2026-10-09d",
 "aniimo": [
  {
   "num": "001",
   "name": "Emberpup",
   "role": "DPS",
   "forms": [
    "Basic",
    "Highland",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "emberpup",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "emberpup",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h02",
    "h12"
   ],
   "chart": {
    "HP": 67,
    "ATK": 90,
    "BREAK": 40,
    "REGEN": 68,
    "P.DEF": 60,
    "M.DEF": 57,
    "total": 382,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire"
     ],
     "img": null
    },
    {
     "form": "Highland",
     "elements": [
      "fire",
      "earth"
     ],
     "img": "f:emberpup--highland-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "fire"
     ],
     "img": "f:emberpup--mountain-woods-form"
    }
   ]
  },
  {
   "num": "002",
   "name": "Flameruff",
   "role": "DPS",
   "forms": [
    "Basic",
    "Highland",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "flameruff",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "flameruff",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h02",
    "h12"
   ],
   "chart": {
    "HP": 85,
    "ATK": 111,
    "BREAK": 45,
    "REGEN": 80,
    "P.DEF": 72,
    "M.DEF": 63,
    "total": 456,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire"
     ],
     "img": null
    },
    {
     "form": "Highland",
     "elements": [
      "fire",
      "earth"
     ],
     "img": "f:flameruff--highland-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "fire"
     ],
     "img": "f:flameruff--mountain-woods-form"
    }
   ]
  },
  {
   "num": "003",
   "name": "Scorchhowl",
   "role": "DPS",
   "forms": [
    "Basic",
    "Highland",
    "Thunderstorm",
    "Prismana",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "scorchhowl",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "scorchhowl",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h02",
    "h12"
   ],
   "chart": {
    "HP": 95,
    "ATK": 119,
    "BREAK": 52,
    "REGEN": 90,
    "P.DEF": 80,
    "M.DEF": 75,
    "total": 511,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire"
     ],
     "img": null
    },
    {
     "form": "Highland",
     "elements": [
      "fire",
      "earth"
     ],
     "img": "f:scorchhowl--highland-form"
    },
    {
     "form": "Thunderstorm",
     "elements": [
      "fire",
      "electric"
     ],
     "img": "f:scorchhowl--thunderstorm-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "fire"
     ],
     "img": "f:scorchhowl--prismana-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "fire"
     ],
     "img": "f:scorchhowl--mountain-woods-form"
    }
   ]
  },
  {
   "num": "004",
   "name": "Inferlupa",
   "role": "Break",
   "forms": [
    "Basic",
    "Prismana"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "inferlupa",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK ↔ REGEN: hit whichever reaches the next efficient ×4 breakpoint cheapest; keep BREAK high because it drives both gauge and HP damage on this role → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "inferlupa",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 95,
    "ATK": 89,
    "BREAK": 108,
    "REGEN": 99,
    "P.DEF": 70,
    "M.DEF": 80,
    "total": 541,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark",
    "fire"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire",
      "dark"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "dark",
      "fire"
     ],
     "img": "f:inferlupa--v1005503"
    }
   ]
  },
  {
   "num": "005",
   "name": "Celestis",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "celestis",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "celestis",
   "afterCore": [],
   "flags": [],
   "element": "dark",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 81,
    "ATK": 106,
    "BREAK": 46,
    "REGEN": 80,
    "P.DEF": 58,
    "M.DEF": 58,
    "total": 429,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "006",
   "name": "Stellarys",
   "role": "DPS",
   "forms": [
    "Basic",
    "Rainstorm",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "stellarys",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "stellarys",
   "afterCore": [],
   "flags": [],
   "element": "dark",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 95,
    "ATK": 125,
    "BREAK": 54,
    "REGEN": 94,
    "P.DEF": 68,
    "M.DEF": 69,
    "total": 505,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark"
     ],
     "img": null
    },
    {
     "form": "Rainstorm",
     "elements": [
      "dark",
      "water"
     ],
     "img": "f:stellarys--rainstorm-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "dark",
      "ice"
     ],
     "img": "f:stellarys--prismana-form"
    }
   ]
  },
  {
   "num": "007",
   "name": "Chirpi",
   "role": "Support",
   "forms": [
    "Basic",
    "Beach",
    "Highland"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "chirpi",
   "targets": {
    "ATK": "UNVERIFIED: the Band Member text found online is a flat 18% EP cost cut with no ATK scaling. Keep ATK below HP until checked in game",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "CORE → 16,000 displayed HP caps March effect scaling; HP still adds survival",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK toward 800 displayed for Band Member → HP toward efficient ×4 breakpoints / 16k March effect cap → defenses.",
   "caps": "March HP scaling stops at 16,000 displayed HP (confirmed). Band Member ATK cap of 800 is unverified.",
   "recommended": [
    "ATK",
    "HP"
   ],
   "basis": "Partly unverified",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4%",
   "gameRecommended": [],
   "capMap": {
    "ATK": 800,
    "HP": 16000
   },
   "conditions": "No in-game 👍 attributes currently verified here; these are kit-derived priorities, not thumbs-up labels.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "chirpi",
   "afterCore": [],
   "flags": [
    "Band Member ATK scaling unverified"
   ],
   "element": "wind",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 97,
    "ATK": 83,
    "BREAK": 43,
    "REGEN": 93,
    "P.DEF": 67,
    "M.DEF": 69,
    "total": 452,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Beach",
     "elements": [
      "wind",
      "water"
     ],
     "img": "f:chirpi--highland-form"
    },
    {
     "form": "Highland",
     "elements": [
      "wind",
      "grass"
     ],
     "img": "f:chirpi--mountain-woods-form"
    }
   ]
  },
  {
   "num": "008",
   "name": "Tromber",
   "role": "Support",
   "forms": [
    "Basic",
    "Beach",
    "Highland"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "tromber",
   "targets": {
    "ATK": "CORE → 800 displayed ATK for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "CORE → 16,000 displayed HP for the named skill effect; HP still has survival value beyond the effect cap",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → 800 displayed for Waltz Crit-DMG scaling ↔ HP toward 16,000 for Waltz/March scaling; use ×4 Potential steps and stop special-output investment at each raw cap.",
   "caps": "Waltz ATK scaling stops at 800 displayed ATK. Waltz/March HP scaling stops at 16,000 displayed HP; HP still improves survival afterward.",
   "recommended": [
    "ATK",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4%",
   "gameRecommended": [
    "ATK",
    "HP"
   ],
   "conditions": "Enhanced Waltz/March is available from Alpha or a contracted +15 Legendary Held Item; the HP cap is for the skill effect, not survivability.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "tromber",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 113,
    "ATK": 119,
    "BREAK": 51,
    "REGEN": 88,
    "P.DEF": 79,
    "M.DEF": 81,
    "total": 531,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Beach",
     "elements": [
      "wind",
      "water"
     ],
     "img": "f:tromber--highland-form"
    },
    {
     "form": "Highland",
     "elements": [
      "wind",
      "grass"
     ],
     "img": "f:tromber--mountain-woods-form"
    }
   ],
   "enhancedCaps": {
    "ATK": 800,
    "HP": 16000
   },
   "capMap": {},
   "enhancedSkill": "Enhanced Waltz/March"
  },
  {
   "num": "009",
   "name": "Cornet",
   "role": "DPS",
   "forms": [
    "Basic",
    "Beach",
    "Prismana",
    "Highland"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "cornet",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "cornet",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 96,
    "ATK": 121,
    "BREAK": 54,
    "REGEN": 94,
    "P.DEF": 74,
    "M.DEF": 70,
    "total": 509,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Beach",
     "elements": [
      "wind",
      "water"
     ],
     "img": "f:cornet--highland-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "wind",
      "electric"
     ],
     "img": "f:cornet--prismana-form"
    },
    {
     "form": "Highland",
     "elements": [
      "wind",
      "grass"
     ],
     "img": "f:cornet--mountain-woods-form"
    }
   ]
  },
  {
   "num": "010",
   "name": "Tubster",
   "role": "Break",
   "forms": [
    "Basic",
    "Beach",
    "Highland"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "core"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "tubster",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first"
   },
   "pointPlan": "BREAK ↔ M.DEF: hit whichever reaches the next efficient ×4 breakpoint cheapest; keep BREAK high because it drives both gauge and HP damage on this role → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "M.DEF"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · F: M.DEF +6% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "M.DEF"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "tubster",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 108,
    "ATK": 80,
    "BREAK": 107,
    "REGEN": 80,
    "P.DEF": 66,
    "M.DEF": 109,
    "total": 550,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Beach",
     "elements": [
      "wind",
      "water"
     ],
     "img": "f:tubster--highland-form"
    },
    {
     "form": "Highland",
     "elements": [
      "wind",
      "grass"
     ],
     "img": "f:tubster--mountain-woods-form"
    }
   ]
  },
  {
   "num": "011",
   "name": "Iris",
   "role": "DPS",
   "forms": [
    "Basic",
    "Highland",
    "Forest",
    "Grassland",
    "Prismana",
    "Plateau",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "iris",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "iris",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 69,
    "ATK": 101,
    "BREAK": 50,
    "REGEN": 71,
    "P.DEF": 53,
    "M.DEF": 53,
    "total": 397,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass"
     ],
     "img": null
    },
    {
     "form": "Highland",
     "elements": [
      "grass"
     ],
     "img": "f:iris--highland-form"
    },
    {
     "form": "Forest",
     "elements": [
      "grass"
     ],
     "img": "f:iris--mountain-woods-form"
    },
    {
     "form": "Grassland",
     "elements": [
      "grass"
     ],
     "img": "f:iris--thunderstorm"
    },
    {
     "form": "Prismana",
     "elements": [
      "grass"
     ],
     "img": "f:iris--mudflat-form"
    },
    {
     "form": "Plateau",
     "elements": [
      "grass"
     ],
     "img": "f:iris--rainstorm-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "grass"
     ],
     "img": "f:iris--prismana"
    }
   ]
  },
  {
   "num": "012",
   "name": "Irisal",
   "role": "DPS",
   "forms": [
    "Basic",
    "Highland",
    "Forest",
    "Grassland",
    "Prismana",
    "Plateau",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "irisal",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "irisal",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 100,
    "ATK": 118,
    "BREAK": 52,
    "REGEN": 94,
    "P.DEF": 70,
    "M.DEF": 70,
    "total": 504,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass"
     ],
     "img": null
    },
    {
     "form": "Highland",
     "elements": [
      "grass"
     ],
     "img": "f:irisal--highland-form"
    },
    {
     "form": "Forest",
     "elements": [
      "grass"
     ],
     "img": "f:irisal--mountain-woods-form"
    },
    {
     "form": "Grassland",
     "elements": [
      "grass"
     ],
     "img": "f:irisal--thunderstorm"
    },
    {
     "form": "Prismana",
     "elements": [
      "grass"
     ],
     "img": "f:irisal--mudflat-form"
    },
    {
     "form": "Plateau",
     "elements": [
      "grass"
     ],
     "img": "f:irisal--rainstorm-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "grass"
     ],
     "img": "f:irisal--prismana"
    }
   ]
  },
  {
   "num": "013",
   "name": "Skippy",
   "role": "Heal",
   "forms": [
    "Basic",
    "Sea of Flowers",
    "Snowfield"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "flex",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Heal-role normal HP damage uses 10.5 × level. The currently released healers have no confirmed special raw-stat skill scaler in the damage-formula list; HP is the safest general leftover because it improves survival.",
   "released": true,
   "slug": "skippy",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "Water Spirit trait reads REGEN (AniimoTools lists it); size of the effect and any cap are unverified. Only matters on Water terrain builds",
    "HP": "hit efficient ×4 Potential breakpoints toward the build target",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "Follow any in-game 👍 first → HP to efficient ×4 breakpoints → defenses / build-specific utility.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "HP"
   ],
   "basis": "Role fallback + current formula",
   "confidence": "CURRENT",
   "personality": "J: HP +4%",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "skippy",
   "afterCore": [],
   "flags": [
    "Water Spirit REGEN size unverified"
   ],
   "element": "water",
   "items": [
    "h04",
    "h17"
   ],
   "chart": {
    "HP": 80,
    "ATK": 70,
    "BREAK": 50,
    "REGEN": 60,
    "P.DEF": 66,
    "M.DEF": 76,
    "total": 402,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    },
    {
     "form": "Sea of Flowers",
     "elements": [
      "water"
     ],
     "img": "f:skippy--highland-form"
    },
    {
     "form": "Snowfield",
     "elements": [
      "water",
      "ice"
     ],
     "img": "f:skippy--mountain-woods-form"
    }
   ]
  },
  {
   "num": "014",
   "name": "Pranky",
   "role": "Heal",
   "forms": [
    "Basic",
    "Sea of Flowers",
    "Snowfield"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "flex",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Heal-role normal HP damage uses 10.5 × level. The currently released healers have no confirmed special raw-stat skill scaler in the damage-formula list; HP is the safest general leftover because it improves survival.",
   "released": true,
   "slug": "pranky",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "Water Spirit trait reads REGEN (AniimoTools lists it); size of the effect and any cap are unverified. Only matters on Water terrain builds",
    "HP": "hit efficient ×4 Potential breakpoints toward the build target",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "Follow any in-game 👍 first → HP to efficient ×4 breakpoints → defenses / build-specific utility.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "HP"
   ],
   "basis": "Role fallback + current formula",
   "confidence": "CURRENT",
   "personality": "J: HP +4%",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "pranky",
   "afterCore": [],
   "flags": [
    "Water Spirit REGEN size unverified"
   ],
   "element": "water",
   "items": [
    "h04",
    "h17"
   ],
   "chart": {
    "HP": 109,
    "ATK": 85,
    "BREAK": 50,
    "REGEN": 74,
    "P.DEF": 66,
    "M.DEF": 98,
    "total": 482,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    },
    {
     "form": "Sea of Flowers",
     "elements": [
      "water"
     ],
     "img": "f:pranky--highland-form"
    },
    {
     "form": "Snowfield",
     "elements": [
      "water",
      "ice"
     ],
     "img": "f:pranky--mountain-woods-form"
    }
   ]
  },
  {
   "num": "015",
   "name": "Glacy",
   "role": "Heal",
   "forms": [
    "Basic",
    "Sea of Flowers",
    "Snowfield",
    "Prismana"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "flex",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "core"
   },
   "never": "No universal dead stat",
   "why": "Heal-role normal HP damage uses 10.5 × level. The currently released healers have no confirmed special raw-stat skill scaler in the damage-formula list; HP is the safest general leftover because it improves survival.",
   "released": true,
   "slug": "glacy",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "Water Spirit trait reads REGEN (AniimoTools lists it); size of the effect and any cap are unverified. Only matters on Water terrain builds",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first"
   },
   "pointPlan": "HP ↔ M.DEF at efficient ×4 breakpoints. Add REGEN only for a deliberate Water Spirit / terrain build.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "HP",
    "M.DEF"
   ],
   "basis": "In-game 👍 + conditional trait",
   "confidence": "CURRENT",
   "personality": "J: HP +4% · F: M.DEF +6%",
   "gameRecommended": [
    "HP",
    "M.DEF"
   ],
   "capMap": {},
   "conditions": "Water Spirit reads REGEN per AniimoTools; its exact effect and cap are unverified.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "glacy",
   "afterCore": [],
   "flags": [
    "Water Spirit REGEN size unverified"
   ],
   "element": "water",
   "items": [
    "h04",
    "h17"
   ],
   "chart": {
    "HP": 120,
    "ATK": 95,
    "BREAK": 50,
    "REGEN": 88,
    "P.DEF": 72,
    "M.DEF": 110,
    "total": 535,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water",
    "ice"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water",
      "ice"
     ],
     "img": null
    },
    {
     "form": "Sea of Flowers",
     "elements": [
      "water",
      "ice"
     ],
     "img": "f:glacy--highland-form"
    },
    {
     "form": "Snowfield",
     "elements": [
      "water",
      "ice"
     ],
     "img": "f:glacy--mountain-woods-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "water",
      "light"
     ],
     "img": "f:glacy--prismana-form"
    }
   ]
  },
  {
   "num": "016",
   "name": "Leafy",
   "role": "Regen",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "REGEN-role normal HP damage uses 10.5 × level. REGEN is only a major Potential priority when a skill/trait or in-game 👍 scales from it; otherwise natural recovery gains are small.",
   "released": true,
   "slug": "leafy",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "CORE → 500 displayed REGEN for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "REGEN → 500 displayed for Vitality Blooms EP output → HP to efficient ×4 breakpoints / 20 effective → defenses.",
   "caps": "REGEN special-effect cap: 500 displayed. Effect cap ≠ universal stat cap.",
   "recommended": [
    "REGEN",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "I: REGEN +4% · J: HP +4%",
   "gameRecommended": [
    "HP",
    "REGEN"
   ],
   "capMap": {
    "REGEN": 500
   },
   "conditions": "Game thumbs are HP + REGEN. For an EP-output build, REGEN reaches its special skill cap first; HP remains the general survival/output fallback.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "leafy",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h04"
   ],
   "chart": {
    "HP": 120,
    "ATK": 95,
    "BREAK": 50,
    "REGEN": 106,
    "P.DEF": 82,
    "M.DEF": 82,
    "total": 535,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass",
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass",
      "water"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "017",
   "name": "Nimbi",
   "role": "Support",
   "forms": [
    "Basic",
    "Rainstorm",
    "Cloudmist",
    "Plateau"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "nimbi",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "CORE: Cloud Shield scales from Max HP; efficient ×4 breakpoints toward 20 effective",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "HP → efficient ×4 breakpoints toward 20 effective → defenses.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "HP"
   ],
   "basis": "Skill-derived",
   "confidence": "CURRENT",
   "personality": "J: HP +4%",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Cloud Shield scales from Max HP; no special 16k cap is established for this shield.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "nimbi",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 80,
    "ATK": 84,
    "BREAK": 43,
    "REGEN": 93,
    "P.DEF": 69,
    "M.DEF": 82,
    "total": 451,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Rainstorm",
     "elements": [
      "wind",
      "electric"
     ],
     "img": "f:nimbi--highland-form"
    },
    {
     "form": "Cloudmist",
     "elements": [
      "wind"
     ],
     "img": "f:nimbi--mountain-woods-form"
    },
    {
     "form": "Plateau",
     "elements": [
      "wind",
      "ice"
     ],
     "img": "f:nimbi--thunderstorm"
    }
   ]
  },
  {
   "num": "018",
   "name": "Turbo",
   "role": "Support",
   "forms": [
    "Basic",
    "Rainstorm",
    "Cloudmist",
    "Prismana",
    "Plateau"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "core"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "turbo",
   "targets": {
    "ATK": "in-game 👍 on every form; 800 displayed ATK is a special-output cap only for Prismana Nebula Burst",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "in-game 👍: efficient ×4 Potential breakpoints toward 20 effective"
   },
   "pointPlan": "ATK ↔ M.DEF at efficient ×4 breakpoints. On Prismana, push ATK toward the 800 raw cap for Nebula Burst; on other forms, do not treat 800 as a universal Turbo cap.",
   "caps": "Prismana only: Nebula Burst stops its ATK-based buff scaling at 800 displayed ATK. Normal Nimbi Burst is fixed.",
   "recommended": [
    "ATK",
    "M.DEF"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · F: M.DEF +6%",
   "gameRecommended": [
    "ATK",
    "M.DEF"
   ],
   "capMap": {},
   "conditions": "FORM-SPECIFIC: Prismana unlocks Nebula Burst (ATK-scaled, cap 800). Normal Nimbi Burst is a fixed damage-dealt buff.",
   "formOverrides": {
    "Prismana": {
     "capMap": {
      "ATK": 800
     },
     "conditions": "Prismana Nebula Burst scales with ATK and stops growing at 800 displayed ATK."
    }
   },
   "lastVerified": "2026-10-08",
   "toolsSlug": "turbo",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 95,
    "ATK": 110,
    "BREAK": 50,
    "REGEN": 87,
    "P.DEF": 80,
    "M.DEF": 96,
    "total": 518,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Rainstorm",
     "elements": [
      "wind",
      "electric"
     ],
     "img": "f:turbo--highland-form"
    },
    {
     "form": "Cloudmist",
     "elements": [
      "wind"
     ],
     "img": "f:turbo--mountain-woods-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "wind",
      "dark"
     ],
     "img": "f:turbo--prismana-form"
    },
    {
     "form": "Plateau",
     "elements": [
      "wind",
      "ice"
     ],
     "img": "f:turbo--thunderstorm"
    }
   ]
  },
  {
   "num": "019",
   "name": "Dreaple",
   "role": "Support",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "core"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "dreaple",
   "targets": {
    "ATK": "CORE → 800 displayed ATK for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first"
   },
   "pointPlan": "ATK → 800 displayed for the named stat-scaled effect → M.DEF at efficient ×4 breakpoints → HP leftovers.",
   "caps": "Named ATK-scaled support effect stops growing at 800 displayed ATK. This is an effect cap, not a universal ATK cap.",
   "recommended": [
    "ATK",
    "M.DEF"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · F: M.DEF +6%",
   "gameRecommended": [
    "ATK",
    "M.DEF"
   ],
   "capMap": {
    "ATK": 800
   },
   "conditions": "Support normal hits still use 10.5 × level; ATK is valuable here because the named support effect reads ATK.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "dreaple",
   "afterCore": [],
   "flags": [],
   "element": "dark",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 100,
    "ATK": 110,
    "BREAK": 50,
    "REGEN": 80,
    "P.DEF": 77,
    "M.DEF": 103,
    "total": 520,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "020",
   "name": "Hummin",
   "role": "Break",
   "forms": [
    "Basic",
    "Mountain"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "hummin",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "LOW: its Prank trait restores REGEN-scaled EP, but only on Dark basic attacks. Hummin's basic attack is Grass, so this likely does nothing. Unverified",
    "HP": "CORE (kit-derived): efficient ×4 breakpoints toward 20 effective",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "HP"
   ],
   "basis": "Formula + kit-derived",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "HP is kit-derived output/survival synergy here; no separate raw HP cap is confirmed.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "hummin",
   "afterCore": [],
   "flags": [
    "Prank REGEN effect probably not usable"
   ],
   "element": "grass",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 94,
    "ATK": 68,
    "BREAK": 80,
    "REGEN": 60,
    "P.DEF": 71,
    "M.DEF": 94,
    "total": 467,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass"
     ],
     "img": null
    },
    {
     "form": "Mountain",
     "elements": [
      "grass"
     ],
     "img": "f:hummin--highland-form"
    }
   ]
  },
  {
   "num": "021",
   "name": "Hexxin",
   "role": "Regen",
   "forms": [
    "Basic",
    "Mountain",
    "Prismana"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "REGEN-role normal HP damage uses 10.5 × level. REGEN is only a major Potential priority when a skill/trait or in-game 👍 scales from it; otherwise natural recovery gains are small.",
   "released": true,
   "slug": "hexxin",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "CORE: Prank EP restore scales with REGEN (cap of 500 unverified); efficient ×4 steps first",
    "HP": "CORE / survival → 16,000 displayed HP caps Malicious Outburst / Oozing Malice scaling; HP still adds survival beyond it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "REGEN → 500 raw for Prank → HP toward efficient ×4 breakpoints / 16k if using Malicious Outburst or Oozing Malice → defenses.",
   "caps": "Prank EP restore is REGEN-scaled (confirmed); the 500 REGEN cap number is unverified. Oozing Malice and Malicious Outburst stop at 16,000 displayed HP (confirmed from skill text: 44.8% + 2.10% per 1,000 HP, max 78.4%).",
   "recommended": [
    "REGEN",
    "HP"
   ],
   "basis": "In-game 👍 + trait/skill caps",
   "confidence": "CURRENT",
   "personality": "I: REGEN +4% · J: HP +4%",
   "gameRecommended": [
    "REGEN",
    "HP"
   ],
   "capMap": {
    "REGEN": 500,
    "HP": 16000
   },
   "conditions": "Malicious Outburst only unlocks on the Prismana form; Oozing Malice is on the base form. Black Hole damage itself has no stat-scaling line.",
   "formOverrides": {
    "Prismana": {
     "conditions": "Prismana form adds Malicious Outburst (shield reduction, same 16,000 HP cap)."
    }
   },
   "lastVerified": "2026-10-08",
   "toolsSlug": "witchin",
   "afterCore": [],
   "flags": [
    "Prank cap number unverified"
   ],
   "element": "dark",
   "items": [
    "h04"
   ],
   "chart": {
    "HP": 115,
    "ATK": 88,
    "BREAK": 50,
    "REGEN": 115,
    "P.DEF": 84,
    "M.DEF": 90,
    "total": 542,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark",
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark",
      "grass"
     ],
     "img": null
    },
    {
     "form": "Mountain",
     "elements": [
      "dark",
      "grass"
     ],
     "img": "f:hexxin--highland-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "dark",
      "grass"
     ],
     "img": "f:hexxin--v1020302"
    }
   ]
  },
  {
   "num": "022",
   "name": "Tuckin",
   "role": "Break",
   "forms": [
    "Basic",
    "Mountain"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "tuckin",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "HP ↔ BREAK: take whichever reaches the next efficient ×4 breakpoint cheapest; both are live 👍 priorities → remaining points to the other, then defenses.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "HP",
    "BREAK"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "HP",
    "BREAK"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "tuckin",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 106,
    "ATK": 80,
    "BREAK": 100,
    "REGEN": 71,
    "P.DEF": 83,
    "M.DEF": 110,
    "total": 550,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass"
     ],
     "img": null
    },
    {
     "form": "Mountain",
     "elements": [
      "grass",
      "earth"
     ],
     "img": "f:tuckin--highland-form"
    }
   ]
  },
  {
   "num": "023",
   "name": "Budclaw",
   "role": "Break",
   "forms": [
    "Basic",
    "Mudflat",
    "Beach",
    "Bay"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "budclaw",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "budclaw",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 76,
    "ATK": 64,
    "BREAK": 84,
    "REGEN": 72,
    "P.DEF": 93,
    "M.DEF": 65,
    "total": 454,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth",
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth",
      "grass"
     ],
     "img": null
    },
    {
     "form": "Mudflat",
     "elements": [
      "earth"
     ],
     "img": "f:budclaw--highland-form"
    },
    {
     "form": "Beach",
     "elements": [
      "earth"
     ],
     "img": "f:budclaw--mountain-woods-form"
    },
    {
     "form": "Bay",
     "elements": [
      "earth"
     ],
     "img": "f:budclaw--thunderstorm"
    }
   ]
  },
  {
   "num": "024",
   "name": "Shrubclaw",
   "role": "Break",
   "forms": [
    "Basic",
    "Mudflat",
    "Beach",
    "Bay"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "shrubclaw",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "shrubclaw",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 95,
    "ATK": 80,
    "BREAK": 104,
    "REGEN": 85,
    "P.DEF": 109,
    "M.DEF": 77,
    "total": 550,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth",
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth",
      "grass"
     ],
     "img": null
    },
    {
     "form": "Mudflat",
     "elements": [
      "earth"
     ],
     "img": "f:shrubclaw--highland-form"
    },
    {
     "form": "Beach",
     "elements": [
      "earth"
     ],
     "img": "f:shrubclaw--mountain-woods-form"
    },
    {
     "form": "Bay",
     "elements": [
      "earth"
     ],
     "img": "f:shrubclaw--thunderstorm"
    }
   ]
  },
  {
   "num": "025",
   "name": "Geoclaw",
   "role": "Break",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "core",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "geoclaw",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK ↔ P.DEF: hit whichever reaches the next efficient ×4 breakpoint cheapest; keep BREAK high because it drives both gauge and HP damage on this role → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "P.DEF"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · T: P.DEF +6% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "P.DEF"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "geoclaw",
   "afterCore": [],
   "flags": [],
   "element": "ice",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 93,
    "ATK": 80,
    "BREAK": 103,
    "REGEN": 82,
    "P.DEF": 113,
    "M.DEF": 79,
    "total": 550,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "ice"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "ice"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "026",
   "name": "Sparki",
   "role": "Regen",
   "forms": [
    "Basic",
    "Highland",
    "Forest",
    "Sea of Flowers"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "flex",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "REGEN-role normal HP damage uses 10.5 × level. REGEN is only a major Potential priority when a skill/trait or in-game 👍 scales from it; otherwise natural recovery gains are small.",
   "released": true,
   "slug": "sparki",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "no confirmed live scaler: natural recovery only; low priority until a kit scaler / 👍 is verified",
    "HP": "safe leftover / survival: efficient ×4 breakpoints",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "No confirmed special scaler → HP at efficient ×4 breakpoints; only add REGEN if your actual kit screen marks it 👍 or a specific build needs it.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [],
   "basis": "No confirmed stat scaler",
   "confidence": "CURRENT",
   "personality": "J/P: defensive default",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Do not infer REGEN priority from the role name alone.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "sparki",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h04"
   ],
   "chart": {
    "HP": 69,
    "ATK": 100,
    "BREAK": 41,
    "REGEN": 98,
    "P.DEF": 60,
    "M.DEF": 67,
    "total": 435,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire"
     ],
     "img": null
    },
    {
     "form": "Highland",
     "elements": [
      "fire"
     ],
     "img": "f:sparki--highland-form"
    },
    {
     "form": "Forest",
     "elements": [
      "fire"
     ],
     "img": "f:sparki--mountain-woods-form"
    },
    {
     "form": "Sea of Flowers",
     "elements": [
      "fire"
     ],
     "img": "f:sparki--thunderstorm"
    }
   ]
  },
  {
   "num": "027",
   "name": "Flamerion",
   "role": "Regen",
   "forms": [
    "Basic",
    "Highland",
    "Forest",
    "Sea of Flowers"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "REGEN-role normal HP damage uses 10.5 × level. REGEN is only a major Potential priority when a skill/trait or in-game 👍 scales from it; otherwise natural recovery gains are small.",
   "released": true,
   "slug": "flamerion",
   "targets": {
    "ATK": "in-game 👍 / kit priority; does NOT raise Regen-role normal HP damage",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "CORE → 500 displayed REGEN caps Phantom Barrage effect scaling",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "REGEN toward 500 displayed ↔ ATK at efficient ×4 Potential breakpoints → HP leftovers.",
   "caps": "REGEN special-effect cap: 500 displayed. Effect cap ≠ universal stat cap.",
   "recommended": [
    "REGEN",
    "ATK"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4%",
   "gameRecommended": [
    "REGEN",
    "ATK"
   ],
   "capMap": {
    "REGEN": 500
   },
   "conditions": "ATK is a live 👍 kit stat, but Regen-role normal hits still use 10.5 × level; do not interpret ATK as a normal-damage scaler.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "flamerion",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h04"
   ],
   "chart": {
    "HP": 80,
    "ATK": 113,
    "BREAK": 50,
    "REGEN": 115,
    "P.DEF": 70,
    "M.DEF": 89,
    "total": 517,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire"
     ],
     "img": null
    },
    {
     "form": "Highland",
     "elements": [
      "fire"
     ],
     "img": "f:flamerion--highland-form"
    },
    {
     "form": "Forest",
     "elements": [
      "fire"
     ],
     "img": "f:flamerion--mountain-woods-form"
    },
    {
     "form": "Sea of Flowers",
     "elements": [
      "fire"
     ],
     "img": "f:flamerion--thunderstorm"
    }
   ]
  },
  {
   "num": "028",
   "name": "Flutternym",
   "role": "Heal",
   "forms": [
    "Basic",
    "Sea of Flowers",
    "Nighttime",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "flex",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Heal-role normal HP damage uses 10.5 × level. The currently released healers have no confirmed special raw-stat skill scaler in the damage-formula list; HP is the safest general leftover because it improves survival.",
   "released": true,
   "slug": "flutternym",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "hit efficient ×4 Potential breakpoints toward the build target",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "HP → efficient ×4 breakpoints toward 20 effective → defenses; REGEN only if a specific build needs it.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "HP"
   ],
   "basis": "Kit-derived",
   "confidence": "CURRENT",
   "personality": "J: HP +4%",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Healing/shield effects use Max HP percentages; no confirmed special REGEN scaler in the current formula list.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "flutternym",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h04",
    "h17"
   ],
   "chart": {
    "HP": 94,
    "ATK": 81,
    "BREAK": 41,
    "REGEN": 85,
    "P.DEF": 68,
    "M.DEF": 68,
    "total": 437,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Sea of Flowers",
     "elements": [
      "wind",
      "grass"
     ],
     "img": "f:flutternym--highland-form"
    },
    {
     "form": "Nighttime",
     "elements": [
      "wind",
      "dark"
     ],
     "img": "f:flutternym--mountain-woods-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "wind",
      "earth"
     ],
     "img": "f:flutternym--thunderstorm"
    }
   ]
  },
  {
   "num": "029",
   "name": "Gracewing",
   "role": "Heal",
   "forms": [
    "Basic",
    "Sea of Flowers",
    "Nighttime",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Heal-role normal HP damage uses 10.5 × level. The currently released healers have no confirmed special raw-stat skill scaler in the damage-formula list; HP is the safest general leftover because it improves survival.",
   "released": true,
   "slug": "gracewing",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "HP ↔ REGEN at efficient ×4 breakpoints → defenses.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "HP",
    "REGEN"
   ],
   "basis": "In-game 👍",
   "confidence": "CURRENT",
   "personality": "I: REGEN +4% · J: HP +4%",
   "gameRecommended": [
    "HP",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "gracewing",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h04",
    "h17"
   ],
   "chart": {
    "HP": 110,
    "ATK": 98,
    "BREAK": 50,
    "REGEN": 104,
    "P.DEF": 85,
    "M.DEF": 85,
    "total": 532,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Sea of Flowers",
     "elements": [
      "wind",
      "grass"
     ],
     "img": "f:gracewing--highland-form"
    },
    {
     "form": "Nighttime",
     "elements": [
      "wind",
      "dark"
     ],
     "img": "f:gracewing--mountain-woods-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "wind",
      "earth"
     ],
     "img": "f:gracewing--thunderstorm"
    }
   ]
  },
  {
   "num": "030",
   "name": "Somniwing",
   "role": "Regen",
   "forms": [
    "Prismana"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "REGEN-role normal HP damage uses 10.5 × level. REGEN is only a major Potential priority when a skill/trait or in-game 👍 scales from it; otherwise natural recovery gains are small.",
   "released": true,
   "slug": "somniwing",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "CORE → 500 displayed REGEN for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "REGEN → 500 displayed for Butterfly Dance / Ethereal Light Wave scaling → HP to efficient ×4 breakpoints.",
   "caps": "REGEN special-effect cap: 500 displayed. Effect cap ≠ universal stat cap.",
   "recommended": [
    "REGEN",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "I: REGEN +4% · J: HP +4%",
   "gameRecommended": [
    "HP",
    "REGEN"
   ],
   "capMap": {
    "REGEN": 500
   },
   "conditions": "Game thumbs are HP + REGEN; the named REGEN-scaled effects stop growing at 500 displayed REGEN.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "somniwing",
   "afterCore": [],
   "flags": [
    "Form names differ: this site lists Prismana; AniimoTools lists Basic. Kept this site's version; check in game."
   ],
   "element": "wind",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 111,
    "ATK": 92,
    "BREAK": 50,
    "REGEN": 115,
    "P.DEF": 85,
    "M.DEF": 85,
    "total": 538,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass",
    "wind"
   ],
   "formInfo": [
    {
     "form": "Prismana",
     "elements": [
      "wind"
     ],
     "img": null,
     "unmatched": true
    }
   ]
  },
  {
   "num": "031",
   "name": "Eko",
   "role": "Support",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "eko",
   "targets": {
    "ATK": "CORE → 800 displayed ATK for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → 800 displayed for Sonar Attack scaling → HP leftovers.",
   "caps": "Sonar Attack stat-scaled effect stops growing at 800 displayed ATK.",
   "recommended": [
    "ATK"
   ],
   "basis": "Verified skill scaler",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2%",
   "gameRecommended": [],
   "capMap": {
    "ATK": 800
   },
   "conditions": "ATK is a verified skill scaler; Support normal-hit damage still uses 10.5 × level.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "eko",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 70,
    "ATK": 108,
    "BREAK": 42,
    "REGEN": 80,
    "P.DEF": 70,
    "M.DEF": 57,
    "total": 427,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "032",
   "name": "Eklue",
   "role": "Support",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "eklue",
   "targets": {
    "ATK": "CORE → 800 displayed ATK for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → 800 displayed for the named stat-scaled effect → HP at efficient ×4 breakpoints → HP leftovers.",
   "caps": "Named ATK-scaled support effect stops growing at 800 displayed ATK. This is an effect cap, not a universal ATK cap.",
   "recommended": [
    "ATK",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4%",
   "gameRecommended": [
    "ATK",
    "HP"
   ],
   "capMap": {
    "ATK": 800
   },
   "conditions": "Support normal hits still use 10.5 × level; ATK is valuable here because the named support effect reads ATK.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "eklue",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 100,
    "ATK": 120,
    "BREAK": 49,
    "REGEN": 91,
    "P.DEF": 83,
    "M.DEF": 67,
    "total": 510,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "033",
   "name": "Budsquire",
   "role": "DPS",
   "forms": [
    "Basic",
    "Towerwood"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "budsquire",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "budsquire",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 82,
    "ATK": 107,
    "BREAK": 43,
    "REGEN": 78,
    "P.DEF": 59,
    "M.DEF": 59,
    "total": 428,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass"
     ],
     "img": null
    },
    {
     "form": "Towerwood",
     "elements": [
      "grass"
     ],
     "img": "f:budsquire--highland-form"
    }
   ]
  },
  {
   "num": "034",
   "name": "Thornblade",
   "role": "DPS",
   "forms": [
    "Basic",
    "Thunderstorm",
    "Prismana",
    "Towerwood"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "thornblade",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "thornblade",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 96,
    "ATK": 121,
    "BREAK": 53,
    "REGEN": 92,
    "P.DEF": 74,
    "M.DEF": 73,
    "total": 509,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass"
     ],
     "img": null
    },
    {
     "form": "Thunderstorm",
     "elements": [
      "grass",
      "electric"
     ],
     "img": "f:thornblade--rainstorm-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "grass",
      "water"
     ],
     "img": "f:thornblade--prismana-form"
    },
    {
     "form": "Towerwood",
     "elements": [
      "grass"
     ],
     "img": "f:thornblade--highland-form"
    }
   ]
  },
  {
   "num": "035",
   "name": "Melloblum",
   "role": "Support",
   "forms": [
    "Basic",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "melloblum",
   "targets": {
    "ATK": "CORE → 800 displayed ATK for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → 800 displayed for the named stat-scaled effect → HP at efficient ×4 breakpoints → HP leftovers.",
   "caps": "Named ATK-scaled support effect stops growing at 800 displayed ATK. This is an effect cap, not a universal ATK cap.",
   "recommended": [
    "ATK",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4%",
   "gameRecommended": [
    "ATK",
    "HP"
   ],
   "capMap": {
    "ATK": 800
   },
   "conditions": "Support normal hits still use 10.5 × level; ATK is valuable here because the named support effect reads ATK.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "melloblum",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 95,
    "ATK": 113,
    "BREAK": 91,
    "REGEN": 78,
    "P.DEF": 70,
    "M.DEF": 70,
    "total": 517,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "grass",
      "light"
     ],
     "img": "f:melloblum--v1032402"
    }
   ]
  },
  {
   "num": "036",
   "name": "Pomegg",
   "role": "Break",
   "forms": [
    "Basic",
    "Snowfield",
    "Highland",
    "Sea of Flowers"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "pomegg",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "pomegg",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 74,
    "ATK": 72,
    "BREAK": 91,
    "REGEN": 85,
    "P.DEF": 68,
    "M.DEF": 65,
    "total": 455,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass"
     ],
     "img": null
    },
    {
     "form": "Snowfield",
     "elements": [
      "grass",
      "ice"
     ],
     "img": "f:pomegg--highland-form"
    },
    {
     "form": "Highland",
     "elements": [
      "grass"
     ],
     "img": "f:pomegg--mountain-woods-form"
    },
    {
     "form": "Sea of Flowers",
     "elements": [
      "grass"
     ],
     "img": "f:pomegg--thunderstorm"
    }
   ]
  },
  {
   "num": "037",
   "name": "Pomawk",
   "role": "Break",
   "forms": [
    "Basic",
    "Snowfield",
    "Highland",
    "Sea of Flowers"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "pomawk",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK ↔ REGEN: hit whichever reaches the next efficient ×4 breakpoint cheapest; keep BREAK high because it drives both gauge and HP damage on this role → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "pomawk",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 87,
    "ATK": 90,
    "BREAK": 107,
    "REGEN": 100,
    "P.DEF": 80,
    "M.DEF": 76,
    "total": 540,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass"
     ],
     "img": null
    },
    {
     "form": "Snowfield",
     "elements": [
      "grass",
      "ice"
     ],
     "img": "f:pomawk--highland-form"
    },
    {
     "form": "Highland",
     "elements": [
      "grass"
     ],
     "img": "f:pomawk--mountain-woods-form"
    },
    {
     "form": "Sea of Flowers",
     "elements": [
      "grass"
     ],
     "img": "f:pomawk--thunderstorm"
    }
   ]
  },
  {
   "num": "038",
   "name": "Dewy",
   "role": "Support",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "dewy",
   "targets": {
    "ATK": "kit-derived: Dangerous Fragrance Dark-resistance reduction grows with ATK toward its listed maximum",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "kit-derived: Blossoming/Withering effects use Max HP percentages; efficient ×4 breakpoints",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK at efficient ×4 breakpoints for Dangerous Fragrance ↔ HP for shield/heal output → defenses.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "HP"
   ],
   "basis": "Trait/skill-derived",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4%",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "In-game Recommended Attributes are blank; ATK + HP here are kit-derived, not 👍.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "dewy",
   "afterCore": [],
   "flags": [],
   "element": "dark",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 71,
    "ATK": 94,
    "BREAK": 69,
    "REGEN": 94,
    "P.DEF": 58,
    "M.DEF": 55,
    "total": 441,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "039",
   "name": "Fragrancier",
   "role": "Support",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "fragrancier",
   "targets": {
    "ATK": "CORE → 800 displayed ATK for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → 800 displayed for the named stat-scaled effect → HP at efficient ×4 breakpoints → HP leftovers.",
   "caps": "Named ATK-scaled support effect stops growing at 800 displayed ATK. This is an effect cap, not a universal ATK cap.",
   "recommended": [
    "ATK",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4%",
   "gameRecommended": [
    "ATK",
    "HP"
   ],
   "capMap": {
    "ATK": 800
   },
   "conditions": "Support normal hits still use 10.5 × level; ATK is valuable here because the named support effect reads ATK.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "fragrancier",
   "afterCore": [],
   "flags": [],
   "element": "dark",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 84,
    "ATK": 111,
    "BREAK": 81,
    "REGEN": 110,
    "P.DEF": 68,
    "M.DEF": 65,
    "total": 519,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "040",
   "name": "Wisptis",
   "role": "DPS",
   "forms": [
    "Basic",
    "Forest",
    "Highland"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "wisptis",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "wisptis",
   "afterCore": [],
   "flags": [],
   "element": "dark",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 77,
    "ATK": 112,
    "BREAK": 43,
    "REGEN": 77,
    "P.DEF": 60,
    "M.DEF": 54,
    "total": 423,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark"
     ],
     "img": null
    },
    {
     "form": "Forest",
     "elements": [
      "dark",
      "grass"
     ],
     "img": "f:wisptis--highland-form"
    },
    {
     "form": "Highland",
     "elements": [
      "dark",
      "fire"
     ],
     "img": "f:wisptis--mountain-woods-form"
    }
   ]
  },
  {
   "num": "041",
   "name": "Ignitis",
   "role": "DPS",
   "forms": [
    "Basic",
    "Forest",
    "Prismana",
    "Highland"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "ignitis",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "ignitis",
   "afterCore": [],
   "flags": [],
   "element": "dark",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 90,
    "ATK": 125,
    "BREAK": 52,
    "REGEN": 91,
    "P.DEF": 77,
    "M.DEF": 70,
    "total": 505,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark"
     ],
     "img": null
    },
    {
     "form": "Forest",
     "elements": [
      "dark",
      "grass"
     ],
     "img": "f:ignitis--highland-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "dark",
      "fire"
     ],
     "img": "f:ignitis--prismana-form"
    },
    {
     "form": "Highland",
     "elements": [
      "dark",
      "fire"
     ],
     "img": "f:ignitis--mountain-woods-form"
    }
   ]
  },
  {
   "num": "042",
   "name": "Bonesky",
   "role": "DPS",
   "forms": [
    "Basic",
    "Nighttime"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "bonesky",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "bonesky",
   "afterCore": [],
   "flags": [],
   "element": "ice",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 71,
    "ATK": 88,
    "BREAK": 38,
    "REGEN": 67,
    "P.DEF": 56,
    "M.DEF": 57,
    "total": 377,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "ice"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "ice"
     ],
     "img": null
    },
    {
     "form": "Nighttime",
     "elements": [
      "ice",
      "dark"
     ],
     "img": "f:bonesky--highland-form"
    }
   ]
  },
  {
   "num": "043",
   "name": "Fenrier",
   "role": "DPS",
   "forms": [
    "Basic",
    "Nighttime"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "fenrier",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "fenrier",
   "afterCore": [],
   "flags": [],
   "element": "ice",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 86,
    "ATK": 105,
    "BREAK": 45,
    "REGEN": 81,
    "P.DEF": 68,
    "M.DEF": 68,
    "total": 453,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "ice"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "ice"
     ],
     "img": null
    },
    {
     "form": "Nighttime",
     "elements": [
      "ice",
      "dark"
     ],
     "img": "f:fenrier--highland-form"
    }
   ]
  },
  {
   "num": "044",
   "name": "Glynsera",
   "role": "DPS",
   "forms": [
    "Basic",
    "Prismana",
    "Nighttime"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "glynsera",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "glynsera",
   "afterCore": [],
   "flags": [],
   "element": "ice",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 95,
    "ATK": 118,
    "BREAK": 53,
    "REGEN": 98,
    "P.DEF": 72,
    "M.DEF": 76,
    "total": 512,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "ice"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "ice"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "ice",
      "light"
     ],
     "img": "f:glynsera--prismana-form"
    },
    {
     "form": "Nighttime",
     "elements": [
      "ice",
      "dark"
     ],
     "img": "f:glynsera--highland-form"
    }
   ]
  },
  {
   "num": "045",
   "name": "Bolty",
   "role": "Break",
   "forms": [
    "Basic",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "Ratio 1.04: 0.85 × BREAK beats ATK at equal Potential, so BREAK drives both hit damage and gauge damage. An all-BREAK build has about 4% more hit attack than an all-ATK build. The planner checks your displayed stats if you enter them.",
   "released": true,
   "slug": "bolty",
   "targets": {
    "ATK": "NO: committing to BREAK gives about 4% more hit attack than an all-ATK build, plus full gauge damage. Exception only if displayed ATK beats 0.85 × displayed BREAK because of flat ATK bonuses (Ferocious Fang, Resonance ATK stars)",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current crossover formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Close to the ATK/BREAK line. Enter displayed ATK and BREAK in the planner to see which one your copy hits with.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "bolty",
   "afterCore": [],
   "flags": [],
   "element": "electric",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 85,
    "ATK": 85,
    "BREAK": 87,
    "REGEN": 73,
    "P.DEF": 60,
    "M.DEF": 60,
    "total": 450,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "electric"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "electric"
     ],
     "img": null
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "electric"
     ],
     "img": "f:bolty--highland-form"
    }
   ]
  },
  {
   "num": "046",
   "name": "Blazen",
   "role": "Break",
   "forms": [
    "Basic",
    "Prismana",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "Ratio 1.06: 0.85 × BREAK beats ATK at equal Potential, so BREAK drives both hit damage and gauge damage. An all-BREAK build has about 6% more hit attack than an all-ATK build. The planner checks your displayed stats if you enter them.",
   "released": true,
   "slug": "blazen",
   "targets": {
    "ATK": "NO: committing to BREAK gives about 6% more hit attack than an all-ATK build, plus full gauge damage. Exception only if displayed ATK beats 0.85 × displayed BREAK because of flat ATK bonuses (Ferocious Fang, Resonance ATK stars)",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK ↔ REGEN: hit whichever reaches the next efficient ×4 breakpoint cheapest; keep BREAK high because it drives both gauge and HP damage on this role → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "Close to the ATK/BREAK line. Enter displayed ATK and BREAK in the planner to see which one your copy hits with.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "blazen",
   "afterCore": [],
   "flags": [],
   "element": "electric",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 100,
    "ATK": 100,
    "BREAK": 104,
    "REGEN": 86,
    "P.DEF": 70,
    "M.DEF": 70,
    "total": 530,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "electric"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "electric"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "electric",
      "dark"
     ],
     "img": "f:blazen--prismana-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "electric"
     ],
     "img": "f:blazen--highland-form"
    }
   ]
  },
  {
   "num": "047",
   "name": "Squarrel",
   "role": "Break",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "squarrel",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "squarrel",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 53,
    "ATK": 80,
    "BREAK": 94,
    "REGEN": 77,
    "P.DEF": 79,
    "M.DEF": 72,
    "total": 455,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "048",
   "name": "Squashel",
   "role": "Break",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "squashel",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK ↔ HP: hit whichever reaches the next efficient ×4 breakpoint cheapest; keep BREAK high because it drives both gauge and HP damage on this role → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "HP"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "squashel",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 110,
    "ATK": 82,
    "BREAK": 108,
    "REGEN": 88,
    "P.DEF": 80,
    "M.DEF": 80,
    "total": 548,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "049",
   "name": "Susuta",
   "role": "Break",
   "forms": [
    "Basic",
    "Nighttime"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "susuta",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "susuta",
   "afterCore": [],
   "flags": [],
   "element": "water",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 81,
    "ATK": 61,
    "BREAK": 72,
    "REGEN": 64,
    "P.DEF": 53,
    "M.DEF": 80,
    "total": 411,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    },
    {
     "form": "Nighttime",
     "elements": [
      "water"
     ],
     "img": "f:susuta--highland-form"
    }
   ]
  },
  {
   "num": "050",
   "name": "Popota",
   "role": "Break",
   "forms": [
    "Basic",
    "Nighttime"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "Splitting ATK and BREAK",
   "why": "Break role hits with max(ATK, 0.85 × BREAK). Popota is the one breaker where ATK wins at equal Potential (ratio 0.85). Because only the higher stat counts, splitting points between ATK and BREAK wastes the smaller one.",
   "released": true,
   "slug": "popota",
   "targets": {
    "ATK": "ATK build only: to 20 effective. In the BREAK build, leave at 0 (points 1 to 11 add nothing)",
    "BREAK": "BREAK build only: to 20 effective. In the ATK build, BREAK only adds gauge damage",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "Pick one build. ATK build: ATK to 20 effective, gives about 17.6% more hit attack than the BREAK build. BREAK build: BREAK to 20 effective; BREAK then becomes the hitting stat (0.85 × 1.392 = 1.18), gauge damage +39.2%, hit attack 15% lower. In the BREAK build, ATK points 1 to 11 add nothing.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "BREAK"
   ],
   "basis": "Current formula exception",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "The planner has a build switch for Popota. Math assumes Potential is the only difference; flat ATK/BREAK bonuses can shift it.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "popota",
   "afterCore": [],
   "flags": [],
   "buildChoice": true,
   "element": "water",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 92,
    "ATK": 96,
    "BREAK": 80,
    "REGEN": 67,
    "P.DEF": 68,
    "M.DEF": 68,
    "total": 471,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    },
    {
     "form": "Nighttime",
     "elements": [
      "water"
     ],
     "img": "f:popota--highland-form"
    }
   ]
  },
  {
   "num": "051",
   "name": "Piopiota",
   "role": "Support",
   "forms": [
    "Basic",
    "Nighttime"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "core",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "piopiota",
   "targets": {
    "ATK": "CORE → 800 displayed ATK for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → 800 displayed for the named stat-scaled effect → P.DEF at efficient ×4 breakpoints → HP leftovers.",
   "caps": "Named ATK-scaled support effect stops growing at 800 displayed ATK. This is an effect cap, not a universal ATK cap.",
   "recommended": [
    "ATK",
    "P.DEF"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · T: P.DEF +6%",
   "gameRecommended": [
    "ATK",
    "P.DEF"
   ],
   "capMap": {
    "ATK": 800
   },
   "conditions": "Support normal hits still use 10.5 × level; ATK is valuable here because the named support effect reads ATK.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "piopiota",
   "afterCore": [],
   "flags": [],
   "element": "water",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 102,
    "ATK": 108,
    "BREAK": 50,
    "REGEN": 88,
    "P.DEF": 99,
    "M.DEF": 75,
    "total": 522,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    },
    {
     "form": "Nighttime",
     "elements": [
      "water",
      "dark"
     ],
     "img": "f:piopiota--highland-form"
    }
   ]
  },
  {
   "num": "052",
   "name": "Panpanta",
   "role": "Break",
   "forms": [
    "Basic",
    "Nighttime",
    "Prismana"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "core"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "panpanta",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first"
   },
   "pointPlan": "BREAK ↔ M.DEF: hit whichever reaches the next efficient ×4 breakpoint cheapest; keep BREAK high because it drives both gauge and HP damage on this role → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "M.DEF"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · F: M.DEF +6% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "M.DEF"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "panpanta",
   "afterCore": [],
   "flags": [],
   "element": "water",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 104,
    "ATK": 85,
    "BREAK": 100,
    "REGEN": 80,
    "P.DEF": 70,
    "M.DEF": 106,
    "total": 545,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    },
    {
     "form": "Nighttime",
     "elements": [
      "water"
     ],
     "img": "f:panpanta--highland-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "water"
     ],
     "img": "f:panpanta--prismana-form"
    }
   ]
  },
  {
   "num": "053",
   "name": "Shelly",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "shelly",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "shelly",
   "afterCore": [],
   "flags": [],
   "element": "water",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 75,
    "ATK": 90,
    "BREAK": 39,
    "REGEN": 66,
    "P.DEF": 56,
    "M.DEF": 56,
    "total": 382,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "054",
   "name": "Sheldon",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "sheldon",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "sheldon",
   "afterCore": [],
   "flags": [],
   "element": "water",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 90,
    "ATK": 109,
    "BREAK": 44,
    "REGEN": 79,
    "P.DEF": 68,
    "M.DEF": 68,
    "total": 458,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "055",
   "name": "Sherro",
   "role": "DPS",
   "forms": [
    "Basic",
    "Thunderstorm",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "sherro",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "sherro",
   "afterCore": [],
   "flags": [],
   "element": "water",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 100,
    "ATK": 121,
    "BREAK": 50,
    "REGEN": 88,
    "P.DEF": 75,
    "M.DEF": 75,
    "total": 509,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    },
    {
     "form": "Thunderstorm",
     "elements": [
      "water",
      "electric"
     ],
     "img": "f:sherro--thunderstorm-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "water",
      "light"
     ],
     "img": "f:sherro--prismana-form"
    }
   ]
  },
  {
   "num": "056",
   "name": "Baleetle",
   "role": "DPS",
   "forms": [
    "Basic",
    "Snowfield"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "baleetle",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "baleetle",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 76,
    "ATK": 98,
    "BREAK": 42,
    "REGEN": 85,
    "P.DEF": 68,
    "M.DEF": 68,
    "total": 437,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth"
     ],
     "img": null
    },
    {
     "form": "Snowfield",
     "elements": [
      "earth",
      "ice"
     ],
     "img": "f:baleetle--highland-form"
    }
   ]
  },
  {
   "num": "057",
   "name": "Waleetle",
   "role": "DPS",
   "forms": [
    "Basic",
    "Snowfield",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "waleetle",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "waleetle",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 90,
    "ATK": 114,
    "BREAK": 52,
    "REGEN": 100,
    "P.DEF": 80,
    "M.DEF": 80,
    "total": 516,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth"
     ],
     "img": null
    },
    {
     "form": "Snowfield",
     "elements": [
      "earth",
      "ice"
     ],
     "img": "f:waleetle--highland-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "earth",
      "dark"
     ],
     "img": "f:waleetle--v1045302"
    }
   ]
  },
  {
   "num": "058",
   "name": "Bouldus",
   "role": "Support",
   "forms": [
    "Basic",
    "Snowfield"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "core",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "bouldus",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ P.DEF: hit efficient ×4 breakpoints; HP leftovers after both priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "P.DEF"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · T: P.DEF +6%",
   "gameRecommended": [
    "ATK",
    "P.DEF"
   ],
   "capMap": {},
   "conditions": "These are live in-game recommended Potentials; ATK does not raise Support normal-hit damage unless the kit reads it.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "bouldus",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 91,
    "ATK": 114,
    "BREAK": 52,
    "REGEN": 104,
    "P.DEF": 101,
    "M.DEF": 54,
    "total": 516,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth"
     ],
     "img": null
    },
    {
     "form": "Snowfield",
     "elements": [
      "earth",
      "ice"
     ],
     "img": "f:bouldus--highland-form"
    }
   ]
  },
  {
   "num": "059",
   "name": "Fentuft",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "fentuft",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "fentuft",
   "afterCore": [],
   "flags": [],
   "element": "electric",
   "items": [
    "h02",
    "h15"
   ],
   "chart": {
    "HP": 85,
    "ATK": 106,
    "BREAK": 41,
    "REGEN": 77,
    "P.DEF": 60,
    "M.DEF": 60,
    "total": 429,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "electric"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "electric"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "060",
   "name": "Fenmane",
   "role": "DPS",
   "forms": [
    "Basic",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "fenmane",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "fenmane",
   "afterCore": [],
   "flags": [],
   "element": "electric",
   "items": [
    "h02",
    "h15"
   ],
   "chart": {
    "HP": 100,
    "ATK": 125,
    "BREAK": 50,
    "REGEN": 90,
    "P.DEF": 70,
    "M.DEF": 70,
    "total": 505,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "electric"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "electric"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "electric",
      "light"
     ],
     "img": "f:fenmane--prismana-form"
    }
   ]
  },
  {
   "num": "061",
   "name": "Helmut",
   "role": "Break",
   "forms": [
    "Basic",
    "Snowfield",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "helmut",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "helmut",
   "afterCore": [],
   "flags": [],
   "element": "dark",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 60,
    "ATK": 52,
    "BREAK": 60,
    "REGEN": 51,
    "P.DEF": 68,
    "M.DEF": 48,
    "total": 339,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark"
     ],
     "img": null
    },
    {
     "form": "Snowfield",
     "elements": [
      "dark",
      "ice"
     ],
     "img": "f:helmut--highland-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "dark"
     ],
     "img": "f:helmut--mountain-woods-form"
    }
   ]
  },
  {
   "num": "062",
   "name": "Pawney",
   "role": "DPS",
   "forms": [
    "Basic",
    "Snowfield",
    "Mountain Woods",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "pawney",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "offensive FLEX: Offensive Shift converts 15% of P.DEF into ATK; consider after ATK/REGEN breakpoints for damage builds",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN at efficient ×4 breakpoints → P.DEF can outrank generic HP in a damage-focused build because Offensive Shift converts 15% of P.DEF to ATK → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + trait conversion",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "P.DEF has offensive value through Offensive Shift even though the live thumbs are ATK + REGEN.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "pawney",
   "afterCore": [
    "P.DEF"
   ],
   "flags": [],
   "element": "dark",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 90,
    "ATK": 125,
    "BREAK": 55,
    "REGEN": 81,
    "P.DEF": 84,
    "M.DEF": 70,
    "total": 505,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark"
     ],
     "img": null
    },
    {
     "form": "Snowfield",
     "elements": [
      "dark",
      "ice"
     ],
     "img": "f:pawney--highland-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "dark"
     ],
     "img": "f:pawney--mountain-woods-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "dark"
     ],
     "img": "f:pawney--prismana-form"
    }
   ]
  },
  {
   "num": "063",
   "name": "Rookey",
   "role": "Break",
   "forms": [
    "Basic",
    "Snowfield",
    "Mountain Woods"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "core",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "rookey",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "CORE: Guardbreak Resonance converts 5 P.DEF → +1 BREAK, up to +120 BREAK",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK ↔ P.DEF at efficient ×4 breakpoints; P.DEF is offensive here because Guardbreak Resonance converts it into BREAK → HP leftovers.",
   "caps": "Guardbreak Resonance: 5 P.DEF = +1 BREAK, up to +120 BREAK, so conversion stops at 600 displayed P.DEF. P.DEF still defends after that.",
   "recommended": [
    "BREAK",
    "P.DEF"
   ],
   "basis": "In-game 👍 + trait conversion",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · T: P.DEF +6% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "P.DEF"
   ],
   "capMap": {
    "P.DEF": 600
   },
   "conditions": "P.DEF is not merely defense on Rookey: it feeds BREAK through Guardbreak Resonance.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "rookey",
   "afterCore": [],
   "flags": [],
   "element": "dark",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 100,
    "ATK": 90,
    "BREAK": 105,
    "REGEN": 75,
    "P.DEF": 100,
    "M.DEF": 70,
    "total": 540,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "dark"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "dark"
     ],
     "img": null
    },
    {
     "form": "Snowfield",
     "elements": [
      "dark",
      "ice"
     ],
     "img": "f:rookey--highland-form"
    },
    {
     "form": "Mountain Woods",
     "elements": [
      "dark"
     ],
     "img": "f:rookey--mountain-woods-form"
    }
   ]
  },
  {
   "num": "064",
   "name": "Jawling",
   "role": "Break",
   "forms": [
    "Basic",
    "Mountain"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "jawling",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "jawling",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 78,
    "ATK": 65,
    "BREAK": 76,
    "REGEN": 63,
    "P.DEF": 74,
    "M.DEF": 51,
    "total": 407,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Mountain",
     "elements": [
      "wind"
     ],
     "img": "f:jawling--highland-form"
    }
   ]
  },
  {
   "num": "065",
   "name": "Helmwhelp",
   "role": "Break",
   "forms": [
    "Basic",
    "Mountain"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "helmwhelp",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "helmwhelp",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 94,
    "ATK": 78,
    "BREAK": 92,
    "REGEN": 76,
    "P.DEF": 88,
    "M.DEF": 61,
    "total": 489,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Mountain",
     "elements": [
      "wind"
     ],
     "img": "f:helmwhelp--highland-form"
    }
   ]
  },
  {
   "num": "066",
   "name": "Helgon",
   "role": "Break",
   "forms": [
    "Basic",
    "Mountain"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "core",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "helgon",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK ↔ P.DEF: hit whichever reaches the next efficient ×4 breakpoint cheapest; keep BREAK high because it drives both gauge and HP damage on this role → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "P.DEF"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · T: P.DEF +6% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "P.DEF"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "helgon",
   "afterCore": [],
   "flags": [],
   "element": "wind",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 104,
    "ATK": 87,
    "BREAK": 102,
    "REGEN": 84,
    "P.DEF": 98,
    "M.DEF": 68,
    "total": 543,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "wind"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "wind"
     ],
     "img": null
    },
    {
     "form": "Mountain",
     "elements": [
      "wind"
     ],
     "img": "f:helgon--highland-form"
    }
   ]
  },
  {
   "num": "067",
   "name": "Infergon",
   "role": "DPS",
   "forms": [
    "Basic",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "infergon",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "infergon",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 95,
    "ATK": 125,
    "BREAK": 50,
    "REGEN": 80,
    "P.DEF": 70,
    "M.DEF": 85,
    "total": 505,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "fire",
      "wind"
     ],
     "img": "f:infergon--v1002503"
    }
   ]
  },
  {
   "num": "068",
   "name": "Cubbo",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "cubbo",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "cubbo",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 92,
    "ATK": 100,
    "BREAK": 42,
    "REGEN": 70,
    "P.DEF": 70,
    "M.DEF": 61,
    "total": 435,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "069",
   "name": "Grizbo",
   "role": "DPS",
   "forms": [
    "Basic",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "grizbo",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "grizbo",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 104,
    "ATK": 124,
    "BREAK": 50,
    "REGEN": 75,
    "P.DEF": 83,
    "M.DEF": 70,
    "total": 506,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "earth",
      "dark"
     ],
     "img": "f:grizbo--prismana-form"
    }
   ]
  },
  {
   "num": "070",
   "name": "Pebbling",
   "role": "Break",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "pebbling",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "pebbling",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 83,
    "ATK": 68,
    "BREAK": 79,
    "REGEN": 56,
    "P.DEF": 52,
    "M.DEF": 74,
    "total": 412,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "071",
   "name": "Lavazar",
   "role": "Break",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "lavazar",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "lavazar",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 99,
    "ATK": 82,
    "BREAK": 93,
    "REGEN": 68,
    "P.DEF": 63,
    "M.DEF": 80,
    "total": 485,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire",
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire",
      "earth"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "072",
   "name": "Magmarex",
   "role": "Break",
   "forms": [
    "Basic",
    "Prismana"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "magmarex",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK ↔ HP: hit whichever reaches the next efficient ×4 breakpoint cheapest; keep BREAK high because it drives both gauge and HP damage on this role → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "HP"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "magmarex",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 110,
    "ATK": 91,
    "BREAK": 104,
    "REGEN": 75,
    "P.DEF": 70,
    "M.DEF": 89,
    "total": 539,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire",
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire",
      "earth"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "fire",
      "dark"
     ],
     "img": "f:magmarex--prismana-form"
    }
   ]
  },
  {
   "num": "073",
   "name": "Geodeback",
   "role": "Break",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "geodeback",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "hit efficient ×4 Potential breakpoints toward the build target",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK → efficient ×4 breakpoints toward 20 effective → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "geodeback",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 99,
    "ATK": 81,
    "BREAK": 102,
    "REGEN": 70,
    "P.DEF": 80,
    "M.DEF": 54,
    "total": 486,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "074",
   "name": "Minespine",
   "role": "Break",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "hardno",
    "BREAK": "core",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "ATK acquired Potential",
   "why": "For 25 of 26 current BREAK Aniimo, 0.85 × BREAK beats ATK, so BREAK raises both HP damage and BREAK-gauge damage. ATK acquired Potential is dominated in the normal build.",
   "released": true,
   "slug": "minespine",
   "targets": {
    "ATK": "0 acquired in the normal build",
    "BREAK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "BREAK ↔ HP: hit whichever reaches the next efficient ×4 breakpoint cheapest; keep BREAK high because it drives both gauge and HP damage on this role → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "BREAK",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "BREAK",
    "HP"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "minespine",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h01"
   ],
   "chart": {
    "HP": 110,
    "ATK": 90,
    "BREAK": 105,
    "REGEN": 78,
    "P.DEF": 97,
    "M.DEF": 60,
    "total": 540,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "075",
   "name": "Cozite",
   "role": "Support",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "cozite",
   "targets": {
    "ATK": "kit-derived: Potent Erosion Earth-resistance reduction scales with ATK",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK at efficient ×4 breakpoints for Potent Erosion → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Trait-derived",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2%",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "In-game Recommended Attributes are blank; ATK is a trait-derived priority, not a 👍.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "cozite",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 77,
    "ATK": 87,
    "BREAK": 50,
    "REGEN": 100,
    "P.DEF": 67,
    "M.DEF": 67,
    "total": 448,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "076",
   "name": "Bailite",
   "role": "Support",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "core",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "bailite",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ P.DEF: hit efficient ×4 breakpoints; HP leftovers after both priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "P.DEF"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · T: P.DEF +6%",
   "gameRecommended": [
    "ATK",
    "P.DEF"
   ],
   "capMap": {},
   "conditions": "These are live in-game recommended Potentials; ATK does not raise Support normal-hit damage unless the kit reads it.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "bailite",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 90,
    "ATK": 116,
    "BREAK": 50,
    "REGEN": 75,
    "P.DEF": 100,
    "M.DEF": 83,
    "total": 514,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "077",
   "name": "Bulbly",
   "role": "Support",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "bulbly",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "Verified scaler / in-game 👍 first → efficient ×4 breakpoints → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [],
   "basis": "Current role formula",
   "confidence": "CURRENT",
   "personality": "J/P: defensive default",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "bulbly",
   "afterCore": [],
   "flags": [],
   "element": "electric",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 83,
    "ATK": 68,
    "BREAK": 37,
    "REGEN": 90,
    "P.DEF": 63,
    "M.DEF": 63,
    "total": 404,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "electric"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "electric"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "078",
   "name": "Veilfloat",
   "role": "Support",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "veilfloat",
   "targets": {
    "ATK": "kit-derived: Arc Surge Lightning boost scales with ATK toward its listed maximum",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK at efficient ×4 breakpoints for Arc Surge → HP leftovers.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Trait-derived",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2%",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "ATK priority comes from the trait scaler, not from Support normal-hit damage.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "veilfloat",
   "afterCore": [],
   "flags": [],
   "element": "electric",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 99,
    "ATK": 93,
    "BREAK": 45,
    "REGEN": 90,
    "P.DEF": 72,
    "M.DEF": 74,
    "total": 473,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "electric"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "electric"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "079",
   "name": "Luminelle",
   "role": "Support",
   "forms": [
    "Basic",
    "Rainstorm",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "luminelle",
   "targets": {
    "ATK": "CORE → 800 displayed ATK for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → 800 displayed for the named stat-scaled effect → HP at efficient ×4 breakpoints → HP leftovers.",
   "caps": "Named ATK-scaled support effect stops growing at 800 displayed ATK. This is an effect cap, not a universal ATK cap.",
   "recommended": [
    "ATK",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4%",
   "gameRecommended": [
    "ATK",
    "HP"
   ],
   "capMap": {
    "ATK": 800
   },
   "conditions": "Support normal hits still use 10.5 × level; ATK is valuable here because the named support effect reads ATK.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "luminelle",
   "afterCore": [],
   "flags": [],
   "element": "electric",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 110,
    "ATK": 115,
    "BREAK": 50,
    "REGEN": 90,
    "P.DEF": 75,
    "M.DEF": 75,
    "total": 515,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "electric"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "electric"
     ],
     "img": null
    },
    {
     "form": "Rainstorm",
     "elements": [
      "electric",
      "water"
     ],
     "img": "f:luminelle--rainstorm-form"
    },
    {
     "form": "Prismana",
     "elements": [
      "electric",
      "light"
     ],
     "img": "f:luminelle--prismana-form"
    }
   ]
  },
  {
   "num": "080",
   "name": "Fahloo",
   "role": "Regen",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "avoid",
    "REGEN": "flex",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "REGEN-role normal HP damage uses 10.5 × level. REGEN is only a major Potential priority when a skill/trait or in-game 👍 scales from it; otherwise natural recovery gains are small.",
   "released": true,
   "slug": "fahloo",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "no confirmed live scaler: natural recovery only; low priority until a kit scaler / 👍 is verified",
    "HP": "safe leftover / survival: efficient ×4 breakpoints",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "No confirmed special scaler → HP at efficient ×4 breakpoints; only add REGEN if your actual kit screen marks it 👍 or a specific build needs it.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [],
   "basis": "No confirmed stat scaler",
   "confidence": "CURRENT",
   "personality": "J/P: defensive default",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Do not infer REGEN priority from the role name alone.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "fahloo",
   "afterCore": [],
   "flags": [],
   "element": "water",
   "items": [
    "h04"
   ],
   "chart": {
    "HP": 102,
    "ATK": 76,
    "BREAK": 44,
    "REGEN": 93,
    "P.DEF": 68,
    "M.DEF": 76,
    "total": 459,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "081",
   "name": "Erlath",
   "role": "Regen",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "REGEN-role normal HP damage uses 10.5 × level. REGEN is only a major Potential priority when a skill/trait or in-game 👍 scales from it; otherwise natural recovery gains are small.",
   "released": true,
   "slug": "erlath",
   "targets": {
    "ATK": "OPTIONAL OUTPUT → Crazy Bubbles buff scales to 800 displayed ATK; only invest if maximizing that buff",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "CORE → Bubbles EP restoration reaches its listed maximum at 500 displayed REGEN",
    "HP": "in-game 👍: efficient ×4 Potential breakpoints toward 20 effective",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "REGEN → 500 displayed for Bubbles → HP to efficient ×4 breakpoints. ATK is a conditional third path if you specifically want maximum Crazy Bubbles buff strength.",
   "caps": "Bubbles: 4.0 EP + 0.6 per 100 REGEN, max 7.0, so it stops at 500 REGEN (confirmed). Crazy Bubbles: 16% + 1.5% per 100 ATK, max 28%, so it stops at 800 ATK (confirmed).",
   "recommended": [
    "REGEN",
    "HP"
   ],
   "basis": "In-game 👍 + conditional skill scaler",
   "confidence": "CURRENT",
   "personality": "I: REGEN +4% · J: HP +4%",
   "gameRecommended": [
    "REGEN",
    "HP"
   ],
   "capMap": {
    "REGEN": 500
   },
   "conditions": "ATK is not a default in-game 👍 on Erlath. Treat 800 ATK as a conditional Crazy Bubbles build, not a universal target.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "erlath",
   "afterCore": [],
   "flags": [],
   "element": "water",
   "items": [
    "h04"
   ],
   "chart": {
    "HP": 120,
    "ATK": 90,
    "BREAK": 50,
    "REGEN": 110,
    "P.DEF": 80,
    "M.DEF": 90,
    "total": 540,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "082",
   "name": "Besauce",
   "role": "Regen",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "avoid",
    "BREAK": "core",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "REGEN-role normal HP damage uses 10.5 × level. REGEN is only a major Potential priority when a skill/trait or in-game 👍 scales from it; otherwise natural recovery gains are small.",
   "released": true,
   "slug": "besauce",
   "targets": {
    "ATK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "BREAK": "in-game 👍: improves gauge utility / kit value; it still does not change Regen-role normal HP damage",
    "REGEN": "CORE → 500 displayed REGEN caps Charged Geyser / Electric Dance Frenzy scaling",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "REGEN toward 500 displayed ↔ BREAK at efficient ×4 breakpoints → HP leftovers.",
   "caps": "REGEN special-effect cap: 500 displayed. Effect cap ≠ universal stat cap.",
   "recommended": [
    "REGEN",
    "BREAK"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4%",
   "gameRecommended": [
    "REGEN",
    "BREAK"
   ],
   "capMap": {
    "REGEN": 500
   },
   "conditions": "BREAK is a live recommended Potential here even though Regen-role normal HP damage still uses 10.5 × level.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "besauce",
   "afterCore": [],
   "flags": [],
   "element": "electric",
   "items": [
    "h04"
   ],
   "chart": {
    "HP": 88,
    "ATK": 92,
    "BREAK": 90,
    "REGEN": 118,
    "P.DEF": 75,
    "M.DEF": 75,
    "total": 538,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "electric"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "electric"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "084",
   "name": "Reefish",
   "role": "Regen",
   "forms": [
    "Basic",
    "Rainstorm"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "flex",
    "REGEN": "flex",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "None confirmed: pre-release",
   "why": "The role gives a rough direction, but live recommended Potentials, traits and skill scalers are not confirmed enough for a hard allocation.",
   "released": false,
   "slug": "reefish",
   "targets": {
    "ATK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "BREAK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "REGEN": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "HP": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "P.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "M.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data"
   },
   "pointPlan": "PROVISIONAL: do not commit rare awakening materials until live data confirms scaling.",
   "caps": "No live raw-stat cap data yet.",
   "recommended": [],
   "basis": "Pre-release / provisional",
   "confidence": "PROVISIONAL",
   "personality": "Wait for live kit / recommended attributes.",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Pre-release data can change. Treat every stat recommendation as provisional.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "reefish",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h04"
   ],
   "chart": {
    "HP": 83,
    "ATK": 66,
    "BREAK": 91,
    "REGEN": 92,
    "P.DEF": 75,
    "M.DEF": 79,
    "total": 486,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth",
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth",
      "water"
     ],
     "img": null
    },
    {
     "form": "Rainstorm",
     "elements": [
      "earth"
     ],
     "img": "f:reefish--rainstorm-form"
    }
   ]
  },
  {
   "num": "085",
   "name": "Coraliz",
   "role": "Regen",
   "forms": [
    "Basic",
    "Rainstorm"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "flex",
    "REGEN": "flex",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "None confirmed: pre-release",
   "why": "The role gives a rough direction, but live recommended Potentials, traits and skill scalers are not confirmed enough for a hard allocation.",
   "released": false,
   "slug": "coraliz",
   "targets": {
    "ATK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "BREAK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "REGEN": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "HP": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "P.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "M.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data"
   },
   "pointPlan": "PROVISIONAL: do not commit rare awakening materials until live data confirms scaling.",
   "caps": "No live raw-stat cap data yet.",
   "recommended": [],
   "basis": "Pre-release / provisional",
   "confidence": "PROVISIONAL",
   "personality": "Wait for live kit / recommended attributes.",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Pre-release data can change. Treat every stat recommendation as provisional.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "coraliz",
   "afterCore": [],
   "flags": [],
   "element": "earth",
   "items": [
    "h04"
   ],
   "chart": {
    "HP": 98,
    "ATK": 78,
    "BREAK": 107,
    "REGEN": 108,
    "P.DEF": 88,
    "M.DEF": 93,
    "total": 572,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "earth",
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "earth",
      "water"
     ],
     "img": null
    },
    {
     "form": "Rainstorm",
     "elements": [
      "earth"
     ],
     "img": "f:coraliz--rainstorm-form"
    }
   ]
  },
  {
   "num": "086",
   "name": "Cheekie",
   "role": "Break",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "flex",
    "REGEN": "flex",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "None confirmed: pre-release",
   "why": "The role gives a rough direction, but live recommended Potentials, traits and skill scalers are not confirmed enough for a hard allocation.",
   "released": false,
   "slug": "cheekie",
   "targets": {
    "ATK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "BREAK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "REGEN": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "HP": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "P.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "M.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data"
   },
   "pointPlan": "PROVISIONAL: do not commit rare awakening materials until live data confirms scaling.",
   "caps": "No live raw-stat cap data yet.",
   "recommended": [],
   "basis": "Pre-release / provisional",
   "confidence": "PROVISIONAL",
   "personality": "Wait for live kit / recommended attributes.",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Pre-release data can change. Treat every stat recommendation as provisional.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "cheekie",
   "afterCore": [],
   "flags": [],
   "element": "ice",
   "items": [],
   "chart": {
    "HP": 89,
    "ATK": 64,
    "BREAK": 92,
    "REGEN": 88,
    "P.DEF": 76,
    "M.DEF": 79,
    "total": 488,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "ice"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "ice"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "087",
   "name": "Wavwal",
   "role": "Break",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "flex",
    "REGEN": "flex",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "None confirmed: pre-release",
   "why": "The role gives a rough direction, but live recommended Potentials, traits and skill scalers are not confirmed enough for a hard allocation.",
   "released": false,
   "slug": "wavwal",
   "targets": {
    "ATK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "BREAK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "REGEN": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "HP": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "P.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "M.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data"
   },
   "pointPlan": "PROVISIONAL: do not commit rare awakening materials until live data confirms scaling.",
   "caps": "No live raw-stat cap data yet.",
   "recommended": [],
   "basis": "Pre-release / provisional",
   "confidence": "PROVISIONAL",
   "personality": "Wait for live kit / recommended attributes.",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Pre-release data can change. Treat every stat recommendation as provisional.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "wavwal",
   "afterCore": [],
   "flags": [],
   "element": "ice",
   "items": [],
   "chart": {
    "HP": 105,
    "ATK": 75,
    "BREAK": 110,
    "REGEN": 103,
    "P.DEF": 89,
    "M.DEF": 93,
    "total": 575,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "ice"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "ice"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "088",
   "name": "Bubbeep",
   "role": "Heal",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "flex",
    "REGEN": "flex",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "None confirmed: pre-release",
   "why": "The role gives a rough direction, but live recommended Potentials, traits and skill scalers are not confirmed enough for a hard allocation.",
   "released": false,
   "slug": "bubbeep",
   "targets": {
    "ATK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "BREAK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "REGEN": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "HP": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "P.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "M.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data"
   },
   "pointPlan": "PROVISIONAL: do not commit rare awakening materials until live data confirms scaling.",
   "caps": "No live raw-stat cap data yet.",
   "recommended": [],
   "basis": "Pre-release / provisional",
   "confidence": "PROVISIONAL",
   "personality": "Wait for live kit / recommended attributes.",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Pre-release data can change. Treat every stat recommendation as provisional.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "bubbeep",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h04",
    "h17"
   ],
   "chart": {
    "HP": 104,
    "ATK": 85,
    "BREAK": 43,
    "REGEN": 82,
    "P.DEF": 78,
    "M.DEF": 75,
    "total": 467,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass",
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass",
      "water"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "089",
   "name": "Glameep",
   "role": "Heal",
   "forms": [
    "Basic",
    "Prismana"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "flex",
    "REGEN": "flex",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "None confirmed: pre-release",
   "why": "The role gives a rough direction, but live recommended Potentials, traits and skill scalers are not confirmed enough for a hard allocation.",
   "released": false,
   "slug": "glameep",
   "targets": {
    "ATK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "BREAK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "REGEN": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "HP": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "P.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "M.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data"
   },
   "pointPlan": "PROVISIONAL: do not commit rare awakening materials until live data confirms scaling.",
   "caps": "No live raw-stat cap data yet.",
   "recommended": [],
   "basis": "Pre-release / provisional",
   "confidence": "PROVISIONAL",
   "personality": "Wait for live kit / recommended attributes.",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Pre-release data can change. Treat every stat recommendation as provisional.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "glameep",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h04",
    "h17"
   ],
   "chart": {
    "HP": 122,
    "ATK": 100,
    "BREAK": 50,
    "REGEN": 97,
    "P.DEF": 92,
    "M.DEF": 89,
    "total": 550,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass",
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass",
      "water"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "grass",
      "dark"
     ],
     "img": "f:glameep--prismana-form"
    }
   ]
  },
  {
   "num": "090",
   "name": "Popapus",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "flex",
    "REGEN": "flex",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "None confirmed: pre-release",
   "why": "The role gives a rough direction, but live recommended Potentials, traits and skill scalers are not confirmed enough for a hard allocation.",
   "released": false,
   "slug": "popapus",
   "targets": {
    "ATK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "BREAK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "REGEN": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "HP": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "P.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "M.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data"
   },
   "pointPlan": "PROVISIONAL: do not commit rare awakening materials until live data confirms scaling.",
   "caps": "No live raw-stat cap data yet.",
   "recommended": [],
   "basis": "Pre-release / provisional",
   "confidence": "PROVISIONAL",
   "personality": "Wait for live kit / recommended attributes.",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Pre-release data can change. Treat every stat recommendation as provisional.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "popapus",
   "afterCore": [],
   "flags": [],
   "element": "water",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 90,
    "ATK": 102,
    "BREAK": 45,
    "REGEN": 90,
    "P.DEF": 58,
    "M.DEF": 65,
    "total": 450,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "091",
   "name": "Gachapus",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "flex",
    "REGEN": "flex",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "None confirmed: pre-release",
   "why": "The role gives a rough direction, but live recommended Potentials, traits and skill scalers are not confirmed enough for a hard allocation.",
   "released": false,
   "slug": "gachapus",
   "targets": {
    "ATK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "BREAK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "REGEN": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "HP": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "P.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "M.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data"
   },
   "pointPlan": "PROVISIONAL: do not commit rare awakening materials until live data confirms scaling.",
   "caps": "No live raw-stat cap data yet.",
   "recommended": [],
   "basis": "Pre-release / provisional",
   "confidence": "PROVISIONAL",
   "personality": "Wait for live kit / recommended attributes.",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Pre-release data can change. Treat every stat recommendation as provisional.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "gachapus",
   "afterCore": [],
   "flags": [],
   "element": "water",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 106,
    "ATK": 121,
    "BREAK": 51,
    "REGEN": 106,
    "P.DEF": 68,
    "M.DEF": 77,
    "total": 529,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "water"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "water"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "092",
   "name": "Malangel",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "flex",
    "REGEN": "flex",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "None confirmed: pre-release",
   "why": "The role gives a rough direction, but live recommended Potentials, traits and skill scalers are not confirmed enough for a hard allocation.",
   "released": false,
   "slug": "malangel",
   "targets": {
    "ATK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "BREAK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "REGEN": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "HP": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "P.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "M.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data"
   },
   "pointPlan": "PROVISIONAL: do not commit rare awakening materials until live data confirms scaling.",
   "caps": "No live raw-stat cap data yet.",
   "recommended": [],
   "basis": "Pre-release / provisional",
   "confidence": "PROVISIONAL",
   "personality": "Wait for live kit / recommended attributes.",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Pre-release data can change. Treat every stat recommendation as provisional.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "malangel",
   "afterCore": [],
   "flags": [],
   "element": "ice",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 100,
    "ATK": 105,
    "BREAK": 50,
    "REGEN": 100,
    "P.DEF": 80,
    "M.DEF": 80,
    "total": 515,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "ice"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "ice"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "093",
   "name": "Malevsera",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "flex",
    "BREAK": "flex",
    "REGEN": "flex",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "None confirmed: pre-release",
   "why": "The role gives a rough direction, but live recommended Potentials, traits and skill scalers are not confirmed enough for a hard allocation.",
   "released": false,
   "slug": "malevsera",
   "targets": {
    "ATK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "BREAK": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "REGEN": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "HP": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "P.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data",
    "M.DEF": "PRE-RELEASE: wait for live 👍 / skill-scaling data"
   },
   "pointPlan": "PROVISIONAL: do not commit rare awakening materials until live data confirms scaling.",
   "caps": "No live raw-stat cap data yet.",
   "recommended": [],
   "basis": "Pre-release / provisional",
   "confidence": "PROVISIONAL",
   "personality": "Wait for live kit / recommended attributes.",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "Pre-release data can change. Treat every stat recommendation as provisional.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "malevsera",
   "afterCore": [],
   "flags": [],
   "element": "ice",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 88,
    "ATK": 125,
    "BREAK": 52,
    "REGEN": 110,
    "P.DEF": 70,
    "M.DEF": 80,
    "total": 525,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "ice"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "ice"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "10001",
   "name": "Irisalis",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "irisalis",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "irisalis",
   "afterCore": [],
   "flags": [],
   "element": "grass",
   "items": [
    "h02",
    "h25"
   ],
   "chart": {
    "HP": 90,
    "ATK": 130,
    "BREAK": 56,
    "REGEN": 108,
    "P.DEF": 78,
    "M.DEF": 78,
    "total": 540,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "grass"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "grass"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "10002",
   "name": "Dazmand",
   "role": "Support",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "dazmand",
   "targets": {
    "ATK": "CORE → 800 displayed ATK for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → 800 displayed for the named stat-scaled effect → HP at efficient ×4 breakpoints → HP leftovers.",
   "caps": "Named ATK-scaled support effect stops growing at 800 displayed ATK. This is an effect cap, not a universal ATK cap.",
   "recommended": [
    "ATK",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4%",
   "gameRecommended": [
    "ATK",
    "HP"
   ],
   "capMap": {
    "ATK": 800
   },
   "conditions": "Support normal hits still use 10.5 × level; ATK is valuable here because the named support effect reads ATK.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "dazmand",
   "afterCore": [],
   "flags": [],
   "element": "electric",
   "items": [
    "h04",
    "h16"
   ],
   "chart": {
    "HP": 100,
    "ATK": 108,
    "BREAK": 55,
    "REGEN": 88,
    "P.DEF": 81,
    "M.DEF": 90,
    "total": 522,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "electric"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "electric"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "10003",
   "name": "Fulmintis",
   "role": "DPS",
   "forms": [
    "Basic",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "fulmintis",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "fulmintis",
   "afterCore": [],
   "flags": [],
   "element": "electric",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 99,
    "ATK": 130,
    "BREAK": 50,
    "REGEN": 105,
    "P.DEF": 66,
    "M.DEF": 70,
    "total": 520,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "electric"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "electric"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "electric",
      "light"
     ],
     "img": "f:fulmintis--prismana-form"
    }
   ]
  },
  {
   "num": "11001",
   "name": "Sparkelf",
   "role": "Support",
   "forms": [
    "Basic",
    "Prismana"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "core",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "Support normal HP damage uses 10.5 × level, so ATK and BREAK Potential do not raise its normal hit damage. Only invest in a stat when its skill/trait or the in-game 👍 actually scales from it.",
   "released": true,
   "slug": "sparkelf",
   "targets": {
    "ATK": "CORE → 800 displayed ATK for the named skill effect; use efficient ×4 Potential steps, then redirect",
    "BREAK": "does not raise normal HP damage; use only for a verified kit scaler / 👍",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → 800 displayed for the named stat-scaled effect → HP at efficient ×4 breakpoints → HP leftovers.",
   "caps": "Named ATK-scaled support effect stops growing at 800 displayed ATK. This is an effect cap, not a universal ATK cap.",
   "recommended": [
    "ATK",
    "HP"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · J: HP +4%",
   "gameRecommended": [
    "ATK",
    "HP"
   ],
   "capMap": {
    "ATK": 800
   },
   "conditions": "Support normal hits still use 10.5 × level; ATK is valuable here because the named support effect reads ATK.",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "sparkelf",
   "afterCore": [],
   "flags": [],
   "element": "fire",
   "items": [],
   "chart": {
    "HP": 107,
    "ATK": 113,
    "BREAK": 50,
    "REGEN": 99,
    "P.DEF": 60,
    "M.DEF": 88,
    "total": 517,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "fire"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "fire"
     ],
     "img": null
    },
    {
     "form": "Prismana",
     "elements": [
      "fire"
     ],
     "img": "f:sparkelf--v6999301"
    }
   ]
  },
  {
   "num": "99995",
   "name": "Fennelun",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "fennelun",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": null,
   "afterCore": [],
   "flags": [
    "Not listed in the AniimoTools Aniilog"
   ],
   "element": null,
   "items": [],
   "chart": null,
   "formInfo": [
    {
     "form": "Basic",
     "elements": [],
     "img": null
    }
   ]
  },
  {
   "num": "99996",
   "name": "Lunara",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "lunara",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "lunara",
   "afterCore": [],
   "flags": [],
   "element": "light",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 100,
    "ATK": 116,
    "BREAK": 64,
    "REGEN": 90,
    "P.DEF": 72,
    "M.DEF": 72,
    "total": 514,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "light"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "light"
     ],
     "img": null
    }
   ]
  },
  {
   "num": "99997",
   "name": "Soleon",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "avoid",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "soleon",
   "targets": {
    "ATK": "hit efficient ×4 Potential breakpoints toward the build target",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "low priority unless a skill/trait or in-game 👍 scales from REGEN",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK → efficient ×4 breakpoints toward 20 effective → HP leftovers; BREAK only for deliberate gauge utility after damage priorities.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK"
   ],
   "basis": "Current damage formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": null,
   "afterCore": [],
   "flags": [
    "Not listed in the AniimoTools Aniilog"
   ],
   "element": null,
   "items": [],
   "chart": null,
   "formInfo": [
    {
     "form": "Basic",
     "elements": [],
     "img": null
    }
   ]
  },
  {
   "num": "99998",
   "name": "Helion",
   "role": "DPS",
   "forms": [
    "Basic"
   ],
   "stats": {
    "ATK": "core",
    "BREAK": "avoid",
    "REGEN": "core",
    "HP": "flex",
    "P.DEF": "flex",
    "M.DEF": "flex"
   },
   "never": "No universal dead stat",
   "why": "DPS HP damage uses ATK in the current roster. BREAK does not raise DPS HP damage, but it still drains the BREAK gauge faster.",
   "released": true,
   "slug": "helion",
   "targets": {
    "ATK": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "BREAK": "BREAK-gauge only; low priority after ATK",
    "REGEN": "in-game 👍: hit efficient ×4 Potential breakpoints toward 20 effective unless a raw effect cap stops first",
    "HP": "next ×4 only if the build needs it",
    "P.DEF": "next ×4 only if the build needs it",
    "M.DEF": "next ×4 only if the build needs it"
   },
   "pointPlan": "ATK ↔ REGEN: land on the next efficient ×4 breakpoints, then work toward 20 effective; HP takes leftover points unless the kit note below says otherwise.",
   "caps": "No special raw-stat effect cap confirmed; use effective Potential breakpoints.",
   "recommended": [
    "ATK",
    "REGEN"
   ],
   "basis": "In-game 👍 + current formula",
   "confidence": "CURRENT",
   "personality": "E: ATK/BREAK +2% · I: REGEN +4% · S/N: Damage Amp / Crit alternatives",
   "gameRecommended": [
    "ATK",
    "REGEN"
   ],
   "capMap": {},
   "conditions": "",
   "formOverrides": {},
   "lastVerified": "2026-10-08",
   "toolsSlug": "helion",
   "afterCore": [],
   "flags": [],
   "element": "light",
   "items": [
    "h02"
   ],
   "chart": {
    "HP": 100,
    "ATK": 116,
    "BREAK": 64,
    "REGEN": 90,
    "P.DEF": 72,
    "M.DEF": 72,
    "total": 514,
    "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026"
   },
   "innate": [
    "light"
   ],
   "formInfo": [
    {
     "form": "Basic",
     "elements": [
      "light"
     ],
     "img": null
    }
   ]
  }
 ],
 "items": [
  {
   "id": "h01",
   "name": "Gargantuan Horn",
   "stat": "BREAK",
   "core": "+0.7 BREAK per level",
   "t10": "BREAK Potential +2",
   "t15": "BREAK +10%; doubled if BREAK Potential is above 15",
   "pot": "BREAK",
   "for": [
    "Blazen",
    "Bolty",
    "Budclaw",
    "Geoclaw",
    "Geodeback",
    "Helgon",
    "Helmut",
    "Helmwhelp",
    "Hummin",
    "Inferlupa",
    "Jawling",
    "Lavazar",
    "Magmarex",
    "Minespine",
    "Morphling",
    "Panpanta",
    "Pebbling",
    "Pomawk",
    "Pomegg",
    "Popota",
    "Rookey",
    "Shrubclaw",
    "Squarrel",
    "Squashel",
    "Susuta",
    "Tubster",
    "Tuckin"
   ],
   "rules": {
    "core": [
     {
      "type": "flat",
      "stat": "BREAK",
      "perLevel": 0.7
     }
    ],
    "t10": [
     {
      "type": "pot",
      "stat": "BREAK"
     }
    ],
    "t15": [
     {
      "type": "statPct",
      "stat": "BREAK",
      "v": 0.1,
      "double15": "BREAK"
     }
    ]
   }
  },
  {
   "id": "h02",
   "name": "Ferocious Fang",
   "stat": "Damage Amp",
   "core": "+0.7 ATK per level",
   "t10": "ATK Potential +2",
   "t15": "Damage Amp +10%; doubled if ATK Potential is above 15",
   "pot": "ATK",
   "for": [
    "Baleetle",
    "Bonesky",
    "Budsquire",
    "Celestis",
    "Cornet",
    "Cubbo",
    "Emberpup",
    "Fenmane",
    "Fenrier",
    "Fentuft",
    "Flameruff",
    "Fulmintis",
    "Gachapus",
    "Glynsera",
    "Grizbo",
    "Helion",
    "Ignitis",
    "Infergon",
    "Iris",
    "Irisal",
    "Irisalis",
    "Jabster",
    "Lunara",
    "Malangel",
    "Malevsera",
    "Pawney",
    "Popapus",
    "Scorchhowl",
    "Sheldon",
    "Shelly",
    "Sherro",
    "Stellarys",
    "Thornblade",
    "Waleetle",
    "Wisptis"
   ],
   "rules": {
    "core": [
     {
      "type": "flat",
      "stat": "ATK",
      "perLevel": 0.7
     }
    ],
    "t10": [
     {
      "type": "pot",
      "stat": "ATK"
     }
    ],
    "t15": [
     {
      "type": "amp",
      "v": 0.1,
      "double15": "ATK"
     }
    ]
   }
  },
  {
   "id": "h03",
   "name": "Giant Tortoise Shell",
   "stat": "HP",
   "core": "+0.7 P.DEF and M.DEF per level",
   "t10": "P.DEF and M.DEF Potential +2 each",
   "t15": "Damage reduction +10%; +5% physical if P.DEF Potential is above 15, +5% magic if M.DEF is above 15",
   "pot": "DEF2",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "flat",
      "stat": "DEF2",
      "perLevel": 0.7
     }
    ],
    "t10": [
     {
      "type": "pot",
      "stat": "DEF2"
     }
    ],
    "t15": [
     {
      "type": "dr",
      "v": 0.1,
      "kind": "all"
     },
     {
      "type": "dr",
      "v": 0.05,
      "kind": "phys",
      "if15": "P.DEF"
     },
     {
      "type": "dr",
      "v": 0.05,
      "kind": "mag",
      "if15": "M.DEF"
     }
    ]
   }
  },
  {
   "id": "h04",
   "name": "Spirited Feather",
   "stat": "REGEN",
   "core": "+0.7 REGEN per level",
   "t10": "REGEN Potential +2",
   "t15": "Cooldown reduction +10%; doubled if REGEN Potential is above 15",
   "pot": "REGEN",
   "for": [
    "Bailite",
    "Besauce",
    "Bouldus",
    "Bubbeep",
    "Bulbly",
    "Chirpi",
    "Coraliz",
    "Cozite",
    "Dazmand",
    "Dewy",
    "Dreaple",
    "Eklue",
    "Eko",
    "Erlath",
    "Fahloo",
    "Flamerion",
    "Flutternym",
    "Fragrancier",
    "Glacy",
    "Glameep",
    "Gracewing",
    "Leafy",
    "Luminelle",
    "Melloblum",
    "Nimbi",
    "Piopiota",
    "Pranky",
    "Reefish",
    "Skippy",
    "Somniwing",
    "Sparki",
    "Tromber",
    "Turbo",
    "Veilfloat",
    "Hexxin"
   ],
   "rules": {
    "core": [
     {
      "type": "flat",
      "stat": "REGEN",
      "perLevel": 0.7
     }
    ],
    "t10": [
     {
      "type": "pot",
      "stat": "REGEN"
     }
    ],
    "t15": [
     {
      "type": "cdr",
      "v": 0.1,
      "double15": "REGEN"
     }
    ]
   }
  },
  {
   "id": "h05",
   "name": "Heartseeker Pendant",
   "stat": "Damage Amp",
   "core": "50% chance of an extra 10 Might hit after a crit",
   "t10": "Extra hit chance becomes 100%",
   "t15": "+10% crit rate after each non-crit until you crit; crits stack up to 6 × +5% crit damage",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "extraHitOnCrit",
      "chance": 0.5,
      "might": 10,
      "key": "hs"
     }
    ],
    "t10": [
     {
      "type": "extraHitOnCrit",
      "chance": 1,
      "might": 10,
      "replaces": "hs"
     }
    ],
    "t15": [
     {
      "type": "critPity",
      "v": 0.1
     },
     {
      "type": "critDmg",
      "v": 0.3,
      "share": "stackUptime"
     }
    ]
   }
  },
  {
   "id": "h06",
   "name": "Vanguard's Whistle",
   "stat": "Final Damage Amp",
   "core": "+25% final damage vs targets above 70% HP",
   "t10": "Threshold lowered to 60% HP",
   "t15": "+30% vs targets above 90% HP, and those hits always crit",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "finalAbove",
      "v": 0.25,
      "hp": 70,
      "key": "vg"
     }
    ],
    "t10": [
     {
      "type": "finalAbove",
      "v": 0.25,
      "hp": 60,
      "replaces": "vg"
     }
    ],
    "t15": [
     {
      "type": "critAbove",
      "v": 0.3,
      "hp": 90
     }
    ]
   }
  },
  {
   "id": "h07",
   "name": "Finisher Bell",
   "stat": "Final Damage Amp",
   "core": "+30% final damage vs targets below 30% HP",
   "t10": "+5% more per 5% HP the target has lost, up to +20%",
   "t15": "Defeats targets below 10% HP outright (not Omega)",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "finalBelow",
      "v": 0.3,
      "hp": 30
     }
    ],
    "t10": [
     {
      "type": "finalRamp",
      "per": 5,
      "step": 0.05,
      "max": 0.2
     }
    ],
    "t15": [
     {
      "type": "execute",
      "hp": 10
     }
    ]
   }
  },
  {
   "id": "h08",
   "name": "Supreme Elixir",
   "stat": "Final Damage Amp",
   "core": "+50% final damage, but max HP drops to 1 (not on Support)",
   "t10": "+1% final damage per 500 HP lost, up to 15%",
   "t15": "+1% final damage per 25 P.DEF or M.DEF, up to 15%",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "hpOne",
      "v": 0.5
     }
    ],
    "t10": [
     {
      "type": "utility",
      "text": "+1% final damage per 500 HP lost, up to 15%. Not scored: unclear how it works when max HP is 1."
     }
    ],
    "t15": [
     {
      "type": "finalPerDef",
      "per": 25,
      "max": 0.15
     }
    ]
   },
   "notOn": [
    "Support"
   ]
  },
  {
   "id": "h09",
   "name": "Destiny's Dice",
   "stat": "Damage Amp",
   "core": "Each hit rolls 70% to 150% damage",
   "t10": "After a roll under 100%, the next is over 100%",
   "t15": "Every 6th hit rolls 150%",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "dice",
      "mean": 1.1
     }
    ],
    "t10": [
     {
      "type": "dice",
      "mean": 1.1409
     }
    ],
    "t15": [
     {
      "type": "dice",
      "mean": 1.2008
     }
    ]
   }
  },
  {
   "id": "h10",
   "name": "Ambusher's Cloak",
   "stat": "Damage Amp",
   "core": "+25% Damage Amp in stealth or from behind",
   "t10": "Back attacks +15% crit rate",
   "t15": "+30% crit damage for 5s after a back attack",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "ampWhen",
      "v": 0.25,
      "share": "behind"
     }
    ],
    "t10": [
     {
      "type": "critRate",
      "v": 0.15,
      "share": "behind"
     }
    ],
    "t15": [
     {
      "type": "critDmg",
      "v": 0.3,
      "share": "behind"
     }
    ]
   }
  },
  {
   "id": "h11",
   "name": "Capacitous Battery",
   "stat": "Ultimate damage",
   "core": "+30% Ultimate damage",
   "t10": "Refunds 10% Ultimate points after an Ultimate",
   "t15": "+30% Ultimate point gain for 10s after an Ultimate",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "ultAmp",
      "v": 0.3
     }
    ],
    "t10": [
     {
      "type": "ultRefund",
      "v": 0.1
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "+30% Ultimate point gain for 10s after an Ultimate. Not scored: needs Ultimate timing."
     }
    ]
   }
  },
  {
   "id": "h12",
   "name": "Explosive Gloves",
   "stat": "Damage Amp",
   "core": "+5% Damage Amp per 10 EP you have",
   "t10": "Raised to +7.5% per 10 EP",
   "t15": "10% chance a skill costs no EP",
   "pot": "",
   "for": [
    "Emberpup",
    "Flameruff",
    "Scorchhowl"
   ],
   "rules": {
    "core": [
     {
      "type": "ampPerEP",
      "v": 0.05,
      "key": "gl"
     }
    ],
    "t10": [
     {
      "type": "ampPerEP",
      "v": 0.075,
      "replaces": "gl"
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "10% chance a skill costs no EP. Not scored: EP flow is not modeled."
     }
    ]
   }
  },
  {
   "id": "h13",
   "name": "Avenging Gear",
   "stat": "BREAK",
   "core": "Taking damage gives a Counter Mark; next BREAK damage +30%",
   "t10": "BREAK Potential +2",
   "t15": "50% chance of 10 EP when a Counter Mark hits",
   "pot": "BREAK",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "gaugeMark",
      "v": 0.3
     }
    ],
    "t10": [
     {
      "type": "pot",
      "stat": "BREAK"
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "50% chance of 10 EP when a Counter Mark hits. Not scored: EP flow is not modeled."
     }
    ]
   }
  },
  {
   "id": "h14",
   "name": "Echoing Grimoire",
   "stat": "Damage Amp",
   "core": "+5% damage per repeat of the same skill, up to 5 stacks",
   "t10": "Extra +15% Damage Amp after 3 repeats",
   "t15": "+30% crit rate at max stacks",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "repeat",
      "per": 0.05,
      "max": 5
     }
    ],
    "t10": [
     {
      "type": "repeatBonus",
      "v": 0.15
     }
    ],
    "t15": [
     {
      "type": "repeatCrit",
      "v": 0.3
     }
    ]
   }
  },
  {
   "id": "h15",
   "name": "Fission Needles",
   "stat": "Damage Amp",
   "core": "Basic attacks have a 50% chance to deal double damage",
   "t10": "Restores 1 EP when it triggers",
   "t15": "With full EP, basic attack Damage Amp +30% for 10s",
   "pot": "",
   "for": [
    "Fenmane",
    "Fentuft"
   ],
   "rules": {
    "core": [
     {
      "type": "basicDouble",
      "chance": 0.5
     }
    ],
    "t10": [
     {
      "type": "utility",
      "text": "Restores 1 EP when it triggers. Not scored."
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "With full EP, basic attack Damage Amp +30% for 10s. Not scored: needs EP timing."
     }
    ]
   }
  },
  {
   "id": "h16",
   "name": "Auspicious Bell",
   "stat": "REGEN",
   "core": "20% chance to gain 5 EP per skill",
   "t10": "After 5 misses, the next skill always triggers",
   "t15": "Triggers give 5 more EP and a team Luck stack (+2% crit rate, up to 5)",
   "pot": "",
   "for": [
    "Bailite",
    "Bouldus",
    "Bulbly",
    "Chirpi",
    "Cozite",
    "Dazmand",
    "Dewy",
    "Dreaple",
    "Eklue",
    "Eko",
    "Fragrancier",
    "Luminelle",
    "Melloblum",
    "Nimbi",
    "Piopiota",
    "Somniwing",
    "Tromber",
    "Turbo",
    "Veilfloat"
   ],
   "rules": {
    "core": [
     {
      "type": "utility",
      "text": "20% chance to gain 5 EP per skill. Not scored: EP flow is not modeled."
     }
    ],
    "t10": [
     {
      "type": "utility",
      "text": "After 5 misses the next skill always triggers. Not scored."
     }
    ],
    "t15": [
     {
      "type": "teamCrit",
      "v": 0.02,
      "stacks": 5
     },
     {
      "type": "utility",
      "text": "Triggers give 5 more EP. Not scored."
     }
    ]
   }
  },
  {
   "id": "h17",
   "name": "Miraculous Fleece",
   "stat": "Healing",
   "core": "Sends 10% of overhealing to the lowest-HP ally",
   "t10": "Healing +5%",
   "t15": "Sends 20% of overhealing",
   "pot": "",
   "for": [
    "Bubbeep",
    "Flutternym",
    "Glacy",
    "Glameep",
    "Gracewing",
    "Pranky",
    "Skippy"
   ],
   "rules": {
    "core": [
     {
      "type": "utility",
      "text": "Sends 10% of overhealing to the lowest-HP ally. Not scored: healing is not modeled."
     }
    ],
    "t10": [
     {
      "type": "utility",
      "text": "Healing +5%. Not scored: healing is not modeled."
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "Sends 20% of overhealing. Not scored."
     }
    ]
   }
  },
  {
   "id": "h18",
   "name": "Marching Flask",
   "stat": "HP",
   "core": "Restores 1.4% HP per 10 m moved",
   "t10": "REGEN Potential +2",
   "t15": "20% chance of 10 EP when healed; doubled if REGEN Potential is above 15",
   "pot": "REGEN",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "utility",
      "text": "Restores 1.4% HP per 10 m moved. Not scored."
     }
    ],
    "t10": [
     {
      "type": "pot",
      "stat": "REGEN"
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "20% chance of 10 EP when healed, doubled if REGEN Potential is above 15. Not scored."
     }
    ]
   }
  },
  {
   "id": "h19",
   "name": "Nature's Breath",
   "stat": "HP",
   "core": "After 3s standing still, roots in place with 25% damage reduction",
   "t10": "HP Potential +2",
   "t15": "Heals 2.5% HP per skill while rooted; doubled above 5,000 HP",
   "pot": "HP",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "drWhen",
      "v": 0.25,
      "share": "stillShare"
     }
    ],
    "t10": [
     {
      "type": "pot",
      "stat": "HP"
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "Heals 2.5% HP per skill while rooted, doubled above 5,000 HP. Not scored: healing is not modeled."
     }
    ]
   }
  },
  {
   "id": "h20",
   "name": "Lightning Needle",
   "stat": "HP",
   "core": "Deals 2% of max HP as Lightning damage to enemies within 3 m",
   "t10": "HP Potential +2",
   "t15": "After a skill, 10% damage reduction for 5s and taunts within 10 m",
   "pot": "HP",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "utility",
      "text": "Deals 2% of max HP as Lightning damage within 3 m. Not scored."
     }
    ],
    "t10": [
     {
      "type": "pot",
      "stat": "HP"
     }
    ],
    "t15": [
     {
      "type": "drWhen",
      "v": 0.1,
      "share": "afterSkillUptime"
     },
     {
      "type": "utility",
      "text": "Taunts enemies within 10 m. Not scored."
     }
    ]
   }
  },
  {
   "id": "h21",
   "name": "Heritage Amulet",
   "stat": "HP",
   "core": "Shield of 4% max HP for 5s after taking 10 hits",
   "t10": "Shield raised to 6%",
   "t15": "An unbroken shield turns into team healing",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "utility",
      "text": "Shield of 4% max HP for 5s after taking 10 hits. Not scored."
     }
    ],
    "t10": [
     {
      "type": "utility",
      "text": "Shield raised to 6%. Not scored."
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "An unbroken shield turns into team healing. Not scored."
     }
    ]
   }
  },
  {
   "id": "h22",
   "name": "Rekindling Feather",
   "stat": "HP",
   "core": "Revives once on faint with 10% HP (180s cooldown)",
   "t10": "Revives with 20% HP",
   "t15": "Revival also restores full EP and 100 Ultimate points",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "utility",
      "text": "Revives once with 10% HP (180s cooldown). Not scored: a revive is not a number."
     }
    ],
    "t10": [
     {
      "type": "utility",
      "text": "Revives with 20% HP. Not scored."
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "Revival restores full EP and 100 Ultimate points. Not scored."
     }
    ]
   }
  },
  {
   "id": "h23",
   "name": "Pearl of the Sea",
   "stat": "REGEN",
   "core": "In water: +25% move speed and +15% REGEN",
   "t10": "+15% Water damage in a water field",
   "t15": "Attacks in water cut target Water resistance by 20% for 3s",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "utility",
      "text": "In water: +25% move speed and +15% REGEN. Not scored: depends on the map."
     }
    ],
    "t10": [
     {
      "type": "utility",
      "text": "+15% Water damage in a water field. Not scored."
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "Attacks in water cut Water resistance by 20% for 3s. Not scored."
     }
    ]
   }
  },
  {
   "id": "h24",
   "name": "Seeds of Spring",
   "stat": "HP",
   "core": "Restores 0.5% HP per second on Turf",
   "t10": "Healing doubled",
   "t15": "At full HP, overhealing becomes a shield up to 20% max HP",
   "pot": "",
   "for": [],
   "rules": {
    "core": [
     {
      "type": "utility",
      "text": "Restores 0.5% HP per second on Turf. Not scored."
     }
    ],
    "t10": [
     {
      "type": "utility",
      "text": "Healing doubled. Not scored."
     }
    ],
    "t15": [
     {
      "type": "utility",
      "text": "At full HP, overhealing becomes a shield up to 20% max HP. Not scored."
     }
    ]
   }
  },
  {
   "id": "h25",
   "name": "Floral Rainbow Feather",
   "stat": "Damage Amp",
   "core": "Summoned clones deal 30% more damage",
   "t10": "+5 Energy and +5 Ultimate points per clone",
   "t15": "+8% Damage Amp and +8% crit rate per clone, up to 3 stacks",
   "pot": "",
   "for": [
    "Irisalis"
   ],
   "rules": {
    "core": [
     {
      "type": "cloneAmp",
      "v": 0.3
     }
    ],
    "t10": [
     {
      "type": "utility",
      "text": "+5 Energy and +5 Ultimate points per clone. Not scored."
     }
    ],
    "t15": [
     {
      "type": "clonePerStack",
      "amp": 0.08,
      "crit": 0.08,
      "max": 3
     }
    ]
   },
   "onlyFor": [
    "Irisalis"
   ]
  }
 ],
 "assets": [
  {
   "key": "p:emberpup",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-emberpup-full-body.webp",
    "https://aniimotools.dev/assets/creatures/emberpup.webp",
    "https://aniimotools.dev/assets/creatures/thumb/emberpup.webp"
   ]
  },
  {
   "key": "p:flameruff",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-flameruff-full-body.webp",
    "https://aniimotools.dev/assets/creatures/flameruff.webp",
    "https://aniimotools.dev/assets/creatures/thumb/flameruff.webp"
   ]
  },
  {
   "key": "p:scorchhowl",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-scorchhowl-full-body.webp",
    "https://aniimotools.dev/assets/creatures/scorchhowl.webp",
    "https://aniimotools.dev/assets/creatures/thumb/scorchhowl.webp"
   ]
  },
  {
   "key": "p:inferlupa",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-inferlupa-full-body.webp",
    "https://aniimotools.dev/assets/creatures/inferlupa.webp",
    "https://aniimotools.dev/assets/creatures/thumb/inferlupa.webp"
   ]
  },
  {
   "key": "p:celestis",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-celestis-full-body.webp",
    "https://aniimotools.dev/assets/creatures/celestis.webp",
    "https://aniimotools.dev/assets/creatures/thumb/celestis.webp"
   ]
  },
  {
   "key": "p:stellarys",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-stellarys-full-body.webp",
    "https://aniimotools.dev/assets/creatures/stellarys.webp",
    "https://aniimotools.dev/assets/creatures/thumb/stellarys.webp"
   ]
  },
  {
   "key": "p:chirpi",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-chirpi-full-body.webp",
    "https://aniimotools.dev/assets/creatures/chirpi.webp",
    "https://aniimotools.dev/assets/creatures/thumb/chirpi.webp"
   ]
  },
  {
   "key": "p:tromber",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-tromber-full-body.webp",
    "https://aniimotools.dev/assets/creatures/tromber.webp",
    "https://aniimotools.dev/assets/creatures/thumb/tromber.webp"
   ]
  },
  {
   "key": "p:cornet",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-cornet-full-body.webp",
    "https://aniimotools.dev/assets/creatures/cornet.webp",
    "https://aniimotools.dev/assets/creatures/thumb/cornet.webp"
   ]
  },
  {
   "key": "p:tubster",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-tubster-full-body.webp",
    "https://aniimotools.dev/assets/creatures/tubster.webp",
    "https://aniimotools.dev/assets/creatures/thumb/tubster.webp"
   ]
  },
  {
   "key": "p:iris",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-iris-full-body.webp",
    "https://aniimotools.dev/assets/creatures/iris.webp",
    "https://aniimotools.dev/assets/creatures/thumb/iris.webp"
   ]
  },
  {
   "key": "p:irisal",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-irisal-full-body.webp",
    "https://aniimotools.dev/assets/creatures/irisal.webp",
    "https://aniimotools.dev/assets/creatures/thumb/irisal.webp"
   ]
  },
  {
   "key": "p:skippy",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-skippy-full-body.webp",
    "https://aniimotools.dev/assets/creatures/skippy.webp",
    "https://aniimotools.dev/assets/creatures/thumb/skippy.webp"
   ]
  },
  {
   "key": "p:pranky",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-pranky-full-body.webp",
    "https://aniimotools.dev/assets/creatures/pranky.webp",
    "https://aniimotools.dev/assets/creatures/thumb/pranky.webp"
   ]
  },
  {
   "key": "p:glacy",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-glacy-full-body.webp",
    "https://aniimotools.dev/assets/creatures/glacy.webp",
    "https://aniimotools.dev/assets/creatures/thumb/glacy.webp"
   ]
  },
  {
   "key": "p:leafy",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-leafy-full-body.webp",
    "https://aniimotools.dev/assets/creatures/leafy.webp",
    "https://aniimotools.dev/assets/creatures/thumb/leafy.webp"
   ]
  },
  {
   "key": "p:nimbi",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-nimbi-full-body.webp",
    "https://aniimotools.dev/assets/creatures/nimbi.webp",
    "https://aniimotools.dev/assets/creatures/thumb/nimbi.webp"
   ]
  },
  {
   "key": "p:turbo",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-turbo-full-body.webp",
    "https://aniimotools.dev/assets/creatures/turbo.webp",
    "https://aniimotools.dev/assets/creatures/thumb/turbo.webp"
   ]
  },
  {
   "key": "p:dreaple",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-dreaple-full-body.webp",
    "https://aniimotools.dev/assets/creatures/dreaple.webp",
    "https://aniimotools.dev/assets/creatures/thumb/dreaple.webp"
   ]
  },
  {
   "key": "p:hummin",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-hummin-full-body.webp",
    "https://aniimotools.dev/assets/creatures/hummin.webp",
    "https://aniimotools.dev/assets/creatures/thumb/hummin.webp"
   ]
  },
  {
   "key": "p:hexxin",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-hexxin-full-body.webp",
    "https://aniimotools.dev/assets/creatures/witchin.webp",
    "https://aniimotools.dev/assets/creatures/thumb/witchin.webp"
   ]
  },
  {
   "key": "p:tuckin",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-tuckin-full-body.webp",
    "https://aniimotools.dev/assets/creatures/tuckin.webp",
    "https://aniimotools.dev/assets/creatures/thumb/tuckin.webp"
   ]
  },
  {
   "key": "p:budclaw",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-budclaw-full-body.webp",
    "https://aniimotools.dev/assets/creatures/budclaw.webp",
    "https://aniimotools.dev/assets/creatures/thumb/budclaw.webp"
   ]
  },
  {
   "key": "p:shrubclaw",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-shrubclaw-full-body.webp",
    "https://aniimotools.dev/assets/creatures/shrubclaw.webp",
    "https://aniimotools.dev/assets/creatures/thumb/shrubclaw.webp"
   ]
  },
  {
   "key": "p:geoclaw",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-geoclaw-full-body.webp",
    "https://aniimotools.dev/assets/creatures/geoclaw.webp",
    "https://aniimotools.dev/assets/creatures/thumb/geoclaw.webp"
   ]
  },
  {
   "key": "p:sparki",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-sparki-full-body.webp",
    "https://aniimotools.dev/assets/creatures/sparki.webp",
    "https://aniimotools.dev/assets/creatures/thumb/sparki.webp"
   ]
  },
  {
   "key": "p:flamerion",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-flamerion-full-body.webp",
    "https://aniimotools.dev/assets/creatures/flamerion.webp",
    "https://aniimotools.dev/assets/creatures/thumb/flamerion.webp"
   ]
  },
  {
   "key": "p:flutternym",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-flutternym-full-body.webp",
    "https://aniimotools.dev/assets/creatures/flutternym.webp",
    "https://aniimotools.dev/assets/creatures/thumb/flutternym.webp"
   ]
  },
  {
   "key": "p:gracewing",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-gracewing-full-body.webp",
    "https://aniimotools.dev/assets/creatures/gracewing.webp",
    "https://aniimotools.dev/assets/creatures/thumb/gracewing.webp"
   ]
  },
  {
   "key": "p:somniwing",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-somniwing-full-body.webp",
    "https://aniimotools.dev/assets/creatures/somniwing.webp",
    "https://aniimotools.dev/assets/creatures/thumb/somniwing.webp"
   ]
  },
  {
   "key": "p:eko",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-eko-full-body.webp",
    "https://aniimotools.dev/assets/creatures/eko.webp",
    "https://aniimotools.dev/assets/creatures/thumb/eko.webp"
   ]
  },
  {
   "key": "p:eklue",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-eklue-full-body.webp",
    "https://aniimotools.dev/assets/creatures/eklue.webp",
    "https://aniimotools.dev/assets/creatures/thumb/eklue.webp"
   ]
  },
  {
   "key": "p:budsquire",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-budsquire-full-body.webp",
    "https://aniimotools.dev/assets/creatures/budsquire.webp",
    "https://aniimotools.dev/assets/creatures/thumb/budsquire.webp"
   ]
  },
  {
   "key": "p:thornblade",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-thornblade-full-body.webp",
    "https://aniimotools.dev/assets/creatures/thornblade.webp",
    "https://aniimotools.dev/assets/creatures/thumb/thornblade.webp"
   ]
  },
  {
   "key": "p:melloblum",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-melloblum-full-body.webp",
    "https://aniimotools.dev/assets/creatures/melloblum.webp",
    "https://aniimotools.dev/assets/creatures/thumb/melloblum.webp"
   ]
  },
  {
   "key": "p:pomegg",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-pomegg-full-body.webp",
    "https://aniimotools.dev/assets/creatures/pomegg.webp",
    "https://aniimotools.dev/assets/creatures/thumb/pomegg.webp"
   ]
  },
  {
   "key": "p:pomawk",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-pomawk-full-body.webp",
    "https://aniimotools.dev/assets/creatures/pomawk.webp",
    "https://aniimotools.dev/assets/creatures/thumb/pomawk.webp"
   ]
  },
  {
   "key": "p:dewy",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-dewy-full-body.webp",
    "https://aniimotools.dev/assets/creatures/dewy.webp",
    "https://aniimotools.dev/assets/creatures/thumb/dewy.webp"
   ]
  },
  {
   "key": "p:fragrancier",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-fragrancier-full-body.webp",
    "https://aniimotools.dev/assets/creatures/fragrancier.webp",
    "https://aniimotools.dev/assets/creatures/thumb/fragrancier.webp"
   ]
  },
  {
   "key": "p:wisptis",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-wisptis-full-body.webp",
    "https://aniimotools.dev/assets/creatures/wisptis.webp",
    "https://aniimotools.dev/assets/creatures/thumb/wisptis.webp"
   ]
  },
  {
   "key": "p:ignitis",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-ignitis-full-body.webp",
    "https://aniimotools.dev/assets/creatures/ignitis.webp",
    "https://aniimotools.dev/assets/creatures/thumb/ignitis.webp"
   ]
  },
  {
   "key": "p:bonesky",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-bonesky-full-body.webp",
    "https://aniimotools.dev/assets/creatures/bonesky.webp",
    "https://aniimotools.dev/assets/creatures/thumb/bonesky.webp"
   ]
  },
  {
   "key": "p:fenrier",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-fenrier-full-body.webp",
    "https://aniimotools.dev/assets/creatures/fenrier.webp",
    "https://aniimotools.dev/assets/creatures/thumb/fenrier.webp"
   ]
  },
  {
   "key": "p:glynsera",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-glynsera-full-body.webp",
    "https://aniimotools.dev/assets/creatures/glynsera.webp",
    "https://aniimotools.dev/assets/creatures/thumb/glynsera.webp"
   ]
  },
  {
   "key": "p:bolty",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-bolty-full-body.webp",
    "https://aniimotools.dev/assets/creatures/bolty.webp",
    "https://aniimotools.dev/assets/creatures/thumb/bolty.webp"
   ]
  },
  {
   "key": "p:blazen",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-blazen-full-body.webp",
    "https://aniimotools.dev/assets/creatures/blazen.webp",
    "https://aniimotools.dev/assets/creatures/thumb/blazen.webp"
   ]
  },
  {
   "key": "p:squarrel",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-squarrel-full-body.webp",
    "https://aniimotools.dev/assets/creatures/squarrel.webp",
    "https://aniimotools.dev/assets/creatures/thumb/squarrel.webp"
   ]
  },
  {
   "key": "p:squashel",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-squashel-full-body.webp",
    "https://aniimotools.dev/assets/creatures/squashel.webp",
    "https://aniimotools.dev/assets/creatures/thumb/squashel.webp"
   ]
  },
  {
   "key": "p:susuta",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-susuta-full-body.webp",
    "https://aniimotools.dev/assets/creatures/susuta.webp",
    "https://aniimotools.dev/assets/creatures/thumb/susuta.webp"
   ]
  },
  {
   "key": "p:popota",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-popota-full-body.webp",
    "https://aniimotools.dev/assets/creatures/popota.webp",
    "https://aniimotools.dev/assets/creatures/thumb/popota.webp"
   ]
  },
  {
   "key": "p:piopiota",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-piopiota-full-body.webp",
    "https://aniimotools.dev/assets/creatures/piopiota.webp",
    "https://aniimotools.dev/assets/creatures/thumb/piopiota.webp"
   ]
  },
  {
   "key": "p:panpanta",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-panpanta-full-body.webp",
    "https://aniimotools.dev/assets/creatures/panpanta.webp",
    "https://aniimotools.dev/assets/creatures/thumb/panpanta.webp"
   ]
  },
  {
   "key": "p:shelly",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-shelly-full-body.webp",
    "https://aniimotools.dev/assets/creatures/shelly.webp",
    "https://aniimotools.dev/assets/creatures/thumb/shelly.webp"
   ]
  },
  {
   "key": "p:sheldon",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-sheldon-full-body.webp",
    "https://aniimotools.dev/assets/creatures/sheldon.webp",
    "https://aniimotools.dev/assets/creatures/thumb/sheldon.webp"
   ]
  },
  {
   "key": "p:sherro",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-sherro-full-body.webp",
    "https://aniimotools.dev/assets/creatures/sherro.webp",
    "https://aniimotools.dev/assets/creatures/thumb/sherro.webp"
   ]
  },
  {
   "key": "p:baleetle",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-baleetle-full-body.webp",
    "https://aniimotools.dev/assets/creatures/baleetle.webp",
    "https://aniimotools.dev/assets/creatures/thumb/baleetle.webp"
   ]
  },
  {
   "key": "p:waleetle",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-waleetle-full-body.webp",
    "https://aniimotools.dev/assets/creatures/waleetle.webp",
    "https://aniimotools.dev/assets/creatures/thumb/waleetle.webp"
   ]
  },
  {
   "key": "p:bouldus",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-bouldus-full-body.webp",
    "https://aniimotools.dev/assets/creatures/bouldus.webp",
    "https://aniimotools.dev/assets/creatures/thumb/bouldus.webp"
   ]
  },
  {
   "key": "p:fentuft",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-fentuft-full-body.webp",
    "https://aniimotools.dev/assets/creatures/fentuft.webp",
    "https://aniimotools.dev/assets/creatures/thumb/fentuft.webp"
   ]
  },
  {
   "key": "p:fenmane",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-fenmane-full-body.webp",
    "https://aniimotools.dev/assets/creatures/fenmane.webp",
    "https://aniimotools.dev/assets/creatures/thumb/fenmane.webp"
   ]
  },
  {
   "key": "p:helmut",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-helmut-full-body.webp",
    "https://aniimotools.dev/assets/creatures/helmut.webp",
    "https://aniimotools.dev/assets/creatures/thumb/helmut.webp"
   ]
  },
  {
   "key": "p:pawney",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-pawney-full-body.webp",
    "https://aniimotools.dev/assets/creatures/pawney.webp",
    "https://aniimotools.dev/assets/creatures/thumb/pawney.webp"
   ]
  },
  {
   "key": "p:rookey",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-rookey-full-body.webp",
    "https://aniimotools.dev/assets/creatures/rookey.webp",
    "https://aniimotools.dev/assets/creatures/thumb/rookey.webp"
   ]
  },
  {
   "key": "p:jawling",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-jawling-full-body.webp",
    "https://aniimotools.dev/assets/creatures/jawling.webp",
    "https://aniimotools.dev/assets/creatures/thumb/jawling.webp"
   ]
  },
  {
   "key": "p:helmwhelp",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-helmwhelp-full-body.webp",
    "https://aniimotools.dev/assets/creatures/helmwhelp.webp",
    "https://aniimotools.dev/assets/creatures/thumb/helmwhelp.webp"
   ]
  },
  {
   "key": "p:helgon",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-helgon-full-body.webp",
    "https://aniimotools.dev/assets/creatures/helgon.webp",
    "https://aniimotools.dev/assets/creatures/thumb/helgon.webp"
   ]
  },
  {
   "key": "p:infergon",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-infergon-full-body.webp",
    "https://aniimotools.dev/assets/creatures/infergon.webp",
    "https://aniimotools.dev/assets/creatures/thumb/infergon.webp"
   ]
  },
  {
   "key": "p:cubbo",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-cubbo-full-body.webp",
    "https://aniimotools.dev/assets/creatures/cubbo.webp",
    "https://aniimotools.dev/assets/creatures/thumb/cubbo.webp"
   ]
  },
  {
   "key": "p:grizbo",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-grizbo-full-body.webp",
    "https://aniimotools.dev/assets/creatures/grizbo.webp",
    "https://aniimotools.dev/assets/creatures/thumb/grizbo.webp"
   ]
  },
  {
   "key": "p:pebbling",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-pebbling-full-body.webp",
    "https://aniimotools.dev/assets/creatures/pebbling.webp",
    "https://aniimotools.dev/assets/creatures/thumb/pebbling.webp"
   ]
  },
  {
   "key": "p:lavazar",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-lavazar-full-body.webp",
    "https://aniimotools.dev/assets/creatures/lavazar.webp",
    "https://aniimotools.dev/assets/creatures/thumb/lavazar.webp"
   ]
  },
  {
   "key": "p:magmarex",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-magmarex-full-body.webp",
    "https://aniimotools.dev/assets/creatures/magmarex.webp",
    "https://aniimotools.dev/assets/creatures/thumb/magmarex.webp"
   ]
  },
  {
   "key": "p:geodeback",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-geodeback-full-body.webp",
    "https://aniimotools.dev/assets/creatures/geodeback.webp",
    "https://aniimotools.dev/assets/creatures/thumb/geodeback.webp"
   ]
  },
  {
   "key": "p:minespine",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-minespine-full-body.webp",
    "https://aniimotools.dev/assets/creatures/minespine.webp",
    "https://aniimotools.dev/assets/creatures/thumb/minespine.webp"
   ]
  },
  {
   "key": "p:cozite",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-cozite-full-body.webp",
    "https://aniimotools.dev/assets/creatures/cozite.webp",
    "https://aniimotools.dev/assets/creatures/thumb/cozite.webp"
   ]
  },
  {
   "key": "p:bailite",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-bailite-full-body.webp",
    "https://aniimotools.dev/assets/creatures/bailite.webp",
    "https://aniimotools.dev/assets/creatures/thumb/bailite.webp"
   ]
  },
  {
   "key": "p:bulbly",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-bulbly-full-body.webp",
    "https://aniimotools.dev/assets/creatures/bulbly.webp",
    "https://aniimotools.dev/assets/creatures/thumb/bulbly.webp"
   ]
  },
  {
   "key": "p:veilfloat",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-veilfloat-full-body.webp",
    "https://aniimotools.dev/assets/creatures/veilfloat.webp",
    "https://aniimotools.dev/assets/creatures/thumb/veilfloat.webp"
   ]
  },
  {
   "key": "p:luminelle",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-luminelle-full-body.webp",
    "https://aniimotools.dev/assets/creatures/luminelle.webp",
    "https://aniimotools.dev/assets/creatures/thumb/luminelle.webp"
   ]
  },
  {
   "key": "p:fahloo",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-fahloo-full-body.webp",
    "https://aniimotools.dev/assets/creatures/fahloo.webp",
    "https://aniimotools.dev/assets/creatures/thumb/fahloo.webp"
   ]
  },
  {
   "key": "p:erlath",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-erlath-full-body.webp",
    "https://aniimotools.dev/assets/creatures/erlath.webp",
    "https://aniimotools.dev/assets/creatures/thumb/erlath.webp"
   ]
  },
  {
   "key": "p:besauce",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-besauce-full-body.webp",
    "https://aniimotools.dev/assets/creatures/besauce.webp",
    "https://aniimotools.dev/assets/creatures/thumb/besauce.webp"
   ]
  },
  {
   "key": "p:reefish",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-reefish-full-body.webp",
    "https://aniimotools.dev/assets/creatures/reefish.webp",
    "https://aniimotools.dev/assets/creatures/thumb/reefish.webp"
   ]
  },
  {
   "key": "p:coraliz",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-coraliz-full-body.webp",
    "https://aniimotools.dev/assets/creatures/coraliz.webp",
    "https://aniimotools.dev/assets/creatures/thumb/coraliz.webp"
   ]
  },
  {
   "key": "p:cheekie",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-cheekie-full-body.webp",
    "https://aniimotools.dev/assets/creatures/cheekie.webp",
    "https://aniimotools.dev/assets/creatures/thumb/cheekie.webp"
   ]
  },
  {
   "key": "p:wavwal",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-wavwal-full-body.webp",
    "https://aniimotools.dev/assets/creatures/wavwal.webp",
    "https://aniimotools.dev/assets/creatures/thumb/wavwal.webp"
   ]
  },
  {
   "key": "p:bubbeep",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-bubbeep-full-body.webp",
    "https://aniimotools.dev/assets/creatures/bubbeep.webp",
    "https://aniimotools.dev/assets/creatures/thumb/bubbeep.webp"
   ]
  },
  {
   "key": "p:glameep",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-glameep-full-body.webp",
    "https://aniimotools.dev/assets/creatures/glameep.webp",
    "https://aniimotools.dev/assets/creatures/thumb/glameep.webp"
   ]
  },
  {
   "key": "p:popapus",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-popapus-full-body.webp",
    "https://aniimotools.dev/assets/creatures/popapus.webp",
    "https://aniimotools.dev/assets/creatures/thumb/popapus.webp"
   ]
  },
  {
   "key": "p:gachapus",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-gachapus-full-body.webp",
    "https://aniimotools.dev/assets/creatures/gachapus.webp",
    "https://aniimotools.dev/assets/creatures/thumb/gachapus.webp"
   ]
  },
  {
   "key": "p:malangel",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-malangel-full-body.webp",
    "https://aniimotools.dev/assets/creatures/malangel.webp",
    "https://aniimotools.dev/assets/creatures/thumb/malangel.webp"
   ]
  },
  {
   "key": "p:malevsera",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-malevsera-full-body.webp",
    "https://aniimotools.dev/assets/creatures/malevsera.webp",
    "https://aniimotools.dev/assets/creatures/thumb/malevsera.webp"
   ]
  },
  {
   "key": "p:irisalis",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-irisalis-full-body.webp",
    "https://aniimotools.dev/assets/creatures/irisalis.webp",
    "https://aniimotools.dev/assets/creatures/thumb/irisalis.webp"
   ]
  },
  {
   "key": "p:dazmand",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-dazmand-full-body.webp",
    "https://aniimotools.dev/assets/creatures/dazmand.webp",
    "https://aniimotools.dev/assets/creatures/thumb/dazmand.webp"
   ]
  },
  {
   "key": "p:fulmintis",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-fulmintis-full-body.webp",
    "https://aniimotools.dev/assets/creatures/fulmintis.webp",
    "https://aniimotools.dev/assets/creatures/thumb/fulmintis.webp"
   ]
  },
  {
   "key": "p:sparkelf",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-sparkelf-full-body.webp",
    "https://aniimotools.dev/assets/creatures/sparkelf.webp",
    "https://aniimotools.dev/assets/creatures/thumb/sparkelf.webp"
   ]
  },
  {
   "key": "p:fennelun",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-fennelun-full-body.webp"
   ]
  },
  {
   "key": "p:lunara",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-lunara-full-body.webp",
    "https://aniimotools.dev/assets/creatures/lunara.webp",
    "https://aniimotools.dev/assets/creatures/thumb/lunara.webp"
   ]
  },
  {
   "key": "p:soleon",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-soleon-full-body.webp"
   ]
  },
  {
   "key": "p:helion",
   "urls": [
    "https://aniimogame.wiki/images/aniimo/hero/aniimo-helion-full-body.webp",
    "https://aniimotools.dev/assets/creatures/helion.webp",
    "https://aniimotools.dev/assets/creatures/thumb/helion.webp"
   ]
  },
  {
   "key": "role:dps",
   "urls": [
    "https://aniimotools.dev/assets/roles/dps.webp"
   ]
  },
  {
   "key": "role:break",
   "urls": [
    "https://aniimotools.dev/assets/roles/break.webp"
   ]
  },
  {
   "key": "role:support",
   "urls": [
    "https://aniimotools.dev/assets/roles/support.webp"
   ]
  },
  {
   "key": "role:heal",
   "urls": [
    "https://aniimotools.dev/assets/roles/heal.webp"
   ]
  },
  {
   "key": "role:regen",
   "urls": [
    "https://aniimotools.dev/assets/roles/regen.webp"
   ]
  },
  {
   "key": "el:fire",
   "urls": [
    "https://aniimotools.dev/assets/elements/fire.webp"
   ]
  },
  {
   "key": "el:water",
   "urls": [
    "https://aniimotools.dev/assets/elements/water.webp"
   ]
  },
  {
   "key": "el:grass",
   "urls": [
    "https://aniimotools.dev/assets/elements/grass.webp"
   ]
  },
  {
   "key": "el:electric",
   "urls": [
    "https://aniimotools.dev/assets/elements/electric.webp"
   ]
  },
  {
   "key": "el:ice",
   "urls": [
    "https://aniimotools.dev/assets/elements/ice.webp"
   ]
  },
  {
   "key": "el:earth",
   "urls": [
    "https://aniimotools.dev/assets/elements/earth.webp"
   ]
  },
  {
   "key": "el:wind",
   "urls": [
    "https://aniimotools.dev/assets/elements/wind.webp"
   ]
  },
  {
   "key": "el:light",
   "urls": [
    "https://aniimotools.dev/assets/elements/light.webp"
   ]
  },
  {
   "key": "el:dark",
   "urls": [
    "https://aniimotools.dev/assets/elements/dark.webp"
   ]
  },
  {
   "key": "attr:atk",
   "urls": [
    "https://aniimotools.dev/assets/resonance/attr-atk.webp"
   ]
  },
  {
   "key": "attr:break",
   "urls": [
    "https://aniimotools.dev/assets/resonance/attr-break.webp"
   ]
  },
  {
   "key": "attr:regen",
   "urls": [
    "https://aniimotools.dev/assets/resonance/attr-regen.webp"
   ]
  },
  {
   "key": "attr:hp",
   "urls": [
    "https://aniimotools.dev/assets/resonance/attr-hp.webp"
   ]
  },
  {
   "key": "attr:pdef",
   "urls": [
    "https://aniimotools.dev/assets/resonance/attr-pdef.webp"
   ]
  },
  {
   "key": "attr:mdef",
   "urls": [
    "https://aniimotools.dev/assets/resonance/attr-mdef.webp"
   ]
  },
  {
   "key": "item:dust",
   "urls": [
    "https://aniimo.kr/images/items/official/ui_item_151001.webp",
    "https://aniimotools.dev/assets/items/ui_item_151001.webp"
   ]
  },
  {
   "key": "item:sand",
   "urls": [
    "https://aniimo.kr/images/items/official/ui_item_151002.webp",
    "https://aniimotools.dev/assets/items/ui_item_151002.webp"
   ]
  },
  {
   "key": "item:ess",
   "urls": [
    "https://aniimo.kr/images/items/official/ui_item_151003.webp",
    "https://aniimotools.dev/assets/items/ui_item_151003.webp"
   ]
  },
  {
   "key": "item:h01",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-001.webp"
   ]
  },
  {
   "key": "item:h02",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-002.webp"
   ]
  },
  {
   "key": "item:h03",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-003.webp"
   ]
  },
  {
   "key": "item:h04",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-004.webp"
   ]
  },
  {
   "key": "item:h05",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-005.webp"
   ]
  },
  {
   "key": "item:h06",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-006.webp"
   ]
  },
  {
   "key": "item:h07",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-007.webp"
   ]
  },
  {
   "key": "item:h08",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-008.webp"
   ]
  },
  {
   "key": "item:h09",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-009.webp"
   ]
  },
  {
   "key": "item:h10",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-010.webp"
   ]
  },
  {
   "key": "item:h11",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-011.webp"
   ]
  },
  {
   "key": "item:h12",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-012.webp"
   ]
  },
  {
   "key": "item:h13",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-013.webp"
   ]
  },
  {
   "key": "item:h14",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-014.webp"
   ]
  },
  {
   "key": "item:h15",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-015.webp"
   ]
  },
  {
   "key": "item:h16",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-016.webp"
   ]
  },
  {
   "key": "item:h17",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-017.webp"
   ]
  },
  {
   "key": "item:h18",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-018.webp"
   ]
  },
  {
   "key": "item:h19",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-019.webp"
   ]
  },
  {
   "key": "item:h20",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-020.webp"
   ]
  },
  {
   "key": "item:h21",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-021.webp"
   ]
  },
  {
   "key": "item:h22",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-022.webp"
   ]
  },
  {
   "key": "item:h23",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-023.webp"
   ]
  },
  {
   "key": "item:h24",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-024.webp"
   ]
  },
  {
   "key": "item:h25",
   "urls": [
    "https://aniimotools.dev/assets/held-items/icon-025.webp"
   ]
  },
  {
   "key": "f:emberpup--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/emberpup-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/emberpup-2-t.webp"
   ]
  },
  {
   "key": "f:emberpup--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/emberpup-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/emberpup-3-t.webp"
   ]
  },
  {
   "key": "f:flameruff--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/flameruff-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/flameruff-2-t.webp"
   ]
  },
  {
   "key": "f:flameruff--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/flameruff-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/flameruff-3-t.webp"
   ]
  },
  {
   "key": "f:scorchhowl--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/scorchhowl-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/scorchhowl-2-t.webp"
   ]
  },
  {
   "key": "f:scorchhowl--thunderstorm-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/scorchhowl-a1005302.webp",
    "https://aniimotools.dev/assets/creatures/forms/scorchhowl-a1005302-t.webp"
   ]
  },
  {
   "key": "f:scorchhowl--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/scorchhowl-a1005303.webp",
    "https://aniimotools.dev/assets/creatures/forms/scorchhowl-a1005303-t.webp"
   ]
  },
  {
   "key": "f:scorchhowl--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/scorchhowl-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/scorchhowl-3-t.webp"
   ]
  },
  {
   "key": "f:inferlupa--v1005503",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/inferlupa-a1005503.webp",
    "https://aniimotools.dev/assets/creatures/forms/inferlupa-a1005503-t.webp"
   ]
  },
  {
   "key": "f:stellarys--rainstorm-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/stellarys-a1001201.webp",
    "https://aniimotools.dev/assets/creatures/forms/stellarys-a1001201-t.webp"
   ]
  },
  {
   "key": "f:stellarys--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/stellarys-a1001202.webp",
    "https://aniimotools.dev/assets/creatures/forms/stellarys-a1001202-t.webp"
   ]
  },
  {
   "key": "f:chirpi--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/chirpi-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/chirpi-2-t.webp"
   ]
  },
  {
   "key": "f:chirpi--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/chirpi-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/chirpi-3-t.webp"
   ]
  },
  {
   "key": "f:tromber--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/tromber-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/tromber-2-t.webp"
   ]
  },
  {
   "key": "f:tromber--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/tromber-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/tromber-3-t.webp"
   ]
  },
  {
   "key": "f:cornet--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/cornet-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/cornet-2-t.webp"
   ]
  },
  {
   "key": "f:cornet--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/cornet-a1018502.webp",
    "https://aniimotools.dev/assets/creatures/forms/cornet-a1018502-t.webp"
   ]
  },
  {
   "key": "f:cornet--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/cornet-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/cornet-3-t.webp"
   ]
  },
  {
   "key": "f:tubster--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/tubster-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/tubster-2-t.webp"
   ]
  },
  {
   "key": "f:tubster--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/tubster-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/tubster-3-t.webp"
   ]
  },
  {
   "key": "f:iris--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/iris-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/iris-2-t.webp"
   ]
  },
  {
   "key": "f:iris--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/iris-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/iris-3-t.webp"
   ]
  },
  {
   "key": "f:iris--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/iris-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/iris-4-t.webp"
   ]
  },
  {
   "key": "f:iris--mudflat-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/iris-7.webp",
    "https://aniimotools.dev/assets/creatures/forms/iris-7-t.webp"
   ]
  },
  {
   "key": "f:iris--rainstorm-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/iris-6.webp",
    "https://aniimotools.dev/assets/creatures/forms/iris-6-t.webp"
   ]
  },
  {
   "key": "f:iris--prismana",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/iris-5.webp",
    "https://aniimotools.dev/assets/creatures/forms/iris-5-t.webp"
   ]
  },
  {
   "key": "f:irisal--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/irisal-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/irisal-2-t.webp"
   ]
  },
  {
   "key": "f:irisal--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/irisal-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/irisal-3-t.webp"
   ]
  },
  {
   "key": "f:irisal--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/irisal-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/irisal-4-t.webp"
   ]
  },
  {
   "key": "f:irisal--mudflat-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/irisal-7.webp",
    "https://aniimotools.dev/assets/creatures/forms/irisal-7-t.webp"
   ]
  },
  {
   "key": "f:irisal--rainstorm-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/irisal-6.webp",
    "https://aniimotools.dev/assets/creatures/forms/irisal-6-t.webp"
   ]
  },
  {
   "key": "f:irisal--prismana",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/irisal-5.webp",
    "https://aniimotools.dev/assets/creatures/forms/irisal-5-t.webp"
   ]
  },
  {
   "key": "f:skippy--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/skippy-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/skippy-2-t.webp"
   ]
  },
  {
   "key": "f:skippy--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/skippy-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/skippy-3-t.webp"
   ]
  },
  {
   "key": "f:pranky--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pranky-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/pranky-2-t.webp"
   ]
  },
  {
   "key": "f:pranky--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pranky-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/pranky-3-t.webp"
   ]
  },
  {
   "key": "f:glacy--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/glacy-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/glacy-2-t.webp"
   ]
  },
  {
   "key": "f:glacy--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/glacy-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/glacy-3-t.webp"
   ]
  },
  {
   "key": "f:glacy--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/glacy-a1004303.webp",
    "https://aniimotools.dev/assets/creatures/forms/glacy-a1004303-t.webp"
   ]
  },
  {
   "key": "f:nimbi--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/nimbi-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/nimbi-2-t.webp"
   ]
  },
  {
   "key": "f:nimbi--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/nimbi-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/nimbi-3-t.webp"
   ]
  },
  {
   "key": "f:nimbi--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/nimbi-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/nimbi-4-t.webp"
   ]
  },
  {
   "key": "f:turbo--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/turbo-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/turbo-2-t.webp"
   ]
  },
  {
   "key": "f:turbo--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/turbo-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/turbo-3-t.webp"
   ]
  },
  {
   "key": "f:turbo--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/turbo-a1026204.webp",
    "https://aniimotools.dev/assets/creatures/forms/turbo-a1026204-t.webp"
   ]
  },
  {
   "key": "f:turbo--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/turbo-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/turbo-4-t.webp"
   ]
  },
  {
   "key": "f:hummin--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/hummin-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/hummin-2-t.webp"
   ]
  },
  {
   "key": "f:hexxin--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/witchin-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/witchin-2-t.webp"
   ]
  },
  {
   "key": "f:hexxin--v1020302",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/witchin-a1020302.webp",
    "https://aniimotools.dev/assets/creatures/forms/witchin-a1020302-t.webp"
   ]
  },
  {
   "key": "f:tuckin--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/tuckin-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/tuckin-2-t.webp"
   ]
  },
  {
   "key": "f:budclaw--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/budclaw-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/budclaw-2-t.webp"
   ]
  },
  {
   "key": "f:budclaw--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/budclaw-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/budclaw-3-t.webp"
   ]
  },
  {
   "key": "f:budclaw--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/budclaw-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/budclaw-4-t.webp"
   ]
  },
  {
   "key": "f:shrubclaw--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/shrubclaw-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/shrubclaw-2-t.webp"
   ]
  },
  {
   "key": "f:shrubclaw--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/shrubclaw-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/shrubclaw-3-t.webp"
   ]
  },
  {
   "key": "f:shrubclaw--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/shrubclaw-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/shrubclaw-4-t.webp"
   ]
  },
  {
   "key": "f:sparki--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/sparki-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/sparki-2-t.webp"
   ]
  },
  {
   "key": "f:sparki--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/sparki-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/sparki-3-t.webp"
   ]
  },
  {
   "key": "f:sparki--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/sparki-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/sparki-4-t.webp"
   ]
  },
  {
   "key": "f:flamerion--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/flamerion-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/flamerion-2-t.webp"
   ]
  },
  {
   "key": "f:flamerion--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/flamerion-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/flamerion-3-t.webp"
   ]
  },
  {
   "key": "f:flamerion--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/flamerion-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/flamerion-4-t.webp"
   ]
  },
  {
   "key": "f:flutternym--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/flutternym-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/flutternym-2-t.webp"
   ]
  },
  {
   "key": "f:flutternym--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/flutternym-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/flutternym-3-t.webp"
   ]
  },
  {
   "key": "f:flutternym--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/flutternym-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/flutternym-4-t.webp"
   ]
  },
  {
   "key": "f:gracewing--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/gracewing-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/gracewing-2-t.webp"
   ]
  },
  {
   "key": "f:gracewing--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/gracewing-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/gracewing-3-t.webp"
   ]
  },
  {
   "key": "f:gracewing--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/gracewing-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/gracewing-4-t.webp"
   ]
  },
  {
   "key": "f:budsquire--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/budsquire-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/budsquire-2-t.webp"
   ]
  },
  {
   "key": "f:thornblade--rainstorm-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/thornblade-a1032301.webp",
    "https://aniimotools.dev/assets/creatures/forms/thornblade-a1032301-t.webp"
   ]
  },
  {
   "key": "f:thornblade--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/thornblade-a1032302.webp",
    "https://aniimotools.dev/assets/creatures/forms/thornblade-a1032302-t.webp"
   ]
  },
  {
   "key": "f:thornblade--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/thornblade-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/thornblade-2-t.webp"
   ]
  },
  {
   "key": "f:melloblum--v1032402",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/melloblum-a1032402.webp",
    "https://aniimotools.dev/assets/creatures/forms/melloblum-a1032402-t.webp"
   ]
  },
  {
   "key": "f:pomegg--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pomegg-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/pomegg-2-t.webp"
   ]
  },
  {
   "key": "f:pomegg--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pomegg-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/pomegg-3-t.webp"
   ]
  },
  {
   "key": "f:pomegg--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pomegg-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/pomegg-4-t.webp"
   ]
  },
  {
   "key": "f:pomawk--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pomawk-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/pomawk-2-t.webp"
   ]
  },
  {
   "key": "f:pomawk--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pomawk-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/pomawk-3-t.webp"
   ]
  },
  {
   "key": "f:pomawk--thunderstorm",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pomawk-4.webp",
    "https://aniimotools.dev/assets/creatures/forms/pomawk-4-t.webp"
   ]
  },
  {
   "key": "f:wisptis--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/wisptis-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/wisptis-2-t.webp"
   ]
  },
  {
   "key": "f:wisptis--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/wisptis-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/wisptis-3-t.webp"
   ]
  },
  {
   "key": "f:ignitis--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/ignitis-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/ignitis-2-t.webp"
   ]
  },
  {
   "key": "f:ignitis--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/ignitis-a1003202.webp",
    "https://aniimotools.dev/assets/creatures/forms/ignitis-a1003202-t.webp"
   ]
  },
  {
   "key": "f:ignitis--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/ignitis-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/ignitis-3-t.webp"
   ]
  },
  {
   "key": "f:bonesky--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/bonesky-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/bonesky-2-t.webp"
   ]
  },
  {
   "key": "f:fenrier--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/fenrier-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/fenrier-2-t.webp"
   ]
  },
  {
   "key": "f:glynsera--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/glynsera-a1013301.webp",
    "https://aniimotools.dev/assets/creatures/forms/glynsera-a1013301-t.webp"
   ]
  },
  {
   "key": "f:glynsera--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/glynsera-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/glynsera-2-t.webp"
   ]
  },
  {
   "key": "f:bolty--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/bolty-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/bolty-2-t.webp"
   ]
  },
  {
   "key": "f:blazen--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/blazen-a1022201.webp",
    "https://aniimotools.dev/assets/creatures/forms/blazen-a1022201-t.webp"
   ]
  },
  {
   "key": "f:blazen--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/blazen-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/blazen-2-t.webp"
   ]
  },
  {
   "key": "f:susuta--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/susuta-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/susuta-2-t.webp"
   ]
  },
  {
   "key": "f:popota--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/popota-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/popota-2-t.webp"
   ]
  },
  {
   "key": "f:piopiota--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/piopiota-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/piopiota-2-t.webp"
   ]
  },
  {
   "key": "f:panpanta--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/panpanta-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/panpanta-2-t.webp"
   ]
  },
  {
   "key": "f:panpanta--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/panpanta-a1017402.webp",
    "https://aniimotools.dev/assets/creatures/forms/panpanta-a1017402-t.webp"
   ]
  },
  {
   "key": "f:sherro--thunderstorm-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/sherro-a1019401.webp",
    "https://aniimotools.dev/assets/creatures/forms/sherro-a1019401-t.webp"
   ]
  },
  {
   "key": "f:sherro--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/sherro-a1019402.webp",
    "https://aniimotools.dev/assets/creatures/forms/sherro-a1019402-t.webp"
   ]
  },
  {
   "key": "f:baleetle--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/baleetle-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/baleetle-2-t.webp"
   ]
  },
  {
   "key": "f:waleetle--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/waleetle-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/waleetle-2-t.webp"
   ]
  },
  {
   "key": "f:waleetle--v1045302",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/waleetle-a1045302.webp",
    "https://aniimotools.dev/assets/creatures/forms/waleetle-a1045302-t.webp"
   ]
  },
  {
   "key": "f:bouldus--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/bouldus-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/bouldus-2-t.webp"
   ]
  },
  {
   "key": "f:fenmane--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/fenmane-a1029301.webp",
    "https://aniimotools.dev/assets/creatures/forms/fenmane-a1029301-t.webp"
   ]
  },
  {
   "key": "f:helmut--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/helmut-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/helmut-2-t.webp"
   ]
  },
  {
   "key": "f:helmut--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/helmut-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/helmut-3-t.webp"
   ]
  },
  {
   "key": "f:pawney--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pawney-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/pawney-2-t.webp"
   ]
  },
  {
   "key": "f:pawney--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pawney-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/pawney-3-t.webp"
   ]
  },
  {
   "key": "f:pawney--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/pawney-a1002603.webp",
    "https://aniimotools.dev/assets/creatures/forms/pawney-a1002603-t.webp"
   ]
  },
  {
   "key": "f:rookey--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/rookey-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/rookey-2-t.webp"
   ]
  },
  {
   "key": "f:rookey--mountain-woods-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/rookey-3.webp",
    "https://aniimotools.dev/assets/creatures/forms/rookey-3-t.webp"
   ]
  },
  {
   "key": "f:jawling--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/jawling-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/jawling-2-t.webp"
   ]
  },
  {
   "key": "f:helmwhelp--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/helmwhelp-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/helmwhelp-2-t.webp"
   ]
  },
  {
   "key": "f:helgon--highland-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/helgon-2.webp",
    "https://aniimotools.dev/assets/creatures/forms/helgon-2-t.webp"
   ]
  },
  {
   "key": "f:infergon--v1002503",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/infergon-a1002503.webp",
    "https://aniimotools.dev/assets/creatures/forms/infergon-a1002503-t.webp"
   ]
  },
  {
   "key": "f:grizbo--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/grizbo-a1050301.webp",
    "https://aniimotools.dev/assets/creatures/forms/grizbo-a1050301-t.webp"
   ]
  },
  {
   "key": "f:magmarex--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/magmarex-a1028301.webp",
    "https://aniimotools.dev/assets/creatures/forms/magmarex-a1028301-t.webp"
   ]
  },
  {
   "key": "f:luminelle--rainstorm-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/luminelle-a1014301.webp",
    "https://aniimotools.dev/assets/creatures/forms/luminelle-a1014301-t.webp"
   ]
  },
  {
   "key": "f:luminelle--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/luminelle-a1014302.webp",
    "https://aniimotools.dev/assets/creatures/forms/luminelle-a1014302-t.webp"
   ]
  },
  {
   "key": "f:reefish--rainstorm-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/reefish-a1038103.webp",
    "https://aniimotools.dev/assets/creatures/forms/reefish-a1038103-t.webp"
   ]
  },
  {
   "key": "f:coraliz--rainstorm-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/coraliz-a1038303.webp",
    "https://aniimotools.dev/assets/creatures/forms/coraliz-a1038303-t.webp"
   ]
  },
  {
   "key": "f:glameep--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/glameep-a1058301.webp",
    "https://aniimotools.dev/assets/creatures/forms/glameep-a1058301-t.webp"
   ]
  },
  {
   "key": "f:fulmintis--prismana-form",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/fulmintis-a1003305.webp",
    "https://aniimotools.dev/assets/creatures/forms/fulmintis-a1003305-t.webp"
   ]
  },
  {
   "key": "f:sparkelf--v6999301",
   "urls": [
    "https://aniimotools.dev/assets/creatures/forms/sparkelf-a6999301.webp",
    "https://aniimotools.dev/assets/creatures/forms/sparkelf-a6999301-t.webp"
   ]
  }
 ],
 "assumptions": {
  "rawPlaceholder": {
   "label": "Raw stat used when you leave one blank",
   "v": 1000,
   "lo": 500,
   "hi": 2000,
   "unit": "",
   "status": "placeholder",
   "why": "Not from the game. Any blank raw stat uses this, which mainly affects flat bonuses like Ferocious Fang's +0.7 ATK per level. Enter your real stats to remove it."
  },
  "targetDefPct": {
   "label": "Target defense, as a share of your attack",
   "v": 30,
   "lo": 0,
   "hi": 60,
   "unit": "%",
   "status": "assumption",
   "why": "Damage is attack minus defense, with a 10% floor (AniimoTools damage formula). The target's defense varies by enemy."
  },
  "otherAmp": {
   "label": "Damage Amp you already have from elsewhere",
   "v": 0,
   "lo": 0,
   "hi": 40,
   "unit": "%",
   "status": "assumption",
   "why": "Damage Amp bonuses add together, so a +10% item is worth less when you already have some."
  },
  "otherFinal": {
   "label": "Final Damage Amp you already have from elsewhere",
   "v": 0,
   "lo": 0,
   "hi": 30,
   "unit": "%",
   "status": "assumption",
   "why": "Same idea as Damage Amp, for the Final Damage Amp bucket."
  },
  "critRate": {
   "label": "Crit rate",
   "v": 10,
   "lo": 5,
   "hi": 40,
   "unit": "%",
   "status": "assumption",
   "why": "Base crit rate is not published in the sources checked. Read yours from the game if it shows it."
  },
  "critDmg": {
   "label": "Extra damage on a crit",
   "v": 50,
   "lo": 30,
   "hi": 100,
   "unit": "%",
   "status": "assumption",
   "why": "Not published in the sources checked."
  },
  "mightPerHit": {
   "label": "Average Might of your normal hits",
   "v": 40,
   "lo": 20,
   "hi": 100,
   "unit": "",
   "status": "assumption",
   "why": "Heartseeker Pendant adds a 10 Might hit; its value depends on how big your normal hits are. Each skill's Might is on its AniimoTools page."
  },
  "cdShare": {
   "label": "Share of damage from skills on a cooldown",
   "v": 50,
   "lo": 20,
   "hi": 80,
   "unit": "%",
   "status": "assumption",
   "why": "Cooldown reduction only speeds up the part of your damage that waits on cooldowns."
  },
  "ultShare": {
   "label": "Share of damage from your Ultimate",
   "v": 20,
   "lo": 5,
   "hi": 40,
   "unit": "%",
   "status": "assumption",
   "why": "Values Capacitous Battery."
  },
  "basicShare": {
   "label": "Share of damage from basic attacks",
   "v": 25,
   "lo": 5,
   "hi": 60,
   "unit": "%",
   "status": "assumption",
   "why": "Values Fission Needles."
  },
  "avgEP": {
   "label": "Average EP you hold",
   "v": 40,
   "lo": 10,
   "hi": 80,
   "unit": " EP",
   "status": "assumption",
   "why": "Values Explosive Gloves (+5% per 10 EP held)."
  },
  "repeatStacks": {
   "label": "Average Echoing Grimoire stacks",
   "v": 1,
   "lo": 0,
   "hi": 5,
   "unit": "",
   "status": "assumption",
   "why": "How often you repeat the same skill in a row."
  },
  "markShare": {
   "label": "BREAK hits that carry a Counter Mark",
   "v": 30,
   "lo": 0,
   "hi": 80,
   "unit": "%",
   "status": "assumption",
   "why": "Values Avenging Gear. Depends on how often you get hit."
  },
  "enemyAtkRatio": {
   "label": "Enemy attack compared with your defense",
   "v": 2,
   "lo": 1.2,
   "hi": 4,
   "unit": "×",
   "status": "assumption",
   "why": "Used for survival. Higher means defense matters less and HP matters more."
  },
  "physShare": {
   "label": "Physical share of the damage you take",
   "v": 50,
   "lo": 0,
   "hi": 100,
   "unit": "%",
   "status": "assumption",
   "why": "Splits value between P.DEF and M.DEF."
  },
  "cloneShare": {
   "label": "Share of damage from clones",
   "v": 30,
   "lo": 10,
   "hi": 60,
   "unit": "%",
   "status": "assumption",
   "why": "Floral Rainbow Feather only."
  },
  "clones": {
   "label": "Clones you keep up",
   "v": 1,
   "lo": 0,
   "hi": 3,
   "unit": "",
   "status": "assumption",
   "why": "Floral Rainbow Feather only."
  },
  "stillShare": {
   "label": "Time spent standing still",
   "v": 20,
   "lo": 0,
   "hi": 60,
   "unit": "%",
   "status": "assumption",
   "why": "Nature's Breath roots you after 3s still."
  },
  "afterSkillUptime": {
   "label": "Uptime of \"after a skill\" effects",
   "v": 50,
   "lo": 20,
   "hi": 90,
   "unit": "%",
   "status": "assumption",
   "why": "Lightning Needle +15."
  },
  "luckUptime": {
   "label": "Time at 5 Luck stacks",
   "v": 50,
   "lo": 0,
   "hi": 100,
   "unit": "%",
   "status": "assumption",
   "why": "Auspicious Bell +15 team crit rate."
  }
 },
 "scenarios": {
  "opening": {
   "label": "Opening burst",
   "hpFrom": 100,
   "hpTo": 70,
   "omega": false,
   "behind": 0.2,
   "stackUptime": 0.3,
   "why": "Your damage lands while the target goes from full HP to 70%. Favors Vanguard's Whistle."
  },
  "full": {
   "label": "Full fight",
   "hpFrom": 100,
   "hpTo": 0,
   "omega": false,
   "behind": 0.2,
   "stackUptime": 0.8,
   "why": "Your damage is spread evenly from full HP to zero."
  },
  "boss": {
   "label": "Omega boss",
   "hpFrom": 100,
   "hpTo": 0,
   "omega": true,
   "behind": 0.3,
   "stackUptime": 0.95,
   "why": "Long fight. Finisher Bell's defeat effect doesn't work on Omega targets."
  },
  "finish": {
   "label": "Finishing hurt targets",
   "hpFrom": 30,
   "hpTo": 0,
   "omega": false,
   "behind": 0.2,
   "stackUptime": 0.8,
   "why": "Your damage lands below 30% HP, e.g. cleaning up after a teammate. Favors Finisher Bell."
  }
 },
 "goals": {
  "hit": {
   "label": "Hit damage",
   "weights": {
    "hit": 1,
    "surv": 0.1
   }
  },
  "gauge": {
   "label": "BREAK gauge damage",
   "weights": {
    "gauge": 1,
    "surv": 0.1
   }
  },
  "hitgauge": {
   "label": "Hit and gauge damage",
   "weights": {
    "hit": 0.6,
    "gauge": 0.4,
    "surv": 0.1
   }
  },
  "kit": {
   "label": "Skill effects that scale with a stat",
   "weights": {
    "kit": 1,
    "surv": 0.1
   }
  },
  "surv": {
   "label": "Survival",
   "weights": {
    "surv": 1,
    "hit": 0.1
   }
  },
  "custom": {
   "label": "My own mix",
   "weights": {
    "hit": 1,
    "gauge": 0,
    "surv": 0.1,
    "kit": 0
   }
  }
 },
 "itemGroups": {
  "crit": [
   "h05",
   "h06",
   "h10",
   "h14"
  ],
  "conditional": [
   "h06",
   "h07",
   "h10"
  ],
  "ultimate": [
   "h11"
  ],
  "potential": [
   "h01",
   "h02",
   "h03",
   "h04",
   "h13",
   "h18",
   "h19",
   "h20"
  ]
 },
 "verification": [
  {
   "topic": "25 held items",
   "status": "verified",
   "source": "AniimoTools held item list, checked 8 Oct 2026."
  },
  {
   "topic": "Potential: 0.8% per point, +4% every 4th point, total capped at 20",
   "status": "verified",
   "source": "AniimoTools Potential guide; MOANIIMO guide."
  },
  {
   "topic": "Points 43 at level 60, Star Up rank 6",
   "status": "verified",
   "source": "AniimoTools Potential guide."
  },
  {
   "topic": "Item rarity: Blue max +5, Purple max +10, Gold max +15",
   "status": "verified",
   "source": "GameWith Gargantuan Horn page (one item checked)."
  },
  {
   "topic": "Damage = attack minus defense, 10% floor; DPS and Break use max(ATK, 0.85 × BREAK)",
   "status": "verified",
   "source": "AniimoTools damage formula."
  },
  {
   "topic": "The 0.8% and 4% parts multiply rather than add",
   "status": "assumption",
   "source": "Matches the quoted \"about 39%\". Switch it under Settings."
  },
  {
   "topic": "\"Potential above 15\" (+15 item effects) counts displayed, effective or Acquired points",
   "status": "unverified",
   "source": "Not confirmed. Another review says AniimoTools words it as Acquired; I could not open that page. Switch it under Settings."
  },
  {
   "topic": "Level gates count total or Acquired points",
   "status": "unverified",
   "source": "One in-game check settles it."
  },
  {
   "topic": "The same held item on more than one Aniimo",
   "status": "unverified",
   "source": "Owned-items mode respects how many copies you have, which avoids the question."
  },
  {
   "topic": "Destiny's Dice rolls are evenly spread from 70% to 150%",
   "status": "assumption",
   "source": "The item text gives only the range."
  },
  {
   "topic": "Finisher Bell +10 bonus applies at any HP",
   "status": "assumption",
   "source": "Reading of \"+5% per 5% HP lost, up to +20%\"."
  },
  {
   "topic": "Damage Amp also raises BREAK gauge damage",
   "status": "unverified",
   "source": "Off by default. Switch it under Settings."
  },
  {
   "topic": "Base crit rate and crit damage",
   "status": "unverified",
   "source": "Not published in the sources checked; set under Settings."
  },
  {
   "topic": "Family Ability Chart stats and each form's element",
   "status": "verified",
   "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026. Every form of an Aniimo has the same stats there."
  },
  {
   "topic": "Chart data for Fennelun and Soleon",
   "status": "unverified",
   "source": "Not listed on AniimoTools. Needs an in-game screenshot that clearly shows the Aniimo's name."
  },
  {
   "topic": "Somniwing's form",
   "status": "unverified",
   "source": "This site lists Prismana; AniimoTools lists Basic. Kept this site's version."
  },
  {
   "topic": "Whether the stat screen's raw numbers already include personality bonuses",
   "status": "unverified",
   "source": "The calculator applies personality bonuses on top of the raw stats you enter. If the game already includes them, results are off by 2 to 6% on those stats."
  },
  {
   "topic": "Skill Might, hit counts and cooldowns for each Aniimo",
   "status": "unverified",
   "source": "Not in this site's data yet. The calculator uses the shares under Settings instead."
  },
  {
   "topic": "Held item contract: a Legendary held item at +15 can enhance one family's signature skill (34 families)",
   "status": "verified",
   "source": "AniimoTools held items guide. It describes only the skill enhancement, no stat change."
  },
  {
   "topic": "Alphas caught in the overworld have the enhanced core skill without an item; Alphas do not change the six stats",
   "status": "verified",
   "source": "Aniimo Guide (aniimoguide.com), pact and Alpha article."
  },
  {
   "topic": "Alphas hatched from eggs do not have the enhanced core skill",
   "status": "unverified",
   "source": "One creator's statement reported by Aniimo Guide; not shown on screen."
  },
  {
   "topic": "A contract on an Alpha adds nothing further",
   "status": "unverified",
   "source": "Community testing (Reddit). The creator in the Aniimo Guide article never formed a contract on an Alpha."
  },
  {
   "topic": "Blue Potential bonuses count past 20 (e.g. 20 + 4 = 24, another ×4 breakpoint)",
   "status": "verified",
   "source": "MOANIIMO Capability Awakening guide; a Reddit stat-screen test agrees."
  },
  {
   "topic": "Star Up rank level requirements: ranks 2 and 3 at level 35, 4 at 40, 5 at 50, 6 at 60, 7 at 65",
   "status": "verified",
   "source": "MOANIIMO Star Up (Resonance) guide."
  },
  {
   "topic": "Event dates in the Events now banner",
   "status": "verified",
   "source": "Official update notice for events through 29 Oct 2026. Later events marked \"roadmap\" come from Prima Games and are not official."
  },
  {
   "topic": "GameWith personality picks: role default, then S becomes N if \"crit\" is in the skills or trait",
   "status": "verified",
   "source": "GameWith personality guide."
  },
  {
   "topic": "A team has up to 4 Aniimo, switched one at a time",
   "status": "verified",
   "source": "DailyAniimo combat guide (\"A combat party holds four Aniimo\"); AniimoEggs team structure guide. Corrects the earlier team of 3."
  },
  {
   "topic": "Energy (EP) is one shared team pool",
   "status": "verified",
   "source": "DailyAniimo (\"restores the team's EP\"); AniimoEggs (\"the shared EP pool\"). Maximum and recovery rate are not published."
  },
  {
   "topic": "The 17 Alphas: element, region and location",
   "status": "verified",
   "source": "Dexerto Alpha locations. Level ranges for 11 of them from Nerdschalk; HP and DEF are not published."
  },
  {
   "topic": "Type chart: which element is strong or weak against which (×1.6 / ×0.625, dual types multiply)",
   "status": "verified",
   "source": "GameWith type chart and Mobalytics agree on every matchup; multipliers from GameWith and AniimoTools."
  }
 ],
 "teamSize": 4,
 "otherAniimo": [
  {
   "name": "Jabster",
   "status": "not in game",
   "source": "AniimoTools Aniilog (\"Not in game\")",
   "chart": {
    "hp": 104,
    "break": 50,
    "atk": 120,
    "pdef": 80,
    "mdef": 78,
    "regen": 88
   }
  },
  {
   "name": "Morphling",
   "status": "not in game",
   "source": "AniimoTools Aniilog (\"Not in game\")",
   "chart": {
    "hp": 77,
    "break": 50,
    "atk": 77,
    "pdef": 67,
    "mdef": 67,
    "regen": 100
   }
  }
 ],
 "chartMax": 130,
 "importInfo": {
  "source": "AniimoTools Aniilog stats table, downloaded 8 Oct 2026",
  "formsInSource": 223,
  "aniimoInSource": 100,
  "formsOnSite": 223,
  "noChart": [
   "Fennelun",
   "Soleon"
  ]
 },
 "events": {
  "region": "Americas (UTC-4)",
  "updated": "2026-10-08",
  "list": [
   {
    "name": "Legendary Journey: Windchaser's Departure",
    "start": "2026-09-25T10:00:00-04:00",
    "end": "2026-12-09T19:59:00-04:00",
    "desc": "Irisalis debut and Blessing Gifts.",
    "source": "Official update notice, aniimo.com (21 Sep 2026)",
    "official": true,
    "art": "p:irisalis",
    "theme": "windchaser"
   },
   {
    "name": "Glamour Star",
    "start": "2026-09-25T04:00:00-04:00",
    "end": "2026-10-02T03:59:00-04:00",
    "desc": "Dress Aniimo to a theme and get scored for rewards.",
    "source": "Official update notice, aniimo.com (21 Sep 2026)",
    "official": true,
    "art": null,
    "theme": "glamour"
   },
   {
    "name": "Aniimo Discovery",
    "start": "2026-09-25T04:00:00-04:00",
    "end": "2026-10-09T03:59:00-04:00",
    "desc": "Search the field for a newly sighted Aniimo.",
    "source": "Official update notice, aniimo.com (21 Sep 2026)",
    "official": true,
    "art": null
   },
   {
    "name": "Vein Abundance: Rosetower Woods",
    "start": "2026-09-28T04:00:00-04:00",
    "end": "2026-10-05T03:59:00-04:00",
    "desc": "Prismana Form Melloblum appears at Rosetower Woods.",
    "source": "Official update notice, aniimo.com (21 Sep 2026)",
    "official": true,
    "art": "f:melloblum--v1032402",
    "theme": "prismana"
   },
   {
    "name": "Vein Abundance: Berylline Vale",
    "start": "2026-10-05T04:00:00-04:00",
    "end": "2026-10-12T03:59:00-04:00",
    "desc": "Prismana Form Waleetle appears at Berylline Vale.",
    "source": "Official update notice, aniimo.com (21 Sep 2026)",
    "official": true,
    "art": "f:waleetle--v1045302",
    "theme": "prismana"
   },
   {
    "name": "Journey Chronicles",
    "start": "2026-10-01T04:00:00-04:00",
    "end": "2026-10-29T03:59:00-04:00",
    "desc": "Log in on several days for travel gifts.",
    "source": "Official update notice, aniimo.com (21 Sep 2026)",
    "official": true,
    "art": null
   },
   {
    "name": "Glamour Star",
    "start": "2026-10-09T00:00:00-04:00",
    "end": "2026-10-15T23:59:00-04:00",
    "desc": "Dress Aniimo to a theme and get scored for rewards.",
    "source": "Prima Games roadmap (not official; dates only)",
    "official": false,
    "art": null,
    "theme": "glamour"
   },
   {
    "name": "Eggceleration",
    "start": "2026-10-09T00:00:00-04:00",
    "end": "2026-10-11T23:59:00-04:00",
    "desc": "Faster egg hatching (per the roadmap).",
    "source": "Prima Games roadmap (not official; dates only)",
    "official": false,
    "art": null
   },
   {
    "name": "Vein Abundance: Prismana Inferlupa UP",
    "start": "2026-10-12T00:00:00-04:00",
    "end": "2026-10-18T23:59:00-04:00",
    "desc": "Prismana Inferlupa featured.",
    "source": "Prima Games roadmap (not official; dates only)",
    "official": false,
    "art": "f:inferlupa--v1005503",
    "theme": "prismana"
   },
   {
    "name": "Who's That Aniimo?",
    "start": "2026-10-16T00:00:00-04:00",
    "end": "2026-10-22T23:59:00-04:00",
    "desc": "Roadmap event.",
    "source": "Prima Games roadmap (not official; dates only)",
    "official": false,
    "art": null
   },
   {
    "name": "Idyll Ecological Investigation",
    "start": "2026-10-16T00:00:00-04:00",
    "end": "2026-10-22T23:59:00-04:00",
    "desc": "Roadmap event.",
    "source": "Prima Games roadmap (not official; dates only)",
    "official": false,
    "art": null
   },
   {
    "name": "Eggceleration",
    "start": "2026-10-16T00:00:00-04:00",
    "end": "2026-10-18T23:59:00-04:00",
    "desc": "Faster egg hatching (per the roadmap).",
    "source": "Prima Games roadmap (not official; dates only)",
    "official": false,
    "art": null
   },
   {
    "name": "Vein Abundance: Prismana Carnival",
    "start": "2026-10-19T00:00:00-04:00",
    "end": "2026-10-25T23:59:00-04:00",
    "desc": "Prismana forms featured.",
    "source": "Prima Games roadmap (not official; dates only)",
    "official": false,
    "art": null,
    "theme": "prismana"
   },
   {
    "name": "Eggceleration",
    "start": "2026-10-23T00:00:00-04:00",
    "end": "2026-10-25T23:59:00-04:00",
    "desc": "Faster egg hatching (per the roadmap).",
    "source": "Prima Games roadmap (not official; dates only)",
    "official": false,
    "art": null
   },
   {
    "name": "Glamour Star",
    "start": "2026-10-23T00:00:00-04:00",
    "end": "2026-10-29T23:59:00-04:00",
    "desc": "Dress Aniimo to a theme and get scored for rewards.",
    "source": "Prima Games roadmap (not official; dates only)",
    "official": false,
    "art": null,
    "theme": "glamour"
   }
  ],
  "themeRule": "Themes switch automatically on official event dates only. Roadmap events can be picked by hand."
 },
 "rankLevels": {
  "2": 35,
  "3": 35,
  "4": 40,
  "5": 50,
  "6": 60,
  "7": 65
 },
 "personalityBaseline": {
  "DPS": [
   "ESTJ",
   "ENTJ"
  ],
  "Break": [
   "ISTP",
   "INTP"
  ],
  "Support": [
   "ISTJ",
   "INTJ"
  ],
  "Heal": [
   "ISTJ",
   "INTJ"
  ],
  "Regen": [
   "ISTJ",
   "INTJ"
  ]
 },
 "themes": {
  "windchaser": {
   "label": "Windchaser's Departure",
   "priority": 3,
   "motif": "wind",
   "art": "p:irisalis",
   "fallbackArt": "p:irisalis",
   "colors": {
    "sky1": "#bdeee3",
    "sky2": "#effcf6",
    "frame": "#6fcdbd",
    "frame2": "#2f9f8f",
    "plateA": "#46c9b5",
    "plateB": "#1f978a",
    "ring": "#d9a514"
   },
   "about": "Leads while it runs (25 Sep to 9 Dec). Teal and pale gold sky with a soft floral glow, drifting petals, wind and light motes, after the event text: Irisalis \"blooms amidst radiant colors\" and players \"follow the drifting petals on the breeze\"."
  },
  "prismana": {
   "label": "Prismana",
   "priority": 1,
   "motif": "prismana",
   "art": null,
   "fallbackArt": "f:waleetle--v1045302",
   "colors": {
    "sky1": "#ddd3ff",
    "sky2": "#f6f1ff",
    "frame": "#b7a2f2",
    "frame2": "#7b5cf0",
    "plateA": "#8a6cf5",
    "plateB": "#d0559b",
    "ring": "#ffcf3d"
   },
   "about": "Iridescent borders, rainbow light and sparkles, with the featured Prismana form."
  },
  "glamour": {
   "label": "Glamour Star",
   "priority": 2,
   "motif": "glamour",
   "art": null,
   "fallbackArt": null,
   "colors": {
    "sky1": "#ffd6ea",
    "sky2": "#fff3f9",
    "frame": "#f3a6c8",
    "frame2": "#d0559b",
    "plateA": "#f07bb2",
    "plateB": "#c94489",
    "ring": "#ffcf3d"
   },
   "about": "Stage spotlights and gold sparkles for the audition event."
  }
 },
 "visual": {
  "default": "subtle",
  "levels": {
   "full": {
    "label": "Full",
    "clouds": 4,
    "blooms": 4,
    "sway": true,
    "event": 12,
    "eventSec": 6,
    "staticEvent": 0,
    "roam": true,
    "roamMax": 2,
    "roamGap": [
     14,
     26
    ],
    "fire": 8,
    "maxAnimated": 48,
    "twinkle": 14,
    "shoot": 2,
    "motes": 6
   },
   "subtle": {
    "label": "Subtle",
    "clouds": 2,
    "blooms": 2,
    "sway": false,
    "event": 5,
    "eventSec": 2,
    "staticEvent": 0,
    "roam": true,
    "roamMax": 1,
    "roamGap": [
     25,
     40
    ],
    "fire": 2,
    "maxAnimated": 16,
    "twinkle": 4,
    "shoot": 1,
    "motes": 2
   },
   "minimal": {
    "label": "Minimal",
    "clouds": 0,
    "blooms": 0,
    "sway": false,
    "event": 0,
    "eventSec": 0,
    "staticEvent": 4,
    "roam": false,
    "roamMax": 0,
    "roamGap": [
     0,
     0
    ],
    "fire": 0,
    "maxAnimated": 0,
    "twinkle": 0,
    "shoot": 0,
    "motes": 0
   },
   "off": {
    "label": "Off",
    "clouds": 0,
    "blooms": 0,
    "sway": false,
    "event": 0,
    "eventSec": 0,
    "staticEvent": 0,
    "roam": false,
    "roamMax": 0,
    "roamGap": [
     0,
     0
    ],
    "fire": 0,
    "maxAnimated": 0,
    "twinkle": 0,
    "shoot": 0,
    "motes": 0
   }
  },
  "about": "Counts are the most moving things on screen at once for each level; phones get about half. Reduced-motion settings stop all movement whatever the level."
 },
 "scene": {
  "art": {
   "large": "data/art/idyll-night.webp",
   "small": "data/art/idyll-night-small.webp",
   "night": true
  },
  "about": "Background picture supplied by the site owner (night landscape). Set \"art\" to null to go back to the drawn landscape."
 },
 "roamers": [
  {
   "slug": "nimbi",
   "move": "hop"
  },
  {
   "slug": "chirpi",
   "move": "fly"
  },
  {
   "slug": "skippy",
   "move": "peek"
  }
 ],
 "moves": {
  "stellarys": [
   {
    "name": "Basic attack",
    "kind": "Magical",
    "might": 6,
    "ep": null,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "Ranged dark attack.",
    "source": "https://aniimotools.dev/creatures/stellarys/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "unknown",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   },
   {
    "name": "Shooting Stars",
    "kind": "Magical",
    "might": 40,
    "ep": 20,
    "hits": 3,
    "hitsNote": "Fires 3 homing stars",
    "cooldown": null,
    "element": null,
    "effect": "Each star hit gives the user 1% Damage Boost, stacking up to 15 (not simulated).",
    "source": "https://aniimotools.dev/creatures/stellarys/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "verified",
     "hits": "stated",
     "cooldown": "unknown"
    }
   },
   {
    "name": "Shooting Star Glide",
    "kind": "Magical",
    "might": 74,
    "ep": 20,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "Hitting the same target 3 times raises Energy recovery 10% for 10s (not simulated).",
    "source": "https://aniimotools.dev/creatures/stellarys/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "verified",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   },
   {
    "name": "Comet Aureus",
    "kind": "Magical",
    "might": 166,
    "ep": null,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "Many comets strike a target.",
    "source": "https://aniimotools.dev/creatures/stellarys/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "unknown",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   }
  ],
  "rookey": [
   {
    "name": "Basic attack",
    "kind": "Physical",
    "might": 6,
    "ep": null,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "Close-range attack.",
    "source": "https://aniimotools.dev/creatures/rookey/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "unknown",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   },
   {
    "name": "Guardbreak Slam",
    "kind": "Physical",
    "might": 45,
    "ep": 15,
    "hits": 3,
    "hitsNote": "Up to three smashes",
    "cooldown": null,
    "element": null,
    "effect": "Third smash stuns for 1s.",
    "source": "https://aniimotools.dev/creatures/rookey/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "verified",
     "hits": "stated",
     "cooldown": "unknown"
    }
   },
   {
    "name": "Bouncy Sling",
    "kind": "Physical",
    "might": 55,
    "ep": 20,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "Target takes 15% more BREAK damage for 15s; ricochets (not simulated).",
    "source": "https://aniimotools.dev/creatures/rookey/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "verified",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   },
   {
    "name": "Ballistic Guard",
    "kind": "Physical",
    "might": 52,
    "ep": 20,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "+20% damage reduction; 10 Might shockwave when hit (not simulated).",
    "source": "https://aniimotools.dev/creatures/rookey/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "verified",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   },
   {
    "name": "Heavy Slam",
    "kind": "Physical",
    "might": 196,
    "ep": null,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "Smashes all nearby targets.",
    "source": "https://aniimotools.dev/creatures/rookey/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "unknown",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   }
  ],
  "fragrancier": [
   {
    "name": "Basic attack",
    "kind": "Physical",
    "might": 6,
    "ep": null,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "Close-range attack.",
    "source": "https://aniimotools.dev/creatures/fragrancier/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "unknown",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   },
   {
    "name": "Withering Bloom",
    "kind": "Magical",
    "might": 22,
    "ep": 20,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "Heals all team members 5% max HP, doubled with one target (healing not simulated).",
    "source": "https://aniimotools.dev/creatures/fragrancier/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "verified",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   },
   {
    "name": "Secret Fragrance Mark",
    "kind": "Magical",
    "might": 30,
    "ep": null,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "Marks for 20s: Dark basic attacks deal 50% extra to marked targets (not simulated).",
    "source": "https://aniimotools.dev/creatures/fragrancier/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "unknown",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   },
   {
    "name": "Blossoming Moment",
    "kind": "Magical",
    "might": 38,
    "ep": 10,
    "hits": 1,
    "hitsNote": null,
    "cooldown": null,
    "element": null,
    "effect": "Dodge then dive-peck; shield 10% max HP for 20s on a successful dodge (not simulated).",
    "source": "https://aniimotools.dev/creatures/fragrancier/",
    "checked": "2026-10-09",
    "status": {
     "might": "verified",
     "ep": "verified",
     "hits": "unknown",
     "cooldown": "unknown"
    }
   }
  ]
 },
 "combat": {
  "version": "combat-1",
  "verified": [
   {
    "rule": "Wild Aniimo and Alphas take ×0.625 damage",
    "source": "AniimoTools damage formula"
   },
   {
    "rule": "A skill sharing one of the Aniimo's elements: ×1.1",
    "source": "AniimoTools damage formula"
   },
   {
    "rule": "Crit: ×(1 + crit bonus), 50% at base, capped at ×3",
    "source": "AniimoTools damage formula"
   },
   {
    "rule": "Attack minus defense, never below 10% of attack; DPS and Break use max(ATK, 0.85 × BREAK); Support, Heal and Regen use 10.5 × level",
    "source": "AniimoTools damage formula"
   },
   {
    "rule": "Type matchups ×1.6 / ×1 / ×0.625; Elemental Boost ×(1 + boost − resistance); Damage Amp ×(1 + amp), at least ×0.2",
    "source": "AniimoTools damage formula"
   }
  ],
  "unverified": [
   "How Might turns into damage. AniimoTools says a skill adds \"its fixed part plus its Might\" but gives no number for the fixed part. The Team Lab offers two experimental models.",
   "Whether a multi-hit skill's Might is the total or per hit.",
   "Alphas take \"greatly increased damage\" while broken (AniimoTools), with no number given. Enter a measured multiplier.",
   "Skill cooldowns: not listed on AniimoTools for these moves."
  ]
 },
 "alphas": [
  {
   "name": "Alpha Scorchhowl",
   "slug": "scorchhowl",
   "elements": [
    "fire"
   ],
   "region": "Beast Fang Ridge",
   "location": "East of Sanctum: Water to Ice, in the middle of three monoliths",
   "level": "29–32",
   "requirement": null,
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Glynsera",
   "slug": "glynsera",
   "elements": [
    "ice"
   ],
   "region": "Beast Fang Ridge",
   "location": "South of Sanctum: Water to Ice, at an ice cave sealed by flammable vines or ice",
   "level": null,
   "requirement": "Vines or ice can block the cave entrance",
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Minespine",
   "slug": "minespine",
   "elements": [
    "earth"
   ],
   "region": "Beast Fang Ridge",
   "location": "Crystal Cave, south of the Forgotten Mine",
   "level": "29–32",
   "requirement": "Same Branch progress as Geoclaw; use Budclaw to dig under the low obstruction",
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Bouldus",
   "slug": "bouldus",
   "elements": [
    "earth"
   ],
   "region": "Berylline Vale",
   "location": "Small hill northeast of Mudstone Pass Bloom",
   "level": "39–41",
   "requirement": null,
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Ignitis",
   "slug": "ignitis",
   "elements": [
    "dark"
   ],
   "region": "Berylline Vale",
   "location": "Southeast of Berylline Vale Bloom",
   "level": "44–46",
   "requirement": "Appears only at night",
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Blazen",
   "slug": "blazen",
   "elements": [
    "electric"
   ],
   "region": "Blitzwood",
   "location": "On a mountaintop south of Blitzwood Bloom",
   "level": "42–44",
   "requirement": null,
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Panpanta",
   "slug": "panpanta",
   "elements": [
    "water"
   ],
   "region": "Echoback Landing",
   "location": "On the shore north of Echoback Landing Bloom",
   "level": "36–37",
   "requirement": null,
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Stellarys",
   "slug": "stellarys",
   "elements": [
    "dark"
   ],
   "region": "Forest of Falling Stars",
   "location": "North of the Outpost, in a star-shaped patch of grass",
   "level": null,
   "requirement": null,
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Leafy",
   "slug": "leafy",
   "elements": [
    "grass",
    "water"
   ],
   "region": "Mistwoods",
   "location": "Grove northeast of the Breezy Plains Branch",
   "level": null,
   "requirement": null,
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Turbo",
   "slug": "turbo",
   "elements": [
    "wind"
   ],
   "region": "Nimbus Fields",
   "location": "Fields just northeast of First Spark Sanctum",
   "level": null,
   "requirement": null,
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Geoclaw",
   "slug": "geoclaw",
   "elements": [
    "ice"
   ],
   "region": "Nimbus Fields",
   "location": "Underground in the northwest, near the Breezy Plains Branch",
   "level": "55",
   "requirement": "Infuse 120 Lumin Amber to unlock Earthquake Revelation and cave access",
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Grizbo",
   "slug": "grizbo",
   "elements": [
    "earth"
   ],
   "region": "Rosetower Woods",
   "location": "North of Rosetower Woods Bloom",
   "level": "43–50",
   "requirement": "Break the rocks on the entrance route with Hustle",
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Rookey",
   "slug": "rookey",
   "elements": [
    "dark"
   ],
   "region": "Russet Highlands",
   "location": "East of First Sight Sanctum",
   "level": "45–50",
   "requirement": "Use the Russet Highlands transporter",
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Irisal",
   "slug": "irisal",
   "elements": [
    "grass"
   ],
   "region": "Sea of Flowers",
   "location": "South of Sea of Flowers Bloom",
   "level": null,
   "requirement": "Tied to story progress",
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Tubster",
   "slug": "tubster",
   "elements": [
    "wind"
   ],
   "region": "The Argent Strait",
   "location": "Shore southwest of First Spark Sanctum",
   "level": null,
   "requirement": null,
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Luminelle",
   "slug": "luminelle",
   "elements": [
    "electric"
   ],
   "region": "Tideblossom Coast",
   "location": "South of Tideblossom Coast Bloom",
   "level": "53–60",
   "requirement": "A shooting star must land to trigger it",
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  },
  {
   "name": "Alpha Magmarex",
   "slug": "magmarex",
   "elements": [
    "fire",
    "earth"
   ],
   "region": "Zephyrus Landbridge",
   "location": "North of Hot Spring Reef Bloom",
   "level": "46–51",
   "requirement": "Go down through the geyser into the underground area",
   "hp": null,
   "sources": [
    "https://www.dexerto.com/wikis/aniimo/alpha-aniimo-locations/",
    "https://nerdschalk.com/aniimo-alpha-boss-locations-requirements-and-how-to-reach-every-boss/"
   ],
   "checked": "2026-10-09",
   "def": null
  }
 ],
 "typeChart": {
  "strong": 1.6,
  "weak": 0.625,
  "attack": {
   "grass": {
    "strong": [
     "earth",
     "water"
    ],
    "weak": [
     "grass",
     "fire",
     "light"
    ]
   },
   "fire": {
    "strong": [
     "grass",
     "ice"
    ],
    "weak": [
     "fire",
     "earth",
     "water",
     "light"
    ]
   },
   "electric": {
    "strong": [
     "wind",
     "water"
    ],
    "weak": [
     "electric",
     "earth",
     "ice"
    ]
   },
   "earth": {
    "strong": [
     "fire",
     "ice"
    ],
    "weak": [
     "grass",
     "earth",
     "water",
     "dark"
    ]
   },
   "wind": {
    "strong": [
     "grass",
     "dark"
    ],
    "weak": [
     "electric",
     "wind"
    ]
   },
   "water": {
    "strong": [
     "fire",
     "earth"
    ],
    "weak": [
     "grass",
     "water",
     "light",
     "ice"
    ]
   },
   "light": {
    "strong": [
     "wind",
     "dark"
    ],
    "weak": [
     "electric",
     "light"
    ]
   },
   "dark": {
    "strong": [
     "grass",
     "electric",
     "light"
    ],
    "weak": [
     "wind",
     "water"
    ]
   },
   "ice": {
    "strong": [
     "electric",
     "water"
    ],
    "weak": [
     "fire",
     "earth",
     "ice"
    ]
   }
  },
  "sources": [
   "https://gamewith.ai/aniimo/en/type-chart",
   "https://mobalytics.gg/gamebase/guides/aniimo-elemental-type-damage-explained-chart",
   "https://aniimotools.dev/guides/damage-formula/"
  ],
  "about": "Same matchups on GameWith and Mobalytics. Multipliers ×1.6 and ×0.625 from GameWith and AniimoTools (Mobalytics says 1.65 and 0.65). Dual-type targets multiply both matchups (AniimoTools)."
 }
};
if (typeof module !== "undefined") module.exports = window.ANIIMO_DATA;
