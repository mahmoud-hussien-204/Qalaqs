import {RouteObject} from "react-router";

export default [
  {
    path: "sales",
    lazy: () => import("./layout/SalesLayout"),
    children: [
      {
        path: "banners",
        index: true,
        lazy: () => import("./pages/BannersPage"),
      },
      {
        path: "dashboard",
        index: true,
        lazy: () => import("./pages/SalesDashboardPage"),
      },
    ],
  },
] as RouteObject[];
