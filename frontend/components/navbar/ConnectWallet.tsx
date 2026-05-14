"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Wallet, AlertTriangle } from "lucide-react"

export default function ConnectWallet() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted
        const connected = ready && account && chain
        const unsupported = chain?.unsupported

        if (!connected) {
          return (
            <button
              onClick={openConnectModal}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 h-12 rounded-2xl text-white font-semibold flex items-center gap-2 hover:scale-[1.02] transition"
            >
              <Wallet size={18} />
              Connect Wallet
            </button>
          )
        }

        if (unsupported) {
          return (
            <button
              onClick={openChainModal}
              className="bg-red-500 h-12 px-5 rounded-2xl text-white flex items-center gap-2"
            >
              <AlertTriangle size={18} />
              Wrong Network
            </button>
          )
        }

        return (
          <div className="flex items-center gap-3">
            <button
              onClick={openChainModal}
              className="bg-[#111827] border border-white/10 h-12 px-4 rounded-2xl text-white"
            >
              {chain.name}
            </button>

            <button
              onClick={openAccountModal}
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-12 px-5 rounded-2xl text-white font-semibold"
            >
              {account.displayName}
            </button>
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}