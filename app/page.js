"use client"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/config"
import ProductCard from "./components/ProductCard"

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"))
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log("Fetched products:", data)
        setProducts(data)
      } catch (err) {
        console.error("Error fetching products:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 px-6 py-12 text-white md:px-12 md:py-16">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/p7ejX9YIBTI?si=GVk5UvRVFvcKGlNp"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-2xl"
        ></iframe>
        <div className="relative z-10 mx-auto max-w-4xl text-center py-12 md:py-16">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl drop-shadow-lg">
            Namaste 🙌
          </h1>
          <p className="text-lg text-white md:text-xl drop-shadow-lg">
            Aukaat hai toh kareed ke dikhaoo!!
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <header className="text-center">
          <h2 className="text-3xl font-semibold animate-pulse">Featured Products</h2>
          <p className="text-yellow-300">savdhan rahe satark rahe.</p>
        </header>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white shadow-sm animate-pulse">
                <div className="aspect-square bg-slate-200 rounded-t-2xl" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-slate-200 rounded w-3/4" />
                  <div className="h-3 bg-slate-200 rounded w-full" />
                  <div className="h-6 bg-slate-200 rounded w-1/3" />
                  <div className="h-10 bg-slate-200 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <p className="text-5xl mb-4">📦</p>
            <p className="text-lg font-semibold">No products found in Firestore.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
