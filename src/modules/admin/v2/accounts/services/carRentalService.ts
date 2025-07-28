import InterceptorHelper from "@/helpers/interceptorHelper";
import {ICarRental} from "../interfaces";
import AppHelper from "@/helpers/appHelper";

export const getAllCarRentalListings = (params: IQueryParams) => {
  const paramsString = AppHelper.urlSearchParams(params);
  console.log(paramsString);
  return InterceptorHelper.intercept<IResponse<ICarRental[]>>(
    `/carrentals?${paramsString}`
  );
};

export const apiDeleteCarRentalListing = (id: ICarRental["id"]) => {
  return InterceptorHelper.intercept<IResponse<ICarRental[]>>(`/carrentals/${id}`, {
    method: "DELETE",
  });
};

export const apiRenewCarRentalExpiry = (carRentalId: number, packageId: string) => {
  const formData = new FormData();
  formData.append("id", String(carRentalId));
  formData.append("package_id", packageId);
  return InterceptorHelper.intercept(`/carrentals/expiry`, {
    method: "POST",
    body: formData,
  });
};