import React from 'react'

const DayCard = ({ day, meals=[] }) => (
  <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-3">
    <div className="text-xs text-blue-200/70 mb-1">{day}</div>
    <div className="space-y-1">
      {['Breakfast','Lunch','Dinner'].map((m)=> (
        <div key={m} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-3 py-2">
          <span className="text-xs">{m}</span>
          <button className="text-[11px] px-2 py-1 rounded-lg bg-white/10 border border-white/15">Add</button>
        </div>
      ))}
    </div>
  </div>
)

export default function Planner(){
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  return (
    <div className="pt-2 pb-28">
      <div className="text-lg font-semibold mb-3">Weekly Meal Planner</div>
      <div className="grid grid-cols-2 gap-2">
        {days.map(d => <DayCard key={d} day={d} />)}
      </div>

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-sm px-4 space-y-2">
        <button className="w-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-3 text-sm">Generate Grocery List</button>
        <a href="/shop" className="block w-full text-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 border border-white/20 px-4 py-3 text-sm font-medium shadow-[0_12px_40px_rgba(56,189,248,0.45)]">Add to Vidoma Cart</a>
      </div>
    </div>
  )
}
