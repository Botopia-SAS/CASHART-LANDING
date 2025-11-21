"use client";

import { useState, useEffect } from "react";

// ==========================================
// DATA STRUCTURE - Fully configurable flows
// ==========================================

type FlowStep = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  // 🎬 VIDEO PLACEHOLDER: Replace this with your actual video URL or Lottie animation
  videoPlaceholder: string;
};

type Flow = {
  id: string;
  label: string;
  description: string;
  steps: FlowStep[];
};

const FLOWS: Flow[] = [
  {
    id: "galleries",
    label: "Galleries",
    description:
      "Turn your gallery inventory into instant liquidity while keeping full control of your catalogue.",
    steps: [
      {
        id: "gallery-1",
        title: "Create your gallery account",
        subtitle: "Get onboarded in minutes",
        description:
          "Register your gallery to unlock your CashArt dashboard and start listing artwork.",
        bullets: [
          "Secure onboarding designed for professional galleries",
          "Access to inventory tools and funding options",
        ],
        videoPlaceholder: "gallery-onboarding",
      },
      {
        id: "gallery-2",
        title: "Upload and verify your artworks",
        subtitle: "List your inventory",
        description:
          "Upload high-quality images, pricing, and details for each piece. Our team reviews and verifies your submissions.",
        bullets: [
          "Centralize your entire catalog in one place",
          "Verification adds trust for collectors and financiers",
        ],
        videoPlaceholder: "gallery-upload",
      },
      {
        id: "gallery-3",
        title: "Choose how you want to monetize",
        subtitle: "Sell or request an advance",
        description:
          "For each artwork, decide whether you'll wait for a collector or request an advance based on its valuation.",
        bullets: [
          "Flexible monetization options per artwork",
          "Keep your cash flow moving without fire-selling pieces",
        ],
        videoPlaceholder: "gallery-monetize",
      },
      {
        id: "gallery-4",
        title: "Get instant payment",
        subtitle: "CashArt wires funds upfront",
        description:
          "Once approved, CashArt pays your gallery instantly while we handle the risk and payment processing.",
        bullets: [
          "Instant settlement to your gallery account",
          "CashArt absorbs collector risk and compliance work",
        ],
        videoPlaceholder: "gallery-payment",
      },
      {
        id: "gallery-5",
        title: "Track everything in one dashboard",
        subtitle: "Control and transparency",
        description:
          "Monitor advances, sales, payouts, and artwork status from a single, real-time dashboard.",
        bullets: [
          "Live overview of balances and exposures",
          "Designed for galleries that need clarity at a glance",
        ],
        videoPlaceholder: "gallery-dashboard",
      },
    ],
  },
  {
    id: "collectors",
    label: "Collectors",
    description:
      "Discover, finance, and own curated art with flexible payment schedules.",
    steps: [
      {
        id: "collector-1",
        title: "Discover curated artworks",
        subtitle: "Explore CashArt marketplace",
        description:
          "Browse verified galleries and artworks in a secure, curated environment.",
        bullets: [
          "Verified galleries only",
          "Clear pricing and provenance information",
        ],
        videoPlaceholder: "collector-discover",
      },
      {
        id: "collector-2",
        title: "Check your buying power",
        subtitle: "Instant pre-approval",
        description:
          "Request a quick pre-approval to understand your available credit and payment options—without heavy friction.",
        bullets: [
          "Soft checks that keep things simple",
          "Clear view of your available limit",
        ],
        videoPlaceholder: "collector-preapproval",
      },
      {
        id: "collector-3",
        title: "Select a flexible payment plan",
        subtitle: "6–24 month schedules",
        description:
          "Choose a plan that matches your needs while CashArt pays the gallery upfront.",
        bullets: [
          "Longer terms without blocking gallery cash flow",
          "Transparent instalments, no hidden surprises",
        ],
        videoPlaceholder: "collector-payment-plan",
      },
      {
        id: "collector-4",
        title: "CashArt pays the gallery in full",
        subtitle: "Zero burden for the artist",
        description:
          "CashArt settles the full amount with the gallery instantly and manages the ongoing payment relationship with you.",
        bullets: [
          "Galleries receive full payment on day one",
          "You pay CashArt over time",
        ],
        videoPlaceholder: "collector-gallery-payment",
      },
      {
        id: "collector-5",
        title: "Receive and enjoy your artwork",
        subtitle: "Ownership from day one",
        description:
          "Your piece is shipped and delivered while you pay over your agreed schedule.",
        bullets: [
          "Secured delivery from gallery to collector",
          "Track your payment status and artwork journey",
        ],
        videoPlaceholder: "collector-delivery",
      },
    ],
  },
  {
    id: "art-backed-financing",
    label: "Art-Backed Financing",
    description:
      "Use your artwork as collateral to unlock instant liquidity without giving up long-term upside.",
    steps: [
      {
        id: "financing-1",
        title: "Request a funding amount",
        subtitle: "Start with what you need",
        description:
          "Tell us how much capital you want to unlock using your artwork or gallery inventory as collateral.",
        bullets: [
          "Simple, guided request flow",
          "Tailored to galleries and serious collectors",
        ],
        videoPlaceholder: "financing-request",
      },
      {
        id: "financing-2",
        title: "Artwork valuation",
        subtitle: "Professional review",
        description:
          "CashArt's team evaluates the artwork, combining market data and gallery context to determine a fair financing value.",
        bullets: [
          "Transparent valuation framework",
          "Aligned with galleries and collectors—not against them",
        ],
        videoPlaceholder: "financing-valuation",
      },
      {
        id: "financing-3",
        title: "Approval and instant disbursement",
        subtitle: "Funds when you need them",
        description:
          "Once approved, funds are transferred instantly while the artwork is registered as collateral on the platform.",
        bullets: [
          "No waiting for a buyer",
          "Instant liquidity for your next move",
        ],
        videoPlaceholder: "financing-approval",
      },
      {
        id: "financing-4",
        title: "Flexible repayment",
        subtitle: "Keep your options open",
        description:
          "Repay over time under clear terms. If the artwork is sold, part of the sale can automatically close the financing.",
        bullets: [
          "Payment schedules that fit your cash flow",
          "Clear link between sale proceeds and financing",
        ],
        videoPlaceholder: "financing-repayment",
      },
      {
        id: "financing-5",
        title: "Maintain upside on your collection",
        subtitle: "Protect your long-term value",
        description:
          "Use your art to access capital today without completely exiting your position.",
        bullets: [
          "Designed for long-term collectors and galleries",
          "Finance growth without liquidating key pieces",
        ],
        videoPlaceholder: "financing-upside",
      },
    ],
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
      {/* Container bar with full rounded edges */}
      <div className="relative bg-gray-800/40 backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-gray-700/50">
        {/* Animated background slider */}
        <div
          className="absolute top-1.5 bottom-1.5 sm:top-2 sm:bottom-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-500 ease-out shadow-lg shadow-emerald-500/30"
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
                  ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}
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

function StoryProgress({
  steps,
  activeStepIndex,
  onStepClick,
  stepDuration,
}: {
  steps: FlowStep[];
  activeStepIndex: number;
  onStepClick: (index: number) => void;
  stepDuration: number; // en milisegundos
}) {
  return (
    <div className="flex gap-1 sm:gap-1.5 mb-6 sm:mb-8 px-4">
      {steps.map((step, index) => {
        const isActive = index === activeStepIndex;
        const isCompleted = index < activeStepIndex;

        return (
          <button
            key={step.id}
            onClick={() => {
              // 📊 ANALYTICS: Track step click event here
              // Example: analytics.track('step_clicked', { step: step.id, index })
              onStepClick(index);
            }}
            className="flex-1 h-0.5 sm:h-1 rounded-full bg-gray-700/40 overflow-hidden relative hover:bg-gray-600/50 transition-colors"
            aria-label={`Go to step ${index + 1}: ${step.title}`}
          >
            {/* Barra de progreso completada */}
            {isCompleted && (
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500" />
            )}

            {/* Barra de progreso activa con animación tipo Instagram Stories */}
            {isActive && (
              <div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/40 origin-left"
                style={{
                  animation: `storyProgress ${stepDuration / 1000}s linear forwards`,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

function FlowStepCard({ step, stepIndex }: { step: FlowStep; stepIndex: number }) {
  // Determinar si el video va a la izquierda o derecha según el índice del step
  const isVideoLeft = stepIndex % 2 === 0;

  return (
    <div className={`relative flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12 px-4 max-w-7xl mx-auto ${isVideoLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* VIDEO - Más grande y protagonista con animación de flip en eje Y y traslación */}
      <div
        key={`video-${step.id}`}
        className="w-full lg:w-2/3 flex-shrink-0"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          animation: `${isVideoLeft ? 'flipSlideToRight' : 'flipSlideToLeft'} 0.6s ease-out`,
        }}
      >
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gray-700/50 shadow-2xl">
          {/* 🎬 VIDEO INTEGRATION POINT: Replace this div with your video component */}
          {/* Example with video tag:
            <video
              src={`/videos/${step.videoPlaceholder}.mp4`}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          */}
          {/* Example with Lottie:
            <Lottie
              animationData={require(`@/animations/${step.videoPlaceholder}.json`)}
              loop
              className="w-full h-full"
            />
          */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 flex items-center justify-center border-2 border-emerald-500/30">
                <svg
                  className="w-12 h-12 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500 font-mono">
                Video: {step.videoPlaceholder}
              </p>
            </div>
          </div>

          {/* Subtle animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />
        </div>
      </div>

      {/* TEXTO - Más pequeño y siempre alineado a la izquierda con fade */}
      <div
        key={`text-${step.id}`}
        className="w-full lg:w-1/3 space-y-3 sm:space-y-4 text-left"
        style={{
          animation: `${isVideoLeft ? 'fadeInFromRight' : 'fadeInFromLeft'} 0.5s ease-out 0.2s both`,
        }}
      >
        {/* Step number badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-600/10 border border-emerald-500/20">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
            {step.id.split("-")[1]}
          </div>
          <span className="text-[11px] sm:text-xs font-semibold text-emerald-400">
            {step.subtitle}
          </span>
        </div>

        {/* Title - Más pequeño */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
          {step.title}
        </h3>

        {/* Description - Más pequeño */}
        <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed">
          {step.description}
        </p>

        {/* Bullet points - Más pequeños y siempre alineados a la izquierda */}
        {step.bullets.length > 0 && (
          <ul className="space-y-1.5 sm:space-y-2">
            {step.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                <div className="mt-1 sm:mt-1.5 w-1 h-1 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex-shrink-0" />
                <span className="text-gray-400 text-[11px] sm:text-xs lg:text-sm">
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
  const [activeFlowId, setActiveFlowId] = useState<string>(FLOWS[0].id);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeFlow = FLOWS.find((f) => f.id === activeFlowId) || FLOWS[0];
  const activeStep = activeFlow.steps[activeStepIndex];

  // ⏱️ EDITABLE: Duración en segundos para cada step (ajustar según duración del video)
  const STEP_DURATION = 8000; // milisegundos (8 segundos)

  const handleFlowChange = (newFlowId: string) => {
    setActiveFlowId(newFlowId);
    setActiveStepIndex(0); // Reset to first step when switching flows
  };

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
  };

  // Auto-advance to next step when current step completes
  useEffect(() => {
    const timer = setTimeout(() => {
      // Si no es el último step, avanzar al siguiente
      if (activeStepIndex < activeFlow.steps.length - 1) {
        setActiveStepIndex(activeStepIndex + 1);
      }
      // Si es el último step, volver al primero (loop)
      // else {
      //   setActiveStepIndex(0);
      // }
    }, STEP_DURATION);

    return () => clearTimeout(timer);
  }, [activeStepIndex, activeFlow.steps.length, STEP_DURATION]);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Background elements - Railway-inspired */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Radial gradients for depth */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6">


          {/* Main heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-4">
            See how CashArt works in{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              a few simple flows
            </span>
          </h2>


        </div>

        {/* Flow Toggle */}
        <FlowToggle
          flows={FLOWS}
          activeFlowId={activeFlowId}
          onFlowChange={handleFlowChange}
        />

        {/* Story Progress Bars */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <StoryProgress
            steps={activeFlow.steps}
            activeStepIndex={activeStepIndex}
            onStepClick={handleStepClick}
            stepDuration={STEP_DURATION}
          />
        </div>

        {/* Main Content - Sin contenedor que englobe */}
        <div key={`${activeFlowId}-${activeStepIndex}`} className="mb-8 sm:mb-10 lg:mb-12">
          <FlowStepCard step={activeStep} stepIndex={activeStepIndex} />
        </div>

        
      </div>
    </section>
  );
}
