import {EnumGarageStatus} from "../enums";
import {IRecoveryListing} from "../interfaces";
import * as yup from "yup";

export const fileSchema = yup
  .mixed<File>()
  .test("fileType", "Only image files are allowed", (value) => {
    return !value || (value instanceof File && value.type.startsWith("image/"));
  });

export const recoveryListingSchema = yup.object<IRecoveryListing>().shape({
  service_name: yup.string().required("Service name is required"),

  service_logo: fileSchema.notRequired(),

  service_phone: yup
    .string()
    .required("Service phone is required")
    .matches(/^\+?\d{6,15}$/, "Invalid phone number"),

  service_mobile: yup
    .string()
    .notRequired()
    .matches(/^\+?\d{6,15}$/, "Invalid mobile number")
    .nullable(),

  service_email: yup.string().email("Invalid email format").required("Service email is required"),

  service_whatsapp: yup
    .string()
    .notRequired()
    .matches(/^\+?\d{6,15}$/, "Invalid WhatsApp number")
    .nullable(),

  service_address: yup.string().required("Service address is required"),

  service_city: yup.string().required("Service city is required"),

  service_description: yup.string().notRequired().nullable(),

  service_latitude: yup
    .string()
    .notRequired()
    .test("service_latitude", "Latitude must be a valid number", (value) => {
      if (!value) return true;
      return /^(-?\d+(\.\d+)?)$/.test(value);
    })
    .nullable(),

  service_longitude: yup
    .string()
    .notRequired()
    .test("service_longitude", "Longitude must be a valid number", (value) => {
      if (!value) return true;
      return /^(-?\d+(\.\d+)?)$/.test(value);
    })
    .nullable(),

  expires_at: yup
    .string()
    .notRequired()
    .test("expires_at", "Expiration date must be in the future", (value) => {
      if (!value) return true;
      const regex = new RegExp(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/);
      if (regex.test(value)) return true;
      return !value || new Date(value) > new Date();
    })
    .nullable(),

  status: yup
    .mixed<EnumGarageStatus>()
    .oneOf(Object.values(EnumGarageStatus))
    .required("Status is required"),
});

export const carSaleSchema = yup.object().shape({
  id: yup.number().required(),
  user_id: yup.number().required(),
  make_name: yup.string().required("Make is required"),
  model_name: yup.string().required("Model is required"),
  year: yup.string().required("Year is required"),
  total_miles: yup.string().required("Total miles is required"),
  car_body: yup.string().required("Car body is required"),
  car_type: yup.string().required("Car type is required"),
  doors_no: yup.number().typeError("Doors number must be a number").required("Doors number is required"),
  fuel_type: yup.string().required("Fuel type is required"),
  horse_power: yup.number().typeError("Horse power must be a number").required("Horse power is required"),
  transmission: yup.string().required("Transmission is required"),
  regional_specs: yup.string().required("Regional specs is required"),
  ext_color: yup.string().required("Exterior color is required"),
  int_color: yup.string().required("Interior color is required"),
  seat_no: yup.number().typeError("Seat number must be a number").required("Seat number is required"),
  engine_capacity: yup.number().typeError("Engine capacity must be a number").required("Engine capacity is required"),
  cylinder_no: yup.number().typeError("Cylinder number must be a number").required("Cylinder number is required"),
  warranty: yup.string().notRequired(),
  description: yup.string().notRequired(),
  features: yup.array().of(yup.string()).notRequired(),
  price: yup.string().required("Price is required"),
  images: yup.array().notRequired(),
  location: yup.string().required("Location is required"),
  longitude: yup.string().notRequired(),
  latitude: yup.string().notRequired(),
  total_views: yup.number().notRequired(),
  expires_at: yup.string().notRequired(),
  status: yup.string().notRequired(),
  created_at: yup.string().notRequired(),
  updated_at: yup.string().notRequired(),
  deleted_at: yup.mixed().notRequired(),
  is_favorite: yup.boolean().notRequired(),
});
