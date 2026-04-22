import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { colors, TESTFLIGHT_URL } from '../theme';

const NAV_LINKS = [
  { to: '/features/', label: 'Features' },
  { to: '/faq/', label: 'FAQ' },
  { to: '/docs/', label: 'Docs' },
  { to: '/about/', label: 'About' },
];

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return isMobile;
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Close menu on navigation
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (to: string) =>
    location.pathname === to.replace(/\/$/, '') || location.pathname.startsWith(to.replace(/\/$/, '') + '/');

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <Link to="/" style={styles.wordmark}>
          <img src="/tend/app-icon-256.png" alt="" style={styles.navIcon} />
          Tend
        </Link>

        {!isMobile && (
          <div style={styles.links}>
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  ...styles.link,
                  color: isActive(to) ? colors.green : colors.textTertiary,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {!isMobile && (
          <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" style={styles.cta}>
            Get the Beta
          </a>
        )}

        {isMobile && (
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} color={colors.textPrimary} /> : <Menu size={22} color={colors.textPrimary} />}
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                ...styles.mobileLink,
                color: isActive(to) ? colors.green : colors.textSecondary,
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.mobileCta}
          >
            Get the Beta
          </a>
        </div>
      )}
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgba(10, 15, 12, 0.9)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: `1px solid ${colors.surfaceBorder}`,
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0.75rem 1.5rem',
  },
  wordmark: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: colors.textPrimary,
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1.15rem',
    letterSpacing: '-0.01em',
  },
  navIcon: {
    width: '28px',
    height: '28px',
    borderRadius: '7px',
  },
  links: {
    display: 'flex',
    gap: '1.75rem',
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'color 0.2s',
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: colors.green,
    color: '#000',
    fontWeight: 600,
    fontSize: '0.85rem',
    padding: '0.5rem 1.25rem',
    borderRadius: '10px',
    textDecoration: 'none',
  },
  hamburger: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.25rem',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem 1.5rem 1rem',
    gap: '0.25rem',
    borderTop: `1px solid ${colors.surfaceBorder}`,
  },
  mobileLink: {
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    padding: '0.75rem 0',
  },
  mobileCta: {
    display: 'inline-flex',
    justifyContent: 'center',
    backgroundColor: colors.green,
    color: '#000',
    fontWeight: 600,
    fontSize: '0.95rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '12px',
    textDecoration: 'none',
    marginTop: '0.5rem',
  },
};
