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

  // Set document title per page
  useEffect(() => {
    document.title = title ? `${title} — Tend` : 'Tend — Personal Relationship Manager';
  }, [title]);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={styles.page}>
      <Nav />
      <main style={styles.main}>
        {children}
      </main>
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
  },
  main: {
    flex: 1,
  },
};
