import { Request, Response } from "express"

export async function createSubscription(
  req: Request,
  res: Response
) {
  res.json({
    success: true,

    interval: "monthly",

    amount: 25,
  })
}