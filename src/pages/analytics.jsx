import { Chart } from "../components/custom/chart";

export default function AnalyticsPage() {
  return (
    <div className="flex h-full w-full flex-col gap-y-4 p-4 text-gray-700 dark:text-gray-300">
        <h1 className="text-xl">Overall analytics Overview</h1>
        <Chart/>
    </div>
  )
}
