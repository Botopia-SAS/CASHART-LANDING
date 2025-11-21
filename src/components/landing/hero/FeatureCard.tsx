import { Check } from 'lucide-react';

type FeatureCardProps = Readonly<{
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  statValue: string;
  statLabel: string;
  points: string[];
  index: number;
}>;

export function FeatureCard({ icon, title, description, accentColor, statValue, statLabel, points, index }: FeatureCardProps) {
  return (
    <div className="group relative h-full rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-[1px] shadow-[0_20px_45px_rgba(12,95,76,0.08)] dark:shadow-[0_20px_45px_rgba(16,185,129,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(12,95,76,0.15)] dark:hover:shadow-[0_25px_55px_rgba(16,185,129,0.15)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-[#0C5F4C]/10 dark:from-[#10B981]/10 to-transparent" />
      <div className="relative z-10 h-full rounded-[calc(1.5rem-1px)] bg-white dark:bg-gray-800 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accentColor}`}>
            {icon}
          </div>
          <span className="text-sm font-semibold text-gray-400 dark:text-gray-500">0{index}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        <div className="mt-6 flex items-center gap-3">
          <div className="rounded-2xl border border-[#0C5F4C]/15 dark:border-[#10B981]/15 bg-[#0C5F4C]/5 dark:bg-[#10B981]/5 px-4 py-3">
            <div className="text-2xl font-semibold text-[#0C5F4C] dark:text-[#10B981] leading-none">{statValue}</div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mt-1">{statLabel}</p>
          </div>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[140px]">CashArt advantage</p>
        </div>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
              <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#0C5F4C]/10 dark:bg-[#10B981]/10 text-[#0C5F4C] dark:text-[#10B981]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
