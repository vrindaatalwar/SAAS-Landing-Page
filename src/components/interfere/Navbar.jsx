import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-[12.6px] bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="flex-1 flex items-center justify-start">
        <a href="/" className="flex items-center gap-2.5 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:rotate-12 transition-transform duration-300">
             <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="black" />
             <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white" />
          </svg>
          <span className="font-bold text-xl tracking-tight text-slate-900">Interfere</span>
        </a>
      </div>
      
      <div className="hidden md:flex flex-1 items-center justify-center gap-8">
        <a href="/changelog" className="text-[13px] font-bold text-slate-500 hover:text-black transition-colors">Changelog</a>
        <a href="/careers" className="text-[13px] font-bold text-slate-500 hover:text-black transition-colors">Careers</a>
        <a href="/contact" className="text-[13px] font-bold text-slate-500 hover:text-black transition-colors">Contact</a>
      </div>
 
      <div className="flex-1 flex items-center justify-end gap-5">
        <a href="/login" className="hidden sm:flex items-center gap-2 text-[13px] font-bold text-slate-500 hover:text-black transition-colors">
          Login <span className="px-1.5 py-0.5 rounded border border-slate-200 text-[9px] font-black text-slate-300 bg-slate-50">L</span>
        </a>
        <button 
          onClick={() => navigate('/demo')}
          className="px-5 py-2.5 bg-black text-white text-[13px] font-black rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-black/10 active:scale-95"
        >
          Request a demo <span className="opacity-30 text-[9px] font-black">D</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
