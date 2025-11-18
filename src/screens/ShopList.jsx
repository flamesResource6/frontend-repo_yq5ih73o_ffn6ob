import React from 'react'

const ProductCard = ({ id, title, price }) => (
  <a href={`/shop/${id}`} className="flex items-center gap-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-3 hover:bg-white/10">
    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/15" />
    <div className="flex-1">
      <div className="text-sm font-medium">{title}</div>
      <div className="text-xs text-blue-200/70">${price.toFixed(2)}</div>
    </div>
    <div className="text-xs px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">View</div>
  </a>
)

export default function ShopList(){
  const items = [
    {id:1,title:'HLife Protein Powder',price:29.99},
    {id:2,title:'Smart Water Bottle',price:39.99},
    {id:3,title:'Omega-3 Capsules',price:19.99},
  ]

  return (
    <div className="pt-2 pb-6">
      <div className="text-lg font-semibold mb-3">Vidoma Store</div>
      <div className="space-y-2">
        {items.map(p => <ProductCard key={p.id} {...p} />)}
      </div>
    </div>
  )
}
