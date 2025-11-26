import { Building2 } from 'lucide-react';

interface Step {
  number: number;
  icon: typeof Building2;
  title: string;
  description: string;
}

interface StepCardProps {
  step: Step;
  isVisible: boolean;
  showTimeline: boolean;
}

export function StepCard({ step, isVisible, showTimeline }: StepCardProps) {
  const Icon = step.icon;

  if (showTimeline) {
    return (
      <div
        className={`flex flex-col gap-4 rounded-3xl border-2 border-[#0C5F4C]/20 bg-white/90 backdrop-blur-sm shadow-2xl shadow-[#0C5F4C]/15 p-6 sm:p-8 transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(12,95,76,0.25)] relative ${
          isVisible ? `animate-card-scale-${step.number}` : 'opacity-50 scale-95'
        }`}
        style={{ zIndex: 10 }}
      >
        {/* Connection dot on timeline */}
        <div
          className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#0C5F4C] to-[#10B981] border-2 border-white shadow-lg"
          style={{ zIndex: 11 }}
        />

        <div className="flex items-center gap-3 mt-2">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#0C5F4C]/15 via-[#10B981]/10 to-[#0C5F4C]/15 flex items-center justify-center border-2 border-[#0C5F4C]/25">
            <Icon className="h-6 w-6 text-[#0C5F4C]" />
          </div>
          <span className="text-base font-bold text-[#0C5F4C]">
            0{step.number}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight break-words">
          {step.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
          {step.description}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 rounded-3xl border-2 border-[#0C5F4C]/20 bg-white/90 backdrop-blur-sm shadow-2xl shadow-[#0C5F4C]/15 p-6 sm:p-8 transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(12,95,76,0.25)] min-h-[280px] sm:min-h-[320px] justify-center">
      <div className="flex items-center gap-3">
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#0C5F4C]/15 via-[#10B981]/10 to-[#0C5F4C]/15 flex items-center justify-center border-2 border-[#0C5F4C]/25">
          <Icon className="h-6 w-6 text-[#0C5F4C]" />
        </div>
        <span className="text-base font-bold text-[#0C5F4C]">
          0{step.number}
        </span>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight break-words">
        {step.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
        {step.description}
      </p>
    </div>
  );
}
