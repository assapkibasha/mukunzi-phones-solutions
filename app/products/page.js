import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { byCategory } from "@/lib/products";

export const metadata = {
  title: "Phones & Tablets",
};

export default function ProductsPage() {
  const items = byCategory("phones");

  return (
    <main>
      <div className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> › <span>Phones &amp; Tablets</span>
          </nav>
          <h1>
            Phones &amp; Tablets <span className="result-count">— {items.length} products</span>
          </h1>
        </div>
      </div>

      <div className="container listing-grid">
        <aside className="filters" aria-label="Filters">
          <div className="filter-group">
            <h4>Brand</h4>
            <label><input type="checkbox" defaultChecked /> Apple</label>
            <label><input type="checkbox" defaultChecked /> Tecno</label>
            <label><input type="checkbox" defaultChecked /> Samsung</label>
            <label><input type="checkbox" /> Infinix</label>
            <label><input type="checkbox" /> itel</label>
            <label><input type="checkbox" /> Xiaomi</label>
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
            <h4>Storage</h4>
            <label><input type="checkbox" /> 64 GB</label>
            <label><input type="checkbox" defaultChecked /> 128 GB</label>
            <label><input type="checkbox" /> 256 GB</label>
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

          <nav className="pagination" aria-label="Pages">
            <span className="current">1</span>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">Next →</a>
          </nav>
        </div>
      </div>
    </main>
  );
}
