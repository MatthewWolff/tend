# Reminders & Notifications

Tend's reminder system is frequency-based — you choose how often to connect with each friend, and Tend handles the rest.

## How reminders work

1. You set a frequency for each friend (e.g., "every 2 weeks")
2. When you log a connection, the **next due date** is calculated: `connection date + frequency`
3. When the due date arrives, Tend sends a notification
4. You reach out (or skip), and the cycle resets

Tend doesn't spam you. Each friend gets at most one active reminder at a time.

## Notification types

| Type | When it fires | Can snooze? |
|---|---|---|
| **Reach-out** | When a friend becomes due or overdue | Yes |
| **Birthday** | On a friend's birthday (if set) | Yes |
| **Future connection** | Before a scheduled connection (configurable) | No |

## Quiet hours

Tend respects your schedule. Set quiet hours in **Settings → Notifications** to prevent reminders during sleep or focus time. Notifications are held and delivered at the next available time.

## The Notification Center

Tend has its own **Notification Center** inside the app — the bell icon at the top right of the Home tab. It's a separate surface from iOS system notifications:

- **iOS push notifications** appear on your lock screen and Notification Center the way any app's notifications do.
- **Tend's Notification Center** keeps an in-app inbox of every reminder, whether or not you saw the push when it fired. Items persist until you act on them (log, dismiss, or snooze), so you won't lose a prompt just because you swiped away the push notification.

The bell badge shows the pending count. Opening the inbox groups items by urgency — Overdue, Today, This Week, Upcoming — so you can triage at a glance. Birthdays and reach-out reminders share the same urgency sort, so a birthday due today sits with the other items due today.

### Swipe actions

Every row in the Notification Center is swipeable:

- **Swipe left** reveals the primary actions for that notification type: **log the connection**, **snooze** (pushes it back by 1 day, where supported), and **delete** (drops the notification without logging).
- **Swipe right** reveals a shortcut to **View Profile** for the friend the notification is about.
- **Tap the row** opens the primary action for that notification's type — the connection form (for reach-out and future-connection reminders) or the friend's profile (for birthdays and info-only prompts).

You can also **Clear All** from the header to empty the inbox at once — useful if you've batched up reach-outs and want a clean slate.

## Skip vs. Snooze

Two ways to defer a reminder:

### Skip (long-press → "Skip this time")
- Advances the due date by **one full frequency cycle**
- Means "I'm intentionally not reaching out this cycle"
- Shows in the friend's audit log as "Skipped"
- 5-second undo toast in case of accidental tap

### Snooze (swipe on notification)
- Pushes the notification back by **1 day**
- Means "not right now, but soon"
- The friend is still due — just the notification is delayed

## Notification settings

In **Settings → Notifications**, you can configure:

- **Per-type toggles** — enable/disable each notification type independently
- **Quiet hours** — start and end time (notifications held during this window)
- **Future connection reminder** — how far in advance (e.g., 60 minutes before)

## Overdue friends

When a friend passes their due date, they appear in the **Next Due** list on the Home screen, sorted by urgency (most overdue first). The status color changes:

- **Green** — on track (due date in the future)
- **Yellow** — due soon (within a few days)
- **Red** — overdue (past the due date)
