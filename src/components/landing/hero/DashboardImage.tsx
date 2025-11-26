import Image from "next/image";

export function DashboardImage({
  isHovering,
  alt,
}: {
  isHovering: boolean;
  alt: string;
}) {
  // Estilo con degradado en la parte superior e inferior para mobile
  const mobileImageStyle = {
    maskImage:
      "linear-gradient(to bottom, black 10%, black 30%, transparent 80%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, black 10%, black 30%, transparent 80%)",
  };

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
    <div className="absolute inset-0 flex justify-center lg:relative lg:justify-end lg:order-2 -mx-4 sm:mx-0 -mt-34 sm:mt-0 -mb-12 sm:mb-0 z-10 lg:z-auto">
      {/* Mobile version con degradado inferior */}
      <div className="relative w-full max-w-3xl h-[800px] sm:hidden">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-contain opacity-40 transition-all duration-300"
          style={mobileImageStyle}
          priority={!isHovering}
          loading={isHovering ? "lazy" : "eager"}
        />
      </div>
      {/* Desktop version sin degradado inferior */}
      <div className="relative w-full max-w-3xl h-[800px] hidden sm:block">
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
    </div>
  );
}
