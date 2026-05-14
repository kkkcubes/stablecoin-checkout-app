import { appKit } from "./client"

export async function payWithArc() {
  try {
    console.log(
      "Initiating Arc payment..."
    )

    return {
      success: true,
    }
  } catch (err) {
    console.error(err)

    throw err
  }
}