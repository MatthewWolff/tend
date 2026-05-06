import {
  Layers, Bell, Zap, Calendar, WifiOff, Users, SkipForward,
  ShieldCheck, Tag, Link2, ClipboardList, MapPin, CheckSquare, BatteryCharging,
  Sparkles, LifeBuoy, Accessibility,
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
      'Four-question tier quiz calibrates boundaries to your life',
    ],
  },
  {
    icon: <Sparkles size={26} strokeWidth={1.5} />,
    title: 'Adaptive Tier System',
    description: 'Tend is a mirror for how you actually connect. It watches your real rhythm and reflects it back as an Actual Pattern tier. When that drifts from the target tier you set, Tend asks whether to adjust — so your goals stay honest instead of aspirational.',
    details: [
      'Actual Pattern tier derived from recent connection history',
      'Tier-crossing prompts surface drift at the moment it happens',
      'Smart tier suggestions when you change a friend\'s frequency',
    ],
  },
  {
    icon: <Link2 size={26} strokeWidth={1.5} />,
    title: 'Learned Friend Associations',
    description: 'After 3+ group hangouts with the same pair, Tend notices which friends you tend to see together and quietly suggests linking them. Accept, dismiss, or turn off the learning entirely — and manually link any two friends whenever you want.',
    details: [
      'Passive learning from shared hangouts — nothing uploaded',
      '"Often with Alice" sub-labels in the friend picker when planning',
      'Suggestions surface on profiles and after saving group events',
      'Opt out or clear learned data from Settings',
    ],
  },
  {
    icon: <BatteryCharging size={26} strokeWidth={1.5} />,
    title: 'Social Energy',
    description: 'Detects when you\'re socially over-committed, nudges you before you over-schedule, and auto-blocks recovery time on your calendar.',
    details: [
      'Three presets: Recharge Often, Balanced, Always On',
      'Extra Recovery: lower thresholds for neurodivergent needs',
      'Auto-blocks Recovery Block events in your iOS calendar',
      'Smart density nudges before you save a crowded week',
    ],
  },
  {
    icon: <Bell size={26} strokeWidth={1.5} />,
    title: 'Smart Reminders',
    description: 'Gentle, frequency-based nudges that respect your schedule. No spam, no guilt — just timely prompts for the friends who matter — and an in-app Notification Center that lets you snooze, log, or dismiss with a swipe.',
    details: [
      'Reminders based on your chosen frequency, not arbitrary timers',
      'Quiet hours respect your sleep and work schedule',
      'Skip or snooze when life gets busy',
      'Birthday reminders with configurable advance warning per tier',
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
    description: 'Scheduled connections automatically appear in your iOS calendar with the friend\'s name, time, and location. Events are timezone-aware — a 6 PM dinner in New York stays a 6 PM dinner even when you\'re on the road.',
    details: [
      'Two-way sync with iOS Calendar',
      'Configurable reminders (15min, 30min, 1hr before)',
      'Per-event timezone locks the clock to the hangout\'s city',
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
    description: 'Import friends from your contacts and keep their info in sync. Tend only asks for access when you need it. On a big import, due dates are auto-spread across your frequency window so day one doesn\'t flood you with "reach out" prompts.',
    details: [
      'Import from iOS Contacts with one tap',
      'Sync updated phone numbers, birthdays, and addresses',
      'Full or limited access — your choice',
      'Auto-spread due dates on bulk imports (10+ friends)',
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
    description: 'See travel time to a friend before you commit to plans. Driving, transit, or walking — and when you tap directions, Tend opens the maps app you actually use.',
    details: [
      'Powered by Google Routes API',
      'Pick your preferred maps app: Apple, Google, Waze, or ask every time',
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
    icon: <LifeBuoy size={26} strokeWidth={1.5} />,
    title: 'Data Safety Net',
    description: 'Nothing disappears in a tap. Deleted friends stay in Recently Deleted for 30 days, every destructive action has a 5-second undo, and Tend checks for newer backups every time you open the app on a new device.',
    details: [
      'Recently Deleted: 30-day grace period for removed friends',
      '5-second undo toast after skip, delete, and batch operations',
      'Stale-DB detection prompts "Use newer backup?" on new devices',
      'Per-friend change history in Advanced Details',
    ],
  },
  {
    icon: <Accessibility size={26} strokeWidth={1.5} />,
    title: 'Built for ADHD & Accessibility',
    description: 'Tend is designed for people who care deeply but forget easily — and built with the iOS accessibility stack so it fits however you prefer to use your phone.',
    details: [
      'Dynamic Type: text scales with your iOS Text Size setting',
      'Reduce Motion: animations honor iOS motion preferences',
      'VoiceOver-labeled controls across the app',
      'ADHD-friendly defaults: gentle reminders, recovery blocks, no streaks',
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
