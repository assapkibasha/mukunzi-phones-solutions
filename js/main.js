// Isoko — shared page interactions (prototype)
// Cart count persists in localStorage so it survives page changes.

(function () {
  var CART_KEY = "isoko-cart-count";

  function getCount() {
    return parseInt(localStorage.getItem(CART_KEY) || "0", 10);
  }

  function renderCount() {
    var count = getCount();
    document.querySelectorAll("[data-cart-count]").forEach(function (el) {
      el.textContent = count;
    });
  }

  var toastTimer;
  function showToast(message) {
    var toast = document.querySelector("[data-toast]");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2200);
  }

  // Add to cart
  document.querySelectorAll("[data-add-to-cart]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var qtyInput = document.querySelector("[data-qty-input]");
      var qty = qtyInput ? Math.max(1, parseInt(qtyInput.value, 10) || 1) : 1;
      localStorage.setItem(CART_KEY, String(getCount() + qty));
      renderCount();
      showToast(qty > 1 ? qty + " items added to cart" : "Added to cart");
    });
  });

  // Quantity stepper (product page)
  var qtyInput = document.querySelector("[data-qty-input]");
  if (qtyInput) {
    var minus = document.querySelector("[data-qty-minus]");
    var plus = document.querySelector("[data-qty-plus]");
    minus.addEventListener("click", function () {
      qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
    });
    plus.addEventListener("click", function () {
      qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1;
    });
  }

  // Gallery thumbnails (product page) — highlight the selected one
  var thumbs = document.querySelectorAll(".gallery-thumbs button");
  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      thumbs.forEach(function (t) { t.classList.remove("active"); });
      thumb.classList.add("active");
    });
  });

  renderCount();
})();
