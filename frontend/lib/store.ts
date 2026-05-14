import { create } from "zustand"

interface Store {
  amount: number
  setAmount: (v: number) => void
}

export const useStore = create<Store>(
  (set) => ({
    amount: 25,

    setAmount: (v) =>
      set({
        amount: v,
      }),
  })
)