import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Plug, Bell, Cloud, BatteryCharging, Sparkles, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Layout } from '../components/Layout';
import { colors } from '../theme';

// Import doc content as raw strings
import gettingStartedMd from '../content/docs/getting-started.md?raw';
import connectionsMd from '../content/docs/connections.md?raw';
import remindersMd from '../content/docs/reminders.md?raw';
import backupMd from '../content/docs/backup.md?raw';
import socialEnergyMd from '../content/docs/social-energy.md?raw';
import intelligenceMd from '../content/docs/intelligence.md?raw';

interface DocEntry {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: string;
}

const DOCS: DocEntry[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Add friends, set frequencies, log your first connection',
    icon: <Book size={20} strokeWidth={1.5} />,
    content: gettingStartedMd,
  },
  {
    slug: 'connections',
    title: 'Connections',
    description: 'Types, group events, calendar sync, editing',
    icon: <Plug size={20} strokeWidth={1.5} />,
    content: connectionsMd,
  },
  {
    slug: 'reminders',
    title: 'Reminders',
    description: 'Notifications, quiet hours, skip vs snooze',
    icon: <Bell size={20} strokeWidth={1.5} />,
    content: remindersMd,
  },
  {
    slug: 'backup',
    title: 'Backup & Restore',
    description: 'Cloud backup, restore on new device, data safety',
    icon: <Cloud size={20} strokeWidth={1.5} />,
    content: backupMd,
  },
  {
    slug: 'social-energy',
    title: 'Social Energy',
    description: 'Fatigue detection, recovery blocks, presets, Extra Recovery mode',
    icon: <BatteryCharging size={20} strokeWidth={1.5} />,
    content: socialEnergyMd,
  },
  {
    slug: 'intelligence',
    title: 'Intelligence',
    description: 'Actual Pattern tier, tier crossing, learned associations',
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    content: intelligenceMd,
  },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return isMobile;
}

