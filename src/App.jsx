import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Home from './screens/Home'
import AddMeal from './screens/AddMeal'
import Analytics from './screens/Analytics'
import Planner from './screens/Planner'
import ShopList from './screens/ShopList'
import ProductDetail from './screens/ProductDetail'
import Checkout from './screens/Checkout'
import Chatbot from './screens/Chatbot'
import BottomNav from './components/BottomNav'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-sm min-h-screen px-4 pb-24">
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddMeal />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/shop" element={<ShopList />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>

        {/* Floating Chat Button */}
        {location.pathname !== '/chat' && (
          <a
            href="/chat"
            className="fixed bottom-24 right-6 z-20 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 text-cyan-300 shadow-[0_8px_30px_rgba(32,211,238,0.25)] hover:bg-white/15 transition"
            aria-label="AI Chatbot"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}

export default App
