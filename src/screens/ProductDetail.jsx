import React from 'react'

export default function ProductDetail(){
  const product = { id:1, title:'HLife Protein Powder', price:29.99, desc:'Premium whey blend to support muscle recovery. 24g protein per scoop.' }
  return (
    <div className="pt-2 pb-28">
      <div className="h-52 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 mb-3" />
      <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
        <div className="text-lg font-semibold">{product.title}</div>
        <div className="text-sm text-blue-200/80 mt-1">{product.desc}</div>
        <div className="mt-3 text-xl font-semibold">${product.price.toFixed(2)}</div>
      </div>

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-sm px-4">
        <a href="/checkout" className="block w-full text-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 border border-white/20 px-4 py-3 text-sm font-medium shadow-[0_12px_40px_rgba(56,189,248,0.45)]">Add to Cart</a>
      </div>
    </div>
  )
}
