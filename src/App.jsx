import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/interfere/Navbar';
import Hero from './components/interfere/Hero';
import ValueProp from './components/interfere/ValueProp';
import FeatureDeepDives from './components/interfere/FeatureDeepDives';
import QuoteSection from './components/interfere/QuoteSection';

import ChangelogSection from './components/interfere/ChangelogSection';
import Footer from './components/interfere/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white font-sans antialiased animate-in">
      <AnimatePresence mode="wait">
        <motion.div>
          <Navbar />
          <main>
             <Hero />
             <ValueProp />
             <QuoteSection />
             <FeatureDeepDives />
             
             <ChangelogSection />

             {/* Middle CTA Section - Build software that never breaks */}
             <section className="py-40 bg-zinc-50/50 border-y border-slate-100 text-center overflow-hidden">
                <div className="max-w-5xl mx-auto px-6">
                   <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 leading-none mb-12">
                     Build software that <br /> never <span className="font-serif italic font-normal tracking-wide">breaks</span>
                   </h2>
                   <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button className="px-8 py-3 bg-white border border-slate-200 text-slate-900 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm">
                         Join waitlist
                      </button>
                      <button className="px-8 py-3 bg-black text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg">
                         Request a demo
                      </button>
                   </div>
                </div>
             </section>
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;

