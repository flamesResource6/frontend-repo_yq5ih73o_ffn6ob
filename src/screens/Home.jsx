import React from 'react'
import Spline from '@splinetool/react-spline'
import { Flame, FlameKindling, Salad, Beef, Egg } from 'lucide-react'

const Stat = ({ label, value, unit, color }) => (
  <div className="flex flex-col rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(59,130,246,0.15)]">
    <div className="text-xs text-blue-200/70">{label}</div>
    <div className="mt-1 flex items-baseline gap-1">
      <span className={`text-2xl font-semibold ${color}`}>{value}</span>
      <span className="text-xs text-blue-200/60">{unit}</span>
    </div>
  </div>
)

const MealCard = ({ title, kcal, macros, icon: Icon }) => (
  <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 flex items-center gap-3 shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/15 flex items-center justify-center text-cyan-300">
      <Icon className="h-5 w-5" />
    </div>
    <div className="flex-1">
      <div className="text-sm font-medium">{title}</div>
      <div className="text-xs text-blue-200/70">{kcal} kcal • {macros}</div>
    </div>
    <button className="text-xs px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15">Add</button>
  </div>
)

export default function Home() {
  return (
    <div className="pb-6">
      {/* Header / Spline hero */}
      <div className="relative h-48 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-white/10">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div>
            <div className="text-xs text-blue-200/80">HLife</div>
            <div className="text-lg font-semibold">Your daily snapshot</div>
          </div>
          <div className="rounded-2xl px-3 py-1.5 bg-white/10 border border-white/15 text-xs">Nov 18</div>
        </div>
      </div>

      {/* Daily nutrition summary */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        <Stat label="Calories" value={1420} unit="kcal" color="text-cyan-300" />
        <Stat label="Carbs" value={156} unit="g" color="text-blue-300" />
        <Stat label="Protein" value={95} unit="g" color="text-sky-300" />
        <Stat label="Fats" value={42} unit="g" color="text-indigo-300" />
      </div>

      {/* Mini weekly chart */}
      <div className="mt-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium">This week</div>
          <div className="text-xs text-blue-200/70">Calories</div>
        </div>
        <div className="h-16 flex items-end gap-2">
          {[80, 60, 90, 70, 85, 65, 95].map((h, i) => (
            <div key={i} className="flex-1">
              <div className="mx-auto w-6 rounded-full bg-gradient-to-t from-blue-500/30 to-cyan-300/60" style={{ height: `${h}%` }} />
              <div className="mt-1 text-[10px] text-blue-200/60 text-center">{"SMTWTFS"[i]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AI meal recommendations */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-sm font-medium">AI meal picks</div>
          <a href="/planner" className="text-xs text-cyan-300">See all</a>
        </div>
        <div className="grid gap-2">
          <MealCard title="Grilled Chicken Bowl" kcal={520} macros="38g P • 54g C • 14g F" icon={Beef} />
          <MealCard title="Avocado Quinoa Salad" kcal={430} macros="14g P • 48g C • 18g F" icon={Salad} />
          <MealCard title="Greek Yogurt Parfait" kcal={280} macros="20g P • 32g C • 6g F" icon={Egg} />
        </div>
      </div>
    </div>
  )
}
