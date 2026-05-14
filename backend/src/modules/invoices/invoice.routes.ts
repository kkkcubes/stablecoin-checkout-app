import { Router } from "express"

import {
  createInvoice,
} from "./invoice.controller"

const router = Router()

router.post("/create", createInvoice)

export default router