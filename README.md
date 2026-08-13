# Isoko — Electronics Marketplace (Rwanda)

A prototype for an online electronics shopping platform for Rwanda, inspired by
the structure of large marketplaces like made-in-china.com but designed for
Rwandan retail shoppers.

> **Note:** "Isoko" (Kinyarwanda for *market*) is a placeholder name — easy to
> change once a real brand name is chosen.

## What's here

| Page | Description |
|---|---|
| `index.html` | Homepage — search, categories, hero, deals, best sellers |
| `products.html` | Product listing with filters, sorting, and pagination |
| `product.html` | Product detail — gallery, specs, delivery info, add to cart |

## Features

- Prices in Rwandan francs (RWF)
- MTN MoMo & Airtel Money payment badges
- Nationwide delivery messaging (all 30 districts)
- Working cart counter (saved in the browser)
- Fully responsive — desktop, tablet, and phone
- No frameworks, no build step — plain HTML, CSS, and JavaScript

## How to run

Just open `index.html` in any web browser — no installation needed.

## Tech stack

HTML5 · CSS3 (custom properties, grid, flexbox) · vanilla JavaScript

## Status / next steps

This is a **frontend prototype** (the design and pages). To become a real shop it
still needs a backend: real product database, user accounts, cart & checkout,
and mobile money payment integration (MTN MoMo API / Airtel Money API).
