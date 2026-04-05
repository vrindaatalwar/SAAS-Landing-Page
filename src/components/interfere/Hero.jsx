import React from 'react';
import { motion } from 'framer-motion';
import DashboardMockup from './DashboardMockup';
import LogoCarousel from './LogoCarousel';

const Hero = () => {

  return (
    <section className="relative pt-48 pb-20 px-6 bg-white overflow-hidden min-h-screen flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-50/20 rounded-full blur-[140px] -z-10" />

      <div className="max-w-[1600px] mx-auto w-full">
        <div className="max-w-7xl mx-auto mb-20">
          {/* Header Grid: Title Left, Meta/Buttons Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tighter text-slate-900 leading-[0.95]"
            >
              Build software <br /> that never <span className="font-serif italic font-normal tracking-tight">breaks</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-start lg:items-end lg:text-right h-full justify-between"
            >
              <p className="text-base text-slate-500 max-w-lg leading-relaxed">
                Interfere is the experience layer for modern product teams. <br />
                Detect, triage, and fix bugs automatically — no human required.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="px-8 py-3.5 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-sm text-sm">
                  Join waitlist
                </button>
                <button className="px-8 py-3.5 bg-black text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg text-sm">
                  Request a demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dashboard Mockup Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <DashboardMockup />
        </motion.div>

        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;

