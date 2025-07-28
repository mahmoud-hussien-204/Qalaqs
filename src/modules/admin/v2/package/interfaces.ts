export interface IPackage {
  id: string;
  name: string;
  description: string;
  currency: string;
  price: number;
  validity: number;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface ICreatePackageForm {
  name: string;
  description: string;
  currency: string;
  price: number;
  validity: number;
  category: string;
}

export type IEditPackageForm = Omit<ICreatePackageForm, 'category'> & { id: string };

export enum PackageCategory {
  AutoShop = 'AutoShop',
  AutoPart = 'AutoPart',
  CarSale = 'CarSale',
  CarRental = 'CarRental',
}