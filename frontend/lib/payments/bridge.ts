import { createPayment } from "./core"

export async function bridge(amount: number) {
  return await createPayment(amount)
}