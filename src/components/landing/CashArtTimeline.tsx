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
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {flowT("galleries.description")}
          </p>
          <img
            src="https://res.cloudinary.com/ddb24jg29/image/upload/v1764053955/1_rxel3o.png"
            alt="Gallery features"
            width={500}
            height={500}
            className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-64 lg:h-80"
          />
        </div>
      ),
    },
    {
      title: "Collectors",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {flowT("collectors.description")}
          </p>
          <img
            src="https://res.cloudinary.com/ddb24jg29/image/upload/v1764053980/2_t8hvfh.png"
            alt="Collector features"
            width={500}
            height={500}
            className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-64 lg:h-80"
          />
        </div>
      ),
    },
    {
      title: "Technology",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {flowT("technology.description")}
          </p>
          <img
            src="https://res.cloudinary.com/ddb24jg29/image/upload/v1764056132/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-11-25T023511.941_yaoqxn.png"
            alt="Technology"
            width={500}
            height={500}
            className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-64 lg:h-80"
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

