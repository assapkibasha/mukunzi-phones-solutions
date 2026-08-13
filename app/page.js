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
  IconCamera,
  IconWrench,
  IconSwap,
  IconCash,
  IconWhatsApp,
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
  "Apple", "Samsung", "Tecno", "Infinix", "itel", "Xiaomi",
  "HP", "Sony", "JBL", "Oraimo", "Anker", "TP-Link",
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
            <p className="eyebrow">Phones that power your life</p>
            <h1>New phones, genuine stock, Kigali delivery.</h1>
            <p>
              Apple, Samsung, Tecno, Infinix, itel and Xiaomi from official distributors —
              sealed in the box with a 12-month warranty. Pay with MTN MoMo or Airtel Money.
            </p>
            <div className="hero-cta-row">
              <Link className="btn btn-white" href="/products">Browse phones</Link>
              <a className="btn btn-wa" href="https://wa.me/250780285043" target="_blank" rel="noopener">
                <IconWhatsApp />
                WhatsApp us
              </a>
            </div>
            <div className="hero-points">
              <div><strong>Same-day delivery</strong>in Kigali, order before 3 PM</div>
              <div><strong>Pay in installments</strong>40–50% deposit on iPhones</div>
              <div><strong>Trade-in welcome</strong>your old phone counts</div>
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

      {/* iPhones */}
      <section style={{ paddingTop: 4 }}>
        <div className="container">
          <div className="section-head">
            <h2>iPhones</h2>
            <Link className="see-all" href="/products">See all →</Link>
          </div>
          <div className="product-grid">
            {products
              .filter((p) => p.brand === "Apple")
              .map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
          </div>
        </div>
      </section>

      {/* Our services */}
      <section style={{ paddingTop: 4 }}>
        <div className="container">
          <div className="section-head">
            <h2>Our services</h2>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <IconPhone />
              <div>
                <strong>Phone sales</strong>
                <p>New, sealed phones from official distributors — 12-month warranty on every one.</p>
              </div>
            </div>
            <div className="service-card">
              <IconCard />
              <div>
                <strong>Pay in installments</strong>
                <p>Take an iPhone with a 40–50% deposit and pay the balance over 2 months.</p>
              </div>
            </div>
            <div className="service-card">
              <IconSwap />
              <div>
                <strong>Trade-in (top up)</strong>
                <p>Bring your old phone — we value it on the spot and you pay only the difference.</p>
              </div>
            </div>
            <div className="service-card">
              <IconCash />
              <div>
                <strong>We buy phones</strong>
                <p>Selling your phone? We check it and pay you cash or mobile money the same day.</p>
              </div>
            </div>
            <div className="service-card">
              <IconWrench />
              <div>
                <strong>Phone repair</strong>
                <p>Screens, batteries, charging ports and software — quick repairs in Kigali.</p>
              </div>
            </div>
            <div className="service-card">
              <IconCamera />
              <div>
                <strong>Laptops, cameras &amp; accessories</strong>
                <p>Laptops, cameras, speakers, Bluetooth headsets, chargers and more.</p>
              </div>
            </div>
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
            <a className="btn btn-wa" href="https://wa.me/250780285043?text=Muraho%20MPS%2C%20ndashaka%20telefone" target="_blank" rel="noopener">
              <IconWhatsApp />
              WhatsApp: 0780 285 043
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
