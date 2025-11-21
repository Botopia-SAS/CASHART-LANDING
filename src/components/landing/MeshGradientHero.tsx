'use client';

export function MeshGradientHero() {
  return (
    <section className="min-h-[400px] bg-[#040812] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden p-12 md:p-16 lg:p-20">
        {/* Fondo con mesh gradients */}
        <div
          className="absolute inset-0 bg-[#064e3b] opacity-90"
          style={{
            backgroundImage: `
              radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 100% 0%, rgba(14, 165, 233, 0.7) 0%, transparent 50%),
              radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.7) 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(251, 146, 60, 0.7) 0%, transparent 50%)
            `
          }}
        />

        {/* Capa de difuminado extra para suavidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#064e3b]/20 to-transparent" />

        {/* Contenido */}
        <div className="relative z-10 text-center text-white space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The internet's fastest financial onboarding
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Increase conversion, fight fraud, and onboard customers to your app or service in seconds.
          </p>
          <div className="pt-4">
            <button className="bg-white/95 text-[#064e3b] font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all hover:scale-105 shadow-lg">
              See onboarding in action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
