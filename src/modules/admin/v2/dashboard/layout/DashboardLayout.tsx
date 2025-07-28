import TransitionPage from "@/components/TransitionPage";

// import usePageTitle from "@/hooks/usePageTitle";

import {Outlet} from "react-router-dom";

export const Component = () => {
  // usePageTitle("Accounts");

  return (
    <TransitionPage>
      <Outlet />
    </TransitionPage>
  );
};

Component.displayName = "DashboardLayout";
