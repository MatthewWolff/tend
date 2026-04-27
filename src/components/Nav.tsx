import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { colors, fonts, TESTFLIGHT_URL } from '../theme';

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

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (to: string) =>
    location.pathname === to.replace(/\/$/, '') || location.pathname.startsWith(to.replace(/\/$/, '') + '/');

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <Link to="/" style={styles.wordmark}>
          <img src="/tend/app-icon-256.png" alt="" style={styles.navIcon} />
          <span style={{ fontFamily: fonts.display, fontWeight: 500, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
            Tend
          </span>
        </Link>

        {!isMobile && (
          <div style={styles.links}>
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  ...styles.link,
                  color: isActive(to) ? colors.textPrimary : colors.textTertiary,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {!isMobile && (
          <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" className="cta-button" style={styles.cta}>
            Join Beta
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
                color: isActive(to) ? colors.textPrimary : colors.textSecondary,
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            style={styles.mobileCta}
          >
            Join Beta
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
    backgroundColor: 'rgba(11, 14, 9, 0.85)',
    backdropFilter: 'blur(16px) saturate(1.2)',
    WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
    borderBottom: `1px solid ${colors.surfaceBorder}`,
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '0.875rem 2rem',
  },
  wordmark: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.625rem',
    color: colors.textPrimary,
    textDecoration: 'none',
  },
  navIcon: {
    width: '30px',
    height: '30px',
    borderRadius: '8px',
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.01em',
    transition: 'color 0.2s',
  },
  cta: {
    fontSize: '0.8rem',
    padding: '0.5rem 1.25rem',
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
    padding: '0.75rem 2rem 1.25rem',
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
    justifyContent: 'center',
    fontSize: '0.95rem',
    padding: '0.75rem 1.5rem',
    marginTop: '0.5rem',
  },
};
