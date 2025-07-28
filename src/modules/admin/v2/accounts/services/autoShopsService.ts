import InterceptorHelper from "@/helpers/interceptorHelper";
import {IAutoShop} from "../interfaces";
import AppHelper from "@/helpers/appHelper";

export const getAllAutoShopsListings = (params: IQueryParams) => {
  const paramsString = AppHelper.urlSearchParams(params);
  return InterceptorHelper.intercept<IResponse<IAutoShop[]>>(
    `/autoshops?${paramsString}`
  );
};

export const apiDeleteAutoShop = (id: number) => {
  return InterceptorHelper.intercept(`/autoshops/${id}`, {
    method: "DELETE",
  });
};

export const apiRenewAutoShopExpiry = (autoshopId: number, packageId: string) => {
  const formData = new FormData();
  formData.append("id", String(autoshopId));
  formData.append("package_id", packageId);
  return InterceptorHelper.intercept(`/autoshops/expiry`, {
    method: "POST",
    body: formData,
  });
};