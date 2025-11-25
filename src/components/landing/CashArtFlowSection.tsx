"use client";

import { useState, useRef } from "react";
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
      {/* IMAGE - Estilo Hero Mona Lisa con animación */}
      <div
        key={`image-${step.id}`}
        className="relative w-full lg:w-2/3 flex justify-center lg:justify-end"
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
            className="object-contain opacity-40 transition-all duration-300"
            style={imageStyle}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 66vw"
            priority
          />
        </div>
      </div>

      {/* TEXTO - Más pequeño y siempre alineado a la izquierda con fade */}
      <div
        key={`text-${step.id}`}
        className="w-full lg:w-1/3 space-y-3 sm:space-y-4 text-left"
        style={{
          animation: `${isImageLeft ? "fadeInFromRight" : "fadeInFromLeft"} 0.5s ease-out 0.2s both`,
        }}
      >
        {/* Step number badge - Matching Hero style */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 rounded-full bg-[#0C5F4C]/10 border border-[#0C5F4C]/20">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#0C5F4C] to-[#10B981] flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
            {step.id.split("-")[1]}
          </div>
          <span className="text-[11px] sm:text-xs font-semibold text-[#0C5F4C]">
            {step.subtitle}
          </span>
        </div>

        {/* Title - Matching Hero text style */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
          {step.title}
        </h3>

        {/* Description - Matching Hero text style */}
        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
          {step.description}
        </p>

        {/* Bullet points - Matching Hero style */}
        {step.bullets.length > 0 && (
          <ul className="space-y-1.5 sm:space-y-2">
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
      className="relative py-4 sm:py-6 lg:py-8 overflow-hidden border-t-4 border-b-4 border-blue-500"
    >
      {/* Background is now global */}

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6">
          {/* Main heading - Matching Hero style */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight px-4">
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
