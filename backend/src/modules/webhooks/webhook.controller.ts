import { Request, Response } from "express"

export async function handleWebhook(
  req: Request,
  res: Response
) {
  console.log(req.body)

  res.sendStatus(200)
}