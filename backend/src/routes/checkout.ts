import { Router } from "express"

import {
  createCheckout,
  verifyPayment,
} from "../controllers/checkoutController"

const router = Router()

router.post("/create", createCheckout)

router.post("/verify", verifyPayment)

export default router