"use client";

import { useEffect, useState } from "react";
import { getCartCount } from "@/lib/cart";

export default function CartBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCartCount());
    const onCart = (e) => setCount(e.detail.count);
    const onStorage = () => setCount(getCartCount());
    window.addEventListener("mps:cart", onCart);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("mps:cart", onCart);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return <span className="cart-badge">{count}</span>;
}
