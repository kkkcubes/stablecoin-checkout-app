"use client"

import { useEffect } from "react"

import {
  Html5QrcodeScanner,
} from "html5-qrcode"

export default function Scanner() {
  useEffect(() => {
    const scanner =
      new Html5QrcodeScanner(
        "reader",
        {
          fps: 10,
          qrbox: 250,
        },
        false
      )

    scanner.render(
      (decodedText) => {
        console.log(
          "QR Code:",
          decodedText
        )

        alert(
          `Scanned: ${decodedText}`
        )
      },

      (error) => {
        console.log(error)
      }
    )

    return () => {
      scanner.clear().catch(
        console.error
      )
    }
  }, [])

  return (
    <div className="bg-[#0f172a] rounded-3xl p-6">
      <div id="reader" />
    </div>
  )
}