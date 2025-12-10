Deployment notes for Vercel

Overview
- This repository contains a monorepo with a Vite React client in `client/` and an Express server in `server/`.
- The project's build script (`npm run build`) uses `vite` to build the client into `dist/public` and `esbuild` to bundle the server into `dist/index.cjs`.

What `vercel.json` does
- Vercel will run `npm run build` (the default when using `@vercel/static-build` and `package.json`).
- The static site output directory is `dist/public`, which `vercel.json` points to.
- All routes are rewritten to `/index.html` so the SPA works with client-side routing.

Limitations / Server behavior
- Vercel's `@vercel/static-build` deploys only static assets. The Express server bundled to `dist/index.cjs` is NOT automatically run on Vercel.
- If you need the server endpoints, consider one of these options:
  - Convert the server routes you need into Vercel Serverless Functions placed under `api/`.
  - Deploy the server separately (on Render, Railway, Fly, Heroku, etc.) and point the client to that API.

Quick local test
1. Install deps:

```powershell
npm install
```

2. Build everything:

```powershell
npm run build
```

3. Serve the static output locally (optional):

```powershell
npx serve dist/public
```

Deploy to Vercel
1. Commit and push to your Git provider.
2. In the Vercel dashboard, create a new project from the repository.
3. Vercel should detect `@vercel/static-build` via `vercel.json` and run `npm run build`.
4. Confirm the published site. If you need backend APIs, follow the "Limitations / Server behavior" notes.

If you want, I can:
- Convert Express endpoints to Vercel Serverless Functions (we'll need to reorganize `server/`).
- Configure environment variables for Vercel and update the client to use them.
- Add `vercel` CLI helper scripts to `package.json`.
