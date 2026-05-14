import { createAppKit } from "@reown/appkit/react"
import { mainnet, arbitrum } from "@reown/appkit/networks"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!

const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, arbitrum],
  projectId,
})

export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum],
  projectId,
})