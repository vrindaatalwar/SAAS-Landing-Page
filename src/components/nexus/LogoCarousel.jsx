import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Y Combinator', src: 'https://cdn.simpleicons.org/ycombinator/000000' },
  { name: 'Vercel', src: 'https://cdn.simpleicons.org/vercel/000000' },
  { name: 'Design', src: 'https://cdn.simpleicons.org/dribbble/000000' }
];

// Duplicate logos for seamless looping
const duplicatedLogos = [...logos, ...logos, ...logos];

const LogoCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden mt-32 border-t border-slate-100 pt-16 pb-12 translate-y-[-1px]">
      <p className="text-[12px] font-bold text-slate-400 tracking-normal uppercase mb-12 text-center">
        Trusted and funded by
      </p>

      {/* Blurred Corners Overlay */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <div className="flex relative">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex flex-nowrap items-center gap-x-20 opacity-50 grayscale hover:grayscale-0 transition-grayscale duration-500"
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex items-center gap-3 whitespace-nowrap group cursor-pointer shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-6 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-sm font-bold tracking-tight text-black group-hover:text-slate-900 transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;
