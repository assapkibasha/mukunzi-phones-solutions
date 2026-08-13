import Link from "next/link";
import { notFound } from "next/navigation";
import ProductArt from "@/components/ProductArt";
import ProductCard from "@/components/ProductCard";
import BuyControls from "@/components/BuyControls";
import GalleryThumbs from "@/components/GalleryThumbs";
import { products, findProduct, formatRWF } from "@/lib/products";
import { IconTruck, IconPin, IconCard, IconShield } from "@/components/Icons";

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
    .slice(0, 4);

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
        {/* Gallery */}
        <div>
          <div className="gallery-main">
            <ProductArt kind={product.art} strokeWidth={3} />
          </div>
          <GalleryThumbs>
            <ProductArt kind={product.art} strokeWidth={5} />
            <ProductArt kind={product.art} strokeWidth={5} />
            <ProductArt kind={product.art} strokeWidth={5} />
          </GalleryThumbs>
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
          <div className="delivery-item">
            <IconShield />
            <div>
              <strong>Sold by MPS</strong>
              <span>Mukunzi Phones Solution · Kigali</span>
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
