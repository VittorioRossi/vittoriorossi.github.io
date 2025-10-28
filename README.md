# vittoriorossi.github.io

Static personal site served locally with Vite for fast dev reloads.

## Dev

Install dependencies and start dev server:

```bash
npm install
npm run dev
```

Open the printed localhost URL (default http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/` which you can deploy as static assets (GitHub Pages can still serve `index.html` at root – you can also just keep using the raw `index.html` on `main` without building if you don't add a bundling pipeline).

## Preview Production Build

```bash
npm run preview
```

## Notes
- Vite is only here to give you an `npm run dev` command with live reload.
- You can later add JS/TS modules under a `src/` directory; just import them in `index.html`.
