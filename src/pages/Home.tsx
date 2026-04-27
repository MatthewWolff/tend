import {
  Timer,
  WifiOff,
  Bell,
  Layers,
  Calendar,
  ShieldCheck,
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { colors, fonts, TESTFLIGHT_URL } from '../theme';
import { useReveal } from '../useReveal';

const iconProps = { size: 20, strokeWidth: 1.75 };

const features = [
  { icon: <Timer {...iconProps} />, title: 'Frequency-based', desc: 'Set how often you want to connect with each friend' },
  { icon: <WifiOff {...iconProps} />, title: 'Offline-first', desc: 'Works without internet — syncs when you\'re back online' },
  { icon: <Bell {...iconProps} />, title: 'Smart reminders', desc: 'Gentle nudges when it\'s time to reach out' },
  { icon: <Layers {...iconProps} />, title: 'Relationship circles', desc: 'Organize friends by closeness, from inner circle to casual' },
  { icon: <Calendar {...iconProps} />, title: 'Calendar sync', desc: 'Scheduled connections show up in your iOS calendar' },
  { icon: <ShieldCheck {...iconProps} />, title: 'Private by design', desc: 'Your data stays on your device — cloud backup optional' },
];

export function Home() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <Layout>
      <div ref={revealRef} style={styles.content}>
        {/* Hero */}
        <section style={styles.hero}>
          <div className="reveal" style={styles.iconWrap}>
            <img
              src="/tend/app-icon-256.png"
              alt="Tend app icon"
              style={styles.icon}
            />
          </div>

          <h1 className="reveal" style={styles.title}>
            Tend your<br />friendships
          </h1>

          <p className="reveal" style={styles.subtitle}>
            For people who care deeply but forget easily.
          </p>

          <p className="reveal" style={styles.tagline}>
            A frequency-based relationship manager for iOS that replaces guilt with a gentle system.
          </p>

          <a
            className="reveal cta-button"
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.betaButton}
          >
            Join the Beta
          </a>

          <p className="reveal" style={styles.platform}>iOS only &middot; Free during beta</p>
        </section>

        {/* Divider */}
        <div className="reveal" style={styles.divider}>
          <div style={styles.dividerLine} />
          <span style={styles.dividerDot} />
          <div style={styles.dividerLine} />
        </div>

        {/* Features grid */}
        <section className="reveal-stagger" style={styles.features}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal"
              style={{ ...styles.featureCard, '--i': i } as React.CSSProperties}
            >
              <div style={styles.featureIcon}>{f.icon}</div>
              <p style={styles.featureTitle}>{f.title}</p>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}

const styles: Record<string, React.CSSProperties> = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 2rem',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '720px',
    paddingTop: 'clamp(4rem, 14vh, 8rem)',
    paddingBottom: '3rem',
  },
  iconWrap: {
    marginBottom: '2rem',
  },
  icon: {
    width: '88px',
    height: '88px',
    borderRadius: '22px',
    boxShadow: `0 0 40px ${colors.greenGlow}, 0 2px 8px rgba(0,0,0,0.3)`,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 'clamp(2.75rem, 7vw, 4.5rem)',
    fontWeight: 400,
    letterSpacing: '-0.03em',
    margin: '0 0 1.25rem',
    lineHeight: 1.05,
    color: colors.textPrimary,
  },
  subtitle: {
    fontFamily: fonts.display,
    fontStyle: 'italic',
    fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
    color: colors.green,
    margin: '0 0 1rem',
    lineHeight: 1.5,
    fontWeight: 300,
  },
  tagline: {
    fontSize: '1rem',
    color: colors.textSecondary,
    margin: '0 0 2.5rem',
    lineHeight: 1.6,
    maxWidth: '440px',
  },
  betaButton: {
    fontSize: '1.05rem',
    padding: '0.9rem 2.5rem',
    marginBottom: '1rem',
  },
  platform: {
    fontSize: '0.8rem',
    color: colors.textTertiary,
    margin: 0,
    letterSpacing: '0.02em',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
    maxWidth: '200px',
    margin: '1.5rem 0 3rem',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    background: `linear-gradient(to right, transparent, ${colors.surfaceBorder}, transparent)`,
  },
  dividerDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: colors.green,
    boxShadow: `0 0 8px ${colors.green}`,
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    maxWidth: '720px',
    width: '100%',
    marginBottom: '5rem',
  },
  featureCard: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.surfaceBorder}`,
    borderRadius: '16px',
    padding: '1.5rem',
    transition: 'border-color 0.3s, background-color 0.3s',
  },
  featureIcon: {
    color: colors.green,
    marginBottom: '0.75rem',
    opacity: 0.85,
  },
  featureTitle: {
    fontFamily: fonts.display,
    fontSize: '1rem',
    fontWeight: 500,
    color: colors.textPrimary,
    margin: '0 0 0.375rem',
    letterSpacing: '-0.01em',
  },
  featureDesc: {
    fontSize: '0.85rem',
    color: colors.textTertiary,
    margin: 0,
    lineHeight: 1.5,
  },
};
