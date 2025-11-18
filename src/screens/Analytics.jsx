import React from 'react'
import { Award } from 'lucide-react'

const Line = () => (
  <svg viewBox="0 0 100 40" className="w-full h-24">
    <defs>
      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(56,189,248,0.7)" />
        <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
      </linearGradient>
    </defs>
    <path d="M0,30 C20,10 40,20 60,12 80,5 90,18 100,9" fill="none" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

const Bars = () => (
  <div className="flex items-end gap-2 h-24">
    {[45,26,60,30,75,50,68].map((h,i)=> (
      <div key={i} className="flex-1">
        <div className="mx-auto w-5 rounded-full bg-gradient-to-t from-blue-500/30 to-cyan-300/60" style={{height:`${h}%`}}/>
        <div className="mt-1 text-[10px] text-blue-200/60 text-center">{"SMTWTFS"[i]}</div>
      </div>
    ))}
  </div>
)

export default function Analytics(){
  return (
    <div className="pt-2 pb-6">
      <div className="text-lg font-semibold mb-3">Analytics</div>

      <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 mb-3">
        <div className="text-sm font-medium mb-2">Weekly Calories</div>
        <Bars />
      </div>

      <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 mb-3">
        <div className="flex items-center justify-between mb-1">
          <div className="text-sm font-medium">Weight Tracker</div>
          <div className="text-xs text-blue-200/70">Last 30 days</div>
        </div>
        <Line />
      </div>

      <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
        <div className="text-sm font-medium mb-3">Achievements</div>
        <div className="grid grid-cols-3 gap-2">
          {["7-day streak","2k kcal balanced","Hydration pro"].map((t,i)=> (
            <div key={i} className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 border border-white/10 p-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-white/15 flex items-center justify-center text-cyan-300">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-center text-xs">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
