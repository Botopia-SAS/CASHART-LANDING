import Image from "next/image";

export function DashboardImage({
  isHovering,
  alt,
}: {
  isHovering: boolean;
  alt: string;
}) {
  // Estilo original solo con degradado superior para desktop
  const desktopImageStyle = {
    maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
  };

  // Optimized Cloudinary URLs with transformations
  const imageSrc = isHovering
    ? "https://res.cloudinary.com/dzi2p0pqa/image/upload/v1764018241/uoukffnlpqf0lfdshwmp.png"
    : "https://res.cloudinary.com/dzi2p0pqa/image/upload/v1764018274/mh1hkaddzwcranjmupbe.png";

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 lg:relative lg:justify-end lg:items-end lg:order-2 -mx-4 sm:mx-0 -mt-34 sm:mt-0 -mb-12 sm:mb-0 z-10 lg:z-auto">
      <div className="relative w-[370px] h-[220px] sm:w-full sm:max-w-3xl sm:h-[800px]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-contain opacity-40 transition-all duration-300"
          style={desktopImageStyle}
          priority={!isHovering}
          loading={isHovering ? "lazy" : "eager"}
        />
      </div>
      {/* Phone animation for mobile only */}
      <div className="relative w-[120px] h-[240px] sm:hidden animate-fade-in-up animate-delay-300 animate-fill-both">
        <Image
          src="https://res.cloudinary.com/dzi2p0pqa/image/upload/v1700000000/phone-mockup.png"
          alt="Mobile phone demo"
          fill
          className="object-contain drop-shadow-xl"
          priority={false}
          loading="lazy"
        />
      </div>
    </div>
  );
}
