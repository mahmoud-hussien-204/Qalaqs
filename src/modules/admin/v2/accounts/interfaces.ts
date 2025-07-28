import { EnumGarageStatus } from "./enums";

export interface IRecoveryListing {
  id?: string;
  service_name: string;
  service_logo?: File | null;
  service_phone: string;
  service_mobile?: string | null;
  service_email: string;
  service_whatsapp?: string | null;
  service_address: string;
  service_city: string;
  service_description?: string | null;
  service_latitude?: string | null;
  service_longitude?: string | null;
  expires_at?: string | null;
  status: EnumGarageStatus;
}

export interface IGarage {
  id: string;
  garage_name: string;
  garage_logo: string;
  garage_phone: string;
  garage_mobile: string;
  garage_email: string;
  garage_whatsapp: string;
  garage_address: string;
  garage_city: string;
  garage_description: string;
  garage_latitude?: string | null;
  garage_longitude?: string | null;
  expires_at: string;
  status: EnumGarageStatus;
}

export type ICreateGarageForm = Omit<IGarage, "id" | "garage_logo"> & {
  garage_logo: File | string;
};

export type IEditGarageForm = ICreateGarageForm & { id: string };


export interface ICarRental {
  id: number;
  user_id: number;
  make_name: string;
  model_name: string;
  year: string;
  total_miles: string;
  car_body: string;
  doors_no: number;
  fuel_type: string;
  transmission: string;
  ext_color: string;
  int_color: string;
  seat_no: number;
  engine_capacity: number;
  insurance: string;
  description: string;
  features: string[];
  deposit: string;
  price: string;
  price_type: string;
  images: any[];
  location: string;
  longitude: string;
  latitude: string;
  total_views: number;
  expires_at: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  is_favorite: boolean;
}

export interface ICarSale {
    id:              number;
    user_id:         number;
    make_name:       string;
    model_name:      string;
    year:            string;
    total_miles:     string;
    car_body:        string;
    car_type:        string;
    doors_no:        number;
    fuel_type:       string;
    horse_power:     number;
    transmission:    string;
    regional_specs:  string;
    ext_color:       string;
    int_color:       string;
    seat_no:         number;
    engine_capacity: number;
    cylinder_no:     number;
    warranty:        string;
    description:     string;
    features:        string[];
    price:           string;
    images:          any[];
    location:        string;
    longitude:       string;
    latitude:        string;
    total_views:     number;
    expires_at:      Date;
    status:          string;
    created_at:      Date;
    updated_at:      Date;
    deleted_at:      null;
    is_favorite:     boolean;
}

export interface ICarSaleForm extends Omit<ICarSale, "expires_at" | "created_at" | "updated_at"> {
  expires_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface IAutoShop {
  id: number;
  user_id: number;
  business_logo: string;
  business_name: string;
  business_email: string;
  business_phone: string;
  business_whatsapp: string;
  business_address: string;
  business_city: string;
  business_longitude: string;
  business_latitude: string;
  business_description: string;
  business_images: any[];
  vehicle_makes_dealt_with: string[];
  vehicle_years_dealt_with: number[];
  total_views: number;
  expires_at: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  is_favorite: boolean;
}

export interface IAutoPart {
    id:               number;
    user_id:          number;
    part_name:        string;
    part_number:      string;
    part_make:        string;
    part_model:       string[];
    part_year:        number[];
    part_type:        string;
    part_condition:   string;
    part_description: null;
    part_price:       string;
    part_images:      string[];
    total_views:      number;
    expires_at:       Date;
    status:           string;
    created_at:       Date;
    updated_at:       Date;
    deleted_at:       null;
    is_favorite:      boolean;
}