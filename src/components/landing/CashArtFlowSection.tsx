"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// ==========================================
// DATA STRUCTURE - Fully configurable flows
// ==========================================

type FlowStep = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  // 🖼️ IMAGE URL: Cloudinary image URL
  imageUrl: string;
};

type Flow = {
  id: string;
  label: string;
  description: string;
  steps: FlowStep[];
};

// Static flow IDs and image URLs from Cloudinary
const FLOW_CONFIG = [
  {
    id: "galleries",
    imageUrl:
      "https://res.cloudinary.com/ddb24jg29/image/upload/v1764053955/1_rxel3o.png",
  },
  {
    id: "collectors",
    imageUrl:
      "https://res.cloudinary.com/ddb24jg29/image/upload/v1764053980/2_t8hvfh.png",
  },
  {
    id: "technology",
    imageUrl:
      "https://res.cloudinary.com/ddb24jg29/image/upload/v1764056132/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-11-25T023511.941_yaoqxn.png",
  },
];

// ==========================================
// COMPONENTS
// ==========================================

function FlowToggle({
  flows,
  activeFlowId,
  onFlowChange,
}: {
  flows: Flow[];
  activeFlowId: string;
  onFlowChange: (flowId: string) => void;
}) {
  const activeIndex = flows.findIndex((f) => f.id === activeFlowId);
  const totalFlows = flows.length;

  return (
    <div className="max-w-4xl mx-auto px-4 mb-12 sm:mb-16">
      {/* Container bar with full rounded edges - Matching Hero light mode */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-[#0C5F4C]/30 shadow-lg shadow-[#0C5F4C]/10">
        {/* Animated background slider - Verde oscuro fijo */}
        <div
          className="absolute top-1.5 bottom-1.5 sm:top-2 sm:bottom-2 rounded-full bg-[#0C5F4C] transition-all duration-500 ease-out shadow-lg shadow-[#0C5F4C]/30"
          style={{
            left: `calc(${(activeIndex / totalFlows) * 100}% + 0.375rem)`,
            width: `calc(${100 / totalFlows}% - 0.75rem)`,
          }}
        />

        {/* Flow buttons */}
        <div className="relative grid grid-cols-3 gap-1.5 sm:gap-2">
          {flows.map((flow) => {
            const isActive = flow.id === activeFlowId;

            return (
              <button
                key={flow.id}
                onClick={() => {
                  // 📊 ANALYTICS: Track flow switch event here
                  // Example: analytics.track('flow_switched', { from: activeFlowId, to: flow.id })
                  onFlowChange(flow.id);
                }}
                className={`
                  relative z-10 px-3 py-3 sm:px-6 sm:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300
                  ${isActive ? "text-white" : "text-gray-700 hover:text-gray-900"}
                `}
              >
                {flow.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FlowStepCard({
  step,
  stepIndex,
}: {
  step: FlowStep;
  stepIndex: number;
}) {
  // Determinar si la imagen va a la izquierda o derecha según el índice del step
  const isImageLeft = stepIndex % 2 === 0;

  // Estilo de máscara para degradado con transparencia en la parte superior
  const imageStyle = {
    maskImage:
      "linear-gradient(to bottom, transparent 0%, black 15%, black 50%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent 0%, black 15%, black 50%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    maskComposite: "intersect",
    WebkitMaskComposite: "source-in",
  };

  return (
    <div
      className={`relative flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12 px-4 max-w-7xl mx-auto ${isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      {/* IMAGE - Mobile Background / Desktop Side Image */}
      <div
        key={`image-${step.id}`}
        className="absolute inset-0 lg:relative w-full lg:w-2/3 flex justify-center lg:justify-end -mt-12 lg:mt-0 z-0 lg:z-auto opacity-20 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
        style={{
          animation: `${isImageLeft ? "flipSlideToRight" : "flipSlideToLeft"} 0.6s ease-out`,
        }}
      >
        <div className="relative w-full max-w-3xl h-[500px] sm:h-[600px] lg:h-[700px]">
          {/* 🖼️ Cloudinary Image con estilo Hero */}
          <Image
            src={step.imageUrl}
            alt={step.title}
            fill
            className="object-contain lg:opacity-40 transition-all duration-300"
            style={imageStyle}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 66vw"
            priority
          />
        </div>
      </div>

      {/* TEXTO - Centered on Mobile / Left aligned on Desktop */}
      <div
        key={`text-${step.id}`}
        className="relative z-10 w-full lg:w-1/3 space-y-3 sm:space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start pt-32 lg:pt-0"
        style={{
          animation: `${isImageLeft ? "fadeInFromRight" : "fadeInFromLeft"} 0.5s ease-out 0.2s both`,
        }}
      >
        {/* Title - Matching Hero text style */}
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          {step.title}
        </h3>

        {/* Description - Matching Hero text style */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0">
          {step.description}
        </p>

        {/* Bullet points - Matching Hero style */}
        {step.bullets.length > 0 && (
          <ul className="space-y-1.5 sm:space-y-2 text-left w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
            {step.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                <div className="mt-1 sm:mt-1.5 w-1 h-1 rounded-full bg-gradient-to-br from-[#0C5F4C] to-[#10B981] flex-shrink-0" />
                <span className="text-gray-700 text-[11px] sm:text-xs lg:text-sm">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ==========================================
// MAIN SECTION COMPONENT
// ==========================================

export function CashArtFlowSection() {
  const t = useTranslations("flowSection");
  const [activeFlowId, setActiveFlowId] = useState<string>(FLOW_CONFIG[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Build flows dynamically with translations
  const flows: Flow[] = FLOW_CONFIG.map((config) => ({
    id: config.id,
    label:
      config.id === "galleries"
        ? "For Galleries"
        : config.id === "collectors"
          ? "Collectors"
          : "Technology",
    description: t(`${config.id}.title`),
    steps: [
      {
        id: `${config.id}-1`,
        title: t(`${config.id}.title`),
        subtitle:
          config.id === "galleries"
            ? "For Galleries"
            : config.id === "collectors"
              ? "For Collectors"
              : "Technology",
        description: t(`${config.id}.description`),
        bullets: [],
        imageUrl: config.imageUrl,
      },
    ],
  }));

  const activeFlow = flows.find((f) => f.id === activeFlowId) || flows[0];
  const activeStep = activeFlow.steps[0]; // Always use first (and only) step

  const handleFlowChange = (newFlowId: string) => {
    setActiveFlowId(newFlowId);
  };



  return (
    <section
      ref={sectionRef}
      className={`relative py-8 sm:py-6 lg:py-8 overflow-hidden mt-12 sm:mt-0 ${isVisible ? 'animate-slide-in-left-responsive' : 'opacity-0'}`}
    >
      {/* Background is now global */}

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6">
          {/* Main heading - Matching Hero style */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight px-4">
            {t("title")}{" "}
            <span className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              {t("titleHighlight")}
            </span>
          </h2>
        </div>

        {/* Flow Toggle */}
        <FlowToggle
          flows={flows}
          activeFlowId={activeFlowId}
          onFlowChange={handleFlowChange}
        />

        {/* Main Content - Sin contenedor que englobe */}
        <div key={activeFlowId} className="mb-8 sm:mb-10 lg:mb-12">
          <FlowStepCard step={activeStep} stepIndex={0} />
        </div>
      </div>
    </section>
  );
}
