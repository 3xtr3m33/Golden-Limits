/* ============================================================
   Golden Limits — DATA (single source of truth)
   Loaded by index.html. Update this file ONLY.
   End-of-day routine: append each EXECUTED trade below, bump last_updated.
   Fields: id, date "YYYY-MM-DD", dir "LONG|SHORT", entry, pips (achieved, 1pip=$0.1),
           outcome "TP3|TP1|SL", grade 0-10, kind "limit|market", note (English, human tone).
   kind = "limit"  -> published limit-zone card that filled passively (counts as a
                       success if it filled and reached >=TP1, even without a live entry).
   kind = "market" -> my live sniper entry on a real-time reaction.
   Cancelled/expired signals -> update activity counters (no P&L).
============================================================ */
window.GL_DATA = {
  last_updated: "2026-06-12",
  activity: { cancelled: 19, pending: 0 },
  trades: [
    { id:4,  date:"2026-06-01", dir:"SHORT", entry:4479,   pips:70,   outcome:"TP1", grade:7, kind:"market", note:"First profit. TP1 hit, BE not moved (management lesson)." },
    { id:5,  date:"2026-06-02", dir:"LONG",  entry:4525.6, pips:94,   outcome:"TP1", grade:7, kind:"market", note:"Sweep-reclaim L1, runner back to BE." },
    { id:6,  date:"2026-06-02", dir:"LONG",  entry:4526,   pips:80,   outcome:"TP1", grade:7, kind:"market", note:"Sweep-reclaim L1 on NY volume, runner BE." },
    { id:7,  date:"2026-06-02", dir:"SHORT", entry:4521,   pips:230,  outcome:"TP3", grade:7, kind:"market", note:"Break+retest range low. First full TP3 winner." },
    { id:8,  date:"2026-06-02", dir:"SHORT", entry:4494,   pips:-50,  outcome:"SL",  grade:6, kind:"market", note:"Shorted into own demand vs H1. Manual exit on reclaim." },
    { id:9,  date:"2026-06-02", dir:"LONG",  entry:4483,   pips:70,   outcome:"TP1", grade:7, kind:"market", note:"Sweep-reclaim L6, runner BE." },
    { id:13, date:"2026-06-03", dir:"SHORT", entry:4464,   pips:160,  outcome:"TP3", grade:7, kind:"market", note:"Chop-fade top edge + 5m OB. Full TP3 winner." },
    { id:16, date:"2026-06-04", dir:"SHORT", entry:4512,   pips:350,  outcome:"TP3", grade:8, kind:"market", note:"Reject premium supply S2 4514-28. Best trade." },
    { id:19, date:"2026-06-05", dir:"SHORT", entry:4465,   pips:70,   outcome:"TP1", grade:8, kind:"market", note:"Reject Asia High supply, runner BE through NFP." },
    { id:20, date:"2026-06-05", dir:"LONG",  entry:4374,   pips:-130, outcome:"SL",  grade:7, kind:"market", note:"Counter-trend bounce on NFP trend day. Did not work." },
    { id:21, date:"2026-06-08", dir:"SHORT", entry:4340,   pips:200,  outcome:"TP1", grade:8, kind:"limit",  note:"Published limit zone at Asia High + H1 supply. Filled passively, TP1 hit, banked in profit. Thin volume day." },
    { id:23, date:"2026-06-09", dir:"SHORT", entry:4332,   pips:80,   outcome:"TP1", grade:7, kind:"market", note:"Break+retest of 4338-42 zone on volume. Scalp, TP1 banked, runner BE." },
    { id:26, date:"2026-06-09", dir:"SHORT", entry:4284,   pips:340,  outcome:"TP3", grade:7, kind:"market", note:"Trend-continuation sell-the-bounce reject at broken structure in ~1000p down-day. Full TP3 winner." },
    { id:27, date:"2026-06-09", dir:"SHORT", entry:4264,   pips:80,   outcome:"TP1", grade:7, kind:"market", note:"Trend-continuation sell-the-bounce reject at 4267-4278 sell-zone. TP1 banked, runner back to BE." },
    { id:30, date:"2026-06-10", dir:"SHORT", entry:4168,   pips:-60,  outcome:"SL",  grade:7, kind:"market", note:"Trend retest-short 4172.5. Stop sat 1.5p above retest high, swept by wick before TP1. CPI-day whipsaw." },
    { id:31, date:"2026-06-10", dir:"SHORT", entry:4161,   pips:-50,  outcome:"SL",  grade:8, kind:"market", note:"Break+retest of 4163-4179 consolidation. Range reclaimed, false break swept stop. News-whipsaw before CPI." },
    { id:32, date:"2026-06-11", dir:"LONG",  entry:4085.5, pips:205,  outcome:"TP2", grade:7, kind:"market", note:"Zone-reaction long off 15m bull OB after overnight V-reversal. TP1+TP2 banked, runner closed on published trail 4101. TP3 missed by 80p." },
    { id:34, date:"2026-06-11", dir:"LONG",  entry:4086,   pips:-65,  outcome:"SL",  grade:6.5, kind:"market", note:"Second test of the morning demand zone. Procedurally clean entry, but the zone was spent — third push broke it. Last sub-7 trade: channel bar raised to 7+." },
    { id:35, date:"2026-06-11", dir:"LONG",  entry:4089.5, pips:-70,  outcome:"SL",  grade:7, kind:"market", note:"Sweep-reclaim long off equal lows. Ran +66p and missed TP1 by 1.5p, then sell-side pressure broke the floor ahead of ECB. Market cancelled the setup." },
    { id:36, date:"2026-06-11", dir:"LONG",  entry:4060,   pips:180,  outcome:"TP1", grade:7, kind:"limit",  note:"Published limit at the day's key demand 4052-4060, filled on the PPI spike. First retest of the major origin: TP1 banked, runner peaked +330p near TP2 then closed at breakeven." },
    { id:37, date:"2026-06-11", dir:"LONG",  entry:4095,   pips:-45,  outcome:"SL",  grade:7.5, kind:"market", note:"Evening break+retest above 4093. The breakout turned out to be a stop sweep and price fell back into the range. Tight stop kept the damage small." },
    { id:41, date:"2026-06-12", dir:"LONG",  entry:4177,   pips:80,   outcome:"TP1", grade:8.5, kind:"market", note:"London swept the equal lows 4171 into the 15m OB and reclaimed — entry on the first reject close. TP1 banked, runner back to BE." },
    { id:42, date:"2026-06-12", dir:"LONG",  entry:4217,   pips:90,   outcome:"TP1", grade:8, kind:"market", note:"Trend retest after the 4205 structure break: pullback into the flip zone, reclaim confirmed. TP1 banked, runner held through hours of chop at the highs then closed at BE." },
    { id:43, date:"2026-06-12", dir:"LONG",  entry:4208,   pips:60,   outcome:"TP1", grade:7.5, kind:"market", note:"Sweep reclaim off the 4194-4200 floor: stops swept under the round number, buyers absorbed and reclaimed in one impulse bar. TP1 banked in 10 minutes, runner back to BE on the pullback." },
    { id:44, date:"2026-06-12", dir:"LONG",  entry:4201.5, pips:-50,  outcome:"SL",  grade:7.5, kind:"market", note:"Second sweep-reclaim attempt at a tired floor after eight defenses with fading bounces. The reclaim candle faded after entry and sellers pushed through. Lesson logged: enter on fully closed bars only, skip exhausted zones." }
  ]
};
