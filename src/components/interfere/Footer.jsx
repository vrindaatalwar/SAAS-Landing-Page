import React from 'react';
import { Globe } from 'lucide-react';
import logo from '@/assets/chainforcastlogo.png';

const Footer = () => {
   return (
      <footer className="py-32 px-6 bg-[#F8FAFC] border-t border-slate-100">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-16">
               <div className="col-span-2">
                  <a href="/" className="flex items-center gap-2 mb-8">
                     <div className="w-8 h-8 overflow-hidden flex items-center justify-center">
                        <img 
                           src={logo} 
                           alt="Interfere Logo" 
                           className="w-full h-full object-contain scale-[3] mix-blend-multiply" 
                        />
                     </div>
                     <span className="font-bold text-xl tracking-tight">Interfere</span>
                  </a>
                  <p className="text-sm text-slate-500 max-w-sm mb-8 leading-relaxed">
                     The experience layer for modern product teams. Detect, triage, and fix bugs automatically.
                  </p>
                  <div className="flex items-center gap-4">
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded flex items-center gap-2">
                        <Globe className="w-3 h-3 text-emerald-500" />
                        All systems operational
                     </span>
                  </div>
               </div>

               <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Company</h4>
                  <ul className="space-y-4">
                     <li><a href="/blog" className="text-sm font-medium text-slate-600 hover:text-black">Blog</a></li>
                     <li><a href="/careers" className="text-sm font-medium text-slate-600 hover:text-black">Careers</a></li>
                     <li><a href="/changelog" className="text-sm font-medium text-slate-600 hover:text-black">Changelog</a></li>
                     <li><a href="/contact" className="text-sm font-medium text-slate-600 hover:text-black">Contact</a></li>
                     <li><a href="/roadmap" className="text-sm font-medium text-slate-600 hover:text-black">Roadmap</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Legal</h4>
                  <ul className="space-y-4">
                     <li><a href="/cookie-policy" className="text-sm font-medium text-slate-600 hover:text-black">Cookie Policy</a></li>
                     <li><a href="/privacy-policy" className="text-sm font-medium text-slate-600 hover:text-black">Privacy Policy</a></li>
                     <li><a href="/terms-of-service" className="text-sm font-medium text-slate-600 hover:text-black">Terms of Service</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Social</h4>
                  <ul className="space-y-4">
                     <li><a href="https://x.com" className="text-sm font-medium text-slate-600 hover:text-black">X (Twitter)</a></li>
                     <li><a href="https://linkedin.com" className="text-sm font-medium text-slate-600 hover:text-black">LinkedIn</a></li>
                     <li><a href="https://discord.com" className="text-sm font-medium text-slate-600 hover:text-black">Discord</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col items-center text-center text-slate-400">
               <div className="text-[10px] font-bold uppercase tracking-widest w-full max-w-xs">
                  © 2026 Interfere Corp. All rights reserved.
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
