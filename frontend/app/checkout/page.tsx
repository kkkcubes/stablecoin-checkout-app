"use client"

import Navbar from "../../components/layout/Navbar"

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="flex items-center justify-center py-20">
        <div className="card p-10 w-[500px]">
          <h1 className="text-4xl font-bold">
            Arc Checkout
          </h1>

          <div className="mt-10">
            <p className="text-slate-400">
              Product
            </p>

            <h2 className="text-2xl mt-2">
              Arc Premium Plan
            </h2>
          </div>

          <div className="mt-10">
            <p className="text-slate-400">
              Total
            </p>

            <h1 className="text-5xl font-bold mt-3">
              25 USDC
            </h1>
          </div>

          <button className="gradient-btn w-full py-5 rounded-2xl mt-10 text-lg font-bold">
            Pay Now
          </button>
        </div>
      </div>
    </main>
  )
}