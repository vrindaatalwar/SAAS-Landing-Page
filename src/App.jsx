import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/interfere/Navbar';
import Hero from './components/interfere/Hero';
import ValueProp from './components/interfere/ValueProp';
import FeatureDeepDives from './components/interfere/FeatureDeepDives';
import QuoteSection from './components/interfere/QuoteSection';
import ChangelogSection from './components/interfere/ChangelogSection';
import Footer from './components/interfere/Footer';
import { LoginPage } from './components/ui/login-page';
import { SignupPage } from './components/ui/signup-page';

function App() {
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is typing in an input or textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const key = e.key.toLowerCase();
      if (key === 'l') {
        navigate('/login');
      } else if (key === 'd') {
        setToast({ message: "Demo Page — Coming Soon", type: "demo" });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white font-sans antialiased animate-in">
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 bg-black text-white rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10"
          >
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-black text-[10px]">
              {toast.type === 'login' ? 'L' : 'D'}
            </div>
            <span className="text-sm font-bold tracking-tight">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname}>
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
                      Build software that <br /> never <span className="font-serif italic font-normal tracking-tight">breaks</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button className="px-8 py-3 bg-white border border-slate-200 text-slate-900 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm">
                        Join waitlist
                      </button>
                      <button onClick={() => setToast({ message: "Demo Page — Coming Soon", type: "demo" })} className="px-8 py-3 bg-black text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg">
                        Request a demo
                      </button>
                    </div>
                  </div>
                </section>
              </main>
              <Footer />
            </motion.div>
          </AnimatePresence>
        } />
      </Routes>
    </div>
  );
}

export default App;

