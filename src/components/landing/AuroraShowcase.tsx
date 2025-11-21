'use client';

export function AuroraShowcase() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[48px] border border-white/15 bg-gradient-to-br from-[#031427] via-[#022a45] to-[#02615c] text-white shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
        {/* Animated aurora layers */}
        <div className="absolute inset-0">
          <div className="aurora-layer aurora-layer-1" />
          <div className="aurora-layer aurora-layer-2" />
          <div className="aurora-layer aurora-layer-3" />
          <div className="aurora-lines" />
        </div>

        <div className="relative z-10 grid gap-10 p-10 sm:p-14 lg:p-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Visual Playground</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Aurora gradient inspirado en Plaid
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/75 max-w-3xl">
              Este bloque demuestra cómo combinar gradientes difuminados, capas translúcidas y animaciones lentas para lograr ese efecto
              ondulado tipo aurora que viste en Plaid. Ajusta colores, tamaños y tiempos para adaptarlo al resto del sitio.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 text-sm sm:text-base font-medium">
            <div className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl p-6">
              <p className="text-white/60">Capas</p>
              <p className="mt-3 text-3xl font-semibold">3</p>
              <p className="mt-2 text-white/60">Gradientes con blur animado</p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl p-6">
              <p className="text-white/60">Animación</p>
              <p className="mt-3 text-3xl font-semibold">24s</p>
              <p className="mt-2 text-white/60">Movimiento suave con keyframes</p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl p-6">
              <p className="text-white/60">Textura</p>
              <p className="mt-3 text-3xl font-semibold">Ondas</p>
              <p className="mt-2 text-white/60">Líneas sutiles en movimiento</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .aurora-layer {
            position: absolute;
            width: 160%;
            height: 160%;
            filter: blur(60px);
            opacity: 0.55;
            mix-blend-mode: screen;
          }

          .aurora-layer-1 {
            top: -30%;
            left: -20%;
            background: radial-gradient(circle at 30% 20%, rgba(19, 197, 184, 0.6), transparent 55%);
            animation: aurora-drift-1 32s linear infinite;
          }

          .aurora-layer-2 {
            bottom: -35%;
            right: -10%;
            background: radial-gradient(circle at 70% 70%, rgba(76, 107, 255, 0.5), transparent 60%);
            animation: aurora-drift-2 26s linear infinite;
          }

          .aurora-layer-3 {
            top: -20%;
            right: -25%;
            background: radial-gradient(circle at 50% 50%, rgba(247, 120, 43, 0.35), transparent 60%);
            animation: aurora-drift-3 38s linear infinite;
          }

          .aurora-lines {
            position: absolute;
            inset: -10%;
            background: repeating-linear-gradient(
              120deg,
              rgba(255, 255, 255, 0.08) 0%,
              rgba(255, 255, 255, 0.02) 12%,
              transparent 18%,
              transparent 28%
            );
            opacity: 0.4;
            filter: blur(1px);
            animation: aurora-lines 22s linear infinite;
          }

          @keyframes aurora-drift-1 {
            0% {
              transform: translate3d(-10%, 0, 0) rotate(0deg);
            }
            50% {
              transform: translate3d(5%, -5%, 0) rotate(180deg);
            }
            100% {
              transform: translate3d(-10%, 0, 0) rotate(360deg);
            }
          }

          @keyframes aurora-drift-2 {
            0% {
              transform: translate3d(0, 10%, 0) scale(1);
            }
            50% {
              transform: translate3d(-8%, -6%, 0) scale(1.1);
            }
            100% {
              transform: translate3d(0, 10%, 0) scale(1);
            }
          }

          @keyframes aurora-drift-3 {
            0% {
              transform: translate3d(5%, -5%, 0) rotate(0deg);
            }
            50% {
              transform: translate3d(-5%, 5%, 0) rotate(160deg);
            }
            100% {
              transform: translate3d(5%, -5%, 0) rotate(320deg);
            }
          }

          @keyframes aurora-lines {
            0% {
              transform: translateX(-5%) skewX(4deg);
            }
            50% {
              transform: translateX(5%) skewX(-4deg);
            }
            100% {
              transform: translateX(-5%) skewX(4deg);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

