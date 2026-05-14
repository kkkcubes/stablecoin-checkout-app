# ArcPay — Stablecoin Commerce Infrastructure on Arc

ArcPay is a next-generation stablecoin commerce platform built on the Arc Network.

It combines:

- Arc App Kit payments
- Unified Balance
- StableFX swaps
- Crosschain bridging
- Merchant dashboards
- Escrow contracts
- AI-powered fraud detection
- QR code POS systems
- Subscription billing
- Stablecoin invoices

into one modern fintech-grade payment infrastructure.

---

# Features

## Stablecoin Checkout

Accept instant USDC payments with Arc deterministic finality.

- Wallet checkout
- QR payments
- POS mode
- Mobile optimized
- Crosschain settlement

---

## Arc App Kit Integration

ArcPay integrates directly with:

- App Kit Checkout
- Bridge
- Unified Balance
- StableFX
- Escrow flows

---

## Unified Balance

Aggregate balances across:

- Arc
- Ethereum
- Base
- Arbitrum
- Solana

into one spendable balance.

---

## StableFX Engine

Swap between stablecoins with:

- transparent pricing
- real-time FX
- low slippage
- multichain routing

---

## Merchant Dashboard

Modern Stripe-style merchant dashboard with:

- analytics
- invoices
- subscriptions
- payouts
- webhook logs
- customer management

---

## POS Terminal

Tablet-ready stablecoin POS system with:

- QR checkout
- wallet payments
- instant settlement
- receipt generation

---

## AI Fraud Detection

AI-powered transaction monitoring for:

- suspicious transfers
- risk scoring
- fraud alerts
- merchant protection

---

# Tech Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Wagmi
- Viem
- RainbowKit

---

## Backend

- Node.js
- Express
- Prisma
- Supabase
- PostgreSQL

---

## Blockchain

- Arc Network
- Circle App Kit
- Unified Balance
- StableFX
- Bridge Kit

---

# Project Structure

```bash
stablecoin-checkout-app/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── index.ts
│   │
│   ├── prisma/
│   └── package.json
│
└── README.md