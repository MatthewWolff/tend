import { Link } from 'react-router-dom';
import {
  Timer,
  WifiOff,
  Bell,
  Layers,
  Calendar,
  ShieldCheck,
} from 'lucide-react';

const colors = {
  bg: '#000000',
  surface: '#1A1F1C',
  surfaceBorder: '#363A37',
  green: '#32D74B',
  greenPressed: '#28B83E',
  textPrimary: '#FFFFFF',
  textSecondary: '#EBEBF5',
  textTertiary: 'rgba(235, 235, 245, 0.6)',
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: colors.bg,
    color: colors.textPrimary,
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 1.5rem',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '640px',
    paddingTop: 'clamp(4rem, 15vh, 8rem)',
    paddingBottom: '3rem',
  },
  icon: {
    width: '80px',
    height: '80px',
    borderRadius: '18px',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    margin: '0 0 0.75rem',
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
    color: colors.textSecondary,
    margin: '0 0 0.5rem',
    lineHeight: 1.5,
    maxWidth: '480px',
  },
  tagline: {
    fontSize: '0.95rem',
    color: colors.textTertiary,
    margin: '0 0 2.5rem',
    fontStyle: 'italic',
    lineHeight: 1.5,
  },
  tagline: {
    fontSize: '0.95rem',
    color: colors.textTertiary,
    margin: '0 0 2.5rem',
    lineHeight: 1.5,
    maxWidth: '400px',
  },
  betaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: colors.green,
    color: '#000',
    fontWeight: 600,
    fontSize: '1.05rem',
    padding: '0.875rem 2rem',
    borderRadius: '14px',
    textDecoration: 'none',
    marginBottom: '3rem',
    transition: 'background-color 0.2s, transform 0.1s',
    cursor: 'pointer',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    maxWidth: '640px',
    width: '100%',
    marginBottom: '3rem',
  },
  featureCard: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.surfaceBorder}`,
    borderRadius: '16px',
    padding: '1.25rem',
    textAlign: 'left' as const,
  },
  featureHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.375rem',
  },
  featureIcon: {
    flexShrink: 0,
    color: colors.green,
  },
  featureTitle: {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: colors.textPrimary,
    margin: 0,
  },
  featureDesc: {
    fontSize: '0.85rem',
    color: colors.textTertiary,
    margin: 0,
    lineHeight: 1.4,
  },
  footer: {
    paddingBottom: '2rem',
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  footerLink: {
    color: colors.textTertiary,
    textDecoration: 'none',
    fontSize: '0.85rem',
    transition: 'color 0.2s',
  },
  footerDot: {
    color: colors.surfaceBorder,
    fontSize: '0.5rem',
  },
};

const iconProps = { size: 20, strokeWidth: 1.75 };

const features = [
  { icon: <Timer {...iconProps} />, title: 'Frequency-based', desc: 'Set how often you want to connect with each friend' },
  { icon: <WifiOff {...iconProps} />, title: 'Offline-first', desc: 'Works without internet — syncs when you\'re back online' },
  { icon: <Bell {...iconProps} />, title: 'Smart reminders', desc: 'Gentle nudges when it\'s time to reach out' },
  { icon: <Layers {...iconProps} />, title: 'Relationship tiers', desc: 'Organize friends by closeness, from inner circle to casual' },
  { icon: <Calendar {...iconProps} />, title: 'Calendar sync', desc: 'Scheduled connections show up in your iOS calendar' },
  { icon: <ShieldCheck {...iconProps} />, title: 'Private by design', desc: 'Your data stays on your device — cloud backup optional' },
];

export function Home() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <img
          src="/tend/app-icon-256.png"
          alt="Tend app icon"
          style={styles.icon}
        />
        <h1 style={styles.title}>Tend</h1>
        <p style={styles.subtitle}>
          A personal relationship manager for iOS.
        </p>
        <p style={styles.tagline}>
          For people who care deeply but forget easily.
        </p>
        <a
          href="https://testflight.apple.com/join/HvuJgSBe"
          style={styles.betaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Beta — iOS
        </a>
      </section>

      <section style={styles.features}>
        {features.map((f) => (
          <div key={f.title} style={styles.featureCard}>
            <div style={styles.featureHeader}>
              <span style={styles.featureIcon}>{f.icon}</span>
              <p style={styles.featureTitle}>{f.title}</p>
            </div>
            <p style={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </section>

      <footer style={styles.footer}>
        <Link to="/privacy-policy" style={styles.footerLink}>Privacy Policy</Link>
        <span style={styles.footerDot}>●</span>
        <a
          href="mailto:tend@wolff.sh"
          style={styles.footerLink}
        >
          Contact
        </a>
      </footer>
    </div>
  );
}
