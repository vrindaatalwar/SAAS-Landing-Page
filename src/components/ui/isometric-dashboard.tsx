"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  User, 
  Clock, 
  Activity, 
  AlertCircle,
  Terminal,
  MousePointer2,
  Layout
} from 'lucide-react'
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot, AreaPlot } from '@mui/x-charts/LineChart';

export const IsometricDashboard = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Strict 25-degree X-axis rotation for a clean 'top-down' perspective
  const rotateX = 25
  const rotateY = 0
  const rotateZ = -20

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center p-12 overflow-visible"
    >
      <motion.div
        style={{ 
          rotateX, 
          rotateY,
          rotateZ
        }}
        className="relative w-[480px] aspect-[1.1] transform-gpu select-none cursor-default"
      >
        {/* Main App Shell */}
        <div 
          className="absolute inset-0 bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col overflow-hidden cursor-default"
          style={{ zIndex: 10 }}
        >
          <div className="h-16 border-b border-slate-50 flex items-center px-14 justify-between bg-slate-50/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 h-2 bg-slate-100 rounded-full" />
              <Search className="w-4 h-4 text-slate-300" />
            </div>
          </div>
          <div className="flex-1 p-8 space-y-8">
             <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center">
                   <Activity className="w-8 h-8 text-sky-500" />
                </div>
                <div className="space-y-2">
                   <div className="w-40 h-2.5 bg-slate-100 rounded-full" />
                   <div className="w-24 h-2 bg-slate-50 rounded-full" />
                </div>
             </div>
             <div className="grid grid-cols-2 gap-6">
                <div className="h-28 rounded-2xl bg-slate-50/50 border border-slate-100/50 p-6 space-y-4">
                   <div className="w-full h-2 bg-slate-100 rounded-full" />
                   <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                </div>
                <div className="h-28 rounded-2xl bg-slate-50/50 border border-slate-100/50 p-6 space-y-4">
                   <div className="w-full h-2 bg-slate-100 rounded-full" />
                   <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
                </div>
             </div>
             <div className="flex-1 pt-4">
                <div className="w-full h-36 rounded-3xl border-2 border-dashed border-slate-100 flex items-center justify-center bg-slate-50/20">
                   <MousePointer2 className="w-6 h-6 text-slate-200" />
                </div>
             </div>
          </div>
        </div>

        {/* Service Monitors Dashboard Card (Floating Above) */}
        <div 
          className="absolute -top-16 -left-12 w-[320px] bg-white rounded-2xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-slate-100 p-8 z-20"
          style={{ transform: "translateZ(120px)" }}
        >
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-tight">Live Monitors</span>
             </div>
             <Search className="w-4 h-4 text-slate-200" />
          </div>
          
          <div className="space-y-6">
             {[
                { name: "Auth Service", status: "Healthy", trend: [0.4, 0.5, 0.6, 0.5, 0.4, 0.7] },
                { name: "Payments API", status: "Normal", trend: [0.3, 0.4, 0.3, 0.5, 0.6, 0.4] },
                { name: "Data Pipeline", status: "Healthy", trend: [0.6, 0.7, 0.5, 0.8, 0.7, 0.9] }
             ].map((monitor, i) => (
                <div key={i} className="flex items-center justify-between">
                   <div className="space-y-1">
                      <div className="text-[11px] font-bold text-slate-900">{monitor.name}</div>
                      <div className="flex items-center gap-2">
                         <span className="text-[9px] font-bold text-sky-500/80 uppercase tracking-tight">{monitor.status}</span>
                      </div>
                   </div>
                   <div className="flex items-end gap-1 h-6">
                      {monitor.trend.map((h, j) => (
                         <div 
                            key={j} 
                            className="w-1.5 bg-slate-100 rounded-full" 
                            style={{ height: `${h * 100}%` }} 
                         />
                      ))}
                   </div>
                </div>
             ))}
          </div>
          
          <div className="mt-10 p-4 bg-slate-50/50 rounded-xl border border-dashed border-slate-100 flex items-center justify-between">
             <div className="flex items-center gap-3">
                <Layout className="w-4 h-4 text-slate-300" />
                <span className="text-[10px] font-bold text-slate-400 tracking-tight">Total Clusters</span>
             </div>
             <span className="text-[11px] font-bold text-slate-900 tracking-tight">12</span>
          </div>
        </div>

        {/* Impact Chart Card (Floating Below) */}
        <div 
          className="absolute -bottom-12 -right-16 w-[240px] bg-white rounded-2xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] border border-slate-100 p-6 z-30"
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="space-y-1 mb-6">
             <div className="text-[11px] font-bold text-slate-900 uppercase tracking-tight">Impacted Users</div>
             <div className="text-3xl font-bold text-sky-500 tracking-tighter">12,881</div>
          </div>
          
          <div className="h-24 w-full -mx-6">
             <ChartContainer
                width={240}
                height={100}
                series={[{ 
                  data: [12, 14, 13, 16, 18, 20, 19, 22, 25, 23, 27, 30, 28, 32, 29, 31, 35, 33, 38, 42, 40, 45, 43, 47, 50, 48, 52, 55, 53, 58, 62, 60, 65, 68, 66, 70, 75, 72, 78, 82, 80, 85, 88, 86, 90], 
                  type: 'line', 
                  area: true,
                  color: '#0ea5e9'
                }]}
                xAxis={[{ data: Array.from({ length: 45 }, (_, i) => i + 1), scaleType: 'point' }]}
                disableAxisListener
             >
                <AreaPlot 
                  slotProps={{ 
                    area: { 
                      style: { 
                        fill: 'url(#meshGradient)',
                        fillOpacity: 1
                      } 
                    } 
                  }} 
                />
                <defs>
                  <linearGradient id="skyGradientFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.5} />
                    <stop offset="50%" stopColor="#0ea5e9" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0} />
                  </linearGradient>
                  <pattern id="meshDots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.5" fill="#0ea5e9" fillOpacity="0.2" />
                  </pattern>
                  <g id="meshGradient">
                    <rect width="100%" height="100%" fill="url(#skyGradientFade)" />
                    <rect width="100%" height="100%" fill="url(#meshDots)" />
                  </g>
                  {/* Note: The 'fill' can't be a <g> directly, but we can combine them in a pattern or use multiple plots. 
                      Simplest fix: use the gradient and then a separate pattern overlay if needed.
                      Actually, a pattern can contain rects with gradients.
                  */}
                  <pattern id="premiumMesh" x="0" y="0" width="100%" height="100%" patternUnits="objectBoundingBox">
                     <rect width="100%" height="100%" fill="url(#skyGradientFade)" />
                     <rect width="100%" height="100%" fill="url(#meshDots)" />
                  </pattern>
                </defs>
                <LinePlot 
                  slotProps={{ 
                    line: { 
                      style: { 
                        stroke: '#0ea5e9',
                        strokeWidth: 2.5,
                        strokeLinejoin: 'round'
                      } 
                    } 
                  }} 
                />
             </ChartContainer>
          </div>
          <div className="mt-2 flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-tight">
             <span className="opacity-40">H-4</span>
             <span className="opacity-40">Now</span>
          </div>
        </div>

        {/* Depth Fog/Accents (Z-Axis ONLY) */}
        <div 
          className="absolute -top-32 -left-32 w-64 h-64 bg-sky-100/30 rounded-full blur-[100px] z-0"
          style={{ transform: "translateZ(-80px)" }}
        />
        <div 
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-slate-100/30 rounded-full blur-[120px] z-0"
          style={{ transform: "translateZ(-120px)" }}
        />
      </motion.div>
    </div>
  )
}
