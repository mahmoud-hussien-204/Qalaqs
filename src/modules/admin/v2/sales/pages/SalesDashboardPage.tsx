import TransitionPage from "@/components/TransitionPage";
import usePageTitle from "@/hooks/usePageTitle";
import ModalProvider from "@/providers/ModalProvider";
import Card from "@/components/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const salesDashboardMetrics = [
  {
    key: "sales",
    label: "Sales (AED)",
    route: "/admin/sales/sales-list",
  },
  {
    key: "rent",
    label: "Rent (AED)",
    route: "/admin/sales/rent-list",
  },
  {
    key: "spareParts",
    label: "Spare Parts",
    route: "/admin/accounts/spare-parts",
  },
  {
    key: "banners",
    label: "Commercial Banners",
    route: "/admin/sales/banners",
  },
  {
    key: "businessListing",
    label: "Business Listing",
    route: "/admin/accounts/all-business-listing",
  },
];

const useSalesDashboardStats = (dateFilter: string) => {
  // Mock data for demonstration
  return {
    sales: dateFilter === "monthly" ? 120000 : 1450000,
    rent: dateFilter === "monthly" ? 35000 : 420000,
    spareParts: dateFilter === "monthly" ? 800 : 9500,
    banners: dateFilter === "monthly" ? 12 : 120,
    businessListing: dateFilter === "monthly" ? 30 : 400,
  };
};

const chartOptions = {
  chart: {
    id: "sales-chart",
    toolbar: { show: false },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth" as const },
  colors: ["#2563eb"],
};

const chartSeries = [
  {
    name: "Sales (AED)",
    data: [12000, 15000, 18000, 20000, 22000, 25000, 27000, 30000, 32000, 35000, 37000, 40000],
  },
];

export const Component = () => {
  usePageTitle("Sales Dashboard");
  const navigate = useNavigate();
  const [dateFilter, setDateFilter] = useState("monthly");
  const stats = useSalesDashboardStats(dateFilter);

  return (
    <ModalProvider>
      <TransitionPage>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Sales Dashboard</h1>
          <select
            className="border rounded px-2 py-1 text-sm"
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {salesDashboardMetrics.map((metric) => (
            <div
              key={metric.key}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(metric.route)}
            >
              <Card>
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="text-lg font-semibold mb-2">{metric.label}</div>
                  <div className="text-3xl font-bold">{stats[metric.key as keyof typeof stats]}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={320} />
        </div>
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "SalesDashboardPage";