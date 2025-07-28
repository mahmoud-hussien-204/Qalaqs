import {EnumGarageStatus, EnumCarSaleStatus} from "../enums";

export const constantGarageStatus = [
  {
    label: "Select Garage Status",
    value: "",
    disabled: true,
  },
  {
    label: EnumGarageStatus.SHOW,
    value: EnumGarageStatus.SHOW,
  },
  {
    label: EnumGarageStatus.HIDE,
    value: EnumGarageStatus.HIDE,
  },
  // {
  //   label: EnumGarageStatus.PENDING,
  //   value: EnumGarageStatus.PENDING,
  // },
  // {
  //   label: EnumGarageStatus.REVIEW,
  //   value: EnumGarageStatus.REVIEW,
  // },
  // {
  //   label: EnumGarageStatus.APPROVED,
  //   value: EnumGarageStatus.APPROVED,
  // },
  // {
  //   label: EnumGarageStatus.REJECTED,
  //   value: EnumGarageStatus.REJECTED,
  // },
  // {
  //   label: EnumGarageStatus.EXPIRED,
  //   value: EnumGarageStatus.EXPIRED,
  // },
];

export const constantCarSaleStatus = [
  {
    label: "Select Car Sale Status",
    value: "",
    disabled: true,
  },
  {
    label: "Show",
    value: "show",
  },
  {
    label: "Hide",
    value: "hide",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Review",
    value: "review",
  },
  {
    label: "Approved",
    value: "approved",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "Expired",
    value: "expired",
  },
];
