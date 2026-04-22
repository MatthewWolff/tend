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
