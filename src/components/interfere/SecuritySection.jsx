import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe } from 'lucide-react';

const SecuritySection = () => {
  return (
    <section className="py-40 bg-zinc-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="md:col-span-1 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
           >
              <div>
                <ShieldCheck className="w-8 h-8 text-black mb-6" />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Secure by design. <br /> Safe by default.</h2>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mt-4">
                 Our platform is built on enterprise-grade security standards to protect your data and codebase.
              </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
           >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                 <Lock className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                 We’re in our SOC 2 observation period, with estimated completion in March 2026.
              </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
           >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                 <Globe className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">GDPR & ISO 27001</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                 We're working on compliance with GDPR and ISO 27001, with additional auditing available upon request.
              </p>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
