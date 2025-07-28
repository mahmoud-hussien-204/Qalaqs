import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import useMutation from "@/hooks/useMutation";
import {ICarSaleForm} from "../../interfaces";
import useModal from "@/hooks/useModal";
import {useQueryClient} from "@tanstack/react-query";
import InterceptorHelper from "@/helpers/interceptorHelper";
import * as yup from "yup";

// Schema for car sale creation form
const carSaleCreateSchema = yup.object().shape({
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
  features: yup.string().notRequired(),
  price: yup.string().required("Price is required"),
  images: yup.mixed().notRequired(),
  location: yup.string().required("Location is required"),
  longitude: yup.string().notRequired(),
  latitude: yup.string().notRequired(),
  expires_at: yup.string().notRequired(),
  status: yup.string().required("Status is required"),
});

const apiAddCarSaleListing = (data: FormData) => {
  return InterceptorHelper.intercept(`/carsales`, {
    method: "POST",
    body: data,
  });
};

function useAddCarSaleForm() {
  const {hide} = useModal();
  const queryClient = useQueryClient();

  const form = useForm<ICarSaleForm>({
    defaultValues: {
      make_name: "",
      model_name: "",
      year: "",
      total_miles: "",
      car_body: "",
      car_type: "",
      doors_no: 0,
      fuel_type: "",
      horse_power: 0,
      transmission: "",
      regional_specs: "",
      ext_color: "",
      int_color: "",
      seat_no: 0,
      engine_capacity: 0,
      cylinder_no: 0,
      warranty: "",
      description: "",
      features: [], // should be an array, not a string
      price: "",
      images: undefined, // should be undefined or FileList, not null
      location: "",
      longitude: "",
      latitude: "",
      expires_at: "",
      status: "active",
    },
    resolver: yupResolver(carSaleCreateSchema) as any, // cast as any to resolve type mismatch due to schema shape
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiAddCarSaleListing,
  });

  const onSubmit = form.handleSubmit((values: ICarSaleForm) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        if (key === "features" && typeof value === "string") {
          // Convert comma-separated string to array
          const featuresArray = value.split(",").map(feature => feature.trim()).filter(feature => feature);
          formData.append(key, JSON.stringify(featuresArray));
        } else if (key === "images" && value instanceof FileList) {
          // Handle multiple files
          Array.from(value).forEach((file, index) => {
            formData.append(`images[${index}]`, file);
          });
        } else {
          formData.append(key, value.toString());
        }
      }
    });

    mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-car-sale-listings"]});
        form.reset();
        hide();
      },
    });
  });

  return {onSubmit, form, isPending};
}

export default useAddCarSaleForm; 