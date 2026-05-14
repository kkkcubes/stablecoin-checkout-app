import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import checkoutRoutes from "./routes/checkout"
import invoiceRoutes from "./routes/invoice.routes"
import paymentRoutes from "./routes/payment.routes"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Checkout routes
app.use("/checkout", checkoutRoutes)

// Invoice routes
app.use("/invoice", invoiceRoutes)

// Payment routes
app.use("/payment", paymentRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`)
})