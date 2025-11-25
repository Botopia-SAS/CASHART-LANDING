"use client";

import {
  Building2,
  ShieldCheck,
  DollarSign,
  Palette,
  CreditCard,
  Heart,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { OptionToggle } from "./howitworks/OptionToggle";
import { StepCard } from "./howitworks/StepCard";
import { TimelineLine } from "./howitworks/TimelineLine";

type OptionType = "galleries" | "collectors";

interface Step {
  number: number;
  icon: typeof Building2;
  title: string;
  description: string;
}

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const [activeOption, setActiveOption] = useState<OptionType>("galleries");
  const [opacity, setOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const galleriesSteps: Step[] = [
    {
      number: 1,
      icon: Building2,
      title: t("galleries.step1.title"),
      description: t("galleries.step1.description"),
    },
    {
      number: 2,
      icon: DollarSign,
      title: t("galleries.step2.title"),
      description: t("galleries.step2.description"),
    },
    {
      number: 3,
      icon: ShieldCheck,
      title: t("galleries.step3.title"),
      description: t("galleries.step3.description"),
    },
  ];

  const collectorsSteps: Step[] = [
    {
      number: 1,
      icon: Palette,
      title: t("collectors.step1.title"),
      description: t("collectors.step1.description"),
    },
    {
      number: 2,
      icon: CreditCard,
      title: t("collectors.step2.title"),
      description: t("collectors.step2.description"),
    },
    {
      number: 3,
      icon: Heart,
      title: t("collectors.step3.title"),
      description: t("collectors.step3.description"),
    },
  ];

  const activeSteps =
    activeOption === "galleries" ? galleriesSteps : collectorsSteps;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 400;
      const fadeEnd = 900;
      const newOpacity = Math.min(
        1,
        Math.max(0, (scrollY - fadeStart) / (fadeEnd - fadeStart))
      );
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-8 sm:py-12 lg:py-16 overflow-hidden"
      id="how-it-works"
      style={{ opacity, transition: "opacity 0.3s ease-out" }}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-2">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#0C5F4C]/10 text-[#0C5F4C] border border-[#0C5F4C]/20">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-4 text-gray-900 leading-tight break-words">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            {t("subtitle")}
          </p>
        </div>

        <OptionToggle
          activeOption={activeOption}
          onOptionChange={setActiveOption}
        />

        {/* Cards with Timeline - Desktop */}
        <div className="hidden lg:block relative">
          <TimelineLine isVisible={isVisible} />

          <div className="grid grid-cols-3 gap-6">
            {activeSteps.map((step) => (
              <StepCard
                key={`${activeOption}-${step.number}`}
                step={step}
                isVisible={isVisible}
                showTimeline
              />
            ))}
          </div>
        </div>

        {/* Cards without timeline - Mobile/Tablet */}
        <div className="grid gap-6 md:grid-cols-2 lg:hidden">
          {activeSteps.map((step) => (
            <StepCard
              key={`${activeOption}-${step.number}-mobile`}
              step={step}
              isVisible={isVisible}
              showTimeline={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
