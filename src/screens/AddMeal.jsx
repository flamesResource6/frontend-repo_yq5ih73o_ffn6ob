import React from 'react'

export default function AddMeal() {
  return (
    <div className="pt-2 pb-6">
      <div className="text-lg font-semibold mb-3">Add Meal</div>

      <form className="space-y-3">
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
          <label className="block text-xs text-blue-200/80 mb-1">Food name</label>
          <input type="text" placeholder="e.g., Grilled chicken" className="w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm outline-none placeholder:text-blue-200/50" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
            <label className="block text-xs text-blue-200/80 mb-1">Portion</label>
            <input type="text" placeholder="1 bowl / 150g" className="w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm outline-none placeholder:text-blue-200/50" />
          </div>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
            <label className="block text-xs text-blue-200/80 mb-1">Calories</label>
            <input type="number" placeholder="kcal" className="w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm outline-none placeholder:text-blue-200/50" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {['Carbs','Protein','Fats'].map((m) => (
            <div key={m} className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
              <label className="block text-xs text-blue-200/80 mb-1">{m}</label>
              <input type="number" placeholder="g" className="w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm outline-none placeholder:text-blue-200/50" />
            </div>
          ))}
        </div>

        <button type="button" className="w-full rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 border border-white/20 px-4 py-3 text-sm font-medium shadow-[0_12px_40px_rgba(56,189,248,0.45)]">Save Meal</button>
      </form>

      <div className="mt-6">
        <div className="text-sm font-medium mb-2">Recent foods</div>
        <div className="space-y-2">
          {[{
            n:'Chicken Bowl',k:520
          },{n:'Quinoa Salad',k:430},{n:'Yogurt Parfait',k:280}].map((f,i)=> (
            <div key={i} className="flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
              <div>
                <div className="text-sm">{f.n}</div>
                <div className="text-xs text-blue-200/70">{f.k} kcal</div>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">Add</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
