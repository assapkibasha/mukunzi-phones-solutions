"use client";

import { addToCart } from "@/lib/cart";

export default function AddToCartButton() {
  return (
    <button className="add-btn" type="button" onClick={() => addToCart(1)}>
      Add to cart
    </button>
  );
}
