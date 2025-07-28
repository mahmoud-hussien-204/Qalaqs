import React from "react";
import ReactApexChart from "react-apexcharts";

interface ChartWidgetProps {
  title: string;
  series: ApexAxisChartSeries;
  categories: string[];
  height?: number;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ title, series, categories, height = 320 }) => {
  const chartOptions = {
    chart: {
      id: "dashboard-chart",
      toolbar: { show: false },
    },
    xaxis: {
      categories,
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" as const },
    colors: ["#2563eb"],
  };

  return (
    <div className="bg-white rounded shadow p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ReactApexChart options={chartOptions} series={series} type="line" height={height} />
    </div>
  );
};

export default ChartWidget; 