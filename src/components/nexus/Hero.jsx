import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardMockup from './DashboardMockup';
import LogoCarousel from './LogoCarousel';
import Balancer from 'react-wrap-balancer';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-48 pb-20 px-6 bg-white overflow-hidden min-h-screen flex flex-col items-center">

      <div className="max-w-[1600px] mx-auto w-full">
        <div className="max-w-7xl mx-auto mb-20">
          {/* Header Grid: Title Left, Meta/Buttons Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tighter text-slate-900"
            >
              <Balancer>
                Turn retail data into customer <span className="font-serif text-[4.00rem] italic font-normal tracking-[-0.055em]">Growth</span>
              </Balancer>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-start lg:items-end lg:text-right h-full justify-between"
            >
              <p className="text-base text-slate-500 max-w-lg leading-relaxed">
                Autonomous revenue layer for retail. Detect, diagnose, and prescribe growth actions with RFM intelligence.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-7 lg:-translate-y-5">
                <button onClick={() => navigate('/waitlist')} className="px-8 py-3.5 bg-white border  border-slate-200 text-slate-900 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm text-sm">
                  Join waitlist
                </button>
                <button onClick={() => navigate('/demo')} className="px-8 py-3.5 bg-black text-white rounded-xl font-medium hover:shadow-md transition-colors shadow-sm text-sm">
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

