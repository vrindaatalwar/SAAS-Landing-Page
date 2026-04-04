import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertCircle, 
  CheckCircle2, 
  Search, 
  MoreHorizontal,
  Inbox,
  Link,
  Code
} from 'lucide-react';

import { FeatureCarousel } from '../ui/feature-carousel';

const InboxMockup = () => (
  <div className="flex flex-col h-full bg-slate-50/50">
    <header className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-white">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-slate-200" />
        <span className="text-xs font-bold text-slate-400 font-mono">Inbox</span>
      </div>
      <Search className="w-3 h-3 text-slate-400" />
    </header>
    <div className="p-4 grid grid-cols-3 gap-4 h-full">
      {[
        { title: "INVESTIGATING", color: "bg-orange-500", count: 2 },
        { title: "QUEUED", color: "bg-blue-500", count: 3 },
        { title: "RESOLVED", color: "bg-emerald-500", count: 8 }
      ].map((column) => (
        <div key={column.title} className="flex flex-col gap-3">
          <div className="flex items-center gap-2 px-1">
            <div className={`w-1.5 h-1.5 rounded-full ${column.color}`} />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{column.title}</span>
            <span className="text-[10px] text-slate-300 ml-auto">{column.count}</span>
          </div>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="w-full h-2 bg-slate-100 rounded mb-4" />
                <div className="w-2/3 h-2 bg-slate-50 rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AnalysisMockup = () => (
  <div className="flex flex-col h-full">
    <header className="h-12 border-b border-slate-100 flex items-center px-4 gap-4 bg-white">
      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
        <Link className="w-4 h-4 text-slate-400" />
      </div>
      <div className="w-32 h-2 bg-slate-100 rounded" />
    </header>
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-orange-500" />
          <div className="w-24 h-2.5 bg-slate-200 rounded" />
        </div>
        <div className="w-full h-2 bg-slate-100 rounded" />
        <div className="w-2/3 h-2 bg-slate-100 rounded" />
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4">
            <div className="w-1 h-full bg-slate-100" />
            <div className="flex-1 space-y-2">
              <div className="w-20 h-2 bg-slate-200 rounded" />
              <div className="w-full h-2 bg-slate-50 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CodeMockup = () => (
  <div className="flex flex-col h-full bg-white text-slate-900 font-mono text-xs">
    <header className="h-10 border-b border-slate-100 flex items-center px-4 gap-4 bg-slate-50/50">
      <Code className="w-3.5 h-3.5 text-slate-400" />
      <span className="text-slate-400 font-bold text-[10px] tracking-tight">Fix: broken-password-reset.ts</span>
    </header>
    <div className="flex-1 p-6 space-y-4">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
           <span className="text-pink-600 font-bold">export async function</span> 
           <span className="text-blue-600 font-bold">resetPassword</span>
           <span className="text-slate-400">(</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 pl-4 bg-emerald-50/50 border-l-2 border-emerald-500 py-3 rounded-r-lg">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium">- const url = new URL('/incorrect-route')</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-600 font-bold">+ const url = new URL('/api/auth/reset')</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
           <span className="text-slate-400 font-medium">)</span>
        </div>
        <div className="flex items-center gap-2 mt-4">
           <span className="text-pink-600 font-bold">return</span> 
           <span className="text-blue-600 font-bold">url</span>
           <span className="text-slate-900">.toString();</span>
        </div>
      </div>
    </div>
    <div className="h-14 border-t border-slate-100 flex items-center justify-between px-6 bg-slate-50/30">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-30" />
          </div>
          <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Proposed fix validated</span>
        </div>
        <button className="px-4 py-1.5 bg-black text-white rounded-lg font-bold text-[10px] shadow-sm hover:bg-slate-800 transition-colors">Create PR</button>
    </div>
  </div>
);

const FeatureDetail = ({ title, description, step, children }) => (
  <div className="py-24 flex flex-col items-center gap-12 px-6">
    <div className="w-full">
      <div className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-4">0{step}</div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">{title}</h2>
      <p className="text-base text-slate-500 leading-relaxed font-medium mb-10">{description}</p>
      
      <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden aspect-[4/3]">
        {children}
      </div>
    </div>
  </div>
);

const FeatureDeepDives = () => {
  const steps = [
    {
      id: "1",
      name: "Listen",
      title: "Learn about issues before your customers do",
      description: "Interfere continuously monitors your app and notices when behavior or outcomes change, before errors escalate or users report issues.",
      content: <InboxMockup />
    },
    {
      id: "2",
      name: "Analyze",
      title: "Understand what's going wrong",
      description: "Interfere goes beyond logs, metrics, and traces. It finds the root cause and explains what's broken, why, and who it impacts.",
      content: <AnalysisMockup />
    },
    {
      id: "3",
      name: "Fix",
      title: "Fix problems with confidence",
      description: "Interfere takes the solution from root cause to PR. It suggests the fix, tests it locally, and submits it for review.",
      content: <CodeMockup />
    }
  ];

  return (
    <section id="features" className="bg-white">
      {/* Mobile Stack (Vertical List) */}
      <div className="lg:hidden">
        {steps.map((step, idx) => (
          <FeatureDetail 
            key={step.id}
            step={idx + 1}
            title={step.title}
            description={step.description}
          >
            {step.content}
          </FeatureDetail>
        ))}
      </div>

      {/* Desktop Carousel (Interactive) */}
      <div className="hidden lg:block pt-20 pb-8 max-w-7xl mx-auto px-6">
        <FeatureCarousel 
          steps={steps}
          bgClass="from-zinc-50 via-zinc-100 to-zinc-50"
        />
      </div>
    </section>
  );
};

export default FeatureDeepDives;
