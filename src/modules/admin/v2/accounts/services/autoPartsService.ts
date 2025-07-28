import InterceptorHelper from "@/helpers/interceptorHelper";
import {IAutoPart} from "../interfaces";
import AppHelper from "@/helpers/appHelper";

export const getAllAutoPartsListings = (params: IQueryParams) => {
  const paramsString = AppHelper.urlSearchParams(params);
  return InterceptorHelper.intercept<IResponse<IAutoPart[]>>(
    `/autoparts?${paramsString}`
  );
};

export const apiDeleteAutoPartListing = (id: IAutoPart["id"]) => {
  return InterceptorHelper.intercept<IResponse<IAutoPart[]>>(`/autoparts/${id}`, {
    method: "DELETE",
  });
};

export const apiRenewAutoPartExpiry = (autoPartId: number, packageId: string) => {
  const formData = new FormData();
  formData.append("id", String(autoPartId));
  formData.append("package_id", packageId);
  return InterceptorHelper.intercept(`/autoparts/expiry`, {
    method: "POST",
    body: formData,
  });
};