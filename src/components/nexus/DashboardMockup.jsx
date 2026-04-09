import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '@/assets/chainforcastlogo.png';
import {
  Inbox,
  MoreHorizontal,
  Key,
  Plus,
  Zap,
  Play,
  ExternalLink,
  Globe
} from 'lucide-react';
import { Area, XAxis, ResponsiveContainer, Line, ComposedChart } from 'recharts';

const DashboardMockup = () => {
  const chartData = [
    { name: 'Base', past: 20, future: null, fix: null },
    { name: 'Launch', past: 50, future: null, fix: null },
    { name: 'Now', past: 80, future: 80, fix: 80 },
    { name: 'Proj.', past: null, future: 95, fix: 40 },
    { name: 'Peak', past: null, future: 100, fix: 20 },
  ];

  const CustomChartDot = (props) => {
    const { cx, cy, index } = props;
    if (index === 2) {
      return <circle cx={cx} cy={cy} r={4} fill="#ef4444" stroke="white" strokeWidth={2.5} />;
    }
    return null;
  };

  const CustomChartDot2 = (props) => {
    const { cx, cy, index } = props;
    if (index === 2) {
      return <circle cx={cx} cy={cy} r={4} fill="#3b82f6" stroke="white" strokeWidth={2.5} />;
    }
    return null;
  };

  const chartData2 = [
    { name: 'Wk 1', past: 80, future: null, fix: null },
    { name: 'Wk 2', past: 65, future: null, fix: null },
    { name: 'Now', past: 45, future: 45, fix: 45 },
    { name: 'Proj.', past: null, future: 25, fix: 60 },
    { name: 'Peak', past: null, future: 15, fix: 70 },
  ];

  const CustomXAxisTick = ({ x, y, payload }) => {
    const isNow = payload.value === 'Now';
    return (
      <text
        x={x}
        y={y + 12}
        textAnchor="middle"
        fill={isNow ? "#0f172a" : "#94a3b8"}
        fontSize={10}
        fontWeight={isNow ? 700 : 600}
      >
        {payload.value}
      </text>
    );
  };

  const [commentText, setCommentText] = useState('');
  const [userCount, setUserCount] = useState(12881);
  const [comments, setComments] = useState([
    {
      id: 1,
      type: 'event',
      title: 'Segment growth detected',
      time: '36 min ago',
      content: 'Nexus flagged a 12% increase in the "Champions" segment following the Premium Early Access campaign. Recency scores improved across 85% of newly transitioned users, indicating high campaign resonance.'
    },
    {
      id: 2,
      type: 'event',
      title: 'LTV prediction update',
      time: '35 min ago',
      content: 'Predicted Lifetime Value for this segment has increased by $2.4M. Expected purchase frequency for the next 4 weeks is forecasted at 2.8x higher than the Q1 baseline.'
    },
    {
      id: 3,
      type: 'action',
      user: 'Luke Shiels',
      action: 'set Segment Priority to Critical',
      time: '31 min ago',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luke',
      content: 'Reviewing the latest metrics, this segment is highly responsive to the current offer structure. We should monitor conversion velocities tightly over the immediate 48-hour window.'
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
      className="w-full max-w-[1440px] mx-auto rounded-3xl border border-slate-100  shadow-[0_48px_80px_-16px_rgba(56,189,248,0.15),0_0_48px_rgba(56,189,248,0.3)] overflow-hidden flex h-[900px]"
    >
      <div className="flex w-full h-full">
        {/* Sidebar (Logo Only, No Nav) */}
        <div className="w-16 border-r border-slate-100 flex flex-col items-center py-2 min-w-[64px]">
          <div className="w-10 h-10 overflow-hidden flex items-center justify-center rounded-2xlshadow-[0,1,1,0] border border-slate-100">
            <img
              src={logo}
              alt="App Icon"
              className="w-full h-full object-contain scale-[2.5] mix-blend-multiply"
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Navigation Bar */}
          <header className="h-12 border-b border-slate-100 flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm sticky top-0 z-30">
            <div className="flex items-center gap-1.5 text-[12px]">
              <span className="font-semibold text-slate-900">Marketing</span>
              <span className="text-slate-900 text-lg">/</span>
              <span className="font-semibold text-slate-900">Customer Segmentation</span>
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
              <div className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 shadow shadow-slate-100 rounded-lg text-[12px] font-semibold text-slate-600">
                Live Analysis
              </div>
              <MoreHorizontal className="w-5 h-5 text-slate-300" />
            </div>
          </header>

          <div className="flex-1 flex min-h-0 overflow-hidden">
            {/* Feed Column */}
            <div className="flex-1 flex flex-col min-w-0 border-r border-slate-100">
              <div className="flex-1 overflow-hidden p-12 bg-white pb-6 relative">
                {/* Issue Header */}
                <div className="flex flex-col items-start gap-4 mb-10">
                  <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Champions Segment</h1>
                  </div>
                  <p className="text-sm text-slate-500 max-w-xl leading-relaxed font-normal">
                    High recency, frequency, and monetary value. This 12% of your <br />customer base drives 45% of total revenue.<br /> Recommended: Loyalty programs and exclusive early access.
                  </p>
                </div>

                {/* Simplified Label (Static) */}
                <div className="flex items-center gap-8 border-b border-slate-100 mb-10 text-[13px] font-bold relative">
                  <div className="py-3 relative text-black border-b-[2px] border-black">
                    Diagnostic Insights
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
                          <span className="text-[14px] font-bold text-slate-900">{item.type === 'event' || item.type === 'comment' ? item.title || `${item.user} ${item.type === 'comment' ? 'commented' : ''}` : `${item.user} ${item.action}`}</span>
                          <span className="text-[12px] font-normal text-slate-500 tracking-tight">{item.time}</span>
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
                <div className="flex items-center gap-3 p-2 bg-slate-50/50 rounded-2xl border-[0.5px]">
                  <div className="text-slate-400 text-[13px] font-medium flex-1 px-4 py-1.5 select-none cursor-default">Ask a question</div>
                  <button disabled tabIndex={-1} className="px-5 py-2 transition-all text-[12px] font-semibold rounded-xl bg-black text-white hover:bg-black cursor-default select-none outline-none ring-0">Ask AI</button>
                </div>
              </div>
            </div>

            {/* Right Sidebar (Static) */}
            <div className="w-[320px] bg-white border-sm border-slate-100 p-8 flex flex-col min-w-[320px] overflow-hidden">
              <div className="flex flex-col h-full text-[13px]">

                {/* Section 1 */}
                <div className="grid grid-cols-[100px_1fr] gap-y-4">
                  <span className="text-slate-900 font-medium tracking-tight">Event</span>
                  <span className="text-slate-500 font-medium truncate" title="Premium segment surge">Premium segment surge</span>

                  <span className="text-slate-900 font-medium tracking-tight">Ref ID</span>
                  <span className="text-slate-500 font-medium tracking-tight">SEG-429</span>

                  <span className="text-slate-900 font-medium tracking-tight">Priority</span>
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 22v-4" /><path d="M10 22v-9" /><path d="M16 22v-14" /><path d="M22 22V2" />
                    </svg>
                    High
                  </div>

                  <span className="text-slate-900 font-medium tracking-tight">Assignee</span>
                  <div className="flex items-center gap-2 text-slate-500 font-medium">

                    Luke Shiels
                  </div>

                  <span className="text-slate-900 font-medium tracking-tight">Status</span>
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    Tracking
                  </div>

                  <span className="text-slate-900 font-medium tracking-tight">Source</span>
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    Shopify POS
                  </div>
                </div>

                {/* Section 2 */}
                <div className="pt-6 mt-6 border-t border-slate-100 grid grid-cols-[100px_1fr] gap-y-4 -mx-8 px-8">
                  <span className="text-slate-900 font-medium tracking-tight">Detected</span>
                  <span className="text-slate-500 font-medium tracking-tight">36 minutes ago</span>

                  <span className="text-slate-900 font-medium tracking-tight">Last sync</span>
                  <span className="text-slate-500 font-medium tracking-tight">Just now</span>

                  <span className="text-slate-900 font-medium tracking-tight">Est. Uplift</span>
                  <span className="text-slate-500 font-medium tracking-tight">+12.4% LTV</span>
                </div>

                {/* Section 3 */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col flex-1 -mx-8 px-8">
                  <span className="text-[12px] font-bold text-slate-400 uppercase tracking-normal">Segment Size</span>
                  <span className="text-2xl font-semibold text-slate-900 mb-6">{userCount.toLocaleString()}</span>

                  <div className="relative w-full h-[140px] mt-2">
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                    <div className="relative z-10 w-full h-full -ml-[8px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={chartData} margin={{ top: 10, right: 12, left: 12, bottom: 5 }}>
                          <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#ef4444" stopOpacity={0.2} />
                              <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={<CustomXAxisTick />}
                          />
                          <Area
                            type="linear"
                            dataKey="past"
                            stroke="#ef4444"
                            strokeWidth={2}
                            fill="url(#chartGradient)"
                            dot={<CustomChartDot />}
                            activeDot={false}
                            isAnimationActive={false}
                          />
                          <Line
                            type="linear"
                            dataKey="future"
                            stroke="#ef4444"
                            strokeWidth={2}
                            strokeDasharray="4 4"
                            dot={false}
                            activeDot={false}
                            isAnimationActive={false}
                          />
                          <Line
                            type="linear"
                            dataKey="fix"
                            stroke="#94a3b8"
                            strokeWidth={2}
                            strokeDasharray="4 4"
                            dot={false}
                            activeDot={false}
                            isAnimationActive={false}
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="relative w-full h-[140px] mt-4">
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                    <div className="relative z-10 w-full h-full -ml-[8px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={chartData2} margin={{ top: 10, right: 12, left: 12, bottom: 5 }}>
                          <defs>
                            <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.2} />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={<CustomXAxisTick />}
                          />
                          <Area
                            type="monotone"
                            dataKey="past"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            fill="url(#chartGradient2)"
                            dot={<CustomChartDot2 />}
                            activeDot={false}
                            isAnimationActive={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="future"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            strokeDasharray="4 4"
                            dot={false}
                            activeDot={false}
                            isAnimationActive={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="fix"
                            stroke="#94a3b8"
                            strokeWidth={2}
                            strokeDasharray="4 4"
                            dot={false}
                            activeDot={false}
                            isAnimationActive={false}
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div >
  );
};

export default DashboardMockup;
