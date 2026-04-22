import {
  Layers,
  Bell,
  Zap,
  Calendar,
  WifiOff,
  Users,
  SkipForward,
  ShieldCheck,
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { colors, TESTFLIGHT_URL } from '../theme';

interface FeatureSection {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const FEATURES: FeatureSection[] = [
  {
    icon: <Layers size={28} strokeWidth={1.5} />,
    title: 'Relationship Circles',
    description: 'Organize your friends into four tiers based on how often you want to connect — from your inner circle to casual acquaintances.',
    details: [
      'Inner Circle, Close Friends, Regulars, and Casual',
      'Set custom frequencies per friend (every 3 days, every 2 weeks, etc.)',
      'Smart tier suggestions based on your actual connection patterns',
    ],
  },
  {
    icon: <Bell size={28} strokeWidth={1.5} />,
    title: 'Smart Reminders',
    description: 'Gentle, frequency-based nudges that respect your schedule. No spam, no guilt — just timely prompts for the friends who matter.',
    details: [
      'Reminders based on your chosen frequency, not arbitrary timers',
      'Quiet hours respect your sleep and work schedule',
      'Skip or snooze when life gets busy',
    ],
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: 'Quick Logging',
    description: 'Log a connection in seconds with the long-press quick menu. Choose the type, and Tend handles the rest.',
    details: [
      'One-tap logging: call, text, hangout, video',
      'Group events with multiple friends',
      'Notes, locations, and connection levels',
    ],
  },
  {
    icon: <Calendar size={28} strokeWidth={1.5} />,
    title: 'Calendar Sync',
    description: 'Scheduled connections automatically appear in your iOS calendar. Edit in Tend or your calendar — they stay in sync.',
    details: [
      'Two-way sync with iOS Calendar',
      'Configurable reminders (15min, 30min, 1hr before)',
      'One-tap Sync Now button to resync everything',
    ],
  },
  {
    icon: <WifiOff size={28} strokeWidth={1.5} />,
    title: 'Offline-First',
    description: 'Everything works without an internet connection. Your data lives on your device first — cloud backup is optional.',
    details: [
      'Full functionality offline',
      'Optional encrypted cloud backup via Supabase',
      'Restore on a new device from any backup slot',
    ],
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: 'Contact Sync',
    description: 'Import friends from your contacts and keep their info in sync. Progressive permissions — Tend only asks for access when you need it.',
    details: [
      'Import from iOS Contacts with one tap',
      'Sync updated phone numbers, birthdays, and addresses',
      'Full or limited access — your choice',
    ],
  },
  {
    icon: <SkipForward size={28} strokeWidth={1.5} />,
    title: 'Skip & Snooze',
    description: 'Life gets busy. Skip a friend for one cycle or snooze a reminder — no guilt, no lost data.',
    details: [
      'Skip resets the timer for a full frequency cycle',
      '5-second undo in case you tap by accident',
      'Audit trail tracks skips so you can reflect later',
    ],
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: 'Private by Design',
    description: 'No analytics, no ads, no tracking. Your friendship data is yours alone.',
    details: [
      'All data stored on-device in SQLite',
      'Cloud backup encrypted in transit and at rest',
      'No third-party analytics or data sharing',
    ],
  },
];

export function Features() {
  return (
    <Layout title="Features">
      <div style={styles.content}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Everything you need to tend your friendships</h1>
          <p style={styles.subtitle}>
            Tend helps you stay connected with the people who matter — without the mental load of remembering who you haven't talked to in a while.
          </p>
        </section>

        <section style={styles.grid}>
          {FEATURES.map((feature, i) => (
            <div key={feature.title} style={styles.card}>
              <div style={styles.cardIcon}>{feature.icon}</div>
              <h2 style={styles.cardTitle}>{feature.title}</h2>
              <p style={styles.cardDesc}>{feature.description}</p>
              <ul style={styles.cardList}>
                {feature.details.map((detail, j) => (
                  <li key={j} style={styles.cardListItem}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section style={styles.cta}>
          <h2 style={styles.ctaTitle}>Ready to start tending?</h2>
          <p style={styles.ctaDesc}>Join the iOS beta and start building better habits around the relationships that matter.</p>
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ctaButton}
          >
            Join the Beta — iOS
          </a>
        </section>
      </div>
    </Layout>
  );
}

const styles: Record<string, React.CSSProperties> = {
  content: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  hero: {
    textAlign: 'center',
    paddingTop: 'clamp(2rem, 6vh, 4rem)',
    paddingBottom: '3rem',
    maxWidth: '640px',
    margin: '0 auto',
  },
  title: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    margin: '0 0 1rem',
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: colors.textSecondary,
    margin: 0,
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.25rem',
    marginBottom: '4rem',
  },
  card: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.surfaceBorder}`,
    borderRadius: '16px',
    padding: '1.5rem',
  },
  cardIcon: {
    color: colors.green,
    marginBottom: '0.75rem',
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: 600,
    margin: '0 0 0.5rem',
  },
  cardDesc: {
    fontSize: '0.95rem',
    color: colors.textSecondary,
    margin: '0 0 1rem',
    lineHeight: 1.5,
  },
  cardList: {
    margin: 0,
    paddingLeft: '1.25rem',
  },
  cardListItem: {
    fontSize: '0.85rem',
    color: colors.textTertiary,
    lineHeight: 1.6,
    marginBottom: '0.25rem',
  },
  cta: {
    textAlign: 'center',
    padding: '3rem 0 4rem',
    borderTop: `1px solid ${colors.surfaceBorder}`,
  },
  ctaTitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    margin: '0 0 0.75rem',
  },
  ctaDesc: {
    fontSize: '1rem',
    color: colors.textSecondary,
    margin: '0 0 1.5rem',
    maxWidth: '480px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.5,
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: colors.green,
    color: '#000',
    fontWeight: 600,
    fontSize: '1.05rem',
    padding: '0.875rem 2rem',
    borderRadius: '14px',
    textDecoration: 'none',
  },
};
