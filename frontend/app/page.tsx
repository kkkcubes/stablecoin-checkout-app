import Navbar from "../components/layout/Navbar"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-7xl font-bold leading-tight">
              Stablecoin
              <br />
              Checkout
            </h1>

            <p className="text-slate-400 text-xl mt-8">
              Instant stablecoin payments
              powered by Arc Network.
            </p>

            <div className="mt-10 flex gap-5">
              <button className="gradient-btn px-8 py-4 rounded-2xl font-bold">
                Start Accepting Payments
              </button>

              <button className="border border-slate-700 px-8 py-4 rounded-2xl">
                View Docs
              </button>
            </div>
          </div>

          <div className="card p-10">
            <h2 className="text-3xl font-bold mb-8">
              Checkout Preview
            </h2>

            <div className="bg-slate-900 rounded-2xl p-8">
              <p className="text-slate-400">
                Amount
              </p>

              <h1 className="text-5xl font-bold mt-3">
                25 USDC
              </h1>

              <button className="gradient-btn w-full py-4 rounded-2xl mt-8">
                Pay with Arc
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}