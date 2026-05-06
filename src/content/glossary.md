# Tend Glossary

Canonical names for Tend features. This file is not linked from the site nav — it's a reference for anyone writing copy (docs, FAQ, landing page, in-app strings) so the same concept uses the same name everywhere.

If a doc or page says something different from what's listed here, the other page is wrong.

---

## Tier & Intelligence

**Relationship Circles** — the four target tiers: Inner Circle, Close Friends, Regulars, Casual. Called "tiers" for short when context is clear. The *target* is what you set; it's aspirational.

**Target Tier** — the tier you assign to a friend. What you want your frequency to be.

**Actual Pattern** — the tier Tend computes from your recent connection history (90-day rolling window). What your frequency actually is. Referred to internally in code as `effectiveTier`; user-facing copy always says "Actual Pattern". **Status:** planned canonical — rollout in the tier-crossing prompt and How Tend Works happens in the in-app naming pass. Until then, older in-app strings may still say "effective tier".

**Tier Crossing Prompt** — the one-time modal asking whether to adjust your target tier after Actual Pattern drifts away from it. Never say "effective tier prompt" or "tier mismatch alert" in user-facing copy.

**Smart Tier Suggestion** — the suggestion to move a friend to a different tier when you change their frequency and the new frequency matches a different tier's boundaries. Distinct from Tier Crossing Prompt: this reacts to the present (a frequency edit), crossing reacts to the past (observed history).

---

**Capitalization convention:** multi-word feature names use Title Case in running prose (e.g., "Reach-Out Reminder", "Recovery Block", "Actual Pattern"). Code identifiers and internal comments may use lowercase (`effectiveTier`, `reachOutReminder`). Test file comments may still use legacy phrases like "day-of reminder" — those aren't user-facing and don't require updates.

## Learned Associations

**Learned Friend Association** — a pair of friends Tend has noticed you see together, with a prompt to explicitly link them. Passive, local, and always opt-out-able. Don't call it "auto-tagged friends" or "smart pairs".

**Manual Association** — a pair of friends you explicitly linked yourself via the Associations section on a profile. Unaffected by the learning toggle.

## Notifications

**Reach-Out Reminder** — the day-of notification telling you a friend is due or overdue. Don't call this a "day-of reminder" (that phrasing has appeared in drafts; use "reach-out reminder" everywhere).

**Future Connection Reminder** — the advance notification before a scheduled connection (configurable, defaults to 60 minutes before the event).

**Birthday Reminder** — the notification for a friend's birthday, with per-tier advance-warning days.

**Notification Center** — the in-app inbox accessed via the bell icon on the Home tab. Distinct from iOS push notifications (those appear on the lock screen; the Notification Center persists them in an inbox until you act).

## Social Energy

**Social Energy** — the fatigue-detection feature (off by default). Watches scheduled and recent connections for over-commitment patterns.

**Recovery Block** — the auto-generated iOS Calendar event that blocks recovery time when Social Energy triggers. Don't call this a "rest day" (early drafts used that phrasing; drop it).

**Extra Recovery** — the mode that lowers all Social Energy thresholds by one. Don't call this "ADHD Mode" in user-facing copy — the feature is for anyone who wants more breathing room, though the motivation is neurodivergent needs. The app's UI label is "Extra Recovery" across the board. **Known drift:** `docs/social-energy.md` still uses "ADHD Mode"; that file is on the list to reconcile.

**Social Density Nudge** — the pre-save warning when you're about to add a connection to an already-dense day. Informational only; doesn't block saving. Component file is `SocialDensityNudge.tsx`.

## Data & Safety

**Recently Deleted** — the 30-day holding area for soft-deleted friends. Accessible from Settings → Data & Backup → Recently Deleted. Don't call this "Trash" or "Archive".

**Stale DB Detection** — the on-launch check comparing local database timestamp against the latest cloud backup. The user-facing prompt is "Use Newer Backup?" — use that exact wording.

**Undo Toast** — the 5-second transient toast after a destructive action (delete, skip, batch op). Use "undo toast" or "Undo", not "snackbar" (Android term).

**Audit Log / Change History** — the per-friend timeline of all changes, visible by expanding "Advanced Details" on a profile. "Change History" is the user-facing name; "audit log" is internal/code.

## Connections

**Connection** — a single logged interaction with one or more friends.

**Event** — the container for one or more connections that share a date, location, and context (e.g., a group dinner). Used whenever a hangout involves more than one friend, even if you're writing a single note.

**Quick Log** — the long-press action on a friend or Due Soon row that opens an action sheet with four options: Call, Text, Hangout, Video.

**Skip** — the long-press action that advances a friend's due date by one frequency cycle without logging a connection. Distinct from Snooze.

**Snooze** — pushing a reminder back by 1 day. Affects the notification; doesn't change the due date.

## Contact & Calendar

**Linked Contact** — a friend bound to an iOS Contacts record. Shown with a badge on the profile.

**Contact Sync** — the one-tap action under Settings → Connected Apps that pulls updated fields (phone, email, address, birthday, photo) from linked iOS contacts.

**Auto-Spread** — the bulk-import behavior (for 10+ imported friends) that evenly distributes initial due dates across the frequency window so day one doesn't flood you with reach-out prompts.

**Calendar Sync** — the iOS Calendar integration that creates events for scheduled connections. "Sync Now" is the button that resyncs all upcoming events.

**Preferred Maps App** — the setting (Apple, Google, Waze, or Ask) that determines which app opens when you tap directions from a connection's location. Not "Default Maps App" or "Map Provider".
