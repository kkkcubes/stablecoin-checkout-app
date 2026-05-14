import { ethers } from "ethers"

const provider = new ethers.JsonRpcProvider(
  process.env.RPC_URL
)

export async function getTransaction(hash: string) {
  return await provider.getTransaction(hash)
}