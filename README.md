# MPS — Mukunzi Phones Solutions

**Live site: https://mukunzi-phones-solutions.vercel.app**

Online shop for genuine phones & electronics in **Kigali, Rwanda**.
Built with [Next.js](https://nextjs.org). Design inspired by the structure of
large marketplaces (made-in-china.com), rebranded in the MPS navy blue & white.

## Key business rules

- **Payments:** MTN MoMo and Airtel Money **only** — no cards.
- **Delivery:** Kigali (same-day / next-day, fee from RWF 1,500).
  Provinces served on request — delivery fee depends on the district.
  Delivery is always paid, never free.
- **Warranty:** 12 months on official stock.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — search, categories, deals, best sellers |
| `/products` | Product listing with filters and sorting |
| `/product/[slug]` | Product detail — specs, delivery info, add to cart |

Products currently live in [`lib/products.js`](lib/products.js) — one file,
easy to edit. A real database comes later.

## How to run

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Tech stack

Next.js (App Router) · React · plain CSS (custom properties, grid, flexbox)

## Status / next steps

Frontend prototype. Still to come: real product photos, cart & checkout pages,
user accounts, MTN MoMo / Airtel Money payment integration, admin panel,
deployment.
