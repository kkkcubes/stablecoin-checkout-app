"use client"

export default function POSCheckout() {
  return (
    <div className="card p-8">
      <h1 className="text-3xl mb-6">
        POS Checkout
      </h1>

      <input
        placeholder="Enter amount"
        className="w-full bg-slate-900 p-4 rounded-xl mb-4"
      />

      <button className="gradient w-full py-4 rounded-xl">
        Generate Payment
      </button>
    </div>
  )
}