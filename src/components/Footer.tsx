import { Link } from 'react-router-dom';
import { colors, CONTACT_EMAIL } from '../theme';

export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.columns}>
          <div style={styles.col}>
            <p style={styles.colTitle}>Product</p>
            <Link to="/features/" style={styles.colLink}>Features</Link>
            <Link to="/faq/" style={styles.colLink}>FAQ</Link>
            <Link to="/docs/" style={styles.colLink}>Docs</Link>
          </div>
          <div style={styles.col}>
            <p style={styles.colTitle}>Legal</p>
            <Link to="/privacy-policy/" style={styles.colLink}>Privacy Policy</Link>
          </div>
          <div style={styles.col}>
            <p style={styles.colTitle}>Connect</p>
            <a href={`mailto:${CONTACT_EMAIL}`} style={styles.colLink}>Email</a>
            <Link to="/about/" style={styles.colLink}>About</Link>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>&copy; {new Date().getFullYear()} Tend. Made with care.</p>
        </div>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    borderTop: `1px solid ${colors.surfaceBorder}`,
    padding: '3rem 1.5rem 2rem',
    marginTop: 'auto',
  },
  inner: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  columns: {
    display: 'flex',
    gap: '4rem',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    minWidth: '120px',
  },
  colTitle: {
    color: colors.textPrimary,
    fontWeight: 600,
    fontSize: '0.85rem',
    margin: '0 0 0.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  colLink: {
    color: colors.textTertiary,
    textDecoration: 'none',
    fontSize: '0.9rem',
    lineHeight: 1.8,
  },
  bottom: {
    borderTop: `1px solid ${colors.surfaceBorder}`,
    paddingTop: '1.5rem',
  },
  copyright: {
    color: colors.textTertiary,
    fontSize: '0.8rem',
    margin: 0,
  },
};
