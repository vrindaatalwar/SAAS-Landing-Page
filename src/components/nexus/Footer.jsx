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
                     <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
                        <img
                           src={logo}
                           alt="Nexus Logo"
                           className="w-full h-full object-contain scale-[3] mix-blend-multiply opacity-80"
                        />
                     </div>
                     <span className="font-bold text-xl tracking-tight">Nexus</span>
                  </a>
                  <p className="text-sm text-slate-500 max-w-sm mb-8 leading-relaxed">
                     The autonomous revenue intelligence layer for modern retail. Detect leakage, diagnose segments, and prescribe growth actions automatically.
                  </p>
               </div>

               <div>
                  <h4 className="text-sm font-semibold text-slate-900 tracking-normal mb-4">Company</h4>
                  <ul className="space-y-2">
                     <li><a href="/blog" className="text-sm font-medium text-slate-500 hover:text-black">Blog</a></li>
                     <li><a href="/careers" className="text-sm font-medium text-slate-500 hover:text-black">Careers</a></li>
                     <li><a href="/changelog" className="text-sm font-medium text-slate-500 hover:text-black">Changelog</a></li>
                     <li><a href="/contact" className="text-sm font-medium text-slate-500 hover:text-black">Contact</a></li>
                     <li><a href="/roadmap" className="text-sm font-medium text-slate-500 hover:text-black">Roadmap</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-sm font-semibold text-slate-900 tracking-normal mb-4">Legal</h4>
                  <ul className="space-y-2">
                     <li><a href="/cookie-policy" className="text-sm font-medium text-slate-500 hover:text-black">Cookie Policy</a></li>
                     <li><a href="/privacy-policy" className="text-sm font-medium text-slate-500 hover:text-black">Privacy Policy</a></li>
                     <li><a href="/terms-of-service" className="text-sm font-medium text-slate-500 hover:text-black">Terms of Service</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-sm font-semibold text-slate-900 tracking-normal mb-4">Social</h4>
                  <ul className="space-y-2">
                     <li><a href="https://x.com" className="text-sm font-medium text-slate-500 hover:text-black">X (Twitter)</a></li>
                     <li><a href="https://linkedin.com" className="text-sm font-medium text-slate-500 hover:text-black">LinkedIn</a></li>
                     <li><a href="https://discord.com" className="text-sm font-medium text-slate-500 hover:text-black">Discord</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-32 border-slate-100 flex flex-col items-center text-center text-slate-400">
               <div className="text-[12px] font-semibold uppercase tracking-normal w-full max-w-xs">
                  © 2026 Nexus Corp. All rights reserved.
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
