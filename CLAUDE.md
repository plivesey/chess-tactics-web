# Chess Tactics web (chesstacticsapp.com)

A small React single-page site for the Chess Tactics & Lessons iOS app (Lockwood Productions LLC).
It is a landing page plus pages the App Store and the app link to.

## Branches: source vs. published

- `master` holds the source (this directory). Commit and push here.
- `gh-pages` holds only built output, written by `npm run deploy`. Never edit it by hand.
- `docs/` on master is an old stale build from before the gh-pages setup. Nothing uses it.

## Stack

Vite + React 19 + react-router-dom 7, plain CSS. Tests use Vitest + Testing Library.
(Migrated from Create React App 1.x in Nov 2026. There is no service worker any more.)

## Layout

- `index.html` – Vite entry. Includes the GitHub Pages SPA redirect script (see Routing).
- `src/main.jsx` – mounts the app inside `BrowserRouter`.
- `src/App.jsx` – all routes, wrapped in `Layout` (header + footer).
- `src/Home.jsx` – landing page. The "Show solution" button swaps the screenshot for `TacticVideo.mp4`.
- `src/Terms.jsx`, `src/Privacy.jsx` – legal text as JSX. Edit the wording here. Update the
  "Last revised on" date in Terms when you change it.
- `src/Tactic.jsx` – `/t/:id` share-link page. `?redirect=true` tries the `chesstcs://t/<id>` app scheme.
- `src/Chess123Home.jsx`, `src/Chess123Privacy.jsx` – pages for the separate 123 Chess app. The 123 Chess
  privacy URL is referenced from App Store Connect, so keep those routes working. 123 Chess is deliberately
  NOT covered by the Terms.
- `src/styles.css` – all styling; design tokens are the CSS variables on `:root`.
- `src/constants.js` – App Store URLs and contact email.
- `public/` – copied verbatim to the site root: `CNAME`, `404.html`, `apple-app-site-association`
  (universal links for `/t/*`), `apple-developer-domain-association`, `app-adds.txt` (AdMob),
  `email-1-advanced.gif`, manifest, favicon, and `service-worker.js` (see below).

## Routing on GitHub Pages

GitHub Pages has no server-side routing. `public/404.html` turns any unknown path into `/?p=/path`, and the
script in `index.html` restores the real URL before React starts (rafrex/spa-github-pages). That is how
`/terms.html`, `/privacy.html` and `/t/<id>` work. Keep both scripts if you touch either file.

## Service worker

Old visitors still have the Create React App service worker installed. `public/service-worker.js` is now a
self-unregistering stub that clears caches, so they pick up new deploys. Do not delete it, and do not register
a new service worker under that name.

## Deploying

`npm run deploy` = build, `gh-pages -d build` (commits the build output to `gh-pages`), then
`scripts/moveDomainAssociation.sh`, which checks out `gh-pages`, adds `.well-known/apple-developer-domain-association.txt`
plus a `_config.yml` that makes Jekyll include the dot-folder, pushes, and returns to `master`.
Needs a clean working tree on `master` (the script switches branches). Commit and push `master` first.
After deploying, give Pages about a minute, then check the live URLs.

## Gotchas

- `.well-known` and the `_config.yml` `permalink` line are required for Apple domain association. Do not simplify.
- Jekyll ignores paths starting with `_` or `.`; do not make Vite emit such files.
- Changing the headless-testing viewport: Chrome headless has a minimum window width around 500px.
