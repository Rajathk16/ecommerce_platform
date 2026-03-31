"use client"
import Image from "next/image"
import { useCart } from "../context/cartcontext"

export default function CartItem({ item }) {
  const { removeFromCart } = useCart()

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100 shadow-inner">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="flex-1 space-y-1 min-w-0">
        <h3 className="truncate font-bold text-slate-900 text-base">{item.name}</h3>
        <p className="truncate text-sm text-slate-500">{item.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-extrabold text-slate-900">₹{item.price}</span>
          {item.qty > 1 && (
            <span className="text-sm text-slate-400">× {item.qty} = ₹{item.price * item.qty}</span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
          Qty: {item.qty || 1}
        </span>
        <button
          onClick={() => removeFromCart(item.id)}
          className="rounded-lg border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-600 transition-all hover:bg-red-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
