"use client"

import { useBalance } from "wagmi"

export function useWalletBalance(
  address?: `0x${string}`
) {
  const { data } = useBalance({
    address,
  })

  return {
    balance: data?.formatted || "0",
    symbol: data?.symbol || "ETH",
  }
}