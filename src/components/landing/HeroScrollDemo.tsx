"use client";

import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { useTranslations } from "next-intl";

export function HeroScrollDemo() {
  const t = useTranslations("heroScrollDemo");

  return (
    <div id="dashboard" className="flex flex-col overflow-hidden scroll-mt-32">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] break-words">
              <span className="text-gray-900">{t("title")} </span>
              <br />
              <span
                className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none"
                style={{ textShadow: "0 0 40px rgba(16, 185, 129, 0.3)" }}
              >
                {t("titleHighlight")}
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://res.cloudinary.com/drsvq4tm6/image/upload/v1764140792/aaaa_b5bbhd.png"
          alt={t("imageAlt")}
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

