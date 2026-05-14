import { Router } from "express"

const router = Router()

router.post("/create", async (req, res) => {
  const { amount, customer } = req.body

  const invoice = {
    id: crypto.randomUUID(),
    amount,
    customer,
    status: "pending",
    createdAt: new Date(),
  }

  res.json(invoice)
})

export default router