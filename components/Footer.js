import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo-name">MPS</span>
            <p>
              Mukunzi Phones Solution — genuine phones &amp; electronics in Kigali, Rwanda.
              Pay with mobile money, delivered to your door.
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link href="/products">Phones &amp; Tablets</Link></li>
              <li><Link href="/products">Computers &amp; Laptops</Link></li>
              <li><Link href="/products">Audio &amp; Sound</Link></li>
              <li><Link href="/products">Power &amp; Accessories</Link></li>
              <li><Link href="/products">Today's Deals</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Track your order</a></li>
              <li><a href="#">Returns &amp; refunds</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About MPS</a></li>
              <li><a href="#">Delivery &amp; fees</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms of service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MPS — Mukunzi Phones Solution · Kigali, Rwanda</span>
          <div className="footer-pay">
            <span>Pay with</span>
            <span className="momo-badge mtn">MTN MoMo</span>
            <span className="momo-badge airtel">Airtel Money</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
