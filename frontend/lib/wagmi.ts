"use client"

import {
  createConfig,
  http,
} from "wagmi"

import { injected } from "wagmi/connectors"

import { defineChain } from "viem"

const arc = defineChain({
  id: 5042002,

  name: "Arc Testnet",

  nativeCurrency: {
    name: "USDC",
    symbol: "USDC",
    decimals: 18,
  },

  rpcUrls: {
    default: {
      http: [
        "https://rpc.testnet.arc.network",
      ],
    },
  },
})

export const config = createConfig({
  chains: [arc],

  connectors: [
    injected(),
  ],

  transports: {
    [arc.id]: http(),
  },
})