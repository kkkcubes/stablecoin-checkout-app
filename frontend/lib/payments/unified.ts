import { getAppId } from "./core"

export async function unifiedPayment() {
  return {
    success: true,
    appId: getAppId(),
  }
}