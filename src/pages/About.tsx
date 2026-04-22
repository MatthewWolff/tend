import { Heart, Shield, Smartphone, Brain } from 'lucide-react';
import { Layout } from '../components/Layout';
import { colors, CONTACT_EMAIL } from '../theme';

const values = [
  {
    icon: <Brain size={24} strokeWidth={1.5} />,
    title: 'Built for how your brain works',
    desc: 'Traditional CRMs assume you have perfect memory. Tend assumes you don\'t — and that\'s okay. Frequency-based reminders replace guilt with gentle nudges.',
  },
  {
    icon: <Heart size={24} strokeWidth={1.5} />,
    title: 'Relationships, not metrics',
    desc: 'Tend isn\'t about tracking KPIs. It\'s about noticing when you haven\'t heard from someone you care about — and making it easy to reach out.',
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: 'Your data, your device',
    desc: 'Everything lives on your phone in a local database. Cloud backup is opt-in, encrypted, and you can delete it anytime. No analytics, no ads, ever.',
  },
  {
    icon: <Smartphone size={24} strokeWidth={1.5} />,
    title: 'iOS-native experience',
    desc: 'Tend feels like it belongs on your iPhone. Native calendar integration, haptic feedback, dark mode, and accessibility-first design.',
  },
];

export function About() {
  return (
    <Layout title="About">
      <div style={styles.content}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Built for people who care deeply but forget easily</h1>
          <p style={styles.subtitle}>
            Tend is a personal relationship manager for iOS — designed for people (especially those with ADHD) who want to stay connected with friends but struggle to remember when they last reached out.
          </p>
        </section>

        <section style={styles.story}>
          <h2 style={styles.sectionTitle}>The problem</h2>
          <p style={styles.bodyText}>
            You care about your friends. You think about them often. But somehow, weeks turn into months, and you realize you haven't talked to someone who matters to you in way too long.
          </p>
          <p style={styles.bodyText}>
            The existing tools don't help. Social media creates the illusion of connection without the substance. Spreadsheets feel cold. And your brain — especially if it's wired a little differently — just isn't built to track who you talked to and when.
          </p>

          <h2 style={styles.sectionTitle}>The approach</h2>
          <p style={styles.bodyText}>
            Tend replaces guilt with a system. You tell it how often you want to connect with each friend, and it keeps track for you. When someone's overdue, you get a gentle nudge — not a guilt trip. You log a quick connection (a call, a text, a coffee), and the timer resets.
          </p>
          <p style={styles.bodyText}>
            It's frequency-based, not feeling-based. You don't have to remember who you haven't talked to. Tend remembers for you.
          </p>
        </section>

        <section style={styles.values}>
          <h2 style={styles.sectionTitle}>What we believe</h2>
          <div style={styles.valueGrid}>
            {values.map((v) => (
              <div key={v.title} style={styles.valueCard}>
                <div style={styles.valueIcon}>{v.icon}</div>
                <h3 style={styles.valueTitle}>{v.title}</h3>
                <p style={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.builder}>
          <h2 style={styles.sectionTitle}>Built by</h2>
          <p style={styles.bodyText}>
            Tend is built by <a href="https://github.com/MatthewWolff" style={styles.link} target="_blank" rel="noopener noreferrer">Matthew Wolff</a> — a software engineer who got tired of feeling bad about not keeping in touch with the people he cares about.
          </p>
          <p style={styles.bodyText}>
            Questions, feedback, or just want to say hi? Reach out at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>{CONTACT_EMAIL}</a>.
          </p>
        </section>
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
  story: {
    paddingBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.35rem',
    fontWeight: 600,
    margin: '2rem 0 0.75rem',
    color: colors.textPrimary,
  },
  bodyText: {
    fontSize: '1rem',
    color: colors.textSecondary,
    lineHeight: 1.7,
    margin: '0 0 1rem',
  },
  values: {
    paddingBottom: '2rem',
  },
  valueGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  valueCard: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.surfaceBorder}`,
    borderRadius: '16px',
    padding: '1.5rem',
  },
  valueIcon: {
    color: colors.green,
    marginBottom: '0.75rem',
  },
  valueTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    margin: '0 0 0.5rem',
  },
  valueDesc: {
    fontSize: '0.9rem',
    color: colors.textTertiary,
    margin: 0,
    lineHeight: 1.5,
  },
  builder: {
    paddingTop: '1rem',
    borderTop: `1px solid ${colors.surfaceBorder}`,
  },
  link: {
    color: colors.green,
    textDecoration: 'none',
  },
};
