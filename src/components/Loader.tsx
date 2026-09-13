"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const finish = () => setIsLoading(false);

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const timer = setTimeout(() => setMounted(false), 500);
    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#f9f7f9] transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="loader" />
    </div>
  );
}
