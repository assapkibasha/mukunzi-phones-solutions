import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";
import { bySlugs, findProduct, formatRWF, productImage, products } from "@/lib/products";
import {
  IconShield,
  IconTruck,
  IconCard,
  IconReturn,
  IconPhone,
  IconLaptop,
  IconGamepad,
  IconZap,
  IconHeadphones,
  IconWatch,
} from "@/components/Icons";

const tiles = [
  { label: "Phones & Tablets", from: "from RWF 85,000", icon: IconPhone },
  { label: "Computers & Laptops", from: "from RWF 720,000", icon: IconLaptop },
  { label: "Audio & Sound", from: "from RWF 28,000", icon: IconHeadphones },
  { label: "Wearables", from: "from RWF 55,000", icon: IconWatch },
  { label: "Gaming", from: "from RWF 95,000", icon: IconGamepad },
  { label: "Power & Networking", from: "from RWF 35,000", icon: IconZap },
];

const bestSellers = [
  "samsung-galaxy-a16",
  "tecno-camon-30",
  "oraimo-freepods-4",
  "hp-laptop-15",
  "samsung-galaxy-tab-a9",
  "tp-link-archer-c6",
  "oraimo-watch-5-lite",
  "itel-a70",
  "infinix-note-40",
  "dualsense-controller",
];

const brands = [
  "Samsung", "Tecno", "Infinix", "itel", "Xiaomi", "HP",
  "Sony", "JBL", "Oraimo", "Anker", "TP-Link",
];

export default function HomePage() {
  const deals = products.filter((p) => p.off);
  const heroDeal = findProduct("tecno-spark-20");

  return (
    <main>
      {/* Hero — concrete offer, full-width band */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Phones &amp; electronics · Kigali</p>
            <h1>New phones, genuine stock, Kigali delivery.</h1>
            <p>
              Tecno, Samsung, Infinix, itel and Xiaomi from official distributors —
              sealed in the box with a 12-month warranty. Pay with MTN MoMo or Airtel Money.
            </p>
            <div className="hero-cta-row">
              <Link className="btn btn-white" href="/products">Browse phones</Link>
              <Link className="hero-link" href="/products">See today's deals</Link>
            </div>
            <div className="hero-points">
              <div><strong>Same-day delivery</strong>in Kigali, order before 3 PM</div>
              <div><strong>Provinces served</strong>2–4 days, fee by district</div>
              <div><strong>Mobile money</strong>MTN MoMo &amp; Airtel Money</div>
            </div>
          </div>

          <aside className="hero-deal">
            <span className="hero-deal-tag">Deal of the week</span>
            <Image
              src={productImage(heroDeal)}
              alt={heroDeal.title}
              width={340}
              height={190}
              priority
            />
            <h2>{heroDeal.title}</h2>
            <div className="price-row">
              <span className="price">{formatRWF(heroDeal.price)}</span>
              <span className="price-old">{formatRWF(heroDeal.oldPrice)}</span>
              <span className="deal-flag" style={{ position: "static" }}>{heroDeal.off}</span>
            </div>
            <AddToCartButton />
          </aside>
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
              <span>Same-day &amp; next-day, fee from RWF 1,500</span>
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

      {/* Today's deals */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Today's deals</h2>
            <Link className="see-all" href="/products">See all →</Link>
          </div>
          <div className="product-grid">
            {deals.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section style={{ paddingTop: 4 }}>
        <div className="container">
          <div className="section-head">
            <h2>Shop by category</h2>
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

      {/* Best sellers */}
      <section style={{ paddingTop: 4 }}>
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
      <section style={{ paddingTop: 4 }}>
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
      <section style={{ paddingTop: 4 }}>
        <div className="container">
          <div className="sell-band">
            <div>
              <h2>Looking for a phone we don't have?</h2>
              <p>
                Tell us the model and your budget — we source genuine phones on request
                and deliver them to your door in Kigali.
              </p>
            </div>
            <Link className="btn btn-white" href="/products">Request a phone</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
