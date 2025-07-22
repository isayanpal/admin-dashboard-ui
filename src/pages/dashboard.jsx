import { summaryCardData } from "../constants/data";
import SummaryCard from "../components/custom/summary-card";
import { Chart } from "../components/custom/chart";
import { Modal } from "../components/custom/modal";
import Dropdown from "../components/custom/dropdown";
import DataTable from "../components/custom/data-table";

const Dashboard = () => {

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex sm:flex-row flex-col items-center justify-between">
        <div>
        <h1 className="title">Dashboard</h1>

        </div>
        <div className="flex sm:flex-row flex-col items-center gap-3">
          <Dropdown/>
          <Modal/>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {summaryCardData.map((card, index) => (
          <SummaryCard
            key={index}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
            icon={card.trendIcon}
            trend={card.trend}
            subtitle={card.subtitle}
            description={card.description}
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
