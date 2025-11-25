type OptionType = 'galleries' | 'collectors';

interface OptionToggleProps {
  activeOption: OptionType;
  onOptionChange: (option: OptionType) => void;
}

export function OptionToggle({ activeOption, onOptionChange }: OptionToggleProps) {
  const options: { id: OptionType; label: string }[] = [
    { id: 'galleries', label: 'For Galleries' },
    { id: 'collectors', label: 'For Collectors' },
  ];

  const activeIndex = options.findIndex((opt) => opt.id === activeOption);

  return (
    <div className="max-w-md mx-auto px-4 mb-12 sm:mb-16">
      <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-[#0C5F4C]/30 shadow-lg shadow-[#0C5F4C]/10">
        {/* Animated background slider */}
        <div
          className="absolute top-1.5 bottom-1.5 sm:top-2 sm:bottom-2 rounded-full bg-[#0C5F4C] transition-all duration-500 ease-out shadow-lg shadow-[#0C5F4C]/30"
          style={{
            left: `calc(${(activeIndex / options.length) * 100}% + 0.375rem)`,
            width: `calc(${100 / options.length}% - 0.75rem)`,
          }}
        />

        {/* Option buttons */}
        <div className="relative grid grid-cols-2 gap-1.5 sm:gap-2">
          {options.map((option) => {
            const isActive = option.id === activeOption;

            return (
              <button
                key={option.id}
                onClick={() => onOptionChange(option.id)}
                className={`
                  relative z-10 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300
                  ${isActive ? 'text-white' : 'text-gray-700 hover:text-gray-900'}
                `}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