/** Docs index — grid of doc cards */
function DocsIndex() {
  return (
    <div style={styles.content}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Documentation</h1>
        <p style={styles.subtitle}>
          Learn how to get the most out of Tend.
        </p>
      </section>

      <div style={styles.cardGrid}>
        {DOCS.map((doc) => (
          <Link key={doc.slug} to={`/docs/${doc.slug}/`} style={styles.indexCard}>
            <div style={styles.indexCardIcon}>{doc.icon}</div>
            <div>
              <h2 style={styles.indexCardTitle}>{doc.title}</h2>
              <p style={styles.indexCardDesc}>{doc.description}</p>
            </div>
            <ChevronRight size={16} color={colors.textTertiary} style={{ marginLeft: 'auto', flexShrink: 0 }} />
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Individual doc page with sidebar */
function DocPage({ doc }: { doc: DocEntry }) {
  const isMobile = useIsMobile();

  return (
    <div style={styles.docLayout}>
      {!isMobile && (
        <aside style={styles.sidebar}>
          <p style={styles.sidebarTitle}>Documentation</p>
          {DOCS.map((d) => (
            <Link
              key={d.slug}
              to={`/docs/${d.slug}/`}
              style={{
                ...styles.sidebarLink,
                color: d.slug === doc.slug ? colors.green : colors.textTertiary,
                fontWeight: d.slug === doc.slug ? 600 : 400,
              }}
            >
              {d.title}
            </Link>
          ))}
        </aside>
      )}

      <article style={styles.docContent} className="markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.content}</ReactMarkdown>

        {/* Prev / Next navigation */}
        <div style={styles.docNav}>
          {(() => {
            const idx = DOCS.findIndex((d) => d.slug === doc.slug);
            const prev = idx > 0 ? DOCS[idx - 1] : null;
            const next = idx < DOCS.length - 1 ? DOCS[idx + 1] : null;
            return (
              <>
                {prev ? (
                  <Link to={`/docs/${prev.slug}/`} style={styles.docNavLink}>
                    &larr; {prev.title}
                  </Link>
                ) : <span />}
                {next ? (
                  <Link to={`/docs/${next.slug}/`} style={styles.docNavLink}>
                    {next.title} &rarr;
                  </Link>
                ) : <span />}
              </>
            );
          })()}
        </div>
      </article>

      <style>{`
        .markdown-body h1 { color: #fff; font-size: 1.75rem; margin-bottom: 0.75rem; }
        .markdown-body h2 { color: #fff; font-size: 1.25rem; margin-top: 2rem; margin-bottom: 0.5rem; border-bottom: 1px solid ${colors.surfaceBorder}; padding-bottom: 0.4rem; }
        .markdown-body h3 { color: #fff; font-size: 1.05rem; margin-top: 1.5rem; margin-bottom: 0.4rem; }
        .markdown-body p { color: ${colors.textSecondary}; line-height: 1.7; margin-bottom: 0.75rem; }
        .markdown-body a { color: ${colors.green}; text-decoration: none; }
        .markdown-body strong { color: #fff; }
        .markdown-body ul, .markdown-body ol { padding-left: 1.5rem; color: ${colors.textSecondary}; }
        .markdown-body li { margin-bottom: 0.3rem; line-height: 1.6; }
        .markdown-body table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem; }
        .markdown-body th { text-align: left; padding: 8px 12px; border-bottom: 2px solid ${colors.surfaceBorder}; color: #fff; }
        .markdown-body td { padding: 8px 12px; border-bottom: 1px solid ${colors.surfaceBorder}; color: ${colors.textSecondary}; }
        .markdown-body code { background: ${colors.surface}; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
        .markdown-body hr { border-color: ${colors.surfaceBorder}; margin: 2rem 0; }
      `}</style>
    </div>
  );
}

export function Docs() {
  const location = useLocation();

  // Match /docs/:slug/ pattern
  const slugMatch = location.pathname.match(/\/docs\/([^/]+)/);
  const slug = slugMatch?.[1];
  const doc = slug ? DOCS.find((d) => d.slug === slug) : null;

  if (doc) {
    return (
      <Layout title={`${doc.title} — Docs`}>
        <DocPage doc={doc} />
      </Layout>
    );
  }

  return (
    <Layout title="Documentation">
      <DocsIndex />
    </Layout>
  );
}

const styles: Record<string, React.CSSProperties> = {
  // Index
  content: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '0 1.5rem 4rem',
  },
  hero: {
    paddingTop: 'clamp(2rem, 6vh, 4rem)',
    paddingBottom: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    margin: '0 0 0.75rem',
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: colors.textSecondary,
    margin: 0,
    lineHeight: 1.5,
  },
  cardGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  indexCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: colors.surface,
    border: `1px solid ${colors.surfaceBorder}`,
    borderRadius: '14px',
    padding: '1.25rem 1.5rem',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color 0.2s',
  },
  indexCardIcon: {
    color: colors.green,
    flexShrink: 0,
  },
  indexCardTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    margin: '0 0 0.2rem',
    color: colors.textPrimary,
  },
  indexCardDesc: {
    fontSize: '0.85rem',
    color: colors.textTertiary,
    margin: 0,
    lineHeight: 1.4,
  },
  // Doc page
  docLayout: {
    display: 'flex',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '2rem 1.5rem 4rem',
    gap: '3rem',
  },
  sidebar: {
    width: '200px',
    flexShrink: 0,
    position: 'sticky',
    top: '80px',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  sidebarTitle: {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    margin: '0 0 0.5rem',
  },
  sidebarLink: {
    textDecoration: 'none',
    fontSize: '0.9rem',
    padding: '0.4rem 0',
    transition: 'color 0.2s',
  },
  docContent: {
    flex: 1,
    minWidth: 0,
    lineHeight: 1.7,
    color: colors.textSecondary,
  },
  docNav: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '3rem',
    paddingTop: '1.5rem',
    borderTop: `1px solid ${colors.surfaceBorder}`,
  },
  docNavLink: {
    color: colors.green,
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
  },
};
