import Link from "next/link";
import ProductArt from "@/components/ProductArt";
import AddToCartButton from "@/components/AddToCartButton";
import { formatRWF } from "@/lib/products";

export default function ProductCard({ product, withButton = true }) {
  return (
    <article className="product-card">
      {product.off && <span className="deal-flag">{product.off}</span>}
      <div className="product-thumb">
        <ProductArt kind={product.art} />
      </div>
      <div className="product-body">
        <h3 className="product-title">
          <Link href={"/product/" + product.slug}>{product.title}</Link>
        </h3>
        <div className="rating">
          {product.stars}
          <span className="count">({product.count})</span>
        </div>
        <div className="price-row">
          <span className="price">{formatRWF(product.price)}</span>
          {product.oldPrice && <span className="price-old">{formatRWF(product.oldPrice)}</span>}
        </div>
        {withButton && <AddToCartButton />}
      </div>
    </article>
  );
}
