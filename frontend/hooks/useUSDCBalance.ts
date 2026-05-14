"use client"

import { formatUnits } from "viem"

import {
  useReadContract,
} from "wagmi"

const USDC_ADDRESS =
  "0x0000000000000000000000000000000000000000"

const ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    type: "function",
  },
]

export function useUSDCBalance(
  address?: `0x${string}`
) {
  const { data } = useReadContract({
    abi: ABI,

    address:
      USDC_ADDRESS as `0x${string}`,

    functionName: "balanceOf",

    args: address
      ? [address]
      : undefined,
  })

  return {
    usdc: data
      ? formatUnits(
          data as bigint,
          6
        )
      : "0",
  }
}