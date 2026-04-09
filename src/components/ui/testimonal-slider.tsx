"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

export const TestimonialSlider = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) {
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
    window.addEventListener("resize", heightFix);
    return () => window.removeEventListener("resize", heightFix);
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      {/* Testimonial image */}
      <div className="relative h-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-sky-500/20 before:via-sky-500/5 before:via-25% before:to-sky-500/0 before:to-75%">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <Transition
                as="div"
                key={index}
                show={active === index}
                className="absolute inset-0 -z-10 h-full"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
                beforeEnter={() => heightFix()}
              >
                <img
                  className="relative left-1/2 top-6 -translate-x-1/2 rounded-full border-2 border-white shadow-xl"
                  src={testimonial.img}
                  width={56}
                  height={56}
                  alt={testimonial.name}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>
      {/* Text areas */}
      <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="flex flex-col gap-4">
                <div className="text-2xl md:text-3xl font-bold text-sky-600 before:content-['\201C'] after:content-['\201D'] tracking-tight">
                  {testimonial.quote}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-normal">{testimonial.name}</span>
                  <span className="text-xs font-medium text-slate-400 capitalize">{testimonial.role}</span>
                </div>
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </div>
  );
};
