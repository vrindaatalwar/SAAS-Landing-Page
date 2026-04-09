import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/chainforcastlogo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-1 bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="flex-1 flex items-center justify-start">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-[45px] h-[45px] overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="Nexus Logo"
              className="w-full h-full object-contain scale-[3.5] mix-blend-multiply"
            />
          </div>
          <span className="font-bold text-[19px] tracking-tight text-slate-900">Nexus</span>
        </a>
      </div>

      <div className="flex-1 flex items-center justify-end gap-[18px]">
        <a href="/login" className="hidden sm:flex items-center gap-2 text-[12px] font-medium text-slate-500 hover:text-black transition-colors">
          Login <span className="px-1.5 py-0.5 rounded border border-slate-200 text-[8px] font-normal text-slate-300 bg-slate-50">L</span>
        </a>
        <button
          onClick={() => navigate('/demo')}
          className="px-[19px] py-[9px] bg-black text-white text-[12px] font-medium rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-black/10 active:scale-95"
        >
          Request a demo <span className="opacity-30 text-[12px] font-normal">D</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
