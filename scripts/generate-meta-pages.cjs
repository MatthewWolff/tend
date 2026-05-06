/**
 * Generate per-route HTML files with proper Open Graph meta tags.
 *
 * Link preview crawlers (iMessage, Slack, Twitter) can't execute JS,
 * so SPA routes need static HTML files with OG tags. Each file also
 * includes the SPA redirect script so browsers load the React app.
 *
 * Run after `vite build` — writes into dist/.
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://wolff.sh/tend';
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = 'Tend';

const pages = [
  {
    path: '/features/',
    title: 'Features — Tend',
    description: 'Everything you need to tend your friendships. Relationship circles, smart reminders, quick logging, calendar sync, and more.',
  },
  {
    path: '/about/',
    title: 'About — Tend',
    description: 'Built for people who care deeply but forget easily. A personal relationship manager for iOS, designed for people with ADHD.',
  },
  {
    path: '/faq/',
    title: 'FAQ — Tend',
    description: 'Frequently asked questions about Tend — getting started, features, privacy, and troubleshooting.',
  },
  {
    path: '/docs/',
    title: 'Documentation — Tend',
    description: 'Learn how to get the most out of Tend. Guides for connections, reminders, backup, and more.',
  },
  {
    path: '/docs/getting-started/',
    title: 'Getting Started — Tend Docs',
    description: 'Add friends, set connection frequencies, and log your first interaction with Tend.',
  },
  {
    path: '/docs/connections/',
    title: 'Connections — Tend Docs',
    description: 'Learn about connection types, group events, calendar sync, and how to log interactions in Tend.',
  },
  {
    path: '/docs/reminders/',
    title: 'Reminders — Tend Docs',
    description: 'How Tend\'s frequency-based reminders work. Notifications, quiet hours, skip vs snooze.',
  },
  {
    path: '/docs/backup/',
    title: 'Backup & Restore — Tend Docs',
    description: 'Cloud backup, restore on a new device, and data safety in Tend.',
  },
  {
    path: '/docs/social-energy/',
    title: 'Social Energy — Tend Docs',
    description: 'How Tend detects social fatigue and auto-blocks recovery time. Presets, ADHD mode, and calendar integration.',
  },
  {
    path: '/docs/intelligence/',
    title: 'Intelligence — Tend Docs',
    description: 'How Tend learns and adapts. Actual Pattern tier, tier crossing prompts, learned friend associations, and smart tier suggestions.',
  },
  {
    path: '/privacy-policy/',
    title: 'Privacy Policy — Tend',
    description: 'Tend\'s privacy policy. Your data stays on your device. No analytics, no ads, no tracking.',
  },
];

function generateHtml(page) {
  const fullUrl = `${BASE_URL}${page.path}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${SITE_NAME}">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:image" content="${OG_IMAGE}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="1200">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${fullUrl}">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="${OG_IMAGE}">

  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌱</text></svg>">
  <link rel="apple-touch-icon" sizes="180x180" href="/tend/favicon/apple-touch-icon.png">

  <!-- SPA redirect for browsers -->
  <script>
    window.location.replace('/tend/?from=404#' + window.location.pathname);
  </script>
</head>
<body></body>
</html>`;
}

// Write to dist/
const distDir = path.resolve(__dirname, '..', 'dist');

for (const page of pages) {
  const dir = path.join(distDir, page.path);
  fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, 'index.html');
  fs.writeFileSync(filePath, generateHtml(page));
  console.log(`  ✅ ${page.path}`);
}

console.log(`\nGenerated ${pages.length} meta pages in dist/`);
