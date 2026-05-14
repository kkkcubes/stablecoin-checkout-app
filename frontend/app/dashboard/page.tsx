"use client"

import Navbar from "../../components/layout/Navbar"
import ConnectWallet from "@/components/wallet/ConnectWallet"
import { api } from "@/lib/api"

async function createInvoice() {
  try {
    const res = await api.post("/invoice/create", {
      amount: 25,
      customer: "demo@merchant.com",
    })

    alert(`Invoice Created: ${res.data.id}`)
  } catch (err) {
    console.error(err)
    alert("Invoice failed")
  }
}

export default function DashboardPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold">Dashboard</h1>

            <p className="text-slate-400 mt-2">
              Welcome back merchant
            </p>
          </div>

          <button
            onClick={createInvoice}
            className="gradient-btn px-8 py-4 rounded-2xl"
          >
            Create Invoice
          </button>
        </div>

        {/* Wallet Card */}
        <div className="mt-10">
          <ConnectWallet />
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <div className="card p-8">
            <p className="text-slate-400">Revenue</p>
            <h2 className="text-4xl font-bold mt-4">$24,500</h2>
          </div>

          <div className="card p-8">
            <p className="text-slate-400">Payments</p>
            <h2 className="text-4xl font-bold mt-4">1,240</h2>
          </div>

          <div className="card p-8">
            <p className="text-slate-400">Customers</p>
            <h2 className="text-4xl font-bold mt-4">892</h2>
          </div>

          <div className="card p-8">
            <p className="text-slate-400">Conversion</p>
            <h2 className="text-4xl font-bold mt-4">92%</h2>
          </div>
        </div>

        <div className="card p-10 mt-10">
          <h2 className="text-3xl font-bold mb-6">
            Recent Payments
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-900 p-5 rounded-xl flex justify-between">
              <span>0x82ab...12ef</span>
              <span>25 USDC</span>
            </div>

            <div className="bg-slate-900 p-5 rounded-xl flex justify-between">
              <span>0x91fa...88bc</span>
              <span>80 USDC</span>
            </div>

            <div className="bg-slate-900 p-5 rounded-xl flex justify-between">
              <span>0x11cd...98aa</span>
              <span>120 USDC</span>
            </div>

            <div className="bg-slate-900 p-5 rounded-xl flex justify-between">
              <span>0x73ef...44de</span>
              <span>45 USDC</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}