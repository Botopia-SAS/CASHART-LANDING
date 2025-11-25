interface TimelineLineProps {
  isVisible: boolean;
}

export function TimelineLine({ isVisible }: TimelineLineProps) {
  return (
    <div className="absolute top-16 left-0 right-0 h-[3px] bg-[#0C5F4C]/20" style={{ zIndex: 0 }}>
      {/* Animated progress line */}
      {isVisible && (
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] origin-left animate-timeline-progress shadow-lg shadow-[#0C5F4C]/30"
          style={{ zIndex: 1 }}
        />
      )}
    </div>
  );
}
