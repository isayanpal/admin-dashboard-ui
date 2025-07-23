import { summaryCardData } from "../constants/data";
import SummaryCard from "../components/private/summary-card";
import { Chart } from "../components/private/chart";
import { Modal } from "../components/private/modal";
import DataTable from "../components/private/data-table";

const Dashboard = () => {

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2">
        <div>
        <h1 className="title">Dashboard</h1>
        </div>
        <div>
          <Modal/>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCardData.map((card, index) => (
          <SummaryCard
            key={index}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
            icon={card.trendIcon}
            trend={card.trend}
            subtitle={card.subtitle}
          />
        ))}
      </div>

      {/* Analytics */}
      <Chart/>

      {/* table data */}
      <DataTable />
    
    </div>
  );
};

export default Dashboard;
