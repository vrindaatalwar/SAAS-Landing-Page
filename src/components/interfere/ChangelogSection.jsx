import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ChangelogSection = () => {
   const updates = [
      {
         date: "MAR 12, 2026",
         title: "Introducing Consent Management",
         description: "We've added consent gating to our SDKs, giving you full control over which features active based on your users' consent preferences, with built-in audit trails."
      },
      {
         date: "FEB 11, 2026",
         title: "Timeline Improvements",
         description: "We've redesigned the problem timeline to better distinguish between agent findings, human actions, and external events like pull requests and deployments."
      },
      {
         date: "FEB 1, 2026",
         title: "OAuth applications & scoped API keys",
         description: "Today, we've launched support for developers to create custom OAuth applications and API keys with granular scopes on Interfere."
      }
   ];

   return (
      <section className="pt-8 pb-32 px-6 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-20">
               <div>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wide uppercase mb-4">Changelog</p>
                  <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">The Latest</h2>
               </div>
               <button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-black transition-colors group">
                  See all releases <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-12">
               {updates.map((update, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className="group cursor-pointer"
                  >
                     <div className="text-[10px] font-bold text-slate-400 tracking-wide mb-6">{update.date}</div>
                     <h3 className="text-lg font-bold text-slate-900 group-hover:underline underline-offset-4 decoration-2 mb-3">{update.title}</h3>
                     <p className="text-sm text-slate-500 leading-relaxed font-normal">{update.description}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ChangelogSection;
