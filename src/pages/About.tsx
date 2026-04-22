import { Heart, Shield, Smartphone, Brain, Sprout } from 'lucide-react';
import { Layout } from '../components/Layout';
import { colors, CONTACT_EMAIL, TESTFLIGHT_URL } from '../theme';

const values = [
  {
    icon: <Brain size={24} strokeWidth={1.5} />,
    title: 'Built for how your brain works',
    desc: 'Traditional CRMs assume you have perfect memory. Tend assumes you don\'t — and that\'s okay.',
  },
  {
    icon: <Heart size={24} strokeWidth={1.5} />,
    title: 'Relationships, not metrics',
    desc: 'Tend isn\'t about tracking KPIs. It\'s about noticing when someone you care about could use a call.',
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: 'Your data, your device',
    desc: 'Everything lives on your phone. Cloud backup is opt-in, encrypted, and deletable anytime. No ads, ever.',
  },
  {
    icon: <Smartphone size={24} strokeWidth={1.5} />,
    title: 'iOS-native experience',
    desc: 'Calendar integration, haptic feedback, dark mode, accessibility-first. It belongs on your iPhone.',
  },
];

export function About() {
  return (
    <Layout title="About">
      <div style={styles.content}>
        {/* Hero */}
        <section style={styles.hero}>
          <div style={styles.heroIcon}>
            <Sprout size={40} color={colors.green} strokeWidth={1.5} />
          </div>
          <h1 style={styles.title}>Tend your friendships</h1>
          <p style={styles.subtitle}>
            A personal relationship manager for people who care deeply but forget easily.
          </p>
        </section>

        {/* The Problem */}
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>The problem</h2>
          <p style={styles.bodyText}>
            You care about your friends. You think about them all the time. But somehow, weeks turn into months, and you realize you haven't talked to someone who matters to you in way too long.
          </p>
          <p style={styles.bodyText}>
            Social media creates the illusion of connection without the substance. Your brain — especially if it's wired a little differently — just isn't built to track who you talked to and when. And the guilt of "I should have called" doesn't actually help you call.
          </p>
        </section>

        {/* The Solution */}
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>How Tend helps</h2>
          <p style={styles.bodyText}>
            Tend replaces guilt with a system. You tell it how often you want to connect with each friend, and it keeps track for you. When someone's overdue, you get a gentle nudge — not a guilt trip.
          </p>
          <p style={styles.bodyText}>
            Log a quick connection (a call, a text, a coffee), and the timer resets. It's frequency-based, not feeling-based. You don't have to remember who you haven't talked to — Tend remembers for you.
          </p>
          <p style={styles.bodyText}>
            And when life gets busy, you can skip a cycle or snooze a reminder. No shame. The system adapts to you.
          </p>
        </section>

        {/* Values */}
        <section style={styles.section}>
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

        {/* Builder */}
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Built by</h2>
          <p style={styles.bodyText}>
            Tend is built by <a href="https://github.com/MatthewWolff" style={styles.link} target="_blank" rel="noopener noreferrer">Matthew Wolff</a> — a software engineer who got tired of feeling bad about not keeping in touch with the people he cares about.
          </p>
          <p style={styles.bodyText}>
            Questions, feedback, or just want to say hi?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>{CONTACT_EMAIL}</a>
          </p>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <h2 style={styles.ctaTitle}>Ready to start tending?</h2>
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
    maxWidth: '720px',
    margin: '0 auto',
    padding: '0 1.5rem 4rem',
  },
  hero: {
    paddingTop: 'clamp(2rem, 6vh, 4rem)',
    paddingBottom: '2rem',
    textAlign: 'center',
  },
  heroIcon: {
    width: '72px',
    height: '72px',
    borderRadius: '18px',
    backgroundColor: colors.surface,
    border: `1px solid ${colors.surfaceBorder}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.25rem',
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
    lineHeight: 1.6,
    maxWidth: '520px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.surfaceBorder}`,
    borderRadius: '16px',
    padding: '1.75rem',
    marginBottom: '1.25rem',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    margin: '0 0 0.75rem',
    color: colors.textPrimary,
  },
  section: {
    marginBottom: '1.25rem',
  },
  sectionTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    margin: '0 0 1rem',
    color: colors.textPrimary,
  },
  bodyText: {
    fontSize: '0.95rem',
    color: colors.textSecondary,
    lineHeight: 1.7,
    margin: '0 0 0.75rem',
  },
  valueGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
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
  link: {
    color: colors.green,
    textDecoration: 'none',
  },
  cta: {
    textAlign: 'center',
    padding: '2.5rem 0',
    borderTop: `1px solid ${colors.surfaceBorder}`,
    marginTop: '1rem',
  },
  ctaTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    margin: '0 0 1.25rem',
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
