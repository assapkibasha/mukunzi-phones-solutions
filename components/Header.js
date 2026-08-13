import Link from "next/link";
import Image from "next/image";
import CartBadge from "@/components/CartBadge";
import { IconSearch, IconMenu, IconUser, IconCart } from "@/components/Icons";

export default function Header() {
  return (
    <>
      <div className="utility-bar">
        <div className="container">
          <span>Murakaza neza — open Mon–Sat 8:00–19:00 · Kigali delivery, provinces on request</span>
          <nav className="utility-links" aria-label="Utility">
            <a href="#">Help Center</a>
            <a href="#">Track order</a>
            <span className="divider">|</span>
            <a href="#">EN</a>
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
              <span className="logo-tag">Mukunzi Phones Solution</span>
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
          <button className="all-cats" type="button">
            <IconMenu width="16" height="16" />
            All categories
          </button>
          <Link href="/products">Phones &amp; Tablets</Link>
          <Link href="/products">Computers &amp; Laptops</Link>
          <Link href="/products">Audio &amp; Sound</Link>
          <Link href="/products">Wearables</Link>
          <Link href="/products">Gaming</Link>
          <Link href="/products">Power &amp; Accessories</Link>
          <Link href="/products">Networking</Link>
          <Link className="nav-deal" href="/products">
            Today's Deals
          </Link>
        </div>
      </nav>
    </>
  );
}
