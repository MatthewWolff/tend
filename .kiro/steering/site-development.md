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

## House Style: em-dashes are deliberate

The content files use em-dashes heavily and structurally, including as the definition separator in
`glossary.md` (`**Term** — definition`). There are 150+ across the content set. Removing them is a
restyle of the site's voice, not a cleanup, so do not strip them as a side effect of another
change. New prose written here may simply avoid them.

## Claims About the App Must Be Verified Against the App

The privacy policy, FAQ and feature copy assert how the Tend app behaves, and nothing on this side
can check those claims, so they rot as the app changes. A 2026-10-26 audit found cloud backup
described as optional in 17 places across 9 files when the app has no such toggle, `backup.md`
giving steps for a control that does not exist, and a whole privacy-policy section describing a
file-based logging system deleted from the app in April.

Before writing or repeating any behavioural claim, check it in the app repo
(`~/development/friend-reach/src/`). `docs/play-data-safety-declaration.md` there is the best
cross-check: it is maintained per data type with file-and-line evidence, and the Data Safety form
makes the policy binding, so the two must agree.

## SPA Routing on GitHub Pages

GitHub Pages doesn't natively support SPA routing. The workaround:
1. `public/404.html` catches unknown paths and redirects to `index.html` with the original path in a hash fragment
2. `App.tsx` reads the hash, strips the `/tend` basename, and navigates React Router to the correct route
