import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { formatRWF, productImage } from "@/lib/products";

export default function ProductCard({ product, withButton = true }) {
  return (
    <article className="product-card">
      {product.off && <span className="deal-flag">{product.off}</span>}
      <div className="product-thumb">
        <Image
          src={productImage(product)}
          alt={product.title}
          fill
          sizes="(max-width: 620px) 50vw, (max-width: 1200px) 25vw, 300px"
          style={{ objectFit: "contain", padding: 14 }}
        />
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
