import {RouteObject} from "react-router";

export default [
  {
    path: "accounts",
    lazy: () => import("./layout/AccountsLayout"),
    children: [
      {
        path: "cars/sale",
        lazy: () => import("./pages/CarsSalePage"),
      },
      {
        path: "cars/rental",
        lazy: () => import("./pages/CarsRentalPage"),
      },
      {
        path: "all-business-listing",
        lazy: () => import("./pages/AllBusinessListingPage"),
      },
      {
        path: "recovery-listing",
        lazy: () => import("./pages/RecoveryListing"),
      },
      {
        path: "spare-parts",
        lazy: () => import("./pages/SpareParts"),
      },
      {
        path: "garage-listing",
        lazy: () => import("./pages/GaragePage"),
      },
    ],
  },
] as RouteObject[];
