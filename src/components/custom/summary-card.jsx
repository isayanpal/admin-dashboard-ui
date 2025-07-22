import { TrendingUp, TrendingDown } from "lucide-react"

const SummaryCard = ({
  title,
  value,
  percentage,
  trend = "up" ,
  subtitle , 
  description  
}) => {
  const isPositive = trend === "up"
  const TrendIcon = isPositive ? TrendingUp : TrendingDown
  const trendColor = isPositive ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"
  const trendBg = isPositive ? "bg-green-50 dark:bg-green-500/10" : "bg-red-50 dark:bg-red-500/10"

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{title}</h3>
        <div className={`flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-medium ${trendColor} ${trendBg}`}>
          <TrendIcon className="h-3 w-3" />
          {percentage}
        </div>
      </div>

      {/* Main Value */}
      <div className="mt-2">
        <div className="text-2xl font-bold text-zinc-950 dark:text-white">{value}</div>
      </div>

      {/* Footer */}
      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400">
          <TrendIcon className="h-3 w-3" />
          {subtitle}
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-500">{description}</p>
      </div>
    </div>
  )
}

export default SummaryCard
