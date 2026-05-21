"use client";

import { useEffect } from "react";

export function SiteUnavailablePopup() {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 p-6 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl border border-white/20 bg-white p-8 text-center shadow-2xl">
        <div className="mx-auto mb-4 h-2 w-20 rounded-full bg-red-500/80" />

        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Site temporarily unavailable
        </h1>

        <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
          We are unable to display this page at the moment. Please contact our support
          team or your account administrator for assistance.
        </p>

        <a
          href="mailto:cotacto@botopia.tech"
          className="mt-7 inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Send email
        </a>

        <p className="mt-3 text-sm text-gray-500">cotacto@botopia.tech</p>
      </div>
    </div>
  );
}
