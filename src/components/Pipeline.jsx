import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Upload, Lightbulb, TrendingUp, Users } from 'lucide-react';
import { cn } from '../lib/utils';

const PipelineStep = ({ icon: Icon, title, description, step, isLast }) => {
    return (
        <div className="relative flex flex-col items-center flex-1 z-10 group">
            {/* Connecting Line (Beam) */}
            {!isLast && (
                <div className="absolute top-10 left-1/2 w-full h-[2px] -z-10 hidden md:block overflow-hidden">
                    <div className="w-full h-full bg-zinc-800/50 absolute top-0 left-0" />
                    <motion.div
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '100%' }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: step * 0.2
                        }}
                        className="w-full h-full bg-white"
                    />
                </div>
            )}

            {/* Step Card */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step * 0.1 }}
                className="relative"
            >
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-zinc-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-20 h-20 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 group-hover:border-zinc-500/50 transition-colors duration-300 shadow-2xl">
                    <Icon className="w-8 h-8 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300" />
                </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step * 0.1 + 0.2 }}
                className="text-center px-4"
            >
                <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-500 mb-3 font-mono">
                    0{step + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-zinc-500 max-w-[200px] leading-relaxed">
                    {description}
                </p>
            </motion.div>
        </div>
    );
};

const Pipeline = () => {
    const steps = [
        {
            icon: Upload,
            title: "Data Onboarding",
            description: "Seamlessly ingest raw data from multiple sources with automated validation."
        },
        {
            icon: Lightbulb,
            title: "Insight Layer",
            description: "AI processes verified data to extract actionable business intelligence."
        },
        {
            icon: TrendingUp,
            title: "Sales Forecasting",
            description: "Predict future demand with high accuracy using proprietary models."
        },
        {
            icon: Users,
            title: "CRM Segmentation",
            description: "Automatically segment customers based on value and behavior patterns."
        },
    ];

    return (
        <section id="how-it-works" className="py-32 relative overflow-hidden bg-[#0A0A0A]">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-zinc-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-6xl font-bold mb-6 text-white tracking-tight"
                    >
                        From Raw Data to <br />
                        <span className="text-white">
                            Immutable Truth.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        Our pipeline ensures that every prediction is not only accurate but also verifiable and actionable.
                    </motion.p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-0 relative">
                    {steps.map((step, index) => (
                        <PipelineStep
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            step={index}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pipeline;
