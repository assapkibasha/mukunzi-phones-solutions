import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { bySlugs, findProduct, formatRWF, productImage, products } from "@/lib/products";
import { services } from "@/lib/services";
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

const serviceIcons = {
  phone: IconPhone,
  card: IconCard,
  swap: IconSwap,
  cash: IconCash,
  wrench: IconWrench,
  camera: IconCamera,
};

const tiles = [
  { label: "Phones & Tablets", from: "from RWF 85,000", icon: IconPhone, category: "phones" },
  { label: "Computers & Laptops", from: "from RWF 720,000", icon: IconLaptop, category: "computers" },
  { label: "Audio & Sound", from: "from RWF 28,000", icon: IconHeadphones, category: "audio" },
  { label: "Wearables", from: "from RWF 55,000", icon: IconWatch, category: "wearables" },
  { label: "Gaming", from: "from RWF 95,000", icon: IconGamepad, category: "gaming" },
  { label: "Power & Networking", from: "from RWF 35,000", icon: IconZap, category: "power" },
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
  const heroPhone = findProduct("iphone-16-pro-max");
  const heroDeal = findProduct("tecno-spark-20");

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Phones that power your life</p>
            <h1>Get a genuine phone today — pay your way.</h1>
            <p>
              Sealed phones with a 12-month warranty. Pay in full with mobile money,
              take an iPhone with a 40–50% deposit, or trade in your old phone and
              top up the difference.
            </p>
            <div className="hero-cta-row">
              <Link className="btn btn-blue" href="/products?category=phones">Browse phones</Link>
              <a className="btn btn-wa" href="https://wa.me/250780285043" target="_blank" rel="noopener">
                <IconWhatsApp />
                WhatsApp us
              </a>
            </div>
            <div className="hero-proof">
              <div><strong>2,000+ phones sold</strong>in Kigali and beyond</div>
              <div><strong>Same-day delivery</strong>order before 3 PM</div>
              <div><strong>12-month warranty</strong>on every sealed phone</div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="swoosh" />
            <div className="swoosh swoosh-2" />
            <Link className="hero-card hero-card-back" href={"/product/" + heroPhone.slug}>
              <Image src={productImage(heroPhone)} alt="" width={180} height={170} priority />
              <strong>{heroPhone.title.split("—")[0].trim()}</strong>
              <span className="price">{formatRWF(heroPhone.price)}</span>
            </Link>
            <Link className="hero-card hero-card-front" href={"/product/" + heroDeal.slug}>
              <span className="deal-flag">{heroDeal.off}</span>
              <Image src={productImage(heroDeal)} alt="" width={180} height={170} priority />
              <strong>{heroDeal.title.split("—")[0].trim()}</strong>
              <span className="price">{formatRWF(heroDeal.price)}</span>
            </Link>
            <span className="float-chip chip-installment">
              <IconCard />
              40–50% deposit, rest in 2 months
            </span>
            <span className="float-chip chip-trade">
              <IconSwap />
              Trade-in welcome
            </span>
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
            <Link className="see-all" href="/products?deals=1">See all →</Link>
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
            <Link className="see-all" href="/services/installments">Pay 40–50% now, rest in 2 months →</Link>
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
            {services.map((service) => {
              const Icon = serviceIcons[service.icon] || IconPhone;
              return (
                <Link className="service-card" key={service.slug} href={"/services/" + service.slug}>
                  <Icon />
                  <div>
                    <strong>{service.title}</strong>
                    <p>{service.card}</p>
                    <span className="service-more">How it works →</span>
                  </div>
                </Link>
              );
            })}
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
            {tiles.map(({ label, from, icon: Icon, category }) => (
              <Link className="tile" key={label} href={"/products?category=" + category}>
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
