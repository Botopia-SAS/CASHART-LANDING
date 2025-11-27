"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface TimelineEntry {
  title: string | React.ReactNode;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  className = "",
}: {
  data: TimelineEntry[];
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Recuperar el valor de scroll y animaciones
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Actualizar el alto del timeline
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <div
      className={`w-full font-sans md:px-10 ${className}`}
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-4">
        {/* Creamos refs y estados de inView para cada step fuera del map para cumplir las reglas de hooks */}
        {(() => {
          const stepRefs = Array.from({ length: data.length }, () =>
            useRef<HTMLDivElement>(null)
          );
          const inViews = stepRefs.map((ref) =>
            useInView(ref, { once: true, margin: "-30% 0px -30% 0px" })
          );
          return data.map((item, index) => (
            <motion.div
              key={index}
              ref={stepRefs[index]}
              initial={{ opacity: 0, x: 120 }}
              animate={
                inViews[index]
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.1 + index * 0.2,
                        duration: 0.6,
                        type: "spring",
                      },
                    }
                  : {}
              }
              className="flex justify-start pt-4 md:pt-10 md:gap-10"
            >
              <div className="flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-white border border-neutral-200 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-black dark:text-white ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-black dark:text-white">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </motion.div>
          ));
        })()}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#0C5F4C] via-[#10B981] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
