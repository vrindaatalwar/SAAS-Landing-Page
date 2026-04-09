import React from 'react';
import { Area, XAxis, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import { motion } from 'framer-motion';

const MockupOne = () => {
  const chartData = [
    { name: 'Base', past: 15, future: null, value: 15 },
    { name: 'Launch', past: 25, future: null, value: 25 },
    { name: 'Now', past: 50, future: 50, value: 50 },
    { name: 'Proj.', past: null, future: 90, value: 90 },
    { name: 'Peak', past: null, future: 150, value: 150 },
  ];

  const CustomChartDot = (props) => {
    const { cx, cy, index } = props;
    if (index === 2) {
      return <circle cx={cx} cy={cy} r={4} fill="#ef4444" stroke="white" strokeWidth={2.5} />;
    }
    return null;
  };

  const CustomXAxisTick = ({ x, y, payload }) => {
    const isNow = payload.value === 'Now';
    return (
      <text
        x={x}
        y={y + 12}
        textAnchor="middle"
        fill={isNow ? "#0f172a" : "#94a3b8"}
        fontSize={9}
        fontWeight={isNow ? 700 : 600}
      >
        {payload.value}
      </text>
    );
  };

  return (
    <div className="w-full h-48 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden flex items-center justify-center p-4 group">
      <div className="w-full h-full bg-white border rounded-xl shadow-[0_2px_2px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
        <div className="h-4 bg-[#f5f5f7] flex items-center px-3 relative border-b border-slate-100">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#ff5f57] border border-[#e0443e]/50" />
            <div className="w-2 h-2 rounded-full bg-[#febc2e] border border-[#d89f24]/50" />
            <div className="w-2 h-2 rounded-full bg-[#28c840] border border-[#1bad2c]/50" />
          </div>
        </div>
        <div className="flex-1 p-4 relative flex justify-between">
          <div className="w-24 h-4 bg-slate-50 rounded mb-4" />
          <div className="w-48 h-8 bg-slate-50 rounded mb-6" />

          {/* Reused Dashboard Chart absolutely pinned so it renders flawlessly */}
          <div className="absolute bottom-2 left-4 right-4 h-[65px] overflow-visible">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="relative z-10 w-full h-full -ml-[8px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 2, right: 10, left: 10, bottom: -10 }}>
                  <defs>
                    <linearGradient id="chartGradientVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    height={15}
                    tick={(props) => {
                      const { x, y, payload } = props;
                      const isNow = payload.value === 'Now';
                      return (
                        <text
                          x={x}
                          y={y + 10}
                          textAnchor="middle"
                          fill={isNow ? "#0f172a" : "#94a3b8"}
                          fontSize={9}
                          fontWeight={isNow ? 700 : 600}
                        >
                          {payload.value}
                        </text>
                      );
                    }}
                  />
                  {/* The area fill layer, delayed to slide in after the line finishes */}
                  <Area
                    type="natural"
                    dataKey="value"
                    stroke="none"
                    fill="#ef4444"
                    fillOpacity={0.4}
                    activeDot={false}
                    isAnimationActive={true}
                    animationDuration={1500}
                    animationBegin={1500}
                    animationEasing="ease-in-out"
                  />

                  {/* The solid core line that draws instantly */}
                  <Line
                    type="natural"
                    dataKey="value"
                    stroke="#ef4444"
                    strokeWidth={1}
                    dot={false}
                    activeDot={false}
                    isAnimationActive={true}
                    animationDuration={1500}
                    animationEasing="ease-in-out"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MockupTwo = () => (
  <div className="w-full h-48 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden flex items-center justify-center p-4 group">
    <div className="w-full h-full bg-white border rounded-xl shadow-[0_2px_2px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
      <div className="h-4 bg-[#f5f5f7] flex items-center px-3 relative border-b border-slate-100">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57] border border-[#e0443e]/50" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e] border border-[#d89f24]/50" />
          <div className="w-2 h-2 rounded-full bg-[#28c840] border border-[#1bad2c]/50" />
        </div>
      </div>
      <div className="flex-1 w-full bg-white relative overflow-hidden flex flex-col justify-center p-4">
        {/* Subtle Shimmer - Hover Only */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="w-full relative z-10">
          <div className="flex items-start gap-3 mb-4">
            <div>
              <p className="text-[12px] font-bold text-slate-900 tracking-normal">Data Signal</p>
              <h4 className="text-[10px] font-medium text-slate-500">Unusual conversion drop</h4>
            </div>
          </div>

          {/* Improved Diagnostic Skeleton Lines */}
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="space-y-2 w-full"
          >
            <div className="flex gap-2">
              <div className="h-4 bg-slate-200 rounded-full w-full" />
              <div className="h-4 bg-slate-200 rounded-full w-1/3" />
            </div>
            <div className="h-4 bg-slate-200 rounded-full w-[85%]" />
            <div className="flex gap-2">
              <div className="h-4 bg-slate-200 rounded-full w-2/5" />
              <div className="h-4 bg-slate-200 rounded-full w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

const MockupThree = () => (
  <div className="w-full h-48 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden flex items-center justify-center p-4 group">
    <div className="w-full h-full bg-white border rounded-xl shadow-[0_2px_2px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
      <div className="h-4 bg-[#f5f5f7] flex items-center px-3 relative border-b border-slate-100 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57] border border-[#e0443e]/50" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e] border border-[#d89f24]/50" />
          <div className="w-2 h-2 rounded-full bg-[#28c840] border border-[#1bad2c]/50" />
        </div>
      </div>
      <div className="flex-1 w-full bg-white relative overflow-hidden flex flex-col justify-center items-center p-4 font-mono text-[11px] leading-tight cursor-default">
        {/* Subtle Background Glow - Hover Only */}
        <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/[0.01] transition-colors duration-700 pointer-events-none" />

        <div className="w-full max-w-[260px] relative z-10 flex flex-col justify-center">
          <motion.div
            animate={{ y: [0, -190, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="space-y-4 will-change-transform w-full"
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
      </div>
    </div>
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
    <section className="py-8 px-6 bg-white overflow-hidden">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Headline Section - Time-Staggered Animation */}
        <div className="max-w-5xl mb-24">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-[42px] font-medium tracking-tight select-none flex flex-col gap-3 md:gap-[0.30rem]"
          >
            {/* Line 01 */}
            <motion.span variants={line1Variants} className="block md:whitespace-nowrap">
              Nexus {' '}
              <motion.span
                variants={highlight1Variants}
                className="inline-block px-1.5 py-0 rounded-md"
              >
                reveals
              </motion.span>
              <sup className="text-[11px] font-bold opacity-30 ml-1 tracking-wide">01</sup>
              {' '} hidden growth opportunities,
            </motion.span>

            {/* Line 02 */}
            <motion.span variants={line2Variants} className="block md:whitespace-nowrap">
              <motion.span
                variants={highlight2Variants}
                className="inline-block px-1.5 py-0 rounded-md"
              >
                understands
              </motion.span>
              <sup className="text-[11px] font-bold opacity-30 ml-1 tracking-wide">02</sup>
              {' '} exactly why KPIs are shifting,
            </motion.span>

            {/* Line 03 */}
            <motion.span variants={line3Variants} className="block md:whitespace-nowrap">
              and {' '}
              <motion.span
                variants={highlight3Variants}
                className="inline-block px-1.5 py-0 rounded-md"
              >
                prescribes
              </motion.span>
              <sup className="text-[11px] font-bold opacity-30 ml-1 tracking-wide">03</sup>
              {' '} high-ROI actions.
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
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors">Detect hidden growth opportunities</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
                  Nexus continuously monitors your retail data and notices when segment behavior or purchase outcomes change, before revenue leaks.
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
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors">Diagnose exactly what changed</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
                  Nexus goes beyond raw numbers. It performs diagnostic analytics to find the root cause of churn and explains what's happening and why.
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
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors">Act with absolute confidence</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
                  Nexus turns insight into prescriptive action by suggesting campaigns, pricing adjustments, and stock reorders that drive measurable ROI.
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
