import React from 'react';
import { motion } from 'framer-motion';

const MockupOne = () => {
  const labelVariants = {
    initial: { x: 0, y: 0, rotate: 0, boxShadow: '0 0 0px rgba(251, 146, 60, 0)' },
    hover: {
      x: [-5, 5],
      y: [-4, 4],
      rotate: [-2, 2],
      boxShadow: [
        '0 0 10px rgba(251, 146, 60, 0.1)',
        '0 0 20px rgba(251, 146, 60, 0.2)',
        '0 0 10px rgba(251, 146, 60, 0.1)'
      ],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="w-full h-48 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden flex items-center justify-center p-4 group">
      <div className="w-full h-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div className="h-8 border-b border-slate-100 flex items-center px-3 gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-200" />
          <div className="w-2 h-2 rounded-full bg-slate-200" />
          <div className="w-2 h-2 rounded-full bg-slate-200" />
        </div>
        <div className="flex-1 p-4 relative">
          <div className="w-24 h-4 bg-slate-50 rounded mb-4" />
          <div className="w-48 h-8 bg-slate-50 rounded mb-6" />

          {/* Focus Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] flex items-center justify-center pointer-events-none">
            <motion.div
              variants={labelVariants}
              initial="initial"
              whileHover="hover"
              className="p-3 bg-white rounded-lg border border-orange-100 flex flex-col items-center pointer-events-auto"
            >
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">
                Reset password link
              </span>
              <div className="w-32 h-16 bg-orange-50/50 rounded border border-orange-100/50" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MockupTwo = () => (
  <div className="w-full h-48 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-6 group cursor-default">
    <div className="w-full p-4 bg-white rounded-xl shadow-sm border border-slate-100 relative overflow-hidden">
      {/* Subtle Shimmer - Hover Only */}
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="flex items-start gap-3 mb-4">
        <div className="mt-1 w-5 h-5 text-slate-300">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 8v4M12 16h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" /></svg>
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-400 tracking-wide mb-1">#112</p>
          <h4 className="text-sm font-bold text-slate-800">Reset password flow issue</h4>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-500 flex items-center gap-1.5 relative overflow-hidden">
          <div className="relative">
            {/* Ping Pulse - Hover Only */}
            <motion.div
              style={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center group-hover:opacity-100"
            >
              <motion.div
                animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                className="w-3 h-3 rounded-full bg-slate-400 absolute"
              />
            </motion.div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 relative z-10" />
          </div>
          Investigating...
        </div>
        <div className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-500 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          Medium priority
        </div>
      </div>

      {/* Skeleton Lines - Subtle Pulse on Hover */}
      <div className="mt-6 space-y-2">
        <motion.div
          initial={{ opacity: 0.1 }}
          whileHover={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="h-2 bg-slate-200 rounded w-full"
        />
        <motion.div
          initial={{ opacity: 0.1 }}
          whileHover={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
          className="h-2 bg-slate-200 rounded w-3/4"
        />
      </div>
    </div>
  </div>
);

const MockupThree = () => (
  <div className="w-full h-48 bg-white rounded-2xl border border-slate-100 p-4 font-mono text-[11px] overflow-hidden leading-tight group cursor-default relative">
    {/* Subtle Background Glow - Hover Only */}
    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/[0.01] transition-colors duration-700 pointer-events-none" />

    <motion.div
      initial={{ y: 0, translateZ: 0 }}
      whileHover={{ y: -190 }}
      transition={{ duration: 4, ease: "linear" }}
      className="space-y-4 relative z-10 will-change-transform"
    >
      <div className="text-slate-400 flex gap-4">
        <span className="opacity-50">7</span> <span className="text-slate-600 font-medium">export function buildResetLink(userId: string) &#123;</span>
      </div>
      <div className="text-slate-400 flex gap-4">
        <span className="opacity-50">8</span> <span className="text-slate-600 font-medium">  const token = sign&lt;ResetTokenPayload&gt;(&#123;...&#125;);</span>
      </div>
      <div className="bg-emerald-50/70 -mx-4 px-4 py-1 border-l-2 border-emerald-500/40 flex gap-4 items-center">
        <span className="text-emerald-600/50 font-bold">9</span>
        <span className="text-slate-900 font-bold">  const baseUrl = <span className="text-emerald-600">"https://acme.com/auth"</span>;</span>
      </div>
      <div className="bg-emerald-50/70 -mx-4 px-4 py-1 border-l-2 border-emerald-500/40 flex gap-4 items-center">
        <span className="text-emerald-600/50 font-bold">10</span>
        <span className="text-slate-900 font-bold">  const baseUrl = <span className="text-emerald-600">"https://staging.acme.c..."</span>;</span>
      </div>
      <div className="text-slate-400 flex gap-4">
        <span className="opacity-50">11</span> <span className="text-slate-600 font-medium">  const path = <span className="text-emerald-600">"/reset-password"</span>;</span>
      </div>
      <div className="text-slate-400 flex gap-4">
        <span className="opacity-50">12</span> <span className="text-slate-600 font-medium">  return url.toString();</span>
      </div>
      <div className="text-slate-400 flex gap-4">
        <span className="opacity-50">13</span> <span className="text-slate-600 font-medium">&#125;</span>
      </div>
      <div className="text-slate-300 pt-4 flex gap-4 border-t border-slate-50">
        <motion.span
          style={{ opacity: 0.6 }}
          whileHover={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-emerald-500 font-bold"
        >14</motion.span>
        <span className="text-emerald-600/80 font-bold italic">// Successfully resolved from production.</span>
      </div>
      <div className="text-slate-400 flex gap-4">
        <span className="opacity-50">15</span> <span className="text-slate-600 font-medium">function validateToken(token: string) &#123;</span>
      </div>
      <div className="text-slate-400 flex gap-4">
        <span className="opacity-50">16</span> <span className="text-slate-600 font-medium">  return verify(token, SECRET);</span>
      </div>
      <div className="text-slate-400 flex gap-4">
        <span className="opacity-50">17</span> <span className="text-slate-600 font-medium">&#125;</span>
      </div>
      <div className="text-slate-300 pt-4 flex gap-4 border-t border-slate-50 opacity-50">
        <span className="opacity-50">18</span> <span className="text-slate-400 italic">// Final audit report generated...</span>
      </div>
    </motion.div>
  </div>
);

const ValueProp = () => {
  // Color Definitions for consistent usage
  const black = "#0f172a";
  const gray = "#94a3b8";
  const skyBg = "#f0f9ff";
  const skyText = "#0ea5e9";
  const trans = "rgba(255,255,255,0)";

  // Global Timing for perfect synchronization
  const DURATION = 6;
  const TIMES = [0, 0.25, 0.33, 0.58, 0.66, 0.91, 1.0];
  const SYNC_TRANSITION = { 
    duration: DURATION, 
    times: TIMES, 
    repeat: Infinity, 
    ease: "easeInOut" 
  };

  const line1Variants = {
    initial: { color: gray },
    animate: {
      color: [black, black, gray, gray, gray, gray, black],
      transition: SYNC_TRANSITION
    }
  };

  const line2Variants = {
    initial: { color: gray },
    animate: {
      color: [gray, gray, black, black, gray, gray, gray],
      transition: SYNC_TRANSITION
    }
  };

  const line3Variants = {
    initial: { color: gray },
    animate: {
      color: [gray, gray, gray, gray, black, black, gray],
      transition: SYNC_TRANSITION
    }
  };

  const highlight1Variants = {
    initial: { backgroundColor: trans, color: gray },
    animate: {
      backgroundColor: [skyBg, skyBg, trans, trans, trans, trans, skyBg],
      color: [skyText, skyText, gray, gray, gray, gray, skyText],
      transition: SYNC_TRANSITION
    }
  };

  const highlight2Variants = {
    initial: { backgroundColor: trans, color: gray },
    animate: {
      backgroundColor: [trans, trans, skyBg, skyBg, trans, trans, trans],
      color: [gray, gray, skyText, skyText, gray, gray, gray],
      transition: SYNC_TRANSITION
    }
  };

  const highlight3Variants = {
    initial: { backgroundColor: trans, color: gray },
    animate: {
      backgroundColor: [trans, trans, trans, trans, skyBg, skyBg, trans],
      color: [gray, gray, gray, gray, skyText, skyText, gray],
      transition: SYNC_TRANSITION
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Stagger removed to ensure looping animations start simultaneously
        staggerChildren: 0 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Synchronized Grid Focus Loop
  const box1FocusVariants = {
    initial: { opacity: 0.15 },
    animate: {
      opacity: [1, 1, 0.15, 0.15, 0.15, 0.15, 1],
      transition: SYNC_TRANSITION
    }
  };

  const box2FocusVariants = {
    initial: { opacity: 0.15 },
    animate: {
      opacity: [0.15, 0.15, 1, 1, 0.15, 0.15, 0.15],
      transition: SYNC_TRANSITION
    }
  };

  const box3FocusVariants = {
    initial: { opacity: 0.15 },
    animate: {
      opacity: [0.15, 0.15, 0.15, 0.15, 1, 1, 0.15],
      transition: SYNC_TRANSITION
    }
  };




  return (
    <section className="py-40 px-6 bg-white overflow-hidden">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Headline Section - Time-Staggered Animation */}
        <div className="max-w-4xl mb-32">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-[42px] font-medium tracking-tight leading-[1.3] select-none"
          >
            {/* Line 01 */}
            <motion.span variants={line1Variants} className="block">
              Interfere {' '}
              <motion.span
                variants={highlight1Variants}
                className="inline-block px-1.5 py-0 rounded-md"
              >
                finds
              </motion.span>
              <sup className="text-[11px] font-bold opacity-30 ml-1 tracking-wide">01</sup>
              {' '} issues in your app,
            </motion.span>

            {/* Line 02 */}
            <motion.span variants={line2Variants} className="block">
              <motion.span
                variants={highlight2Variants}
                className="inline-block px-1.5 py-0 rounded-md"
              >
                understands
              </motion.span>
              <sup className="text-[11px] font-bold opacity-30 ml-1 tracking-wide">02</sup>
              {' '} what's happening, and owns
            </motion.span>

            {/* Line 03 */}
            <motion.span variants={line3Variants} className="block">
              <motion.span
                variants={highlight3Variants}
                className="inline-block px-1.5 py-0 rounded-md"
              >
                resolution
              </motion.span>
              <sup className="text-[11px] font-bold opacity-30 ml-1 tracking-wide">03</sup>
              {' '} from first signal to production.
            </motion.span>
          </motion.h2>
        </div>

        {/* Feature Grid Content */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24"
        >
          {/* Feature 01 */}
          <motion.div
            variants={itemVariants}
          >
            <motion.div
              variants={box1FocusVariants}
              className="will-change-opacity"
            >
              <MockupOne />
              <div className="mt-10">
                <span className="text-[10px] font-bold text-slate-400 tracking-wide mb-4 block uppercase leading-none">01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors">Learn about issues before your customers do</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
                  Interfere continuously monitors your app and notices when behavior or outcomes change, before errors escalate or users report issues.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature 02 */}
          <motion.div
            variants={itemVariants}
          >
            <motion.div
              variants={box2FocusVariants}
              className="will-change-opacity"
            >
              <MockupTwo />
              <div className="mt-10">
                <span className="text-[10px] font-bold text-slate-400 tracking-wide mb-4 block uppercase leading-none">02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors">Understand what's going wrong</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
                  Interfere goes beyond logs, metrics, and traces. It finds the root cause and explains what's broken, why, and who it impacts.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature 03 */}
          <motion.div
            variants={itemVariants}
          >
            <motion.div
              variants={box3FocusVariants}
              className="will-change-opacity"
            >
              <MockupThree />
              <div className="mt-10">
                <span className="text-[10px] font-bold text-slate-400 tracking-wide mb-4 block uppercase leading-none">03</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors">Fix problems with confidence</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
                  Interfere turns insight into action by suggesting fixes, linking them to your codebase, and tracking progress until resolved. You're always in control.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};



export default ValueProp;
