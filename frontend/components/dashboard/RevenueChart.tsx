"use client"

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Mon", revenue: 400 },
  { day: "Tue", revenue: 800 },
  { day: "Wed", revenue: 600 },
]

export default function RevenueChart() {
  return (
    <div className="card p-6 h-[400px]">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="day" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}