import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { services, findService } from "@/lib/services";
import { products } from "@/lib/products";
import {
  IconPhone,
  IconCard,
  IconSwap,
  IconCash,
  IconWrench,
  IconCamera,
  IconWhatsApp,
} from "@/components/Icons";

const icons = {
  phone: IconPhone,
  card: IconCard,
  swap: IconSwap,
  cash: IconCash,
  wrench: IconWrench,
  camera: IconCamera,
};

function relatedProducts(kind) {
  if (kind === "iphones") return products.filter((p) => p.brand === "Apple").slice(0, 6);
  if (kind === "deals") return products.filter((p) => p.off).slice(0, 6);
  if (kind === "accessories") return products.filter((p) => p.category !== "phones").slice(0, 6);
  return products.filter((p) => p.category === "phones").slice(0, 6);
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};
  return { title: service.title, description: service.tagline };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const Icon = icons[service.icon] || IconPhone;
  const related = relatedProducts(service.related);

  return (
    <main>
      <div className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> › <span>Services</span> › <span>{service.title}</span>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="service-hero">
          <Icon />
          <div>
            <h1>{service.title}</h1>
            <p className="service-tagline">{service.tagline}</p>
          </div>
        </div>

        <div className="service-body">
          <div>
            <p className="service-intro">{service.intro}</p>

            <h2>How it works</h2>
            <ol className="steps">
              {service.steps.map(([title, text], i) => (
                <li className="step" key={title}>
                  <span className="step-num">{i + 1}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2>Good to know</h2>
            <ul className="service-notes">
              {service.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          <aside className="service-cta">
            <h3>Start on WhatsApp</h3>
            <p>
              Message us what you need — we reply during opening hours,
              Mon–Sat 8:00–19:00.
            </p>
            <a
              className="btn btn-wa"
              href={
                "https://wa.me/250780285043?text=" +
                encodeURIComponent("Muraho MPS, nkeneye service: " + service.title)
              }
              target="_blank"
              rel="noopener"
            >
              <IconWhatsApp />
              WhatsApp: 0780 285 043
            </a>
            <a className="service-call" href="tel:+250780285043">or call 0780 285 043</a>
            <div className="momo-badges">
              <span className="momo-badge mtn">MTN MoMo</span>
              <span className="momo-badge airtel">Airtel Money</span>
            </div>
          </aside>
        </div>

        <div className="section-head" style={{ marginTop: 30 }}>
          <h2>{service.related === "iphones" ? "iPhones in stock" : "From the shop"}</h2>
          <Link className="see-all" href="/products">See all →</Link>
        </div>
        <div className="product-grid" style={{ marginBottom: 36 }}>
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
