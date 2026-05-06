# Intelligence

Tend is different from a generic CRM or reminder app because it watches how you actually connect and reflects your real patterns back to you. This page walks through the three ways Tend learns and adapts: the **Adaptive Tier System**, **Learned Friend Associations**, and **Smart Tier Suggestions**.

## A mirror for how you actually connect

The Relationship Circles — Inner Circle, Close Friends, Regulars, Casual — are the *target* tiers you set. But the frequency you wish you connected at and the frequency you actually connect at are often different things.

Tend computes an **Actual Pattern tier** from your recent connection history. It's the tier that best describes how often you've *actually* been in touch with each friend over a rolling 90-day window. This is the mirror: the app reflects your real rhythm back to you.

You'll see this in two places:
- **The friend's profile**, where the Actual Pattern badge sits alongside the Target Tier badge so you can see at a glance whether they match.
- **Tier crossing prompts** (described below), which surface drift the moment it happens.

## Tier crossing prompts

When your Actual Pattern tier drifts away from the Target tier you set — say, you put Alice in the Inner Circle hoping to see her weekly, but you've only connected monthly for four months — Tend asks:

> "Your actual pattern with Alice is Close Friends, but your target is Inner Circle. Adjust your target, or keep it as-is?"

You can:
- **Adjust to match** — Tend updates the target tier (and the default frequency) to match your real rhythm.
- **Keep current** — Tend leaves your target alone and stops asking about this drift until it changes again.

The prompt appears once per drift event, not repeatedly. If you dismiss it, it won't show up again until the pattern changes materially.

This is the single most important feature in Tend: your relationship goals stay honest instead of aspirational.

## Learned friend associations

Tend notices which friends you tend to see together. After three or more group hangouts with the same pair of friends, it quietly proposes linking them as associated — so next time you're planning something, the friend picker surfaces the partner as "Often with Alice."

Signals Tend uses:
- **Shared events** — if Alice and Bob are in the same connection, Tend counts a co-occurrence.
- **Removal signals** — if you remove one friend from an event, the count decrements.
- **Explicit response** — if you dismiss the suggestion, Tend remembers and won't ask again for that pair.

### Where suggestions appear

- **Friend profiles** — a "Suggested associations" card when pairs are ready to prompt.
- **After saving a group event** — a bottom toast with "Add," "Not now," and "No" buttons for ready pairs among the friends you just logged.
- **The friend picker** — "Often with Alice" sub-labels float associated friends to the top when you're adding participants to a new event.

### Opting out

Tend's learning is passive and local — nothing is uploaded, and the signals stay on your device. If you'd rather Tend not learn associations:

1. Go to **Settings → Personalization → Learning**.
2. Toggle **Learn friend associations** off.
3. Optionally tap **Clear all learned associations** to wipe the state.

Associations you've added manually are unaffected by the toggle — they stay put.

## Smart tier suggestions

When you change a friend's frequency in the Edit screen, Tend compares the new frequency to your tier boundaries. If the new frequency better matches a different tier than the one currently assigned, it suggests moving the friend — a one-tap way to keep your tier assignments aligned with the actual cadence you've chosen.

This is distinct from tier crossing: tier crossing reacts to the *past* (how often you've been connecting), smart suggestions react to the *present* (the frequency you just set).

## Why this matters

Most friendship trackers are calendars with guilt attached. Tend's intelligence features exist so the app adapts to your life rather than the other way around — reducing the burden of keeping promises you can't actually keep, and surfacing patterns you might not have noticed.

If you're new to Tend, the default experience is calm: tier crossing prompts only appear after meaningful drift, association suggestions only after a handful of hangouts, and Social Energy is off until you turn it on. You can go weeks without seeing any of these prompts — they only show up when something changed.
