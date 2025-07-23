import { TrendingUp, TrendingDown } from "lucide-react"

const SummaryCard = ({ title, value, percentage, trend = "up", subtitle }) => {
  const isPositive = trend === "up"
  const TrendIcon = isPositive ? TrendingUp : TrendingDown
  const trendColor = isPositive ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"
  const trendBg = isPositive ? "bg-green-50 dark:bg-green-500/10" : "bg-red-50 dark:bg-red-500/10"

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-700 cursor-default">
      {/* Header */}
      <div>
        <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-200">{title}</h3>
      </div>
      {/* Main Value */}
      <div className="mt-2 flex items-baseline gap-3">
        <div className="text-2xl font-bold text-zinc-950 dark:text-white transition-all duration-300 hover:scale-105">
          {value}
        </div>
        <div
          className={`flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-medium ${trendColor} ${trendBg} transition-all duration-200 hover:scale-105`}
        >
          <TrendIcon className="h-3 w-3 transition-transform duration-200 hover:scale-110" />
          {percentage}
        </div>
      </div>
      {/* Footer */}
      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 transition-colors duration-200">
          <TrendIcon className="h-3 w-3 transition-transform duration-200 hover:rotate-12" />
          {subtitle}
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
