"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";

// Quantity picker + Add to cart + Buy now, used on the product page.
export default function BuyControls({ stock }) {
  const [qty, setQty] = useState(1);

  const clamp = (n) => Math.min(Math.max(1, n), stock);

  return (
    <>
      <div className="qty-row">
        <span className="qty-label">Quantity</span>
        <div className="qty">
          <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => clamp(q - 1))}>
            −
          </button>
          <input
            type="text"
            value={qty}
            aria-label="Quantity"
            onChange={(e) => setQty(clamp(parseInt(e.target.value, 10) || 1))}
          />
          <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => clamp(q + 1))}>
            +
          </button>
        </div>
        <span className="qty-stock">{stock} in stock</span>
      </div>

      <div className="buy-row">
        <button className="btn btn-blue" type="button" onClick={() => addToCart(qty)}>
          Add to cart
        </button>
        <button
          className="btn btn-navy"
          type="button"
          onClick={() => addToCart(qty, "Added — checkout is coming soon")}
        >
          Buy now
        </button>
      </div>
    </>
  );
}
