import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Layout } from '../components/Layout';
import { colors } from '../theme';

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
        answer: 'Download the beta from TestFlight, sign in with Google or Apple, and add your first friend. Set how often you want to connect (e.g., every 2 weeks), and Tend will remind you when it\'s time to reach out.',
      },
      {
        question: 'Is Tend free?',
        answer: 'Tend is currently free during the beta period. Future pricing has not been determined, but the core functionality will remain accessible.',
      },
      {
        question: 'What platforms is Tend available on?',
        answer: 'Tend is currently available for iOS only, in beta via TestFlight. An Android version is not currently planned.',
      },
    ],
  },
  {
    title: 'Features',
    items: [
      {
        question: 'What are Relationship Circles?',
        answer: 'Relationship Circles are four tiers that organize your friends by closeness: Inner Circle (most frequent contact), Close Friends, Regulars, and Casual. Each tier has a default connection frequency, but you can customize it per friend.',
      },
      {
        question: 'How do reminders work?',
        answer: 'Tend calculates when each friend is "due" based on your last connection and the frequency you set. When someone becomes overdue, you get a notification. Reminders respect your quiet hours and won\'t spam you.',
      },
      {
        question: 'Can I import my contacts?',
        answer: 'Yes! Tap "Import from Contacts" to select friends from your iOS address book. Tend stores the link so you can sync updated contact info later. No contact permission is required for the initial import — iOS handles it through the system picker.',
      },
      {
        question: 'What\'s the Skip feature?',
        answer: 'Skip advances a friend\'s due date by one full frequency cycle without logging a connection. It\'s for when you know you\'re not going to reach out this cycle but don\'t want to be reminded. You get a 5-second undo in case you tap by accident.',
      },
      {
        question: 'Does Tend sync with my calendar?',
        answer: 'Yes. When you schedule a future connection, it can automatically create an event in your iOS calendar with the friend\'s name, time, and location. You can also tap "Sync Now" in Settings to resync all upcoming events.',
      },
    ],
  },
  {
    title: 'Privacy & Data',
    items: [
      {
        question: 'Where is my data stored?',
        answer: 'All data is stored locally on your device in a SQLite database. Cloud backup is optional — if you enable it, your database is encrypted and uploaded to Supabase (a secure cloud platform). You can delete your cloud data at any time.',
      },
      {
        question: 'Do you track or sell my data?',
        answer: 'No. Tend has no analytics, no ads, and no third-party tracking. The only network calls are for authentication (Google/Apple sign-in) and optional cloud backup. Your friendship data never leaves your device unless you enable backup.',
      },
      {
        question: 'What happens if I delete my account?',
        answer: 'All cloud data is permanently deleted, including backups. Your local data is erased from the device. This action cannot be undone.',
      },
      {
        question: 'How does cloud backup work?',
        answer: 'Tend offers three backup slots: continuous sync (every 30 seconds), daily snapshot, and manual backup. All are encrypted in transit and at rest. You can restore from any slot on a new device after signing in.',
      },
    ],
  },
  {
    title: 'Troubleshooting',
    items: [
      {
        question: 'My notifications aren\'t working',
        answer: 'Check that notifications are enabled in iOS Settings > Tend > Notifications. Also verify that notification settings are turned on in Tend\'s Settings tab. Notifications respect quiet hours — check that your current time isn\'t in the quiet window.',
      },
      {
        question: 'Calendar events aren\'t showing up',
        answer: 'Make sure Calendar Sync is enabled in Settings. If events were synced on another device, tap "Sync Now" to recreate them on this device. Check that Tend has calendar permission in iOS Settings > Privacy > Calendars.',
      },
      {
        question: 'How do I restore from a backup?',
        answer: 'Sign in with the same account you used to create the backup. Tend will detect existing backups and offer to restore. Choose the most recent backup slot (sync, snapshot, or manual). After restore, your data will appear as it was when the backup was created.',
      },
    ],
  },
];

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ ...styles.item, borderColor: colors.surfaceBorder }}>
      <button
        style={styles.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span style={styles.questionText}>{item.question}</span>
        <ChevronDown
          size={18}
          color={colors.textTertiary}
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
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
  return (
    <Layout title="FAQ">
      <div style={styles.content}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Frequently Asked Questions</h1>
          <p style={styles.subtitle}>
            Everything you need to know about Tend.
          </p>
        </section>

        {FAQ_DATA.map((category) => (
          <section key={category.title} style={styles.category}>
            <h2 style={styles.categoryTitle}>{category.title}</h2>
            <div style={styles.itemList}>
              {category.items.map((item) => (
                <AccordionItem key={item.question} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}

const styles: Record<string, React.CSSProperties> = {
  content: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '0 1.5rem 4rem',
  },
  hero: {
    paddingTop: 'clamp(2rem, 6vh, 4rem)',
    paddingBottom: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    margin: '0 0 0.75rem',
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: colors.textSecondary,
    margin: 0,
    lineHeight: 1.5,
  },
  category: {
    marginBottom: '1.5rem',
    backgroundColor: colors.surface,
    border: `1px solid ${colors.surfaceBorder}`,
    borderRadius: '16px',
    padding: '1.5rem',
  },
  categoryTitle: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: colors.green,
    margin: '0 0 0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  itemList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },
  item: {
    borderBottom: '1px solid',
  },
  question: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    width: '100%',
    padding: '1rem 0',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    color: colors.textPrimary,
    fontFamily: 'inherit',
  },
  questionText: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  answer: {
    paddingBottom: '1rem',
  },
  answerText: {
    fontSize: '0.95rem',
    color: colors.textSecondary,
    lineHeight: 1.6,
    margin: 0,
  },
};
