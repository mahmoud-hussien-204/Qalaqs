import TransitionPage from "@/components/TransitionPage";
import usePageTitle from "@/hooks/usePageTitle";
import ModalProvider from "@/providers/ModalProvider";
import Card from "@/components/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiGetAutoPartsCount, apiGetBusinessListingCount, apiGetCarSaleCount, apiGetGarageListingCount, apiGetRecoveryListingCount } from "../services";
import { apiGetCarRentalCount } from "../services";
import useQuery from "@/hooks/useQuery";
import { IDashboardData } from "../interfaces";
import ChartWidget from "@/components/ChartWidget";
import RecentActivity from "@/components/RecentActivity";

interface IResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

const dashboardMetrics = [
  {
    key: "carsForSale",
    label: "Total Cars for Sale",
    pendingLabel: "Pending Approval",
    route: "/admin/accounts/cars/sale",
  },
  {
    key: "carsForRent",
    label: "Total Cars for Rent",
    pendingLabel: "Pending Approval",
    route: "/admin/accounts/cars/rental",
  },
  {
    key: "businessListings",
    label: "Total Business Listings",
    pendingLabel: "Pending Approval",
    route: "/admin/accounts/all-business-listing",
  },
  {
    key: "garages",
    label: "Total Garages",
    pendingLabel: "Pending Approval",
    route: "/admin/accounts/garage-listing",
  },
  {
    key: "recoveries",
    label: "Total Recoveries",
    pendingLabel: "Pending Approval",
    route: "/admin/accounts/recovery-listing",
  },
  {
    key: "spareParts",
    label: "Spare Parts",
    pendingLabel: "Pending Approval",
    route: "/admin/accounts/spare-parts",
  },
];

const userMetrics = [
  {
    key: "usersIndividuals",
    label: "Total Users (Individuals)",
    route: "/admin/accounts/users-individuals", // Placeholder
  },
  {
    key: "usersCorporates",
    label: "Total Users (Corporates)",
    route: "/admin/accounts/users-corporates", // Placeholder
  },
];

const useDashboardStats = (dateFilter: string) => {
  const { data: carSaleData } = useQuery<IResponse<IDashboardData>>({
    queryFn: apiGetCarSaleCount,
    queryKey: ["admin-get-car-sale-count"],
  });
  const { data: carRentalData } = useQuery<IResponse<IDashboardData>>({
    queryFn: apiGetCarRentalCount,
    queryKey: ["admin-get-car-rental-count"],
  });
  const { data: businessData } = useQuery<IResponse<IDashboardData>>({
    queryFn: apiGetBusinessListingCount,
    queryKey: ["admin-get-business-count"],
  });
  const { data: garageData } = useQuery<IResponse<IDashboardData>>({
    queryFn: apiGetGarageListingCount,
    queryKey: ["admin-get-garage-count"],
  });
  const { data: recoveryData } = useQuery<IResponse<IDashboardData>>({
    queryFn: apiGetRecoveryListingCount,
    queryKey: ["admin-get-recovery-count"],
  });
  const { data: autopartsData } = useQuery<IResponse<IDashboardData>>({
    queryFn: apiGetAutoPartsCount,
    queryKey: ["admin-get-auto-parts-count"],
  });
  return {
    carsForSale: { total: carSaleData?.data?.total ?? 0, pending: carSaleData?.data?.pending ?? 0 },
    carsForRent: { total: carRentalData?.data?.total ?? 0, pending: carRentalData?.data?.pending ?? 0 },
    businessListings: { total: businessData?.data?.total ?? 0, pending: businessData?.data?.pending ?? 0 },
    garages: { total: garageData?.data?.total ?? 0, pending: garageData?.data?.pending ?? 0 },
    recoveries: { total: recoveryData?.data?.total ?? 0, pending: recoveryData?.data?.pending ?? 0 },
    spareParts: { total: autopartsData?.data?.total ?? 0, pending: autopartsData?.data?.pending ?? 0 },
    usersIndividuals: dateFilter === "monthly" ? 50 : 600,
    usersCorporates: dateFilter === "monthly" ? 10 : 120,
  };
};

export const Component = () => {
  usePageTitle("Dashboard");
  const navigate = useNavigate();
  const [dateFilter, setDateFilter] = useState("monthly");
  const stats = useDashboardStats(dateFilter);

  // Mock data for chart
  const chartCategories = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const chartSeries = [
    {
      name: "New Listings",
      data: [12, 18, 22, 15, 30, 25, 28, 35, 40, 38, 32, 27],
    },
  ];

  return (
    <ModalProvider>
      <TransitionPage>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {dashboardMetrics.map((metric) => {
            const value = stats[metric.key as keyof typeof stats];
            return (
              <div
                key={metric.key}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(metric.route)}
              >
                <Card>
                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="text-lg font-semibold mb-2">{metric.label}</div>
                    <div className="text-3xl font-bold">{typeof value === 'object' && value !== null ? value.total : '-'}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {metric.pendingLabel}: {typeof value === 'object' && value !== null ? value.pending : '-'}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
        {/* Chart and Recent Activity */}
        <ChartWidget
          title="New Listings Per Month"
          series={chartSeries}
          categories={chartCategories}
        />
        <RecentActivity />
        {/* User Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {userMetrics.map((metric) => {
            const value = stats[metric.key as keyof typeof stats];
            return (
              <div
                key={metric.key}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(metric.route)}
              >
                <Card>
                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-semibold">{metric.label}</span>
                      <select
                        className="ml-2 border rounded px-2 py-1 text-sm"
                        value={dateFilter}
                        onClick={e => e.stopPropagation()}
                        onChange={e => setDateFilter(e.target.value)}
                      >
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    </div>
                    <div className="text-3xl font-bold">{typeof value === 'number' ? value : '-'}</div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "MainDashboard";