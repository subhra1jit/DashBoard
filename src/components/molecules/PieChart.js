import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChart = ({ title, value, series, color }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && ReactApexCharts ? (
        <ReactApexCharts
          options={{
            chart: {
              type: "donut",
            },
            colors: color,
            legend: {
              show: false,
            },
            dataLabels: {
              enabled: false,
            },
          }}
          series={series}
          type="donut"
          height="130px"
          width="120px"
        />
      ) : null}
    </div>
  );
};

export default PieChart;
