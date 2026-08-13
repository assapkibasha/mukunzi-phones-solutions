"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Main product photo. When the buyer picks a color in ProductBuyPanel,
// it fires an "mps:variant" event and this swaps to that color's photo.
export default function ProductGallery({ src, alt }) {
  const [img, setImg] = useState(src);

  useEffect(() => {
    setImg(src);
    const onVariant = (e) => setImg(e.detail.image || src);
    window.addEventListener("mps:variant", onVariant);
    return () => window.removeEventListener("mps:variant", onVariant);
  }, [src]);

  return (
    <div className="gallery-main">
      <Image
        key={img}
        src={img}
        alt={alt}
        fill
        sizes="(max-width: 900px) 100vw, 520px"
        style={{ objectFit: "contain", padding: 28 }}
        priority
      />
    </div>
  );
}
