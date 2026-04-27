import {
  Layers, Bell, Zap, Calendar, WifiOff, Users, SkipForward,
  ShieldCheck, Tag, Link2, ClipboardList, MapPin, CheckSquare, BatteryCharging,
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { colors, fonts, TESTFLIGHT_URL } from '../theme';
import { useReveal } from '../useReveal';

interface FeatureSection {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const FEATURES: FeatureSection[] = [
  {
    icon: <Layers size={26} strokeWidth={1.5} />,
    title: 'Relationship Circles',
    description: 'Organize your friends into four tiers based on how often you want to connect — from your inner circle to casual acquaintances.',
    details: [
      'Inner Circle, Close Friends, Regulars, and Casual',
      'Set custom frequencies per friend (every 3 days, every 2 weeks, etc.)',
      'Smart tier suggestions based on your actual connection patterns',
    ],
  },
  {
    icon: <Bell size={26} strokeWidth={1.5} />,
    title: 'Smart Reminders',
    description: 'Gentle, frequency-based nudges that respect your schedule. No spam, no guilt — just timely prompts for the friends who matter.',
    details: [
      'Reminders based on your chosen frequency, not arbitrary timers',
      'Quiet hours respect your sleep and work schedule',
      'Skip or snooze when life gets busy',
    ],
  },
  {
    icon: <Zap size={26} strokeWidth={1.5} />,
    title: 'Quick Logging',
    description: 'Log a connection in seconds with the long-press quick menu. Choose the type, and Tend handles the rest.',
    details: [
      'One-tap logging: call, text, hangout, video',
      'Group events with multiple friends',
      'Notes, locations, and connection levels',
    ],
  },
  {
    icon: <Calendar size={26} strokeWidth={1.5} />,
    title: 'Calendar Sync',
    description: 'Scheduled connections automatically appear in your iOS calendar with the friend\'s name, time, and location.',
    details: [
      'Two-way sync with iOS Calendar',
      'Configurable reminders (15min, 30min, 1hr before)',
      'One-tap Sync Now to resync everything',
    ],
  },
  {
    icon: <WifiOff size={26} strokeWidth={1.5} />,
    title: 'Offline-First',
    description: 'Everything works without an internet connection. Your data lives on your device — cloud backup is optional.',
    details: [
      'Full functionality offline',
      'Optional encrypted cloud backup',
      'Restore on a new device from any backup slot',
    ],
  },
  {
    icon: <Users size={26} strokeWidth={1.5} />,
    title: 'Contact Sync',
    description: 'Import friends from your contacts and keep their info in sync. Tend only asks for access when you need it.',
    details: [
      'Import from iOS Contacts with one tap',
      'Sync updated phone numbers, birthdays, and addresses',
      'Full or limited access — your choice',
    ],
  },
  {
    icon: <SkipForward size={26} strokeWidth={1.5} />,
    title: 'Skip & Snooze',
    description: 'Skip a friend for one cycle or snooze a reminder. No guilt, no lost data.',
    details: [
      'Skip resets the timer for a full frequency cycle',
      '5-second undo in case you tap by accident',
      'Audit trail tracks skips so you can reflect later',
    ],
  },
  {
    icon: <Tag size={26} strokeWidth={1.5} />,
    title: 'Tags',
    description: 'Organize friends with custom labels like "Seattle," "Hiking," or "College." Filter and browse by tag.',
    details: [
      'Create unlimited custom tags per friend',
      'Filter the friends list by one or more tags',
      'Suggested tags ranked by how often you use them',
    ],
  },
  {
    icon: <Link2 size={26} strokeWidth={1.5} />,
    title: 'Friend Associations',
    description: 'Link friends who know each other. See mutual connections on each profile for group hangout ideas.',
    details: [
      'Associate any two friends with a single tap',
      'View mutual connections on each profile',
      'Great for remembering who introduced you to whom',
    ],
  },
  {
    icon: <ClipboardList size={26} strokeWidth={1.5} />,
    title: 'Change History',
    description: 'Every change — frequency updates, tier changes, skips — is tracked in a detailed audit log.',
    details: [
      'Full timeline of all modifications per friend',
      'Tracks who initiated changes and when',
      'Visible in the Advanced section of each profile',
    ],
  },
  {
    icon: <MapPin size={26} strokeWidth={1.5} />,
    title: 'Transit Time',
    description: 'See travel time to a friend before you commit to plans. Driving, transit, or walking.',
    details: [
      'Powered by Google Routes API',
      'Choose your preferred travel mode and maps app',
      'Travel time from home or current location',
    ],
  },
  {
    icon: <CheckSquare size={26} strokeWidth={1.5} />,
    title: 'Batch Operations',
    description: 'Select multiple friends to update frequencies, change tiers, add tags, or archive in bulk.',
    details: [
      'Multi-select mode in the Friends tab',
      'Bulk update frequency, tier, or tags',
      'Batch delete and restore with undo support',
    ],
  },
  {
    icon: <BatteryCharging size={26} strokeWidth={1.5} />,
    title: 'Social Energy',
    description: 'Detects when you\'re socially over-committed and auto-blocks recovery time on your calendar.',
    details: [
      'Three presets: Recharge Often, Balanced, Always On',
      'Extra Recovery mode with lower thresholds',
      'Auto-blocks recovery time in your iOS calendar',
      'Smart nudges before you over-schedule',
    ],
  },
  {
    icon: <ShieldCheck size={26} strokeWidth={1.5} />,
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
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <Layout title="Features">
      <div ref={revealRef} style={styles.content}>
        <section style={styles.hero}>
          <h1 className="reveal" style={styles.title}>
            Everything you need to<br />
            <span style={{ color: colors.green }}>tend your friendships</span>
          </h1>
          <p className="reveal" style={styles.subtitle}>
            Stay connected with the people who matter — without the mental load.
          </p>
        </section>

        <section className="reveal-stagger" style={styles.grid}>
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="reveal"
              style={{ ...styles.card, '--i': i } as React.CSSProperties}
            >
              <div style={styles.cardIcon}>{feature.icon}</div>
              <h2 style={styles.cardTitle}>{feature.title}</h2>
              <p style={styles.cardDesc}>{feature.description}</p>
              <ul style={styles.cardList}>
                {feature.details.map((detail, j) => (
                  <li key={j} style={styles.cardListItem}>
                    <span style={styles.listBullet} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="reveal" style={styles.cta}>
          <h2 style={styles.ctaTitle}>Ready to start tending?</h2>
          <p style={styles.ctaDesc}>Join the iOS beta and build better habits around the relationships that matter.</p>
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Join the Beta
          </a>
        </section>
      </div>
    </Layout>
  );
}

const styles: Record<string, React.CSSProperties> = {
  content: {
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  hero: {
    textAlign: 'center',
    paddingTop: 'clamp(3rem, 8vh, 5rem)',
    paddingBottom: '3.5rem',
    maxWidth: '680px',
    margin: '0 auto',
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
    fontWeight: 400,
    letterSpacing: '-0.02em',
    margin: '0 0 1rem',
    lineHeight: 1.15,
  },
  subtitle: {
    fontSize: '1.05rem',
    color: colors.textSecondary,
    margin: 0,
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    marginBottom: '5rem',
  },
  card: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.surfaceBorder}`,
    borderRadius: '16px',
    padding: '1.75rem',
    transition: 'border-color 0.3s',
  },
  cardIcon: {
    color: colors.green,
    marginBottom: '1rem',
    opacity: 0.85,
  },
  cardTitle: {
    fontFamily: fonts.display,
    fontSize: '1.15rem',
    fontWeight: 500,
    margin: '0 0 0.5rem',
    letterSpacing: '-0.01em',
  },
  cardDesc: {
    fontSize: '0.9rem',
    color: colors.textSecondary,
    margin: '0 0 1rem',
    lineHeight: 1.6,
  },
  cardList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  cardListItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.625rem',
    fontSize: '0.825rem',
    color: colors.textTertiary,
    lineHeight: 1.6,
    marginBottom: '0.375rem',
  },
  listBullet: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: colors.green,
    marginTop: '0.5em',
    flexShrink: 0,
    opacity: 0.6,
  },
  cta: {
    textAlign: 'center',
    padding: '3.5rem 0 5rem',
    borderTop: `1px solid ${colors.surfaceBorder}`,
  },
  ctaTitle: {
    fontFamily: fonts.display,
    fontSize: '1.75rem',
    fontWeight: 400,
    margin: '0 0 0.75rem',
    letterSpacing: '-0.02em',
  },
  ctaDesc: {
    fontSize: '1rem',
    color: colors.textSecondary,
    margin: '0 0 2rem',
    maxWidth: '480px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.5,
  },
};
