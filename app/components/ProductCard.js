"use client"
import Image from "next/image"
import { useState } from "react"
import { useCart } from "../context/cartcontext"

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart()
  const [added, setAdded] = useState(false)

  const inCart = cart.find((item) => item.id === product.id)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
      <div className="aspect-square relative overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {inCart && (
          <div className="absolute top-2 right-2 rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-white shadow">
            In Cart ×{inCart.qty}
          </div>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-slate-900 leading-tight">{product.name}</h3>
        <p className="text-sm text-slate-500 line-clamp-2">{product.description}</p>
        <p className="text-2xl font-extrabold text-slate-900">₹{product.price.toLocaleString()}</p>

        <button
          onClick={handleAdd}
          className={`w-full rounded-xl py-2.5 text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black/30 ${
            added
              ? "bg-green-500 text-white scale-95"
              : "bg-black text-white hover:bg-slate-800 hover:scale-[1.02] active:scale-95"
          }`}
        >
          {added ? "✓ Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  )
}