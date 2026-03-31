"use client"
import { useState } from "react"
import { useCart } from "../context/cartcontext"
import CartItem from "../components/CartItem"

export default function Cart() {
  const { cart, clearCart } = useCart()
  const [showModal, setShowModal] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0)

  const handlePlaceOrder = () => {
    setShowModal(true)
    clearCart()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="mx-auto max-w-3xl px-4">

        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
            🛒
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Your Cart</h1>
          {cart.length > 0 && (
            <span className="ml-auto rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">
              {cart.length} item{cart.length > 1 ? "s" : ""}
            </span>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-slate-300 bg-white py-20 text-center shadow-sm">
            <span className="text-6xl">🛍️</span>
            <p className="text-xl font-semibold text-slate-700">Your cart is empty!</p>
            <p className="text-slate-500">Add something from the home page.</p>
            <a
              href="/"
              className="mt-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:scale-105"
            >
              Shop Now
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-3">
              {cart.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-bold text-slate-900">Order Summary</h2>

              <div className="space-y-2 border-b border-slate-100 pb-4">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm text-slate-600">
                    <span>{item.name} × {item.qty || 1}</span>
                    <span className="font-medium text-slate-800">₹{item.price * (item.qty || 1)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-700">Total Amount</span>
                <span className="text-2xl font-extrabold text-green-600">₹{total.toLocaleString()}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="mt-6 w-full rounded-xl bg-black py-4 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-black/30 active:scale-[0.98]"
              >
                🎉 Place Order
              </button>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-sm animate-fade-in rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mb-4 text-7xl">🎊</div>
            <h2 className="mb-2 text-2xl font-extrabold text-slate-900">Order Placed!</h2>
            <p className="mb-1 text-slate-600 text-lg font-medium">Your order is on its way to you soon!</p>
            <p className="mb-6 text-sm text-slate-400">Thank you for shopping with HugyShopy 🛍️</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full rounded-xl bg-black py-3 text-white font-semibold transition-all hover:bg-slate-800 hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  )
}