# Deployment — Cloudflare Workers

This site runs on **Cloudflare Workers** static assets. It was migrated from
Vercel on 2026-10-30. The Vercel account is suspended (`HTTP 402`,
`DEPLOYMENT_DISABLED`), so **Vercel is not a fallback**.

## Live

https://linktree-clone.servicesorsubscriptions-natural894.workers.dev

## Deploy

From the repo root:

```bash
bun install && bun run build
npx wrangler deploy
```

`wrangler deploy` reads `wrangler.jsonc` in the repo root and uploads `./dist`.
A deploy is manual; there is no CI step.

## Account

- Cloudflare account: `363c056f9bacbdaa70d9138facfe3c25`
- Workers subdomain: `servicesorsubscriptions-natural894`

## Status

Nothing is pending for this app.
