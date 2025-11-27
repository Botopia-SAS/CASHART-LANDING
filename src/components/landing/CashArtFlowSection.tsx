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
] as const;

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
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <div className="max-w-4xl mx-auto px-4 mb-12 sm:mb-16">
      <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-[#0C5F4C]/30 shadow-lg shadow-[#0C5F4C]/10">
        {/* Animated background slider */}
        <div
          className="absolute top-1.5 bottom-1.5 sm:top-2 sm:bottom-2 rounded-full bg-[#0C5F4C] transition-all duration-500 ease-out shadow-lg shadow-[#0C5F4C]/30"
          style={{
            left: `calc(${(activeIndex / flows.length) * 100}% + 0.375rem)`,
            width: `calc(${100 / flows.length}% - 0.75rem)`,
          }}
        />

        {/* Flow buttons */}
        <div className={`relative grid grid-cols-3 gap-1.5 sm:gap-2`}>
          {flows.map((flow, index) => {
            const isActive = flow.id === activeFlowId;

            return (
              <button
                key={flow.id}
                ref={(el) => {
                  buttonRefs.current[index] = el;
                }}
                onClick={() => {
                  console.log('Toggle clicked:', flow.id);
                  onFlowChange(flow.id);
                }}
                className={`
                  relative z-10 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300
                  ${isActive ? 'text-white' : 'text-gray-700 hover:text-gray-900'}
                `}
                aria-pressed={isActive}
                aria-label={flow.label}
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
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [step.id]);

  // Determinar si la imagen va a la izquierda o derecha según el índice del step
  const isImageLeft = stepIndex % 2 === 0;

  // Estilo de máscara para desktop
  const imageMaskDesktop = {
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
        className={`absolute inset-0 lg:relative w-full lg:w-2/3 flex justify-center lg:justify-end -mt-12 lg:mt-0 -z-10 lg:z-auto pointer-events-none lg:pointer-events-auto transition-all duration-500 ${
          isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="relative w-full max-w-3xl h-[500px] sm:h-[600px] lg:h-[700px]">
          {/* 🖼️ Cloudinary Image con estilo Hero - Desktop */}
          <Image
            src={step.imageUrl}
            alt={step.title}
            fill
            className="hidden lg:block object-contain opacity-40 transition-all duration-500"
            style={imageMaskDesktop}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 66vw"
            priority
          />
          {/* 🖼️ Cloudinary Image con estilo Hero - Mobile */}
          <Image
            src={step.imageUrl}
            alt={step.title}
            fill
            className="lg:hidden object-contain opacity-30 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 66vw"
            priority
          />
        </div>
      </div>

      {/* TEXTO - Centered on Mobile / Left aligned on Desktop */}
      <div
        key={`text-${step.id}`}
        className={`relative z-10 w-full lg:w-1/3 space-y-3 sm:space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start pt-32 lg:pt-0 transition-all duration-500 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Title - Matching Hero text style */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          {step.title}
        </h3>

        {/* Description - Matching Hero text style */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0">
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
    label: t(`${config.id}.label`),
    description: t(`${config.id}.title`),
    steps: [
      {
        id: `${config.id}-1`,
        title: t(`${config.id}.title`),
        subtitle: t(`${config.id}.label`),
        description: t(`${config.id}.description`),
        bullets: [],
        imageUrl: config.imageUrl,
      },
    ],
  }));

  const activeFlow = flows.find((f) => f.id === activeFlowId) || flows[0];
  const activeStep = activeFlow.steps[0]; // Always use first (and only) step

  const handleFlowChange = (newFlowId: string) => {
    console.log('Flow changed from', activeFlowId, 'to', newFlowId);
    setActiveFlowId(newFlowId);
  };



  return (
    <section
      id="smart-liquidity"
      ref={sectionRef}
      className={`relative py-8 sm:py-6 lg:py-8 overflow-hidden mt-12 sm:mt-0 mb-0 scroll-mt-32 ${isVisible ? 'animate-slide-in-left-responsive' : 'opacity-0'}`}
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
        <div className="relative z-20">
          <FlowToggle
            flows={flows}
            activeFlowId={activeFlowId}
            onFlowChange={handleFlowChange}
          />
        </div>

        {/* Main Content - Espacio cero con toggle */}
        <div key={activeFlowId} className="mb-8 sm:mb-10 lg:mb-12 -mt-20 sm:-mt-24 lg:-mt-28 relative">
          <FlowStepCard step={activeStep} stepIndex={0} />
        </div>
      </div>
    </section>
  );
}
