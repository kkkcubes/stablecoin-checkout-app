import { Router } from "express"

const router = Router()

router.post("/pay", async (req, res) => {
  const payment = {
    id: crypto.randomUUID(),
    amount: req.body.amount,
    status: "completed",
    txHash:
      "0x" +
      Math.random()
        .toString(16)
        .slice(2),
  }

  res.json(payment)
})

export default router