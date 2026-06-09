# Golden Limits — Dashboard

Private, static, data-driven XAUUSD trade dashboard.

- `index.html` — the view (KPIs, equity curve, daily breakdown, trade table). Do **not** edit by hand.
- `data.js` — the single source of truth (`window.GL_DATA`). All numbers render from here.

## Daily update workflow

End of each trading day:

1. Append every **executed** trade to `window.GL_DATA.trades` in `data.js`
   (fields: `id, date, dir, entry, pips, outcome, grade, kind, note`).
2. Bump `last_updated`; update `activity.cancelled` / `activity.pending`.
3. Commit and push:
   ```
   git add data.js
   git commit -m "EOD update YYYY-MM-DD"
   git push origin main
   ```

The host auto-rebuilds on push and the live dashboard refreshes within ~1 minute.
Source of numbers: `our_signals_ledger.md`. Count executed trades only.
