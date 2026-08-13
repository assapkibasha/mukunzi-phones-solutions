import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import BuyControls from "@/components/BuyControls";
import { products, findProduct, formatRWF, productImage } from "@/lib/products";
import { IconTruck, IconPin, IconCard, IconShield, IconWhatsApp } from "@/components/Icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};
  return { title: product.title.split("—")[0].trim() };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  const similar = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(products.filter((p) => p.slug !== product.slug && p.category !== product.category))
    .slice(0, 6);

  return (
    <main>
      <div className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> › <Link href="/products">Shop</Link> ›{" "}
            <span>{product.title.split("—")[0].trim()}</span>
          </nav>
        </div>
      </div>

      <div className="container detail-grid">
        {/* Photo */}
        <div className="gallery-main">
          <Image
            src={productImage(product)}
            alt={product.title}
            fill
            sizes="(max-width: 900px) 100vw, 520px"
            style={{ objectFit: "contain", padding: 28 }}
            priority
          />
        </div>

        {/* Info */}
        <div className="detail-info">
          <h1>{product.title}</h1>
          <div className="rating">
            {product.stars}
            <span className="count">
              {product.count} ratings · {product.sold} sold this month
            </span>
          </div>

          <div className="detail-price">
            <span className="price">{formatRWF(product.price)}</span>
            {product.oldPrice && <span className="price-old">{formatRWF(product.oldPrice)}</span>}
            {product.off && <span className="deal-flag">{product.off}</span>}
          </div>

          <ul className="spec-list">
            {product.highlights.map(([key, value]) => (
              <li key={key}>
                <span className="spec-key">{key}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>

          <BuyControls stock={product.stock} />
          <a
            className="btn btn-wa"
            style={{ width: "100%", marginTop: 10 }}
            href={
              "https://wa.me/250780285043?text=" +
              encodeURIComponent("Muraho MPS, I want to order: " + product.title)
            }
            target="_blank"
            rel="noopener"
          >
            <IconWhatsApp />
            Order on WhatsApp — 0780 285 043
          </a>
        </div>

        {/* Buy box */}
        <aside className="buy-box">
          <h3>Delivery &amp; payment</h3>
          <div className="delivery-item">
            <IconTruck />
            <div>
              <strong>Kigali: same-day / next-day</strong>
              <span>Order before 3 PM · delivery from RWF 1,500</span>
            </div>
          </div>
          <div className="delivery-item">
            <IconPin />
            <div>
              <strong>Provinces: on request</strong>
              <span>2–4 days · delivery fee depends on your district</span>
            </div>
          </div>
          <div className="delivery-item">
            <IconCard />
            <div>
              <strong>Pay on your phone</strong>
              <div className="momo-badges">
                <span className="momo-badge mtn">MTN MoMo</span>
                <span className="momo-badge airtel">Airtel Money</span>
              </div>
            </div>
          </div>
          {product.brand === "Apple" && (
            <div className="delivery-item">
              <IconCard />
              <div>
                <strong>Pay in installments</strong>
                <span>40–50% deposit, balance over 2 months</span>
              </div>
            </div>
          )}
          <div className="delivery-item">
            <IconShield />
            <div>
              <strong>Trade-in accepted</strong>
              <span>Bring your old phone, pay the difference</span>
            </div>
          </div>
          <div className="delivery-item">
            <IconShield />
            <div>
              <strong>Sold by MPS</strong>
              <span>Mukunzi Phones Solutions · Kigali</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Description + specs */}
      <div className="container detail-tabs">
        <div className="detail-section">
          <h2>About this product</h2>
          {product.blurb.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="detail-section">
          <h2>Specifications</h2>
          <table className="spec-table">
            <tbody>
              {product.specs.map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="detail-section">
          <h2>Similar products</h2>
          <div className="product-grid">
            {similar.map((p) => (
              <ProductCard key={p.slug} product={p} withButton={false} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
