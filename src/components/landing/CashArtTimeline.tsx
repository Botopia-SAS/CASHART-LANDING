"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";

export function CashArtTimeline() {
  const t = useTranslations("timeline");
  const flowT = useTranslations("flowSection");

  const data = [
    {
      title: "For Galleries",
      content: (
        <div className="flex flex-row items-center gap-6 justify-end">
          <p className="text-sm font-normal text-black md:text-base lg:text-lg text-right max-w-lg leading-relaxed">
            {flowT("galleries.description")}
          </p>
          <img
            src="https://res.cloudinary.com/ddb24jg29/image/upload/v1764053955/1_rxel3o.png"
            alt="Gallery features"
            width={500}
            height={500}
            className="w-1/2 rounded-lg object-cover md:h-64 lg:h-80"
          />
        </div>
      ),
    },
    {
      title: "Collectors",
      content: (
        <div className="flex flex-row items-center gap-6 justify-end">
          <p className="text-sm font-normal text-black md:text-base lg:text-lg text-right max-w-lg leading-relaxed">
            {flowT("collectors.description")}
          </p>
          <img
            src="https://res.cloudinary.com/ddb24jg29/image/upload/v1764053980/2_t8hvfh.png"
            alt="Collector features"
            width={500}
            height={500}
            className="w-1/2 rounded-lg object-cover md:h-64 lg:h-80"
          />
        </div>
      ),
    },
    {
      title: "Technology",
      content: (
        <div className="flex flex-row items-center gap-6 justify-end">
          <p className="text-sm font-normal text-black md:text-base lg:text-lg text-right max-w-lg leading-relaxed">
            {flowT("technology.description")}
          </p>
          <img
            src="https://res.cloudinary.com/ddb24jg29/image/upload/v1764056132/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-11-25T023511.941_yaoqxn.png"
            alt="Technology"
            width={500}
            height={500}
            className="w-1/2 rounded-lg object-cover md:h-64 lg:h-80"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline 
        data={data}
        title={
          <>
            {flowT("title")}{" "}
            <span className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              {flowT("titleHighlight")}
            </span>
          </>
        }
      />
    </div>
  );
}

