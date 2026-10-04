# vittoriorossi.com

Personal site: one static page, `index.html` (inline CSS and JS, no framework).
Design follows the "paper" system kept on the RPi (`~/design/DESIGN.md`).

## Layout

- `index.html` — the site
- `prototypes/` — animation prototypes, not deployed
- `backup/2025-site/` — the previous Tailwind site (also tagged `old-site-2025`), not deployed

## Deploy

Vercel builds every push to `main` with `vite build` and serves `dist/` at vittoriorossi.com.

```bash
npm install
npm run build    # sanity check: dist/index.html
git push origin main
```

## Draft on the RPi first

Iterate on the tailnet preview with draft mode (tap-to-comment), then push:

```bash
sed 's|<script defer src="/_vercel/insights/script.js"></script>|<script src="/draft.js" defer></script>|' index.html > /tmp/site.html
scp /tmp/site.html rpi:/var/www/hub/site/index.html
# http://rpi.vittoriorossi.com/site/
```
