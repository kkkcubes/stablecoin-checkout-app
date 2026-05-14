"use client"

import { motion } from "framer-motion"
import { CreditCard } from "lucide-react"

import { api } from "@/lib/api"

export default function CheckoutCard() {
  async function handlePayment() {
    try {
      const res = await api.post(
        "/payment/pay",
        {
          amount: 25,
        }
      )

      alert(
        `Payment Success\nTX: ${res.data.txHash}`
      )
    } catch (err) {
      console.error(err)

      alert("Payment failed")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-10 w-[500px]"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          Arc Checkout
        </h1>

        <CreditCard size={32} />
      </div>

      <div className="mt-10">
        <p className="text-slate-400 mb-2">
          Product
        </p>

        <h3 className="text-2xl font-semibold">
          Arc Premium Plan
        </h3>
      </div>

      <div className="mt-10">
        <p className="text-slate-400 mb-2">
          Amount
        </p>

        <h2 className="text-5xl font-bold">
          25 USDC
        </h2>
      </div>

      {/* Pay Now Button */}
      <button
        onClick={handlePayment}
        className="gradient-btn w-full py-5 rounded-2xl mt-10"
      >
        Pay Now
      </button>
    </motion.div>
  )
}