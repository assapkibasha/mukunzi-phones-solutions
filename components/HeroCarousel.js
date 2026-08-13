"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconWhatsApp } from "@/components/Icons";

const SLIDE_COUNT = 4;
const AUTOPLAY_MS = 5500;

// Promo slides, like the banner sliders on big phone-shop sites.
// Text is real HTML (not baked into images), so it stays sharp and
// readable on every screen size — especially phones.
export default function HeroCarousel() {
  const trackRef = useRef(null);
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const target = ((i % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target * track.clientWidth, behavior: reduced ? "auto" : "smooth" });
  }, []);

  const stop = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const start = useCallback(() => {
    if (timerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(() => goTo(indexRef.current + 1), AUTOPLAY_MS);
  }, [goTo]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    indexRef.current = i;
    setIndex(i);
  };

  return (
    <section className="carousel" aria-roledescription="carousel" aria-label="Offers">
      <div
        className="container car-wrap"
        onMouseEnter={stop}
        onMouseLeave={start}
        onTouchStart={stop}
        onTouchEnd={start}
      >
        <div className="car-track" ref={trackRef} onScroll={onScroll}>

          {/* 1 — iPhone installments */}
          <div className="slide slide-navy">
            <div className="slide-copy">
              <p className="slide-eyebrow">iPhone installment plan</p>
              <h2 className="slide-title">Take an iPhone home with a 40–50% deposit.</h2>
              <p className="slide-sub">
                Finish paying over 2 months. The phone is yours from day one —
                full 12-month warranty included.
              </p>
              <Link className="btn btn-white slide-cta" href="/services/installments">
                How it works
              </Link>
            </div>
            <div className="slide-media">
              <Image src="/products/iphone-16-pro-max.jpg" alt="iPhone 16 Pro Max" width={300} height={300} priority />
            </div>
          </div>

          {/* 2 — iPhone 17 Pro Max, Cosmic Orange */}
          <div className="slide slide-orange">
            <div className="slide-copy">
              <p className="slide-eyebrow">New arrival · Cosmic Orange</p>
              <h2 className="slide-title">iPhone 17 Pro Max is here.</h2>
              <p className="slide-sub">
                A19 Pro, 6.9" ProMotion display, 48MP Pro Fusion cameras with 8x zoom.
                256GB — RWF 2,590,000, installment plan available.
              </p>
              <Link className="btn btn-blue slide-cta" href="/product/iphone-17-pro-max">
                See the phone
              </Link>
            </div>
            <div className="slide-media">
              <Image src="/products/iphone-17-pro-max.jpg" alt="iPhone 17 Pro Max in Cosmic Orange" width={320} height={300} priority />
            </div>
          </div>

          {/* 3 — Trade-in */}
          <div className="slide slide-photo">
            <Image
              className="slide-bg"
              src="/photos/service-trade-in.jpg"
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className="slide-overlay" />
            <div className="slide-copy slide-copy-light">
              <p className="slide-eyebrow">Trade-in (top up)</p>
              <h2 className="slide-title">Your old phone is money.</h2>
              <p className="slide-sub">
                Bring it in — we value it on the spot, and you pay only the
                difference for your new phone. All brands accepted.
              </p>
              <Link className="btn btn-white slide-cta" href="/services/trade-in">
                Get a trade-in price
              </Link>
            </div>
          </div>

          {/* 4 — WhatsApp delivery */}
          <div className="slide slide-photo">
            <Image
              className="slide-bg"
              src="/photos/hero-man.jpg"
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 25%" }}
            />
            <div className="slide-overlay" />
            <div className="slide-copy slide-copy-light">
              <p className="slide-eyebrow">Order from home</p>
              <h2 className="slide-title">WhatsApp us — same-day delivery in Kigali.</h2>
              <p className="slide-sub">
                Message 0780 285 043 before 3 PM and receive your phone today.
                Pay with MTN MoMo or Airtel Money.
              </p>
              <a className="btn btn-wa slide-cta" href="https://wa.me/250780285043" target="_blank" rel="noopener">
                <IconWhatsApp />
                WhatsApp us
              </a>
            </div>
          </div>

        </div>

        <button className="car-arrow car-prev" type="button" aria-label="Previous slide" onClick={() => goTo(index - 1)}>
          ‹
        </button>
        <button className="car-arrow car-next" type="button" aria-label="Next slide" onClick={() => goTo(index + 1)}>
          ›
        </button>

        <div className="car-dots">
          {Array.from({ length: SLIDE_COUNT }, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === index ? "active" : ""}
              aria-label={"Go to slide " + (i + 1)}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
