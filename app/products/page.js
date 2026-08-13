import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, byCategory, CATEGORIES } from "@/lib/products";

export async function generateMetadata({ searchParams }) {
  const { category, deals } = await searchParams;
  if (deals) return { title: "Today's deals" };
  return { title: CATEGORIES[category] || "All products" };
}

export default async function ProductsPage({ searchParams }) {
  const { category, deals } = await searchParams;

  let items = products;
  let title = "All products";
  if (deals) {
    items = products.filter((p) => p.off);
    title = "Today's deals";
  } else if (CATEGORIES[category]) {
    items = byCategory(category);
    title = CATEGORIES[category];
  }

  return (
    <main>
      <div className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> › <Link href="/products">Shop</Link> › <span>{title}</span>
          </nav>
          <h1>
            {title} <span className="result-count">— {items.length} {items.length === 1 ? "product" : "products"}</span>
          </h1>
        </div>
      </div>

      <div className="container listing-grid">
        <aside className="filters" aria-label="Filters">
          <div className="filter-group">
            <h4>Category</h4>
            <label className={!category && !deals ? "active-filter" : undefined}>
              <Link href="/products">All products</Link>
            </label>
            {Object.entries(CATEGORIES).map(([key, label]) => (
              <label key={key} className={category === key ? "active-filter" : undefined}>
                <Link href={"/products?category=" + key}>{label}</Link>
              </label>
            ))}
            <label className={deals ? "active-filter" : undefined}>
              <Link href="/products?deals=1">Today's deals</Link>
            </label>
          </div>
          <div className="filter-group">
            <h4>Brand</h4>
            <label><input type="checkbox" defaultChecked /> Apple</label>
            <label><input type="checkbox" defaultChecked /> Tecno</label>
            <label><input type="checkbox" defaultChecked /> Samsung</label>
            <label><input type="checkbox" /> Infinix</label>
            <label><input type="checkbox" /> itel</label>
          </div>
          <div className="filter-group">
            <h4>Price (RWF)</h4>
            <div className="price-inputs">
              <input type="number" placeholder="Min" aria-label="Minimum price" />
              <span>–</span>
              <input type="number" placeholder="Max" aria-label="Maximum price" />
            </div>
          </div>
          <div className="filter-group">
            <h4>Rating</h4>
            <label><input type="checkbox" defaultChecked /> ★★★★ &amp; up</label>
            <label><input type="checkbox" /> ★★★ &amp; up</label>
          </div>
          <div className="filter-group">
            <h4>Delivery</h4>
            <label><input type="checkbox" /> Same-day (Kigali)</label>
            <label><input type="checkbox" /> In stock</label>
          </div>
        </aside>

        <div>
          <div className="sort-bar">
            <span className="result-count">Showing {items.length} results</span>
            <select aria-label="Sort by" defaultValue="popular">
              <option value="popular">Sort: Most popular</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="new">Newest first</option>
              <option value="rated">Best rated</option>
            </select>
          </div>

          <div className="product-grid">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
