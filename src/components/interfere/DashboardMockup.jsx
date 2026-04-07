import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Inbox, 
  MoreHorizontal,
  Key,
  Plus,
  Zap,
  Play,
  ExternalLink
} from 'lucide-react';

const DashboardMockup = () => {
  const [commentText, setCommentText] = useState('');
  const [userCount, setUserCount] = useState(12938);
  const [comments, setComments] = useState([
    {
      id: 1,
      type: 'event',
      title: 'New issue detected',
      time: '36 min ago',
      content: 'Interfere flagged the incident after observing a surge in failed password reset attempts. Metrics showed a spike in users clicking on reset links but not completing the flow. Error rates crossed the anomaly threshold within ten minutes of deployment.'
    },
    {
      id: 2,
      type: 'event',
      title: 'Session analysis',
      time: '35 min ago',
      content: 'Password reset links were clicked successfully, but users never reached the final "Password updated" confirmation screen.'
    },
    {
      id: 3,
      type: 'action',
      user: 'Luke Shiels',
      action: 'set Priority to High',
      time: '31 min ago',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luke'
    }
  ]);

  // Simulate real-time impacted users growth
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSendComment = () => {
    if (!commentText.trim()) return;
    const newComment = {
      id: Date.now(),
      type: 'comment',
      user: 'You',
      time: 'Just now',
      content: commentText,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[1440px] mx-auto rounded-3xl border border-slate-200 bg-white shadow-[0_48px_80px_-16px_rgba(56,189,248,0.15),0_0_48px_rgba(56,189,248,0.3)] overflow-hidden flex h-[900px]"
    >
      <div className="flex w-full h-full"> 
        {/* Sidebar (Logo Only, No Nav) */}
        <div className="w-16 border-r border-slate-100 flex flex-col items-center py-6 bg-slate-50/30 min-w-[64px]">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Navigation Bar */}
          <header className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm sticky top-0 z-30">
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

          <div className="flex-1 flex min-h-0 overflow-hidden">
            {/* Feed Column */}
            <div className="flex-1 flex flex-col min-w-0 border-r border-slate-100">
              <div className="flex-1 overflow-hidden p-12 bg-white pb-6 relative">
                {/* Issue Header */}
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

                {/* Simplified Label (Static) */}
                <div className="flex items-center gap-8 border-b border-slate-100 mb-10 text-[13px] font-bold relative">
                  <div className="py-3 relative text-black border-b-[2px] border-black">
                    Activity
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="space-y-10 relative pb-10">
                  <div className="absolute left-1.5 top-2 bottom-6 w-[1.5px] bg-slate-50 -z-0" />
                  {comments.map((item) => (
                    <div key={item.id} className="relative z-10 flex gap-6">
                      {item.type === 'event' ? (
                        <div className="w-3 h-3 rounded-full bg-slate-200 mt-1 shadow-[0_0_0_6px_#fff]" />
                      ) : (
                        <img src={item.avatar} className="w-4 h-4 rounded-full mt-1 border border-slate-200 shadow-[0_0_0_6px_#fff]" alt="User" />
                      )}
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                           <span className="text-[13px] font-bold text-slate-900">{item.type === 'event' || item.type === 'comment' ? item.title || `${item.user} ${item.type === 'comment' ? 'commented' : ''}` : `${item.user} ${item.action}`}</span>
                           <span className="text-[11px] font-medium text-slate-300 tracking-tight">{item.time}</span>
                        </div>
                        {item.content && (
                          <div className={`${item.type === 'comment' ? 'p-3 bg-slate-50 border border-slate-100 rounded-2xl text-[13px] text-slate-600 max-w-md font-medium shadow-sm' : 'text-[13px] text-slate-500 leading-relaxed max-w-lg'}`}>{item.content}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comment Input */}
              <div className="px-12 pb-12 pt-0 bg-white relative z-20">
                 <div className="flex items-center gap-3 p-2 bg-slate-50/50 border border-slate-200/60 rounded-2xl shadow-sm focus-within:bg-white focus-within:border-slate-400 focus-within:shadow-md transition-all duration-300">
                    <input type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendComment()} placeholder="Leave a comment" className="bg-transparent border-none focus:ring-0 outline-none ring-0 text-[13px] font-medium flex-1 px-4 py-1.5" />
                    <button onClick={handleSendComment} disabled={!commentText.trim()} className={`px-5 py-2 transition-all text-[11px] font-bold rounded-xl ${commentText.trim() ? 'bg-black text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}>Send</button>
                 </div>
              </div>
            </div>

            {/* Right Sidebar (Static) */}
            <div className="w-[280px] bg-slate-50/20 p-8 flex flex-col min-w-[280px] overflow-hidden">
              <div className="space-y-8 h-full flex flex-col">
                <div className="grid grid-cols-2 gap-y-6">
                  <div className="space-y-1.5"><span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Title</span><p className="text-[12px] font-semibold text-slate-900 leading-tight">Broken password reset link</p></div>
                  <div className="space-y-1.5"><span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">ID</span><p className="text-[12px] font-semibold text-slate-900"># 120</p></div>
                  <div className="space-y-1.5"><span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Priority</span><div className="flex items-center gap-1.5 text-slate-900 font-bold"><Zap className="w-3 h-3 text-slate-400 fill-slate-400" /><span className="text-[12px]">High</span></div></div>
                  <div className="space-y-1.5"><span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Assignee</span><div className="flex items-center gap-1.5"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luke" className="w-4 h-4 rounded-full" alt="" /><span className="text-[12px] font-semibold truncate">Luke Shiels</span></div></div>
                </div>
                <div className="pt-8 border-t border-slate-100 flex flex-col gap-4">
                  <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">First seen</span><span className="text-[12px] font-medium text-slate-700">36 minutes ago</span></div>
                  <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Last seen</span><span className="text-[12px] font-medium text-slate-700">Just now</span></div>
                </div>
                <div className="pt-12 mt-auto">
                  <div className="space-y-1 mb-6">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.15em]">Impacted Users</span>
                    <p className="text-xl font-bold tracking-tighter text-slate-900">{userCount.toLocaleString()}</p>
                  </div>
                  <div className="relative w-full h-32 group">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" preserveAspectRatio="none">
                      <defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.15" /><stop offset="100%" stopColor="#94a3b8" stopOpacity="0" /></linearGradient></defs>
                      <path d="M 0 80 C 40 70, 80 90, 120 70 C 160 50, 180 20, 200 15 L 200 100 L 0 100 Z" fill="url(#g)" />
                      <path d="M 0 80 C 40 70, 80 90, 120 70 C 160 50, 180 20, 200 15" fill="none" stroke="#94a3b8" strokeWidth="2" />
                      <circle cx="120" cy="70" r="3.5" fill="#94a3b8" stroke="white" strokeWidth="2" />
                      <line x1="120" y1="70" x2="120" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardMockup;
