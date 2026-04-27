import { Heart, Shield, Smartphone, Brain } from 'lucide-react';
import { Layout } from '../components/Layout';
import { colors, fonts, CONTACT_EMAIL, TESTFLIGHT_URL } from '../theme';
import { useReveal } from '../useReveal';

const values = [
  {
    icon: <Brain size={22} strokeWidth={1.5} />,
    title: 'Built for how your brain works',
    desc: 'Traditional CRMs assume perfect memory. Tend assumes you don\'t have it — and that\'s okay.',
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    title: 'Relationships, not metrics',
    desc: 'Tend isn\'t about tracking KPIs. It\'s about noticing when someone you care about could use a call.',
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: 'Your data, your device',
    desc: 'Everything lives on your phone. Cloud backup is opt-in, encrypted, and deletable anytime.',
  },
  {
    icon: <Smartphone size={22} strokeWidth={1.5} />,
    title: 'iOS-native experience',
    desc: 'Calendar integration, haptic feedback, dark mode, accessibility-first. It belongs on your iPhone.',
  },
];

export function About() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <Layout title="About">
      <div ref={revealRef} style={styles.content}>
        <section style={styles.hero}>
          <h1 className="reveal" style={styles.title}>
            The story behind<br />
            <span style={{ color: colors.green, fontStyle: 'italic' }}>Tend</span>
          </h1>
          <p className="reveal" style={styles.subtitle}>
            A personal relationship manager for people who care deeply but forget easily.
          </p>
        </section>

        <section className="reveal" style={styles.card}>
          <h2 style={styles.cardTitle}>The problem</h2>
          <p style={styles.bodyText}>
            You care about your friends. You think about them all the time. But somehow, weeks turn into months, and you realize you haven't talked to someone who matters to you in way too long.
          </p>
          <p style={styles.bodyText}>
            Social media creates the illusion of connection without the substance. Your brain — especially if it's wired a little differently — just isn't built to track who you talked to and when.
          </p>
        </section>

        <section className="reveal" style={styles.card}>
          <h2 style={styles.cardTitle}>How Tend helps</h2>
          <p style={styles.bodyText}>
            Tend replaces guilt with a system. Tell it how often you want to connect with each friend, and it keeps track for you. When someone's overdue, you get a gentle nudge — not a guilt trip.
          </p>
          <p style={styles.bodyText}>
            Log a quick connection, and the timer resets. It's frequency-based, not feeling-based. You don't have to remember — Tend remembers for you.
          </p>
        </section>

        <section className="reveal-stagger" style={styles.section}>
          <h2 className="reveal" style={styles.sectionTitle}>What we believe</h2>
          <div style={styles.valueGrid}>
            {values.map((v, i) => (
              <div key={v.title} className="reveal" style={{ ...styles.valueCard, '--i': i } as React.CSSProperties}>
                <div style={styles.valueIcon}>{v.icon}</div>
                <h3 style={styles.valueTitle}>{v.title}</h3>
                <p style={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal" style={styles.card}>
          <h2 style={styles.cardTitle}>Built by</h2>
          <p style={styles.bodyText}>
            Tend is built by{' '}
            <a href="https://github.com/MatthewWolff" className="glow-link" target="_blank" rel="noopener noreferrer">
              Matthew Wolff
            </a>{' '}
            — a software engineer who got tired of feeling bad about not keeping in touch with the people he cares about.
          </p>
          <p style={styles.bodyText}>
            Questions, feedback, or just want to say hi?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="glow-link">{CONTACT_EMAIL}</a>
          </p>
        </section>

        <section className="reveal" style={styles.cta}>
          <h2 style={styles.ctaTitle}>Ready to start tending?</h2>
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
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 400,
    letterSpacing: '-0.03em',
    margin: '0 0 1rem',
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: '1.05rem',
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
    padding: '2rem',
    marginBottom: '1.25rem',
  },
  cardTitle: {
    fontFamily: fonts.display,
    fontSize: '1.2rem',
    fontWeight: 500,
    margin: '0 0 0.75rem',
    color: colors.textPrimary,
    letterSpacing: '-0.01em',
  },
  section: {
    marginBottom: '1.25rem',
  },
  sectionTitle: {
    fontFamily: fonts.display,
    fontSize: '1.2rem',
    fontWeight: 500,
    margin: '0 0 1rem',
    color: colors.textPrimary,
    letterSpacing: '-0.01em',
  },
  bodyText: {
    fontSize: '0.95rem',
    color: colors.textSecondary,
    lineHeight: 1.75,
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
    transition: 'border-color 0.3s',
  },
  valueIcon: {
    color: colors.green,
    marginBottom: '0.75rem',
    opacity: 0.85,
  },
  valueTitle: {
    fontFamily: fonts.display,
    fontSize: '1rem',
    fontWeight: 500,
    margin: '0 0 0.375rem',
    letterSpacing: '-0.01em',
  },
  valueDesc: {
    fontSize: '0.875rem',
    color: colors.textTertiary,
    margin: 0,
    lineHeight: 1.5,
  },
  cta: {
    textAlign: 'center',
    padding: '3rem 0',
    borderTop: `1px solid ${colors.surfaceBorder}`,
    marginTop: '1.5rem',
  },
  ctaTitle: {
    fontFamily: fonts.display,
    fontSize: '1.5rem',
    fontWeight: 400,
    margin: '0 0 1.5rem',
    letterSpacing: '-0.02em',
  },
};
