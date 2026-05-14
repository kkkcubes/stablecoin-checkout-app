"use client";

import { useState } from "react";
import { ethers } from "ethers";

export default function CheckoutCard() {
  const [loading, setLoading] = useState(false);

  async function payNow() {
    try {
      // Check wallet
      if (typeof window === "undefined" || !window.ethereum) {
        alert("Install MetaMask");
        return;
      }

      alert("Wallet detected");

      setLoading(true);

      // Connect provider
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Request wallet connection
      await provider.send("eth_requestAccounts", []);

      // Get signer
      const signer = await provider.getSigner();

      // Send transaction
      const tx = await signer.sendTransaction({
        to: "0x1111111111111111111111111111111111111111",

        // 1 USDC (6 decimals)
        value: ethers.parseUnits("1", 6),
      });

      // Wait for confirmation
      await tx.wait();

      alert("Payment successful");
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-800 p-8 rounded-xl w-[400px] text-white">
      <h2 className="text-2xl mb-4">Arc Checkout</h2>

      <p className="mb-6">Pay 1 USDC</p>

      <button
        onClick={payNow}
        disabled={loading}
        className="bg-green-500 w-full py-3 rounded hover:bg-green-600 transition"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}