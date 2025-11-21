export function GridSpotlight({ mousePos }: { mousePos: { x: number; y: number } }) {
  const maskStyle = `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`;

  return (
    <div
      className="absolute inset-0 pointer-events-none transition-opacity duration-200"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(16, 185, 129, 0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: maskStyle,
        WebkitMaskImage: maskStyle,
      }}
    />
  );
}
