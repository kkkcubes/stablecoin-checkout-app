export async function detectFraud(
  wallet: string,
  amount: number
) {
  if (amount > 10000) {
    return {
      risk: "high",
      approved: false,
    }
  }

  return {
    risk: "low",
    approved: true,
  }
}