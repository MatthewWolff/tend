import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Layout } from '../components/Layout';
import { colors, fonts } from '../theme';
import { useReveal } from '../useReveal';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
  {
    title: 'Getting Started',
    items: [
      {
        question: 'What is Tend?',
        answer: 'Tend is a personal relationship manager for iOS. It helps you keep track of your friendships by setting connection frequencies, logging interactions, and sending gentle reminders when someone is overdue for a catch-up.',
      },
      {
        question: 'How do I get started?',
        answer: 'Download Tend from the App Store, sign in with Google or Apple, and add your first friend. Set how often you want to connect (e.g., every 2 weeks), and Tend will remind you when it\'s time to reach out. A TestFlight beta also runs alongside the public release if you want early access to upcoming features.',
      },
      {
        question: 'Is Tend free?',
        answer: 'Yes. Tend is currently free on the App Store. Future pricing has not been determined, but the core functionality will remain accessible.',
      },
      {
        question: 'What platforms is Tend available on?',
        answer: 'Tend is currently available for iOS only, on the App Store. An Android version is not currently planned.',
      },
    ],
  },
  {
    title: 'Features',
    items: [
      {
        question: 'What are Relationship Circles?',
        answer: 'Relationship Circles are four tiers that organize your friends by closeness: Inner Circle, Close Friends, Regulars, and Casual. Each tier has a default connection frequency, but you can customize it per friend.',
      },
      {
        question: 'How do reminders work?',
        answer: 'Tend calculates when each friend is "due" based on your last connection and the frequency you set. When someone becomes overdue, you get a notification. Reminders respect your quiet hours.',
      },
      {
        question: 'Can I import my contacts?',
        answer: 'Yes! Tap "Import from Contacts" to select friends from your iOS address book. No contact permission is required for the initial import — iOS handles it through the system picker.',
      },
      {
        question: 'What\'s the Skip feature?',
        answer: 'Skip advances a friend\'s due date by one full frequency cycle without logging a connection. You get a 5-second undo in case you tap by accident.',
      },
      {
        question: 'Does Tend sync with my calendar?',
        answer: 'Yes. When you schedule a future connection, it creates an event in your iOS calendar with the friend\'s name, time, and location. Tap "Sync Now" in Settings to resync all upcoming events.',
      },
      {
        question: 'Will my events move when I travel?',
        answer: 'No. Each event is anchored to the timezone you set when you create it, so a 6 PM dinner in New York stays a 6 PM dinner in New York — even if you\'re in Los Angeles when the reminder fires. You can pick a timezone per event in the connection form; it defaults to your device\'s current timezone.',
      },
    ],
  },
  {
    title: 'Intelligence',
    items: [
      {
        question: 'Does Tend watch how I actually use it?',
        answer: 'Yes, locally. Tend computes an "Actual Pattern" tier for each friend from your recent connection history (a 90-day rolling window) and compares it to the target tier you set. If the two drift apart — say, you put someone in the Inner Circle but have only connected monthly — Tend shows a one-time prompt asking whether to adjust your target or keep it. Nothing leaves your device.',
      },
      {
        question: 'Does Tend learn which friends I see together?',
        answer: 'Yes. After a few group hangouts with the same pair, Tend quietly proposes linking them as associated friends. Suggestions appear on profiles, after saving a group event, and as "Often with Alice" sub-labels in the friend picker. The learning is passive and local — nothing is uploaded — and you can opt out or clear what Tend has learned from Settings when you want to.',
      },
    ],
  },
  {
    title: 'Privacy & Data',
    items: [
      {
        question: 'Where is my data stored?',
        answer: 'All data is stored locally on your device in SQLite. Cloud backup is optional — if enabled, your database is encrypted and uploaded to Supabase. You can delete cloud data at any time.',
      },
      {
        question: 'Do you track or sell my data?',
        answer: 'No. We never sell or share your data. Network calls are limited to authentication, optional cloud backup, and the optional "Ask AI" feature (which sends only your question text to generate a query — your actual data stays on-device). Anonymous usage counters (e.g., "friend added") help us improve the app but contain no personal information.',
      },
      {
        question: 'What happens if I delete a friend by accident?',
        answer: 'Deleted friends are not gone for 30 days. They land in Recently Deleted (Settings → Data & Backup → Recently Deleted) with one-tap restore. Their connections, events, and tags come back with them — a full recovery within the window. A 5-second undo toast also appears immediately after most destructive actions, including single and batch deletes.',
      },
      {
        question: 'What happens if I delete my account?',
        answer: 'All cloud data is permanently deleted, including backups. Your local data is erased from the device. This cannot be undone.',
      },
      {
        question: 'How does cloud backup work?',
        answer: 'Tend offers three backup types: continuous sync (every 30 seconds), daily snapshot, and manual backup. All are encrypted in transit and at rest.',
      },
      {
        question: 'How does "Ask AI" work? Is my data sent to an AI?',
        answer: 'No personal data leaves your device. When you ask a question like "Who have I seen most?", only the question text and table structure (column names) are sent to an AI service to generate a database query. That query then runs locally on your phone against your own data. Results never leave your device.',
      },
    ],
  },
  {
    title: 'Social Energy',
    items: [
      {
        question: 'What is Social Energy?',
        answer: 'Social Energy detects when you\'re socially over-committed based on your connections. When it detects fatigue patterns — too many consecutive social days, exceeding your weekly cap, or a packed weekend — it blocks recovery time on your iOS calendar.',
      },
      {
        question: 'How does the recovery blocker work?',
        answer: 'When Social Energy detects you\'ve exceeded your thresholds, it finds the next free day and creates a recovery block on your calendar. Blocks can be half-day or full day depending on your preset. Dismiss any block with a single tap.',
      },
      {
        question: 'What are the preset options?',
        answer: '"Recharge Often" triggers recovery after 2 consecutive social days or 3 in a week — best for introverts. "Balanced" triggers after 3 days or 4 in a week. "Always On" allows up to 5 consecutive days or 6 in a week. Enable Extra Recovery to lower all thresholds by 1.',
      },
    ],
  },
  {
    title: 'Troubleshooting',
    items: [
      {
        question: 'My notifications aren\'t working',
        answer: 'Check that notifications are enabled in iOS Settings > Tend > Notifications. Also verify notification settings in Tend\'s Settings tab. Notifications respect quiet hours.',
      },
      {
        question: 'Calendar events aren\'t showing up',
        answer: 'Make sure Calendar Sync is enabled in Settings. Tap "Sync Now" to recreate events. Check that Tend has calendar permission in iOS Settings > Privacy > Calendars.',
      },
      {
        question: 'How do I restore from a backup?',
        answer: 'Sign in with the same account. Tend detects existing backups and offers to restore. Choose the most recent backup slot.',
      },
    ],
  },
];

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ ...styles.item, borderColor: open ? colors.surfaceBorderHover : colors.surfaceBorder }}>
      <button
        style={styles.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span style={styles.questionText}>{item.question}</span>
        <ChevronDown
          size={16}
          color={colors.textTertiary}
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            flexShrink: 0,
          }}
        />
      </button>
      {open && (
        <div style={styles.answer}>
          <p style={styles.answerText}>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <Layout title="FAQ">
      <div ref={revealRef} style={styles.content}>
        <section style={styles.hero}>
          <h1 className="reveal" style={styles.title}>Frequently asked questions</h1>
          <p className="reveal" style={styles.subtitle}>
            Everything you need to know about Tend.
          </p>
        </section>

        <div className="reveal-stagger">
          {FAQ_DATA.map((category, i) => (
            <section
              key={category.title}
              className="reveal"
              style={{ ...styles.category, '--i': i } as React.CSSProperties}
            >
              <h2 style={styles.categoryTitle}>{category.title}</h2>
              <div>
                {category.items.map((item) => (
                  <AccordionItem key={item.question} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}

const styles: Record<string, React.CSSProperties> = {
  content: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '0 2rem 5rem',
  },
  hero: {
    paddingTop: 'clamp(3rem, 8vh, 5rem)',
    paddingBottom: '2.5rem',
    textAlign: 'center',
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 400,
    letterSpacing: '-0.02em',
    margin: '0 0 0.75rem',
    lineHeight: 1.15,
  },
  subtitle: {
    fontSize: '1.05rem',
    color: colors.textSecondary,
    margin: 0,
    lineHeight: 1.5,
  },
  category: {
    marginBottom: '1.25rem',
    backgroundColor: colors.surface,
    border: `1px solid ${colors.surfaceBorder}`,
    borderRadius: '16px',
    padding: '1.5rem 1.75rem',
  },
  categoryTitle: {
    fontSize: '0.7rem',
    fontWeight: 700,
    color: colors.green,
    margin: '0 0 0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  item: {
    borderBottom: '1px solid',
    transition: 'border-color 0.2s',
  },
  question: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    width: '100%',
    padding: '0.875rem 0',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    color: colors.textPrimary,
    fontFamily: fonts.body,
  },
  questionText: {
    fontSize: '0.95rem',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  answer: {
    paddingBottom: '0.875rem',
  },
  answerText: {
    fontSize: '0.9rem',
    color: colors.textSecondary,
    lineHeight: 1.7,
    margin: 0,
  },
};
