"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import logo from '@/assets/chainforcastlogo.png';

export function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Radial Gradient Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40" 
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #93c5fd, transparent 70%)
          `,
        }} 
      />

      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img 
              src={logo} 
              alt="Interfere Logo" 
              className="w-full h-full object-contain scale-[3] mix-blend-multiply" 
            />
          </div>
        </a>
      </div>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto pb-32">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >

              <h1 className="text-[32px] sm:text-[44px] md:text-[52px] leading-[1.15] font-normal tracking-tight text-slate-900 mb-6 text-center max-w-2xl">
                The Next Generation <br /> 
                <span className="relative inline-block left-1 sm:left-2">
                  of <span className="font-bold tracking-tighter">Software Reliability.</span>
                </span>
              </h1>

              <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-10">
                The autonomous experience layer where you stop monitoring and start fixing. 
                Detect, triage, and fix bugs automatically — no human required.
              </p>

              <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                    }}
                    placeholder="Your Email Address"
                    className={`w-full h-12 bg-white border ${error ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-sky-100'} rounded-2xl px-5 text-sm font-medium transition-all focus:outline-none focus:ring-4 focus:border-sky-300 placeholder:text-slate-400 shadow-sm`}
                  />
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-6 left-2 text-[11px] font-bold text-red-500"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>
                <button 
                  type="submit"
                  className="h-12 px-8 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-black transition-all active:scale-95 shadow-lg shadow-slate-200"
                >
                  Get Notified
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-8">
                <Check className="w-8 h-8 text-sky-500" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 text-balance">
                You're on the list!
              </h2>
              <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed mb-10">
                We'll notify you the moment we launch. Get ready for the next generation of automation.
              </p>
              <button 
                onClick={() => window.location.href = "/"}
                className="px-8 h-12 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
              >
                Back to Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

    </div>
  );
}
