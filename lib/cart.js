// Tiny client-side cart counter (prototype).
// The count lives in localStorage; components stay in sync by listening
// for the "mps:cart" event fired here.

const KEY = "mps-cart-count";

export function getCartCount() {
  if (typeof window === "undefined") return 0;
  return parseInt(window.localStorage.getItem(KEY) || "0", 10);
}

export function addToCart(qty, message) {
  const count = getCartCount() + qty;
  window.localStorage.setItem(KEY, String(count));
  window.dispatchEvent(
    new CustomEvent("mps:cart", {
      detail: {
        count,
        message: message || (qty > 1 ? qty + " items added to cart" : "Added to cart"),
      },
    })
  );
}
