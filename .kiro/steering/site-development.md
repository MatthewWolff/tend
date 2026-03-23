# Tend Site — Development Guide

Public-facing website for the Tend iOS app. Hosts the privacy policy and serves as a landing page.

**Live at:** [wolff.sh/tend](https://wolff.sh/tend)

## Pages

| URL | Content |
|---|---|
| `/tend/` | Landing page |
| `/tend/privacy-policy` | Privacy policy |

## Stack

- React + Vite + TypeScript
- Privacy policy content lives in `src/content/privacy-policy.md` (plain markdown)
- Rendered as a styled page using `react-markdown` + `remark-gfm`
- Deployed automatically to GitHub Pages on every push to `main`

## Development

```bash
yarn install    # Install dependencies
yarn dev        # Local dev server at localhost:5173
yarn build      # Production build to dist/
```

## Deployment

Push to `main` — GitHub Actions builds and deploys to the `gh-pages` branch automatically. Changes go live in ~1 minute.

The site is served under the `wolff.sh` custom domain, which is configured on the [MatthewWolff.github.io](https://github.com/MatthewWolff/MatthewWolff.github.io) user site. Project sites do NOT need their own CNAME file — the user site owns the domain.

## Updating the Privacy Policy

1. Edit `src/content/privacy-policy.md`
2. Commit and push to `main`
3. The site rebuilds and deploys automatically

Also update `PRIVACY_POLICY_URL` in the Tend iOS app (`src/ui/components/settings/PrivacyPolicyLink.tsx`) if the URL path changes.

## SPA Routing on GitHub Pages

GitHub Pages doesn't natively support SPA routing. The workaround:
1. `public/404.html` catches unknown paths and redirects to `index.html` with the original path in a hash fragment
2. `App.tsx` reads the hash, strips the `/tend` basename, and navigates React Router to the correct route
