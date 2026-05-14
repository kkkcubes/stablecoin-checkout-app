"use client"

import { QRCodeCanvas } from "qrcode.react"

export default function QRCheckout() {
  const paymentUrl =
    "https://yourapp.com/pay/123"

  return (
    <div className="card p-6">
      <h2 className="text-xl mb-4">
        QR Checkout
      </h2>

      <div className="bg-white p-4 rounded-xl">
        <QRCodeCanvas
          value={paymentUrl}
          size={220}
        />
      </div>
    </div>
  )
}