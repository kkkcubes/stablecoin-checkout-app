"use client"

import { useEffect, useState } from "react"
import {
  useAccount,
  useConnect,
  useDisconnect,
} from "wagmi"

export default function ConnectWallet() {
  const [mounted, setMounted] =
    useState(false)

  const { address, isConnected } =
    useAccount()

  const { connect, connectors } =
    useConnect()

  const { disconnect } =
    useDisconnect()

  // ✅ IMPORTANT: wait until client mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // 🚨 STEP 1: prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="gradient-btn">
        Connect Wallet
      </button>
    )
  }

  // 🚨 STEP 2: only show wallet AFTER mount
  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm">
          {address}
        </span>

        <button
          onClick={() => disconnect()}
          className="bg-red-500 px-3 py-1 rounded text-white"
        >
          Disconnect
        </button>
      </div>
    )
  }

  // Default state
  return (
    <button
      onClick={() =>
        connect({
          connector: connectors[0],
        })
      }
      className="gradient-btn"
    >
      Connect Wallet
    </button>
  )
}