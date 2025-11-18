import React from 'react'

export default function Checkout(){
  return (
    <div className="pt-2 pb-28">
      <div className="text-lg font-semibold mb-3">Checkout</div>

      <div className="space-y-3">
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
          <div className="text-sm font-medium mb-2">Items</div>
          <div className="flex items-center justify-between text-sm">
            <span>HLife Protein Powder</span>
            <span>$29.99</span>
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
          <div className="text-sm font-medium mb-2">Shipping</div>
          <input className="w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm outline-none placeholder:text-blue-200/50" placeholder="Address" />
        </div>

        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
          <div className="text-sm font-medium mb-2">Payment</div>
          <div className="grid grid-cols-2 gap-2">
            <input className="rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm" placeholder="Card number" />
            <input className="rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm" placeholder="MM/YY" />
            <input className="rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm" placeholder="CVC" />
            <input className="rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-sm" placeholder="Name" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-sm px-4">
        <button className="w-full rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 border border-white/20 px-4 py-3 text-sm font-medium shadow-[0_12px_40px_rgba(56,189,248,0.45)]">Pay $29.99</button>
      </div>
    </div>
  )
}
