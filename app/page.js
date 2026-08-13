import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/HeroCarousel";
import { bySlugs, products } from "@/lib/products";
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
  IconPin,
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

  return (
    <main>
      {/* Hero slider */}
      <h1 className="sr-only">MPS — Mukunzi Phones Solutions. Genuine phones in Kigali: installments, trade-in, same-day delivery.</h1>
      <HeroCarousel />

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

      {/* Customer feedback */}
      <section style={{ paddingTop: 4 }}>
        <div className="container">
          <div className="section-head">
            <h2>What customers say</h2>
          </div>
          <div className="feedback-grid">
            <article className="feedback-card">
              <div className="feedback-head">
                <div className="feedback-photo">
                  <Image src="/photos/feedback-claudine.jpg" alt="Claudine" fill sizes="56px" style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <strong>Claudine U.</strong>
                  <span>Kicukiro, Kigali</span>
                </div>
                <span className="rating">★★★★★</span>
              </div>
              <p>
                "I paid 50% for my iPhone 13 and finished the rest in two months.
                They even moved my WhatsApp and photos to the new phone before I left."
              </p>
            </article>
            <article className="feedback-card">
              <div className="feedback-head">
                <div className="feedback-photo">
                  <Image src="/photos/feedback-eric.jpg" alt="Eric" fill sizes="56px" style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <strong>Eric N.</strong>
                  <span>Remera, Kigali</span>
                </div>
                <span className="rating">★★★★★</span>
              </div>
              <p>
                "Ordered a Tecno Spark 20 at lunch time — it arrived sealed before 6 PM.
                We unboxed it together with the delivery guy so I could check everything."
              </p>
            </article>
            <article className="feedback-card">
              <div className="feedback-head">
                <div className="feedback-photo">
                  <Image src="/photos/feedback-diane.jpg" alt="Diane" fill sizes="56px" style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <strong>Diane M.</strong>
                  <span>Nyarugenge, Kigali</span>
                </div>
                <span className="rating">★★★★★</span>
              </div>
              <p>
                "I brought my old Samsung as a top-up and paid only the difference for
                a new one. They valued it in front of me — fair price, no stories."
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ paddingTop: 4 }}>
        <div className="container">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Are your phones genuine?</h3>
              <p>Yes — every phone is brand new, sealed, and from official distributors, with a 12-month warranty. We open the box together with you.</p>
            </div>
            <div className="faq-item">
              <h3>Can I pay in installments?</h3>
              <p>Yes, on iPhones: pay a 40–50% deposit, take the phone home the same day, and pay the balance over 2 months. Bring your national ID.</p>
            </div>
            <div className="faq-item">
              <h3>How do I pay?</h3>
              <p>MTN MoMo, Airtel Money, or cash in the shop. We don't take cards at the moment.</p>
            </div>
            <div className="faq-item">
              <h3>Do you deliver outside Kigali?</h3>
              <p>Yes — provinces are served on request, usually 2–4 days. The delivery fee depends on your district. Kigali is same-day or next-day from RWF 1,500.</p>
            </div>
            <div className="faq-item">
              <h3>Can I trade in my old phone?</h3>
              <p>Yes. We test and value it on the spot (all brands), and the value comes off the price of your new phone. You can also just sell it to us for cash or MoMo.</p>
            </div>
            <div className="faq-item">
              <h3>Do you repair phones?</h3>
              <p>Yes — screens, batteries, charging ports and software. Free diagnosis, and most repairs are done the same day.</p>
            </div>
            <div className="faq-item">
              <h3>Where is the shop?</h3>
              <p>KN 84 St, Kigali — open Mon–Sat, 8:00–19:00. Or skip the trip: order on WhatsApp at 0780 285 043 and we deliver.</p>
            </div>
            <div className="faq-item">
              <h3>What if my phone has a problem?</h3>
              <p>Bring it back — sealed phones carry a 12-month warranty. Keep your receipt; we handle the rest.</p>
            </div>
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

      {/* Visit the shop */}
      <section style={{ paddingTop: 4 }}>
        <div className="container">
          <div className="section-head">
            <h2>Visit the shop</h2>
          </div>
          <div className="visit-grid">
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps?q=KN+84+St,+Kigali,+Rwanda&output=embed"
                title="MPS shop location — KN 84 St, Kigali"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="visit-card">
              <h3>MPS — Mukunzi Phones Solutions</h3>
              <div className="visit-line">
                <IconPin />
                <div>
                  <strong>KN 84 St, Kigali</strong>
                  <span>Come test any phone before you buy</span>
                </div>
              </div>
              <div className="visit-line">
                <IconReturn />
                <div>
                  <strong>Mon–Sat, 8:00–19:00</strong>
                  <span>Closed on Sundays</span>
                </div>
              </div>
              <div className="visit-line">
                <IconCard />
                <div>
                  <strong>0780 285 043</strong>
                  <span>Call or WhatsApp, we reply fast</span>
                </div>
              </div>
              <a
                className="btn btn-blue"
                href="https://www.google.com/maps/search/?api=1&query=KN+84+St,+Kigali,+Rwanda"
                target="_blank"
                rel="noopener"
              >
                Get directions
              </a>
              <a className="btn btn-wa" href="https://wa.me/250780285043" target="_blank" rel="noopener">
                <IconWhatsApp />
                Order on WhatsApp instead
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
