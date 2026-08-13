"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";
import { formatRWF, COLOR_HEX } from "@/lib/products";
import { IconWhatsApp } from "@/components/Icons";

// Price + color/storage choice + quantity + buy buttons.
// One product listing covers all variants: the buyer picks the color
// and storage here; the price follows the storage, and picking a color
// swaps the product photo (via the "mps:variant" event).
export default function ProductBuyPanel({ title, stock, basePrice, oldPrice, off, colors = [], storages = [], colorImages = {} }) {
  const [color, setColor] = useState(colors[0] || null);
  const [storageIdx, setStorageIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const pickColor = (c) => {
    setColor(c);
    window.dispatchEvent(new CustomEvent("mps:variant", { detail: { image: colorImages[c] || null } }));
  };

  const price = storages.length ? storages[storageIdx].price : basePrice;
  const showDeal = oldPrice && price === basePrice;
  const clamp = (n) => Math.min(Math.max(1, n), stock);

  const variantText = [
    storages.length ? storages[storageIdx].label : null,
    color,
  ]
    .filter(Boolean)
    .join(", ");

  const cartLabel = variantText ? "Added to cart (" + variantText + ")" : "Added to cart";
  const whatsappText =
    "Muraho MPS, I want to order: " + title + (variantText ? " — " + variantText : "");

  return (
    <div>
      <div className="detail-price">
        <span className="price">{formatRWF(price)}</span>
        {showDeal && <span className="price-old">{formatRWF(oldPrice)}</span>}
        {showDeal && off && <span className="deal-flag">{off}</span>}
      </div>

      {colors.length > 0 && (
        <div className="opt-group">
          <span className="opt-label">
            Color: <strong>{color}</strong>
          </span>
          <div className="opt-chips">
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                className={"opt-chip swatch" + (c === color ? " active" : "")}
                onClick={() => pickColor(c)}
              >
                <span className="dot" style={{ background: COLOR_HEX[c] || "#cccccc" }} />
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {storages.length > 1 && (
        <div className="opt-group">
          <span className="opt-label">
            Storage: <strong>{storages[storageIdx].label}</strong>
          </span>
          <div className="opt-chips">
            {storages.map((s, i) => (
              <button
                key={s.label}
                type="button"
                className={"opt-chip" + (i === storageIdx ? " active" : "")}
                onClick={() => setStorageIdx(i)}
              >
                {s.label}
                <span className="opt-price">{formatRWF(s.price)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

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
        <button className="btn btn-blue" type="button" onClick={() => addToCart(qty, cartLabel)}>
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

      <a
        className="btn btn-wa"
        style={{ width: "100%", marginTop: 10 }}
        href={"https://wa.me/250780285043?text=" + encodeURIComponent(whatsappText)}
        target="_blank"
        rel="noopener"
      >
        <IconWhatsApp />
        Order on WhatsApp — 0780 285 043
      </a>
    </div>
  );
}
