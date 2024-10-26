import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

const HomeChart = ({
  accounts = [],
  totalClients,
  totalMessages,
}: TotalMessagesBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Total Clients: <AnimatedCounter amount={totalClients} />
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Messages: </p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalMessages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeChart;
