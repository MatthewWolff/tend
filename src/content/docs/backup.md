# Backup & Restore

Tend stores all data locally on your device. Cloud backup is optional — when enabled, your database is encrypted and uploaded to a secure cloud service.

## How backup works

Tend offers three backup slots:

| Slot | Frequency | Purpose |
|---|---|---|
| **Continuous sync** | Every 30 seconds (on data change) | Always up-to-date copy |
| **Daily snapshot** | Once per day | Point-in-time recovery |
| **Manual backup** | On demand (up to 3 slots) | Before risky operations |

All backups are:
- **Encrypted** in transit (TLS) and at rest (Supabase Storage encryption)
- **Per-user** — your data is isolated from other users
- **Deletable** — you can remove all cloud data at any time

## Enabling backup

1. Go to **Settings → Cloud Backup**
2. Toggle backup on
3. Continuous sync starts automatically
4. Manual backups available via the "Back Up Now" button

## Restoring from backup

When you sign in on a new device (or after reinstalling), Tend checks for existing backups:

1. Sign in with the same Google or Apple account
2. Tend detects your backup slots
3. Choose the most recent one (sync, snapshot, or manual)
4. Data is downloaded and replaces the local database
5. The app restarts with your restored data

After restore, calendar events are automatically re-synced to your new device's iOS Calendar.

## What's backed up

Everything in the Tend database:

- Friends (names, frequencies, tiers, contact links)
- Connections (dates, types, notes, levels)
- Events (group connections, locations, calendar sync)
- Tags and associations
- Settings (notification preferences, tier boundaries)
- Notification queue
- Audit log (change history)

## What's NOT backed up

- **iOS Calendar events** — re-synced automatically after restore
- **Auth tokens** — you re-authenticate on the new device
- **Profile photos** — referenced by URL from iOS Contacts

## Accidental deletes

Deleting a friend is not final for 30 days. Removed friends land in **Recently Deleted** (Settings → Data & Backup → Recently Deleted), where they can be restored with one tap. The row shows a badge when items are present, and each entry lists how many days remain before it's permanently purged.

- Friends you delete stay recoverable for 30 days, then are purged automatically in the background.
- Batch deletes (from the Friends tab's multi-select Edit mode) land in the same list — you can restore them individually or all together.
- Restoring a friend makes them reappear in your list immediately. Their connections, events, and tags come back with them, giving you a full recovery within the 30-day window.

Separately, Tend surfaces a 5-second **Undo** toast after most destructive actions — delete a friend, skip a reminder, or run a batch operation, and you'll have a few seconds to revert before the change settles.

## Stale local database detection

When you sign in on a device where you've used Tend before — including after a reinstall, restore from iCloud, or returning from a long break — Tend compares the local database timestamp against the most recent cloud backup.

If the cloud has a newer snapshot than what's on the device, you'll see a **"Use Newer Backup?"** prompt on launch. **Use Newer Backup** pulls the cloud copy down and replaces the local data; **Keep Local Data** leaves your device as-is and continues syncing from the current local state.

This prevents the "I added friends on my iPad yesterday and they're missing on my phone today" class of surprise. The prompt only appears when there's a meaningful difference — it won't pester you after routine sync lag.

## Data safety

- Backups are tied to your authenticated account
- Row-Level Security (RLS) on the cloud database prevents unauthorized access
- You can delete all cloud data from **Settings → Cloud Backup → Delete Cloud Data**
- Deleting your account permanently removes all cloud data

## Troubleshooting

**Backup shows as "stale"**: The continuous sync may have been interrupted. Open the app and let it sync — it should update within 30 seconds.

**Restore fails**: Ensure you have a stable internet connection. If the backup was created with a newer app version, you may need to update the app first.

**Calendar events missing after restore**: Go to **Settings → Calendar Sync → Sync Now** to re-create all calendar events on the new device.
