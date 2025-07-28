import InterceptorHelper from '@/helpers/interceptorHelper';
import { IDashboardData } from './interfaces';

export const apiGetCarSaleCount = () => InterceptorHelper.intercept<IResponse<IDashboardData>>('/carsales/stats/count');
export const apiGetCarRentalCount = () => InterceptorHelper.intercept<IResponse<IDashboardData>>('/carrentals/stats/count');
export const apiGetBusinessListingCount = () => InterceptorHelper.intercept<IResponse<IDashboardData>>('/autoshops/stats/count');
export const apiGetGarageListingCount = () => InterceptorHelper.intercept<IResponse<IDashboardData>>('/garages/stats/count');
export const apiGetRecoveryListingCount = () => InterceptorHelper.intercept<IResponse<IDashboardData>>('/towing-services/stats/count');
export const apiGetAutoPartsCount = () => InterceptorHelper.intercept<IResponse<IDashboardData>>('/autoparts/stats/count');
