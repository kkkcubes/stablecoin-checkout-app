"use client"

import { useState } from "react"

import { supabase } from "@/lib/supabase/client"

export default function LoginPage() {
  const [email, setEmail] =
    useState("")

  async function login() {
    await supabase.auth.signInWithOtp({
      email,
    })

    alert("Magic link sent")
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="card p-10 w-[450px]">
        <h1 className="text-4xl font-bold mb-8">
          Merchant Login
        </h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full bg-slate-950 p-4 rounded-2xl"
        />

        <button
          onClick={login}
          className="gradient-btn w-full py-4 rounded-2xl mt-6"
        >
          Continue
        </button>
      </div>
    </main>
  )
}