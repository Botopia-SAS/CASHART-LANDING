"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useAnimation, useInView } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { OptionToggle } from "./howitworks/OptionToggle";

export function TimelineSection() {
  const t = useTranslations("howItWorks");
  const [activeOption, setActiveOption] = useState<"galleries" | "collectors">(
    "galleries"
  );

  // Card horizontal y animada para cada step
  const StepCard = ({
    icon,
    title,
    description,
    index,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
  }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "-30% 0px -30% 0px",
    });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 120 }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.1 + index * 0.2,
                  duration: 0.6,
                  type: "spring",
                },
              }
            : {}
        }
        className="flex flex-row items-center gap-6 bg-white/80 backdrop-blur-md border border-emerald-100 shadow-xl rounded-2xl px-8 py-6 mb-8 max-w-2xl mx-auto hover:shadow-2xl transition-shadow duration-300"
        style={{ color: "#134e3a" }}
      >
        <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-200 to-teal-200 text-3xl">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ color: "#134e3a" }}>
            {title}
          </h3>
          <p className="text-base font-normal" style={{ color: "#134e3a" }}>
            {description}
          </p>
        </div>
      </motion.div>
    );
  };

  const galleriesData = [
    {
      title: (
        <span
          className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift drop-shadow-md"
          style={{ textShadow: "0 0 40px rgba(16, 185, 129, 0.3)" }}
        >
          {t("step", { number: 1 })}
        </span>
      ),
      content: (
        <StepCard
          icon={
            /* ...icon svg... */
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#10B981" />
              <path
                d="M7 20V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13"
                stroke="#fff"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M7 20h10"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10 11h4"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          }
          title={t("galleries.step1.title")}
          description={t("galleries.step1.description")}
          index={0}
        />
      ),
    },
    {
      title: (
        <span
          className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift drop-shadow-md"
          style={{ textShadow: "0 0 40px rgba(16, 185, 129, 0.3)" }}
        >
          {t("step", { number: 2 })}
        </span>
      ),
      content: (
        <StepCard
          icon={
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#10B981" />
              <path
                d="M12 6v12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 10h8"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 14h8"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          }
          title={t("galleries.step2.title")}
          description={t("galleries.step2.description")}
          index={1}
        />
      ),
    },
    {
      title: (
        <span
          className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift drop-shadow-md"
          style={{ textShadow: "0 0 40px rgba(16, 185, 129, 0.3)" }}
        >
          {t("step", { number: 3 })}
        </span>
      ),
      content: (
        <StepCard
          icon={
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#10B981" />
              <path
                d="M12 8v4l3 3"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" />
            </svg>
          }
          title={t("galleries.step3.title")}
          description={t("galleries.step3.description")}
          index={2}
        />
      ),
    },
  ];

  const collectorsData = [
    {
      title: (
        <span
          className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift drop-shadow-md"
          style={{ textShadow: "0 0 40px rgba(16, 185, 129, 0.3)" }}
        >
          {t("step", { number: 1 })}
        </span>
      ),
      content: (
        <StepCard
          icon={
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#10B981" />
              <path
                d="M12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10z"
                stroke="#fff"
                strokeWidth="2"
              />
              <path
                d="M8 13l2.5 2.5L16 10"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          }
          title={t("collectors.step1.title")}
          description={t("collectors.step1.description")}
          index={0}
        />
      ),
    },
    {
      title: (
        <span
          className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift drop-shadow-md"
          style={{ textShadow: "0 0 40px rgba(16, 185, 129, 0.3)" }}
        >
          {t("step", { number: 2 })}
        </span>
      ),
      content: (
        <StepCard
          icon={
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#10B981" />
              <path
                d="M8 12h8M8 16h8M8 8h8"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          }
          title={t("collectors.step2.title")}
          description={t("collectors.step2.description")}
          index={1}
        />
      ),
    },
    {
      title: (
        <span
          className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift drop-shadow-md"
          style={{ textShadow: "0 0 40px rgba(16, 185, 129, 0.3)" }}
        >
          {t("step", { number: 3 })}
        </span>
      ),
      content: (
        <StepCard
          icon={
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#10B981" />
              <path
                d="M12 8v4l3 3"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" />
            </svg>
          }
          title={t("collectors.step3.title")}
          description={t("collectors.step3.description")}
          index={2}
        />
      ),
    },
  ];

  const data = activeOption === "galleries" ? galleriesData : collectorsData;

  return (
    <div
      id="how-it-works"
      className="relative w-full overflow-clip scroll-mt-32"
    >
      <div className="flex flex-col items-center">
        <OptionToggle
          activeOption={activeOption}
          onOptionChange={setActiveOption}
        />
        {/* Elimina el espacio extra entre el toggle y los steps */}
        <div className="w-full">
          <Timeline data={data} className="!pt-0 !mt-0" />
        </div>
      </div>
    </div>
  );
}
