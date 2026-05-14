export function getAppId() {
  return process.env.NEXT_PUBLIC_CIRCLE_APP_ID!
}

export async function createPayment(amount: number) {
  console.log("Creating payment:", amount)

  // TEMP MOCK (until Circle API is correctly integrated)
  return {
    success: true,
    paymentId: crypto.randomUUID(),
    amount,
  }
}