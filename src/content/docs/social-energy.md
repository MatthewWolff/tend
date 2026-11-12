# Social Energy

Social Energy is Tend's fatigue-detection system. It watches your scheduled connections and automatically blocks recovery time on your iOS calendar when you're over-committed.

## What it does

Social Energy runs four heuristics against your upcoming and recent connections:

1. **Consecutive social days** — Detects streaks of back-to-back days with social events
2. **Weekly social day cap** — Counts how many days in a rolling 7-day window have events
3. **Daily density** — Flags days with too many events (nudge only, doesn't auto-block)
4. **Weekend hangover** — If both Saturday and Sunday have events, suggests blocking Monday morning

When any blocking heuristic triggers, Tend finds the next free day in your calendar and creates a recovery block.

## How to enable it

1. Go to **Settings**
2. Scroll to **Social Energy**
3. Toggle it **On**
4. Choose a preset (or customize thresholds manually)

Social Energy is **off by default** — it never creates calendar events until you enable it.

## The three presets

A threshold triggers when you go OVER it, so "2 days" means a block appears on the third
consecutive social day. In the app the first preset is labelled simply **Recharge**.

| Preset | Consecutive days allowed | Weekly cap |
|---|---|---|
| **Recharge** | 2 | 3 days/week |
| **Balanced** | 3 | 4 days/week |
| **Always On** | 5 | 6 days/week |

Every recovery block is the same evening window whatever your preset, so there is no
per-preset duration.

- **Recharge** is best for introverts or anyone who finds socializing draining after a couple of days in a row.
- **Balanced** is a good default for most people.
- **Always On** is for highly social people who rarely need downtime but want a safety net.

## Extra Recovery

Toggle **Extra Recovery** to lower all thresholds by 1. Research shows that people with ADHD experience social fatigue faster due to the executive effort of sustained social engagement, and this mode gives anyone who needs more breathing room — neurodivergent or otherwise — a lower bar for Social Energy to kick in.

With Extra Recovery on, the "Balanced" preset allows 2 consecutive days rather than 3, effectively matching the Recharge defaults.

## How recovery blocks appear in the calendar

When a heuristic triggers, Tend creates a calendar event on the next free day, in the
evening (5 PM to 10 PM). There are no half-day or full-day variants, and the window does
not vary by preset.

The event appears in your iOS Calendar with a title like "Recovery Time" so you can see it alongside your other commitments.

## How to dismiss a recovery block

If you don't need the recovery time, you can dismiss the block:

1. Open the recovery block in Tend (or your calendar)
2. Tap **Dismiss**

Dismissed blocks won't be recreated for the same date. Tend looks up to 3 days ahead for a free slot, so if your calendar is fully packed, it may not find a day to block — in that case, no event is created.

## Smart nudges

When you're scheduling a new connection and the day is already dense (multiple events), Tend shows a nudge before you save — a gentle heads-up that the day is getting packed. This nudge is informational only; it never blocks you from saving.
