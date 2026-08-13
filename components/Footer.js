import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo-name">MPS</span>
            <p>
              Mukunzi Phones Solutions — phones that power your life.
              Genuine phones &amp; electronics in Kigali, Rwanda. Pay with
              mobile money, delivered to your door.
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
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+250780285043">Call: 0780 285 043</a></li>
              <li><a href="https://wa.me/250780285043" target="_blank" rel="noopener">WhatsApp us</a></li>
              <li><a href="https://www.instagram.com/mukunziphonessolutions" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@mukunziphonesssolutions" target="_blank" rel="noopener">TikTok</a></li>
              <li>Kigali, Rwanda</li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Phone sales &amp; buying</li>
              <li>Trade-in (top up)</li>
              <li>Installment plans on iPhones</li>
              <li>Phone repair</li>
              <li>Laptops, cameras &amp; accessories</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MPS — Mukunzi Phones Solutions · Kigali, Rwanda</span>
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
