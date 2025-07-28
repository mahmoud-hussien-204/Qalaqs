import InterceptorHelper from "@/helpers/interceptorHelper";
import AppHelper from "@/helpers/appHelper";
import { IPackage } from "./interfaces";
import { ICreatePackageForm, IEditPackageForm } from "./interfaces";

export const apiGetPackages = () =>
  InterceptorHelper.intercept<IResponse<IPackage[]>>("/packages");

export const apiCreatePackage = (data: ICreatePackageForm) => {
  const formData = AppHelper.toFormData(data);
  return InterceptorHelper.intercept(`/packages`, {
    method: "POST",
    body: formData,
  });
};

export const apiDeletePackage = (id: string) => {
  return InterceptorHelper.intercept(`/packages/${id}`, {
    method: "DELETE",
  });
};

export const apiUpdatePackage = (data: IEditPackageForm) => {
  const formData = AppHelper.toFormData(data);
  console.log(formData);
  return InterceptorHelper.intercept(`/packages/${data.id}`, {
    method: "POST",
    body: formData,
  });
};