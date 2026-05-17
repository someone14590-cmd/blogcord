"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdBanner() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent ads on localhost
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense error:", err);
    }
  }, []);

  return (
    <div className="my-10 flex justify-center px-4">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "728px",
          height: "90px",
        }}
        data-ad-client="ca-pub-6472805618652143"
        data-ad-slot="6622549011"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}