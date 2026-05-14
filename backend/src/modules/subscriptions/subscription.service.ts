export async function createSubscription() {
  return {
    id: crypto.randomUUID(),
    status: "active",
    interval: "monthly",
  }
}