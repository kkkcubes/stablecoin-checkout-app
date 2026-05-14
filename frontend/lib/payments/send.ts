import { createPayment } from "./core"

export async function sendPayment() {
  try {
    const result = await createPayment(25)

    return result
  } catch (error) {
    console.error(error)

    return {
      success: false,
      message: "Payment failed",
    }
  }
}