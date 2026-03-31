"use client"

import Link from "next/link"
import { useAuth } from "../context/authcontext"
import { useCart } from "../context/cartcontext"

export default function Navbar() {
  const { user, logout } = useAuth()
  const { cart } = useCart()

  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0)

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-gray-950 shadow-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🛍️</span>
          <span className="text-xl font-extrabold text-white tracking-tight group-hover:text-yellow-300 transition-colors">
            HugyShopy
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/Cart"
            className="relative flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white"
          >
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <button
              onClick={logout}
              className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-red-500/20 hover:text-red-300 hover:border-red-400/40"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/Login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/signin"
                className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-black transition-all hover:bg-yellow-300 hover:scale-105"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}