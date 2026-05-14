"use client"

import { useAccount, useConnect, useDisconnect } from "wagmi"
import { useUSDCBalance } from "@/hooks/useUSDCBalance"

export default function ConnectWallet() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  // USDC balance hook (only safe if address exists)
  const { usdc } = useUSDCBalance(address)

  if (isConnected) {
    return (
      <div className="flex flex-col gap-3">
        {/* Wallet Button */}
        <button
          onClick={() => disconnect()}
          className="gradient-btn px-5 py-2 rounded-xl text-white"
        >
          {address?.slice(0, 6)}...
          {address?.slice(-4)}
        </button>

        {/* USDC Balance Card */}
        <div className="mt-6">
          <p className="text-zinc-400">USDC Balance</p>

          <h3 className="text-4xl font-bold text-green-400 mt-2">
            {Number(usdc ?? 0).toFixed(2)} USDC
          </h3>
        </div>
      </div>
    )
  }

  return (
    <button
      onClick={() =>
        connect({
          connector: connectors[0],
        })
      }
      className="gradient-btn px-5 py-2 rounded-xl text-white"
    >
      Connect Wallet
    </button>
  )
}