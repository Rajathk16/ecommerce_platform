"use client"

import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase/config"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    if (!email || !password) return alert("Please fill in all fields.")
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/")
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md animate-fade-in space-y-6 rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-2xl">

        <div className="text-center space-y-1">
          <div className="text-5xl mb-3">👋</div>
          <h1 className="text-3xl font-extrabold text-slate-900">Welcome Back</h1>
          <p className="text-sm text-slate-500">Login to continue shopping</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full rounded-xl bg-black py-3.5 font-bold text-white transition-all hover:bg-slate-800 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-black/30 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
        >
          {loading ? "Logging in..." : "Login →"}
        </button>

        <p className="text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link href="/signin" className="font-semibold text-black underline underline-offset-2 hover:text-slate-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}