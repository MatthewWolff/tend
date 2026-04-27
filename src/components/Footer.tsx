import { Link } from 'react-router-dom';
import { colors, fonts, CONTACT_EMAIL } from '../theme';

export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <span style={{ fontFamily: fonts.display, fontSize: '1.25rem', fontWeight: 500, color: colors.textPrimary, letterSpacing: '-0.02em' }}>
              Tend
            </span>
            <p style={styles.tagline}>
              For people who care deeply<br />but forget easily.
            </p>
          </div>

          <div style={styles.columns}>
            <div style={styles.col}>
              <p style={styles.colTitle}>Product</p>
              <Link to="/features/" style={styles.colLink}>Features</Link>
              <Link to="/faq/" style={styles.colLink}>FAQ</Link>
              <Link to="/docs/" style={styles.colLink}>Docs</Link>
            </div>
            <div style={styles.col}>
              <p style={styles.colTitle}>Company</p>
              <Link to="/about/" style={styles.colLink}>About</Link>
              <Link to="/privacy-policy/" style={styles.colLink}>Privacy</Link>
              <a href={`mailto:${CONTACT_EMAIL}`} style={styles.colLink}>Contact</a>
            </div>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>&copy; {new Date().getFullYear()} Tend</p>
        </div>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    borderTop: `1px solid ${colors.surfaceBorder}`,
    padding: '3.5rem 2rem 2rem',
    marginTop: 'auto',
  },
  inner: {
    maxWidth: '1080px',
    margin: '0 auto',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '3rem',
    marginBottom: '3rem',
  },
  brand: {
    maxWidth: '240px',
  },
  tagline: {
    color: colors.textTertiary,
    fontSize: '0.875rem',
    lineHeight: 1.6,
    marginTop: '0.75rem',
  },
  columns: {
    display: 'flex',
    gap: '4rem',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    minWidth: '100px',
  },
  colTitle: {
    color: colors.textSecondary,
    fontWeight: 600,
    fontSize: '0.75rem',
    margin: '0 0 0.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  colLink: {
    color: colors.textTertiary,
    textDecoration: 'none',
    fontSize: '0.875rem',
    lineHeight: 1.8,
    transition: 'color 0.2s',
  },
  bottom: {
    borderTop: `1px solid ${colors.surfaceBorder}`,
    paddingTop: '1.5rem',
  },
  copyright: {
    color: colors.textTertiary,
    fontSize: '0.75rem',
    margin: 0,
  },
};
