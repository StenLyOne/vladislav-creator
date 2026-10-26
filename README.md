# Vlad Creator Portfolio

This project now runs on **Next.js 16** with the App Router.

## Scripts

- `npm run dev` — start local development server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — run ESLint
- `npm run check` — lint + build

## Environment

Optional:

- `SENDERBOT_BASE_URL` (default: `https://senderbot-9qcp.onrender.com`)

Visit notifications are proxied through a Next route handler:

- `POST /api/visit`

All project enquiries go through Upwork. The profile URL is defined in
`src/lib/contact.js`. The contact form is disabled; `POST /api/contact` returns
`410 Gone` without forwarding submissions.
