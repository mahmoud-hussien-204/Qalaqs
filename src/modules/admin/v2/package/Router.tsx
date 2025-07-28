import {RouteObject} from "react-router";

export default [
  {
    path: "packages",
    lazy: () => import("./pages/PackagePage"),
  },
] as RouteObject[];