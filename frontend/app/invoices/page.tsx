export default function InvoicesPage() {
  return (
    <main className="p-10">
      <div className="card p-10">
        <h1 className="text-4xl font-bold">
          Invoice #1024
        </h1>

        <div className="mt-8">
          <p>Arc Premium</p>

          <h2 className="text-5xl mt-4">
            25 USDC
          </h2>
        </div>

        <button className="gradient-btn px-6 py-4 rounded-2xl mt-10">
          Pay Invoice
        </button>
      </div>
    </main>
  )
}