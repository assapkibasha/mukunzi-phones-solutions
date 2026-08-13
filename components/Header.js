import Link from "next/link";
import Image from "next/image";
import CartBadge from "@/components/CartBadge";
import {
  IconSearch,
  IconUser,
  IconCart,
  IconPhone,
  IconLaptop,
  IconHeadphones,
  IconWatch,
  IconGamepad,
  IconZap,
  IconRouter,
  IconWrench,
  IconTag,
} from "@/components/Icons";

export default function Header() {
  return (
    <>
      <div className="utility-bar">
        <div className="container">
          <span>Murakaza neza — open Mon–Sat 8:00–19:00 · Kigali delivery, provinces on request</span>
          <nav className="utility-links" aria-label="Utility">
            <a href="tel:+250780285043">Call / WhatsApp: 0780 285 043</a>
            <span className="divider">|</span>
            <a href="https://www.instagram.com/mukunziphonessolutions" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.tiktok.com/@mukunziphonesssolutions" target="_blank" rel="noopener">TikTok</a>
          </nav>
        </div>
      </div>

      <header className="main-header">
        <div className="container">
          <Link className="logo" href="/" aria-label="MPS home">
            <Image
              className="logo-mark"
              src="/mps-logo.png"
              alt=""
              width={46}
              height={87}
              priority
            />
            <span>
              <span className="logo-name">MPS</span>
              <span className="logo-tag">Mukunzi Phones Solutions</span>
            </span>
          </Link>

          <form className="search-form" action="/products" role="search">
            <select aria-label="Search category" name="category" defaultValue="all">
              <option value="all">All categories</option>
              <option value="phones">Phones &amp; Tablets</option>
              <option value="computers">Computers &amp; Laptops</option>
              <option value="audio">Audio &amp; Sound</option>
              <option value="wearables">Wearables</option>
              <option value="gaming">Gaming</option>
              <option value="power">Power &amp; Accessories</option>
            </select>
            <input type="search" name="q" placeholder="Search phones, laptops, TVs…" aria-label="Search products" />
            <button className="search-btn" type="submit">
              <IconSearch width="16" height="16" />
              Search
            </button>
          </form>

          <div className="header-actions">
            <a className="header-action" href="#">
              <IconUser />
              Account
            </a>
            <Link className="header-action" href="/products">
              <IconCart />
              Cart
              <CartBadge />
            </Link>
          </div>
        </div>
      </header>

      <nav className="cat-nav" aria-label="Categories">
        <div className="container">
          <Link className="cat-chip deal-chip" href="/products?deals=1">
            <IconTag />
            Today's Deals
          </Link>
          <Link className="cat-chip" href="/products?category=phones">
            <IconPhone />
            Phones &amp; Tablets
          </Link>
          <Link className="cat-chip" href="/products?category=computers">
            <IconLaptop />
            Computers &amp; Laptops
          </Link>
          <Link className="cat-chip" href="/products?category=audio">
            <IconHeadphones />
            Audio &amp; Sound
          </Link>
          <Link className="cat-chip" href="/products?category=wearables">
            <IconWatch />
            Wearables
          </Link>
          <Link className="cat-chip" href="/products?category=gaming">
            <IconGamepad />
            Gaming
          </Link>
          <Link className="cat-chip" href="/products?category=power">
            <IconZap />
            Power
          </Link>
          <Link className="cat-chip" href="/products?category=networking">
            <IconRouter />
            Networking
          </Link>
          <Link className="cat-chip" href="/services/phone-repair">
            <IconWrench />
            Repair
          </Link>
          <Link className="cat-chip" href="/products">
            All products
          </Link>
        </div>
      </nav>
    </>
  );
}
