"use client"

import Link from "next/link"

import ConnectWallet from "../wallet/ConnectWallet"

export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-bold cursor-pointer">
            ArcPay
          </h1>
        </Link>

        <div className="flex items-center gap-5">
          <Link href="/dashboard">
            <button className="hover:text-blue-400">
              Dashboard
            </button>
          </Link>

          <Link href="/checkout">
            <button className="hover:text-blue-400">
              Checkout
            </button>
          </Link>

          <Link href="/pos">
            <button className="hover:text-blue-400">
              POS
            </button>
          </Link>

          <ConnectWallet />
        </div>
      </div>
    </nav>
  )
}