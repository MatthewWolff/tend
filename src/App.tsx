import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Features } from './pages/Features';
import { About } from './pages/About';
import { FAQ } from './pages/FAQ';

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle 404 redirects with hash — GitHub Pages serves 404.html for
    // unknown paths, which redirects to /?from=404#/original/path.
    // We pick up the hash here and navigate React Router to the right route.
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      // Strip the basename (/tend) since navigate() is relative to it
      const fullPath = hash.replace('#', '');
      const path = fullPath.replace(/^\/tend/, '') || '/';
      navigate(path, { replace: true });
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter basename="/tend">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
