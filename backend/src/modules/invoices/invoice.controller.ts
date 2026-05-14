import { Request, Response } from "express"

export async function createInvoice(
  req: Request,
  res: Response
) {
  const invoice = {
    id: crypto.randomUUID(),

    amount: req.body.amount,

    customer: req.body.customer,

    status: "pending",
  }

  res.json(invoice)
}