"use client";

import { useEffect, useRef, useState } from "react";

export default function ToastHost() {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const onCart = (e) => {
      setMessage(e.detail.message);
      setShow(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setShow(false), 2200);
    };
    window.addEventListener("mps:cart", onCart);
    return () => {
      window.removeEventListener("mps:cart", onCart);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className={"toast" + (show ? " show" : "")} role="status" aria-live="polite">
      {message}
    </div>
  );
}
