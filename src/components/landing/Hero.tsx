"use client";

import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AuthDialog } from "./AuthDialog";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardImage } from "./hero/DashboardImage";
import { CTAButton } from "./hero/CTAButton";
import { FeatureCard } from "./hero/FeatureCard";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import clsx from "clsx";

export function Hero() {
  const t = useTranslations("hero");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const [showAuth, setShowAuth] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const [heroInView, setHeroInView] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const node = heroSectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHeroInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <>
      <section
        ref={heroSectionRef}
        className={clsx(
          "relative flex items-center overflow-hidden pt-20 pb-0 transform transition-all duration-700 ease-out delay-[250ms]",
          heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        )}
      >
        {/* Background is now global */}

        <div className="container max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
          <div className="relative grid lg:grid-cols-2 gap-0 sm:gap-2 lg:gap-8 items-center">
            <DashboardImage isHovering={isHovering} alt={t("dashboardAlt")} />

            <div className="relative z-20 space-y-2 sm:space-y-3 lg:space-y-6 lg:pr-8 lg:order-1 sm:-mt-4 lg:mt-0 pt-90 sm:pt-0 text-center lg:text-left flex flex-col items-center lg:items-start lg:block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up animate-delay-100 animate-fill-both break-words hyphens-auto drop-shadow-lg">
                <span className="text-gray-900 drop-shadow-md">
                  {t("title")}{" "}
                </span>
                <br />
                <span
                  className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift drop-shadow-md"
                  style={{ textShadow: "0 0 40px rgba(16, 185, 129, 0.3)" }}
                >
                  {t("titleHighlight")}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-[22px] text-gray-700 font-medium leading-relaxed tracking-tight animate-fade-in-up animate-delay-200 animate-fill-both drop-shadow-md">
                {t("descriptionPart1")}
                {t("descriptionPart2")}
              </p>
              <div className="text-base sm:text-lg text-[#0C5F4C] font-semibold animate-fade-in-up animate-delay-250 animate-fill-both mb-2">
                {t("launchBadge")}
              </div>

              <div className="relative pt-4 group animate-scale-in animate-delay-300 animate-fill-both">
                <div
                  className="absolute inset-0 -z-10 blur-3xl opacity-30 transition-opacity duration-300 group-focus-within:opacity-40"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(12, 95, 76, 0.4) 0%, transparent 70%)",
                  }}
                />

                <div className="flex flex-col gap-3">
                  <div className="relative w-full flex items-center rounded-full border-2 border-[#0C5F4C]/40 bg-white/80 backdrop-blur-sm shadow-sm">
                    <input
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-14 pl-4 pr-4 md:pr-40 text-[15px] focus:outline-none bg-transparent border-none text-gray-900 placeholder:text-gray-500"
                    />
                    <CTAButton
                      onClick={(e) => {
                        e.preventDefault();
                        const emailParam = email ? `&email=${encodeURIComponent(email)}` : '';
                        window.location.href = `/${locale}/gallery-signup?mode=signup${emailParam}`;
                      }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      onMouseMove={handleButtonMouseMove}
                      mousePosition={mousePosition}
                      isHovering={isHovering}
                      text={t("registerButton")}
                    />
                  </div>

                  <Link href={`/${locale}/survey`}>
                    <HoverBorderGradient
                      containerClassName="hidden lg:flex w-full rounded-full"
                      as="button"
                      className="bg-transparent text-[15px] font-medium px-4 h-14 rounded-full whitespace-nowrap flex items-center justify-center w-full text-center"
                    >
                      <span className="text-[#0C5F4C]">
                        {t("collectorSurveyButton")}
                      </span>
                    </HoverBorderGradient>
                  </Link>

                  <div className="flex flex-row gap-3 lg:hidden">
                    <Link href={`/${locale}/gallery-signup?mode=signup`} className="w-1/2">
                      <Button
                        className="w-full bg-[#0C5F4C] hover:bg-[#0A4F3E] text-white text-[13px] font-medium px-3 h-10 rounded-full whitespace-nowrap transition-all"
                      >
                        {t("registerButton")}
                      </Button>
                    </Link>

                    <Link href={`/${locale}/survey`} className="w-1/2">
                      <HoverBorderGradient
                        containerClassName="w-full rounded-full"
                        as="button"
                        className="bg-transparent text-[13px] font-medium px-3 h-10 rounded-full whitespace-normal flex items-center justify-center w-full min-w-[120px] max-w-[220px] text-center"
                      >
                        <span className="text-[#0C5F4C] break-word leading-tight">
                          {t("collectorSurveyButton")}
                        </span>
                      </HoverBorderGradient>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AuthDialog
        open={showAuth}
        onOpenChange={setShowAuth}
        defaultMode="signup"
      />
    </>
  );
}

export function HeroFeatureGrid() {
  const t = useTranslations("hero.features");
  const introT = useTranslations("hero.featuresIntro");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(1, Math.max(0, (scrollY - 200) / 400));
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featureCards = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: t("title1"),
      description: t("description1"),
      accentColor: "from-emerald-500 to-emerald-700",
      statValue: t("card1StatValue"),
      statLabel: t("card1StatLabel"),
      points: [t("card1Point1"), t("card1Point2")],
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: t("title2"),
      description: t("description2"),
      accentColor: "from-emerald-600 to-teal-700",
      statValue: t("card2StatValue"),
      statLabel: t("card2StatLabel"),
      points: [t("card2Point1"), t("card2Point2")],
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: t("title3"),
      description: t("description3"),
      accentColor: "from-teal-500 to-emerald-600",
      statValue: t("card3StatValue"),
      statLabel: t("card3StatLabel"),
      points: [t("card3Point1"), t("card3Point2")],
    },
  ];

  return (
    <section
      className="relative py-14 md:py-18 bg-gradient-to-b from-emerald-100/60 via-white to-white dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 overflow-hidden"
      style={{ opacity, transition: "opacity 0.3s ease-out" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#0C5F4C]/10 dark:bg-[#10B981]/20 blur-[130px]" />
        <div className="absolute bottom-0 -right-16 h-48 w-48 bg-[#0C5F4C]/5 dark:bg-[#10B981]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-12 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#0C5F4C]/30 dark:via-[#10B981]/30 to-transparent" />
      </div>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 px-2">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#0C5F4C] dark:text-[#10B981] bg-white dark:bg-gray-800 shadow-sm border border-[#0C5F4C]/20 dark:border-[#10B981]/30">
            {introT("overline")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-4 break-words">
            {introT("title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {introT("subtitle")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featureCards.map((card, index) => (
            <FeatureCard key={card.title} {...card} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
