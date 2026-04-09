import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/nexus/Navbar';
import Hero from './components/nexus/Hero';
import ValueProp from './components/nexus/ValueProp';
import FeatureDeepDives from './components/nexus/FeatureDeepDives';
import QuoteSection from './components/nexus/QuoteSection';
import ChangelogSection from './components/nexus/ChangelogSection';
import Footer from './components/nexus/Footer';
import { LoginPage } from './components/ui/login-page';
import { SignupPage } from './components/ui/signup-page';
import { DemoPage } from './components/ui/demo-page';
import { WaitlistPage } from './components/ui/waitlist-page';
import Balancer from 'react-wrap-balancer';
import { Analytics } from '@vercel/analytics/react';

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
        navigate('/demo');
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
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/" element={
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname}>
              <Navbar />
              <main>
                <Hero />
                <ValueProp />
                <QuoteSection />
                <ChangelogSection />
              </main>
              <Footer />
            </motion.div>
          </AnimatePresence>
        } />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;

