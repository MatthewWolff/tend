import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import privacyPolicyMd from '../content/privacy-policy.md?raw';

const styles = {
  container: {
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#000',
    color: '#e5e5ea',
    padding: '2rem',
  },
  content: {
    maxWidth: '720px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
};

export function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <div style={styles.content} className="markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {privacyPolicyMd}
        </ReactMarkdown>
      </div>
      <style>{`
        .markdown-body h1 { color: #fff; font-size: 2rem; margin-bottom: 0.5rem; }
        .markdown-body h2 { color: #fff; font-size: 1.4rem; margin-top: 2rem; border-bottom: 1px solid #38383a; padding-bottom: 0.4rem; }
        .markdown-body h3 { color: #fff; font-size: 1.15rem; margin-top: 1.5rem; }
        .markdown-body a { color: #32D74B; }
        .markdown-body hr { border-color: #38383a; margin: 2rem 0; }
        .markdown-body table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem; }
        .markdown-body th { text-align: left; padding: 8px 12px; border-bottom: 2px solid #38383a; color: #fff; }
        .markdown-body td { padding: 8px 12px; border-bottom: 1px solid #2c2c2e; }
        .markdown-body strong { color: #fff; }
        .markdown-body ul, .markdown-body ol { padding-left: 1.5rem; }
        .markdown-body li { margin-bottom: 0.3rem; }
        .markdown-body code { background: #1c1c1e; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
      `}</style>
    </div>
  );
}
