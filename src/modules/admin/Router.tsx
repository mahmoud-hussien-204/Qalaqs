import {RouteObject} from "react-router";

// new routes
import dashboardRoutes from "./v2/dashboard/Router";

import promoCodesRoutes from "./v2/promoCode/Router";

import accountsRoutes from "./v2/accounts/Router";

import salesRoutes from "./v2/sales/Router";

import settingsRoutes from "./v2/settings/Router";

import packageRoutes from "./v2/package/Router";

export default [
  {
    path: "/admin",
    children: [
      // **** new routes ****
      ...dashboardRoutes,
      ...promoCodesRoutes,
      ...accountsRoutes,
      ...salesRoutes,
      ...accountsRoutes,
      ...settingsRoutes,
      ...packageRoutes,
    ],
  },
] as RouteObject[];
