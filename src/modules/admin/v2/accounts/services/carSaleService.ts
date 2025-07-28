import InterceptorHelper from "@/helpers/interceptorHelper";
import {ICarSale} from "../interfaces";
import AppHelper from "@/helpers/appHelper";

export const getAllCarSaleListings = (params: IQueryParams) => {
  const paramsString = AppHelper.urlSearchParams(params);
  return InterceptorHelper.intercept<IResponse<ICarSale[]>>(
    `/carsales?${paramsString}`
  );
};

export const apiUpdateCarSaleListing = (id: ICarSale["id"], data: FormData) => {
  return InterceptorHelper.intercept<IResponse<ICarSale[]>>(`/carsales/${id}`, {
    method: "PUT",
    body: data,
  });
};

export const apiDeleteCarSaleListing = (id: ICarSale["id"]) => {
  return InterceptorHelper.intercept<IResponse<ICarSale[]>>(`/carsales/${id}`, {
    method: "DELETE",
  });
};

export const apiRenewCarSaleExpiry = (carSaleId: number, packageId: string) => {
  const formData = new FormData();
  formData.append("id", String(carSaleId));
  formData.append("package_id", packageId);
  return InterceptorHelper.intercept(`/carsales/expiry`, {
    method: "POST",
    body: formData,
  });
};