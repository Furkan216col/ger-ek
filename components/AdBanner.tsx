"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4575620319903211"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
