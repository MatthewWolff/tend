import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { colors, fonts } from '../theme';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function Layout({ children, title }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title ? `${title} — Tend` : 'Tend — Personal Relationship Manager';
  }, [title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={styles.page}>
      {/* Atmospheric gradient orb — top center glow */}
      <div style={styles.glowOrb} aria-hidden />
      <Nav />
      <main style={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: colors.bg,
    color: colors.textPrimary,
    fontFamily: fonts.body,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  glowOrb: {
    position: 'fixed',
    top: '-20vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80vw',
    height: '50vh',
    borderRadius: '50%',
    background: `radial-gradient(ellipse at center, ${colors.greenGlow} 0%, transparent 70%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
  main: {
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
};
