import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { TotalRevenueOptions, TotalRevenueSeries } from "../../data/chartData";

const ReactApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BarChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="p-4  flex flex-col justify-start items-center bg-[#fcfcfc] rounded-xl w-full shadow-md"
      id="chart"
    >
      <div className="flex flex-col justify-start w-full">
        <h2 className="text-sm font-bold">Activities</h2>
        <p className="text-xs font-bold">May-June 2021</p>
      </div>
      <div className="w-full">
        {isClient && (
          <ReactApexCharts
            series={TotalRevenueSeries}
            type="bar"
            height={200}
            options={TotalRevenueOptions}
          />
        )}
      </div>
    </div>
  );
};

export default BarChart;
