"use client";

import { useState } from "react";

// Thumbnail row under the product image. Purely visual until real
// product photos replace the placeholder art.
export default function GalleryThumbs({ children }) {
  const [active, setActive] = useState(0);
  const thumbs = Array.isArray(children) ? children : [children];

  return (
    <div className="gallery-thumbs">
      {thumbs.map((thumb, i) => (
        <button
          key={i}
          type="button"
          aria-label={"Photo " + (i + 1)}
          className={i === active ? "active" : ""}
          onClick={() => setActive(i)}
        >
          {thumb}
        </button>
      ))}
    </div>
  );
}
