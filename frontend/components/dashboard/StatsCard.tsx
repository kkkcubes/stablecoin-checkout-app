interface Props {
  title: string
  value: string
}

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div className="card p-6">
      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="text-3xl mt-2 font-bold">
        {value}
      </h2>
    </div>
  )
}