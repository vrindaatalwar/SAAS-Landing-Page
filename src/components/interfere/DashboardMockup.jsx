import React from 'react';
import { motion } from 'framer-motion';
import { 
  Inbox, 
  MessageSquare, 
  Users, 
  Settings, 
  Search, 
  Bell, 
  ChevronDown, 
  MoreHorizontal,
  Link,
  Clock,
  CheckCircle2,
  AlertCircle,
  Key,
  Plus,
  Send,
  Zap,
  Globe,
  CircleDot
} from 'lucide-react';

const DashboardMockup = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto rounded-3xl border border-slate-200 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden flex h-[900px]">
      {/* Sidebar 1 (Left Icons) */}
      <div className="w-16 border-r border-slate-100 flex flex-col items-center py-6 gap-8 bg-slate-50/30">
        <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center cursor-pointer">
          <div className="w-2.5 h-2.5 bg-white rounded-full" />
        </div>
        <div className="flex flex-col gap-6">
          <Inbox className="w-5 h-5 text-slate-900 cursor-pointer" />
          <Zap className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
          <Users className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
          <MessageSquare className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
          <Settings className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
        </div>
        <div className="mt-auto">
           <div className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors">?</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation Bar */}
        <header className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-4 text-[13px]">
            <Inbox className="w-4 h-4 text-slate-400" />
            <span className="font-medium text-slate-400">Inbox</span>
            <span className="text-slate-200 text-lg">/</span>
            <span className="font-semibold text-slate-900">Broken Password Reset Link</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-1.5">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luke" className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" alt="User" />
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=A" className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" alt="User" />
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=B" className="w-6 h-6 rounded-full border-2 border-white bg-slate-300" alt="User" />
              <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] text-slate-400 font-bold">
                 <Plus className="w-3 h-3" />
              </div>
            </div>
            <div className="h-4 w-px bg-slate-200 mx-1" />
            <div className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[11px] font-bold text-slate-600">
              <div className="w-2 h-2 rounded-full bg-slate-400" />
              Subscribed
            </div>
            <MoreHorizontal className="w-5 h-5 text-slate-300 cursor-pointer hover:text-slate-600 transition-colors" />
          </div>
        </header>

        {/* Scrollable Issue Content */}
        <div className="flex-1 flex min-h-0 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-12 border-r border-slate-100 bg-white custom-scrollbar">
            {/* Header Content */}
            <div className="flex flex-col items-start gap-4 mb-10">
               <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100/50 shadow-sm">
                  <Key className="w-6 h-6 text-slate-300 transform rotate-45" />
               </div>
               <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-300 tracking-wider">#120</span>
                  <h1 className="text-3xl font-bold tracking-tight text-slate-900">Broken Password Reset Link</h1>
               </div>
               <p className="text-sm text-slate-500 max-w-xl leading-relaxed font-medium">
                 A spike in users clicking on reset links but not completing the reset flow was detected. Error rates surged within ten minutes of the latest deployment.
               </p>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-slate-100 mb-10 text-[13px] font-bold">
               <span className="py-3 border-b-2 border-black text-black">Activity</span>
               <span className="py-3 text-slate-300 hover:text-slate-900 cursor-pointer transition-colors">Affected Users</span>
               <span className="py-3 text-slate-300 hover:text-slate-900 cursor-pointer transition-colors">Session Replays</span>
            </div>

            {/* Detailed Activity Feed */}
            <div className="space-y-10 relative">
              <div className="absolute left-1.5 top-2 bottom-6 w-[1.5px] bg-slate-50 -z-0" />
              
              <div className="relative z-10 flex gap-6">
                <div className="w-3 h-3 rounded-full bg-slate-200 mt-1 shadow-[0_0_0_6px_#fff]" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                     <span className="text-[13px] font-bold text-slate-900">New issue detected</span>
                     <span className="text-[11px] font-medium text-slate-300 tracking-tight">36 min ago</span>
                  </div>
                  <p className="text-[13px] text-slate-500 leading-relaxed max-w-lg">
                    Interfere flagged the incident after observing a surge in failed password reset attempts. Metrics showed a spike in users clicking on reset links but not completing the flow. Error rates crossed the anomaly threshold within ten minutes of deployment.
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex gap-6">
                <div className="w-3 h-3 rounded-full bg-slate-200 mt-1 shadow-[0_0_0_6px_#fff]" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                     <span className="text-[13px] font-bold text-slate-900">Session analysis</span>
                     <span className="text-[11px] font-medium text-slate-300 tracking-tight">35 min ago</span>
                  </div>
                  <p className="text-[13px] text-slate-500 leading-relaxed max-w-lg">
                    Password reset links were clicked successfully, but users never reached the final "Password updated" confirmation screen.
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex gap-6">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luke" className="w-4 h-4 rounded-full mt-1 border border-slate-200 shadow-[0_0_0_6px_#fff]" alt="User" />
                <div className="flex items-center gap-2">
                   <span className="text-[13px] font-bold text-slate-900">Luke Shiels set Priority to High</span>
                   <span className="text-[11px] font-medium text-slate-300 tracking-tight">31 min ago</span>
                </div>
              </div>

              {/* Comment Thread */}
              <div className="relative z-10 flex gap-6">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luke" className="w-4 h-4 rounded-full mt-1 border border-slate-200 shadow-[0_0_0_6px_#fff]" alt="User" />
                 <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-2">
                       <span className="text-[13px] font-bold text-slate-900">Luke Shiels commented</span>
                       <span className="text-[11px] font-medium text-slate-300 tracking-tight">30 min ago</span>
                    </div>
                    <div className="p-4 bg-slate-50/50 border border-slate-100 rounded-2xl text-[13px] text-slate-600 max-w-md font-medium">
                       Can you take a look at this please?
                    </div>
                    <div className="flex items-center gap-3 animate-pulse">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                       <span className="text-[11px] font-bold text-slate-200 tracking-widest uppercase">Suggesting a fix...</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Input Placeholder at bottom */}
            <div className="mt-16 sticky bottom-0 bg-white/80 backdrop-blur-sm pt-4 pb-0">
               <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                  <input type="text" placeholder="Leave a comment" className="bg-transparent border-none focus:ring-0 text-[13px] font-medium flex-1 px-2" />
                  <button className="px-4 py-1.5 bg-slate-100 text-slate-400 font-bold text-[11px] rounded-lg transition-colors">Send</button>
               </div>
            </div>
          </div>

          {/* Sidebar 2 (Right Stats) */}
          <div className="w-[280px] bg-slate-50/20 p-8 flex flex-col min-w-[280px]">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-y-6">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Title</span>
                  <p className="text-[12px] font-semibold text-slate-900 leading-tight">Broken password reset link</p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">ID</span>
                  <p className="text-[12px] font-semibold text-slate-900"># 120</p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Priority</span>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-red-500 fill-red-500" />
                    <span className="text-[12px] font-semibold text-slate-900">High</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Assignee</span>
                  <div className="flex items-center gap-1.5">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luke" className="w-4 h-4 rounded-full" alt="" />
                    <span className="text-[12px] font-semibold text-slate-900 truncate">Luke Shiels</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Status</span>
                  <div className="flex items-center gap-1.5 text-orange-500">
                    <Clock className="w-3 h-3" />
                    <span className="text-[12px] font-bold">In Progress</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Surface</span>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-slate-900" />
                    <span className="text-[12px] font-semibold text-slate-900 truncate">Website Frontend</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                   <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">First seen</span>
                   <span className="text-[12px] font-medium text-slate-700 tracking-tight">36 minutes ago</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Last seen</span>
                   <span className="text-[12px] font-medium text-slate-700 tracking-tight">Just now</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Duration</span>
                   <span className="text-[12px] font-medium text-slate-700 tracking-tight">36 min 47 s</span>
                </div>
              </div>

              {/* IMPACTED USERS Section */}
              <div className="pt-12 mt-auto">
                 <div className="space-y-1 mb-6">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.15em]">Impacted Users</span>
                    <p className="text-xl font-bold text-slate-900 tracking-tighter">12,881</p>
                 </div>
                 {/* Precision Chart */}
                 <div className="relative w-full h-32 group">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" preserveAspectRatio="none">
                       {/* Area with Gradient */}
                       <defs>
                          <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                             <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.15" />
                             <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
                          </linearGradient>
                       </defs>
                       <path d="M 0 80 C 40 70, 80 90, 120 70 C 160 50, 180 20, 200 15 L 200 100 L 0 100 Z" fill="url(#chartGradient)" />
                       <path d="M 0 80 C 40 70, 80 90, 120 70 C 160 50, 180 20, 200 15" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
                       
                       {/* Focus Point */}
                       <circle cx="120" cy="70" r="3.5" fill="#f43f5e" stroke="white" strokeWidth="2" />
                       <line x1="120" y1="70" x2="120" y2="100" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                       
                       {/* Axis Labels */}
                       <foreignObject x="0" y="85" width="200" height="20">
                          <div className="flex justify-between items-center text-[9px] font-black text-slate-300 tracking-widest uppercase">
                             <span>H-2</span>
                             <span>H-1</span>
                             <span className="text-slate-900">Now</span>
                             <span>Fix</span>
                             <span>H+1</span>
                          </div>
                       </foreignObject>
                    </svg>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;

