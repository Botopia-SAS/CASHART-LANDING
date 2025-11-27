import Image from "next/image";
import { useState, useEffect } from "react";

export function DashboardImage({
  isHovering,
  alt,
}: {
  isHovering: boolean;
  alt: string;
}) {
  const [mobileImageToggle, setMobileImageToggle] = useState(false);

  // Auto-toggle images on mobile every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileImageToggle((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Estilo original solo con degradado superior para desktop
  const desktopImageStyle = {
    maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
  };

  // Optimized Cloudinary URLs with transformations
  const imageWithMoney =
    "https://res.cloudinary.com/dzi2p0pqa/image/upload/v1764018241/uoukffnlpqf0lfdshwmp.png";
  const imageWithoutMoney =
    "https://res.cloudinary.com/dzi2p0pqa/image/upload/v1764018274/mh1hkaddzwcranjmupbe.png";

  // Desktop: use hover state, Mobile: use auto-toggle
  const imageSrc = isHovering ? imageWithMoney : imageWithoutMoney;
  const mobileImageSrc = mobileImageToggle
    ? imageWithMoney
    : imageWithoutMoney;

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 lg:relative lg:justify-end lg:items-end lg:order-2 -mx-4 sm:mx-0 -mt-34 sm:mt-0 -mb-12 sm:mb-0 z-10 lg:z-auto">
      {/* Desktop image with hover effect */}
      <div className="relative w-[370px] h-[220px] sm:w-full sm:max-w-3xl sm:h-[800px] hidden sm:block">
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
      {/* Mobile image with auto-toggle effect */}
      <div className="relative w-screen h-[520px] sm:hidden left-0 right-0 -mt-12">
        <Image
          src={mobileImageSrc}
          alt={alt}
          fill
          className="object-cover object-center opacity-40 transition-all duration-700"
          style={desktopImageStyle}
          priority
        />
      </div>
    </div>
  );
}
