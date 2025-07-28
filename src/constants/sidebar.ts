import {EnumUserRole} from "@/enums";

interface ISidebarItemSubMenu {
  title: string;
  path: string;
  isSubmenu?: boolean;
  subMenu?: ISidebarItemSubMenu[];
}

interface ISidebarItemBase {
  title: string;
  path: string;
  icon: string;
  end?: boolean;
}

interface ISidebarItemWithSubMenu extends ISidebarItemBase {
  isSubmenu: true;
  subMenu: ISidebarItemSubMenu[];
}

interface ISidebarItemWithoutSubMenu extends ISidebarItemBase {
  isSubmenu: false;
  subMenu?: never;
}

type ISidebarItem = {
  [key in keyof typeof EnumUserRole]: (ISidebarItemWithSubMenu | ISidebarItemWithoutSubMenu)[];
};

export const constantSidebar: ISidebarItem = {
  [EnumUserRole.admin]: [
    {
      title: "Dashboard",
      path: "/admin",
      icon: "dashboard",
      end: true,
      isSubmenu: false,
    },
    {
      title: "Promo Code",
      path: "/admin/promo-code",
      icon: "referral",
      end: true,
      isSubmenu: false,
    },
    {
      title: "Accounts",
      icon: "profile",
      path: "/admin/accounts",
      isSubmenu: true,
      subMenu: [
        {
          title: "Cars",
          path: "/admin/accounts/cars",
          isSubmenu: true,
          subMenu: [
            {
              title: "Sale",
              path: "/admin/accounts/cars/sale",
            },
            {
              title: "Rental",
              path: "/admin/accounts/cars/rental",
            },
          ],
        },
        {
          title: "All Business Listing",
          path: "/admin/accounts/all-business-listing",
        },
        {
          title: "Recovery Listing",
          path: "/admin/accounts/recovery-listing",
        },
        {
          title: "Spare Parts",
          path: "/admin/accounts/spare-parts",
        },
        {
          title: "Garage Listing",
          path: "/admin/accounts/garage-listing",
        },
      ],
    },
    {
      title: "Users Management",
      icon: "users",
      path: "/admin/users-management",
      isSubmenu: true,
      subMenu: [
        {
          title: "Users",
          path: "/admin/users-management/users-list",
        },
        {
          title: "Roles",
          path: "/admin/users-management/roles",
        },
      ],
    },
    {
      title: "Sales",
      icon: "membership",
      path: "/admin/sales",
      isSubmenu: true,
      subMenu: [
        {
          title: "Dashboard",
          path: "/admin/sales/dashboard",
        },
        {
          title: "Pending Approvals",
          path: "/admin/sales/pending-approvals",
        },
        {
          title: "Banners",
          path: "/admin/sales/banners",
        },
        {
          title: "All Listing",
          path: "/admin/sales/all-listing",
        },
      ],
    },
    {
      title: "All Transactions",
      path: "/admin/transactions",
      icon: "wallets",
      end: true,
      isSubmenu: false,
    },
    {
      title: "Packages",
      path: "/admin/packages",
      icon: "package",
      end: true,
      isSubmenu: false,
    },
    {
      title: "Settings & Profile",
      path: "/admin/settings/general",
      icon: "cog",
      isSubmenu: false,
    },
  ],
  [EnumUserRole.user]: [],
};
