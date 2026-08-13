import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { bySlugs } from "@/lib/products";
import {
  IconArrow,
  IconShield,
  IconTruck,
  IconCard,
  IconReturn,
  IconPhone,
  IconLaptop,
  IconTv,
  IconGamepad,
  IconZap,
  IconHeadphones,
  IconWatch,
  IconRouter,
  IconCamera,
} from "@/components/Icons";

const railCategories = [
  { label: "Phones & Tablets", icon: IconPhone },
  { label: "Computers & Laptops", icon: IconLaptop },
  { label: "TV & Audio", icon: IconTv },
  { label: "Audio & Headphones", icon: IconHeadphones },
  { label: "Gaming", icon: IconGamepad },
  { label: "Power & Accessories", icon: IconZap },
  { label: "Watches & Wearables", icon: IconWatch },
  { label: "Networking", icon: IconRouter },
  { label: "Cameras", icon: IconCamera },
];

const tiles = [
  { label: "Phones & Tablets", from: "from RWF 85,000", icon: IconPhone },
  { label: "Computers", from: "from RWF 720,000", icon: IconLaptop },
  { label: "TV & Audio", from: "from RWF 320,000", icon: IconTv },
  { label: "Audio", from: "from RWF 28,000", icon: IconHeadphones },
  { label: "Gaming", from: "from RWF 95,000", icon: IconGamepad },
  { label: "Power & Accessories", from: "from RWF 35,000", icon: IconZap },
];

const deals = ["tecno-spark-20", "hisense-43-smart-tv", "jbl-flip-6", "anker-powercore-20000"];

const bestSellers = [
  "samsung-galaxy-a16",
  "hp-laptop-15",
  "oraimo-freepods-4",
  "tp-link-archer-c6",
  "oraimo-watch-5-lite",
  "infinix-hot-40i",
  "lg-55-uhd-tv",
  "dualsense-controller",
];

const brands = [
  "Samsung", "Tecno", "Infinix", "itel", "Xiaomi", "HP",
  "Hisense", "LG", "Sony", "JBL", "Oraimo", "Anker", "TP-Link",
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <aside className="cat-rail" aria-label="Browse categories">
            {railCategories.map(({ label, icon: Icon }) => (
              <Link key={label} href="/products">
                <Icon />
                {label}
              </Link>
            ))}
          </aside>

          <div className="hero-banner">
            <div className="hero-glow" />
            <div className="hero-copy">
              <p className="eyebrow">Phones &amp; Electronics · Kigali</p>
              <h1>Genuine phones &amp; electronics, delivered to your door.</h1>
              <p>
                Shop the latest phones, laptops and TVs — pay with MTN MoMo or Airtel Money.
                Fast delivery in Kigali; provinces served on request (delivery fees apply).
              </p>
              <Link className="btn btn-primary" href="/products">
                Shop today's deals
                <IconArrow width="15" height="15" />
              </Link>
            </div>
            <svg className="hero-art" viewBox="0 0 300 220" fill="none" aria-hidden="true">
              <g stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
                <rect x="30" y="40" width="150" height="95" rx="6" />
                <path d="M10 155h190" />
                <rect x="200" y="55" width="62" height="120" rx="10" />
                <line x1="222" y1="160" x2="240" y2="160" />
              </g>
              <circle cx="105" cy="87" r="16" fill="#b7c8ec" />
              <circle cx="231" cy="100" r="10" fill="#b7c8ec" />
            </svg>
          </div>

          <div className="hero-side">
            <div className="side-card">
              <h3>Pay your way</h3>
              <div className="momo-badges">
                <span className="momo-badge mtn">MTN MoMo</span>
                <span className="momo-badge airtel">Airtel Money</span>
              </div>
              <p>
                Checkout is 100% mobile money — pay with MTN MoMo or Airtel Money.
                No card or bank account needed.
              </p>
              <a className="card-link" href="#">How payments work →</a>
            </div>
            <div className="side-card">
              <h3>Need help choosing?</h3>
              <p>
                Not sure which phone fits your budget? Talk to us — we'll help you
                pick the right one.
              </p>
              <a className="card-link" href="#">Contact us →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust">
        <div className="container trust-grid">
          <div className="trust-item">
            <IconShield />
            <div>
              <strong>Genuine products</strong>
              <span>Sealed stock, 12-month warranty</span>
            </div>
          </div>
          <div className="trust-item">
            <IconTruck />
            <div>
              <strong>Kigali delivery</strong>
              <span>Same-day &amp; next-day · fee from RWF 1,500</span>
            </div>
          </div>
          <div className="trust-item">
            <IconCard />
            <div>
              <strong>Mobile Money</strong>
              <span>MTN MoMo &amp; Airtel Money only</span>
            </div>
          </div>
          <div className="trust-item">
            <IconReturn />
            <div>
              <strong>Easy returns</strong>
              <span>7 days, no hassle</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shop by category */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Shop by category</h2>
            <Link className="see-all" href="/products">All categories →</Link>
          </div>
          <div className="tile-grid">
            {tiles.map(({ label, from, icon: Icon }) => (
              <Link className="tile" key={label} href="/products">
                <Icon strokeWidth="1.6" />
                <strong>{label}</strong>
                <span>{from}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <svg className="hills" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="currentColor"
          d="M0 60V40Q180 5 360 32Q480 48 600 30Q760 8 900 34Q1040 52 1160 30Q1300 8 1440 36V60Z"
        />
      </svg>

      {/* Today's deals */}
      <section style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="section-head">
            <h2>Today's deals</h2>
            <Link className="see-all" href="/products">See all deals →</Link>
          </div>
          <div className="product-grid">
            {bySlugs(deals).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Best sellers</h2>
            <Link className="see-all" href="/products">See all →</Link>
          </div>
          <div className="product-grid">
            {bySlugs(bestSellers).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ paddingTop: 6 }}>
        <div className="container">
          <div className="section-head">
            <h2>Popular brands</h2>
          </div>
          <div className="brand-strip">
            {brands.map((b) => (
              <Link className="brand-chip" key={b} href="/products">
                {b}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing CTA */}
      <section>
        <div className="container">
          <div className="sell-band">
            <div className="hero-glow" />
            <div>
              <h2>Looking for a phone we don't have?</h2>
              <p>
                Tell us the model and your budget — we source genuine phones on request
                and deliver them to your door in Kigali.
              </p>
            </div>
            <a className="btn btn-primary" href="#">Request a phone</a>
          </div>
        </div>
      </section>
    </main>
  );
}
