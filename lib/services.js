// The shop's services. Each one gets a card on the homepage and its own
// page at /services/<slug> explaining how it works.

export const services = [
  {
    slug: "phone-sales",
    icon: "phone",
    title: "Phone sales",
    card: "New, sealed phones from official distributors — 12-month warranty on every one.",
    tagline: "New, sealed phones with a 12-month warranty.",
    intro:
      "Every phone we sell is brand new, sealed in the box, and sourced from official distributors — never grey imports. You get the full manufacturer accessories, Kinyarwanda/English/French support out of the box, and a 12-month warranty backed by our shop in Kigali.",
    steps: [
      ["Pick your phone", "Browse this website, our TikTok and Instagram, or come to the shop and hold it in your hands."],
      ["Pay your way", "MTN MoMo, Airtel Money or cash. iPhones can be taken on an installment plan."],
      ["Same-day delivery", "Order before 3 PM and receive it in Kigali the same day. Provinces: 2–4 days."],
      ["Covered for 12 months", "If something is wrong with the phone, bring it back — the warranty is on us."],
    ],
    notes: [
      "Sealed boxes are opened together with you, so you see everything is complete.",
      "We help you set up your SIM, WhatsApp and backup transfer for free.",
      "Receipts are issued for every purchase — keep yours for the warranty.",
    ],
    related: "deals",
    photo: "/photos/service-phone-sales.jpg",
    photoAlt: "A sealed new phone in its open box",
  },
  {
    slug: "installments",
    icon: "card",
    title: "Pay in installments",
    card: "Take an iPhone with a 40–50% deposit and pay the balance over 2 months.",
    tagline: "Take your iPhone home today — finish paying over 2 months.",
    intro:
      "You don't need the full amount to get the iPhone you want. Pay a 40–50% deposit and walk out with the phone the same day — the balance is split over the next 2 months.",
    steps: [
      ["Choose your iPhone", "In the shop or on WhatsApp — any iPhone we have in stock qualifies."],
      ["Pay the deposit", "40–50% of the price, with MTN MoMo, Airtel Money or cash."],
      ["Take it home today", "The phone is yours to use from day one, with the full 12-month warranty."],
      ["Finish in 2 months", "Pay the balance in one or two payments — we send you a reminder."],
    ],
    notes: [
      "Available on iPhones — ask us on WhatsApp about other models.",
      "Bring your national ID when signing up.",
      "No hidden fees: the price you see is the total you pay.",
    ],
    related: "iphones",
    photo: "/photos/service-installments.jpg",
    photoAlt: "A shop owner smiling at her phone",
  },
  {
    slug: "trade-in",
    icon: "swap",
    title: "Trade-in (top up)",
    card: "Bring your old phone — we value it on the spot and you pay only the difference.",
    tagline: "Your old phone is money — trade it in and pay only the difference.",
    intro:
      "Upgrade without paying the full price. Bring the phone you're using now: we test it in front of you, tell you what it's worth, and that amount comes straight off the price of your new phone.",
    steps: [
      ["Get an estimate", "Send us the model and photos on WhatsApp, or bring the phone to the shop."],
      ["We test and value it", "Screen, battery, cameras — checked with you watching. You get our offer on the spot."],
      ["Pick your new phone", "Any phone in the shop, including iPhones."],
      ["Pay only the difference", "New phone price minus your old phone's value — with MoMo, Airtel Money or cash."],
    ],
    notes: [
      "All brands accepted — working phones in good condition get the best value.",
      "Cracked screens and weak batteries lower the value but usually don't disqualify the phone.",
      "Remove your Google / iCloud account before trading in — we'll help you back up first.",
    ],
    related: "phones",
    photo: "/photos/service-trade-in.jpg",
    photoAlt: "A happy customer holding his phone",
  },
  {
    slug: "we-buy-phones",
    icon: "cash",
    title: "We buy phones",
    card: "Selling your phone? We check it and pay you cash or mobile money the same day.",
    tagline: "Selling your phone? Get paid the same day.",
    intro:
      "Need money or just done with your current phone? Bring it in — if it works, we'll make you an offer and pay you immediately, in cash or straight to your MoMo.",
    steps: [
      ["Bring the phone + your ID", "National ID required — we only buy phones from their real owners."],
      ["We test it with you", "10 minutes: screen, battery, cameras, network. Nothing hidden."],
      ["You get an offer", "Take it or leave it — no pressure, no fees for asking."],
      ["Get paid instantly", "Cash or MTN MoMo / Airtel Money, before you leave the shop."],
    ],
    notes: [
      "We buy all major brands: Apple, Samsung, Tecno, Infinix, itel, Xiaomi and more.",
      "Sign out of Google / iCloud before selling — locked phones can't be bought.",
      "Phones with receipts and original boxes get better offers.",
    ],
    related: "phones",
    photo: "/photos/service-we-buy-phones.jpg",
    photoAlt: "A man checking a phone before selling it",
  },
  {
    slug: "phone-repair",
    icon: "wrench",
    title: "Phone repair",
    card: "Screens, batteries, charging ports and software — quick repairs in Kigali.",
    tagline: "Screens, batteries, charging ports and software — fixed fast.",
    intro:
      "Cracked screen, dying battery, charging problems, or a phone that won't start? Bring it in. You get a free diagnosis and a clear price before we touch anything — most repairs are done the same day.",
    steps: [
      ["Tell us the problem", "Walk in, or describe it on WhatsApp — photos help."],
      ["Free diagnosis", "We check the phone and give you the exact price before any work starts."],
      ["We fix it", "Most screens and batteries are done the same day."],
      ["Test it together", "You check everything works before you pay and leave."],
    ],
    notes: [
      "Screens, batteries, charging ports, speakers, cameras, and software problems.",
      "We use quality parts and test every repair with you before handover.",
      "Your data stays private — we never ask for your passwords except when needed for testing, with you present.",
    ],
    related: "accessories",
    photo: "/photos/service-phone-repair.jpg",
    photoAlt: "A technician repairing a phone screen",
  },
  {
    slug: "accessories",
    icon: "camera",
    title: "Laptops, cameras & accessories",
    card: "Laptops, cameras, speakers, Bluetooth headsets, chargers and more.",
    tagline: "Everything around the phone — laptops, cameras, audio and power.",
    intro:
      "Beyond phones, we stock laptops, cameras, Bluetooth speakers, headsets, earbuds, smart watches, power banks, routers and chargers. If we don't have it in the shop today, we source it for you on request.",
    steps: [
      ["Ask on WhatsApp", "Tell us what you need — we confirm price and availability the same day."],
      ["Or browse the shop", "Audio, wearables, gaming, power and networking are all on this site."],
      ["We source on request", "Special model? Give us a few days and we bring it for you."],
      ["Delivered like a phone", "Same-day in Kigali, provinces on request."],
    ],
    notes: [
      "Genuine JBL, Oraimo, Anker, Sony and TP-Link stock with warranty.",
      "Cameras are sourced to order — message us with the model you want.",
    ],
    related: "accessories",
    photo: "/photos/service-accessories.jpg",
    photoAlt: "Headphones and accessories on a desk",
  },
];

export function findService(slug) {
  return services.find(function (s) {
    return s.slug === slug;
  });
}
