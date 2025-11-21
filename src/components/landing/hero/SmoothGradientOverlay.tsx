export function SmoothGradientOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient layers – tonos más claros y menos opacos */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/25 via-teal-100/20 to-emerald-100/25 animate-gradient-shift" />
      <div
        className="absolute inset-0 bg-gradient-to-tl from-emerald-200/25 via-cyan-100/20 to-teal-100/25 animate-gradient-shift"
        style={{ animationDelay: '2s' }}
      />

      {/* Glow effects más suaves */}
      <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-radial from-emerald-300/18 to-transparent blur-3xl animate-blob-1" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-cyan-300/18 to-transparent blur-3xl animate-blob-2" />
      <div className="absolute bottom-0 left-1/3 w-[800px] h-[800px] bg-gradient-radial from-teal-300/18 to-transparent blur-3xl animate-blob-3" />
    </div>
  );
}