import { Request, Response } from "express"

export async function createPayout(
  req: Request,
  res: Response
) {
  res.json({
    success: true,

    payoutId:
      crypto.randomUUID(),
  })
}