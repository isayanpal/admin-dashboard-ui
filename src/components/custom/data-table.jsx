import {transactionData} from "../../constants/data"
import { ChevronDown, TrendingUp, TrendingDown, Clock, CheckCircle, XCircle } from "lucide-react"


const statusConfig = {
  Paid: {
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    icon: CheckCircle,
    border: "border-emerald-200 dark:border-emerald-800",
  },
  Pending: {
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    icon: Clock,
    border: "border-amber-200 dark:border-amber-800",
  },
  Overdue: {
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-900/20",
    icon: XCircle,
    border: "border-red-200 dark:border-red-800",
  },
}

const DataTable = () => {
  return (
    <div className="w-full bg-white dark:bg-zinc-950 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-800 px-3 sm:px-6 py-4 border-b border-zinc-200 dark:border-zinc-600">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Transaction History</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Recent payment transactions and their status
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {transactionData.filter((t) => t.status === "Paid").length} Completed
            </span>
          </div>
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div className="max-h-96 overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent">
        <table className="min-w-full">
          {/* Sticky Header */}
          <thead className="bg-zinc-50 dark:bg-zinc-800 sticky top-0 z-10 shadow-sm">
            <tr>
              <th className="px-3 sm:px-6 py-4 text-left">
                <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200 uppercase tracking-wider">
                  <span>Customer</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </div>
              </th>
              <th className="px-3 sm:px-6 py-4 text-left">
                <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200 uppercase tracking-wider">
                  <span>Status</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </div>
              </th>
              <th className="px-3 sm:px-6 py-4 text-left">
                <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200 uppercase tracking-wider">
                  <span>Date</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </div>
              </th>
              <th className="px-3 sm:px-6 py-4 text-right">
                <div className="flex items-center justify-end space-x-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200 uppercase tracking-wider">
                  <span>Amount</span>
                  <TrendingDown className="h-3 w-3 opacity-50" />
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700">
            {transactionData.map((row, idx) => {
              const config = statusConfig[row.status]
              const StatusIcon = config.icon

              return (
                <tr
                  key={idx}
                  className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 ease-in-out"
                >
                  {/* Name */}
                  <td className="px-3 sm:px-6 py-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-lg">
                        {row.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-medium text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {row.name}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:block">
                          Customer ID: #{(idx + 1).toString().padStart(4, "0")}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-3 sm:px-6 py-4">
                    <div
                      className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium border ${config.bg} ${config.color} ${config.border}`}
                    >
                      <StatusIcon className="h-3 w-3" />
                      <span>{row.status}</span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-3 sm:px-6 py-4">
                    <div className="text-sm text-zinc-900 dark:text-zinc-100 font-medium">
                      {new Date(row.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      {Math.floor(Math.random() * 12) + 1}:00 PM
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="px-3 sm:px-6 py-4 text-right">
                    <div className="text-sm sm:text-lg font-bold text-zinc-900 dark:text-white">{row.amount}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">USD</div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="bg-zinc-50 dark:bg-zinc-800 px-3 sm:px-6 py-3 border-t border-zinc-200 dark:border-zinc-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          <span>Showing {transactionData.length} transactions</span>
          <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap gap-2 sm:gap-0">
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <span>{transactionData.filter((t) => t.status === "Paid").length} Paid</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-amber-500"></div>
              <span>{transactionData.filter((t) => t.status === "Pending").length} Pending</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <span>{transactionData.filter((t) => t.status === "Overdue").length} Overdue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataTable
