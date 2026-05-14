"use client"

import { useState } from "react"
import QRCode from "react-qr-code"

import Navbar from "../../components/layout/Navbar"

export default function POSPage() {
  const [qrValue, setQrValue] =
    useState("")

  function generateQR() {
    const payload = JSON.stringify({
      amount: 25,
      merchant: "ArcPay",
      currency: "USDC",
    })

    setQrValue(payload)
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-3xl mx-auto p-10">
        <div className="card p-10">
          <h1 className="text-6xl font-bold">
            POS Terminal
          </h1>

          <p className="text-slate-400 mt-4 text-xl">
            Accept stablecoin payments instantly
          </p>

          <input
            type="number"
            className="w-full bg-slate-950 p-8 rounded-3xl mt-10 text-5xl outline-none"
            placeholder="0.00"
          />

          <button
            onClick={generateQR}
            className="gradient-btn w-full py-6 rounded-3xl text-2xl font-bold mt-10"
          >
            Generate QR
          </button>

          <div className="mt-12 bg-[#020617] rounded-3xl p-10 flex items-center justify-center">
            {qrValue ? (
              <div className="bg-white p-4 rounded-2xl">
                <QRCode value={qrValue} />
              </div>
            ) : (
              <p className="text-zinc-500">
                QR Code
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}