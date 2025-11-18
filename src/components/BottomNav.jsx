import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, LineChart, CalendarDays, ShoppingBag, Plus } from 'lucide-react'

const Tab = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2 text-xs transition ${
        isActive
          ? 'text-white bg-white/10 border border-white/15'
          : 'text-blue-200/70 hover:text-white hover:bg-white/5'
      }`}
  >
    {children}
  </NavLink>
)

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-sm p-4">
      <div className="flex items-center justify-between rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_60px_rgba(59,130,246,0.25)] px-3 py-2">
        <Tab to="/">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Tab>
        <Tab to="/analytics">
          <LineChart className="h-5 w-5" />
          <span>Analytics</span>
        </Tab>
        <NavLink to="/add" className="-mt-9">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center shadow-[0_15px_60px_rgba(56,189,248,0.55)] border border-white/20">
            <Plus className="h-7 w-7" />
          </div>
        </NavLink>
        <Tab to="/planner">
          <CalendarDays className="h-5 w-5" />
          <span>Planner</span>
        </Tab>
        <Tab to="/shop">
          <ShoppingBag className="h-5 w-5" />
          <span>Shop</span>
        </Tab>
      </div>
    </nav>
  )
}
