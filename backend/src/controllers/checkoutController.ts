import { Request, Response } from "express"

export async function createCheckout(
  req: Request,
  res: Response
) {
  const session = {
    id: Date.now(),
    amount: req.body.amount,
    status: "pending",
  }

  res.json(session)
}

export async function verifyPayment(
  req: Request,
  res: Response
) {
  const { txHash } = req.body

  res.json({
    success: true,
    txHash,
  })
}