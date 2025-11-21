import Image from 'next/image';

export function DashboardImage({ isHovering, alt }: { isHovering: boolean; alt: string }) {
  const imageStyle = {
    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
  };

  // Optimized Cloudinary URLs with transformations
  const imageSrc = isHovering
    ? "https://res.cloudinary.com/dzi2p0pqa/image/upload/f_auto,q_auto,w_1200/v1763696019/ofu7wiqsbleydwkrkaiu.png"
    : "https://res.cloudinary.com/dzi2p0pqa/image/upload/f_auto,q_auto,w_1200/v1763693868/6fafd5bf-8cbe-4dc0-972e-f646922fa310.png";

  return (
    <div className="relative flex justify-center lg:justify-end lg:order-2">
      <div className="relative w-full max-w-3xl h-[800px]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-contain opacity-40 transition-all duration-300"
          style={imageStyle}
          priority={!isHovering}
          loading={isHovering ? "lazy" : "eager"}
        />
      </div>
    </div>
  );
}
