import "./globals.css"
import Navbar from "./components/Navbar"
import { CartProvider } from "./context/cartcontext"
import { AuthProvider } from "./context/authcontext"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">

        <AuthProvider>
          <CartProvider>

            <Navbar />

            <main className="mx-auto max-w-6xl px-4 py-10">
              {children}
            </main>

          </CartProvider>
        </AuthProvider>

      </body>
    </html>
  )
}