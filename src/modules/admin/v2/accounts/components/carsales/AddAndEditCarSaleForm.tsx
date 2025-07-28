import ModalBody from "@/components/ModalBody";

import {UseFormReturn} from "react-hook-form";

import {ICarSaleForm} from "../../interfaces";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import { constantCarSaleStatus } from "../../constants";

interface IProps {
  form: UseFormReturn<ICarSaleForm>;
}

const AddAndEditCarSaleForm = ({form}: IProps) => {
  return (
    <ModalBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Make */}
            <div>
              <Label htmlFor="make_name" className="block font-medium mb-1">Make</Label>
              <Input
                id="make_name"
                type="text"
                {...form.register("make_name")}
                isError={!!form.formState.errors.make_name}
                placeholder="Enter Make"
              />
              {form.formState.errors.make_name && (
                <span className="text-error text-xs">{form.formState.errors.make_name.message as string}</span>
              )}
            </div>
            {/* Model */}
            <div>
              <Label htmlFor="model_name" className="block font-medium mb-1">Model</Label>
              <Input
                id="model_name"
                type="text"
                {...form.register("model_name")}
                isError={!!form.formState.errors.model_name}
                placeholder="Enter Model"
              />
              {form.formState.errors.model_name && (
                <span className="text-error text-xs">{form.formState.errors.model_name.message as string}</span>
              )}
            </div>
            {/* Year */}
            <div>
              <Label htmlFor="year" className="block font-medium mb-1">Year</Label>
              <Input
                id="year"
                type="text"
                {...form.register("year")}
                isError={!!form.formState.errors.year}
                placeholder="Enter Year"
              />
              {form.formState.errors.year && (
                <span className="text-error text-xs">{form.formState.errors.year.message as string}</span>
              )}
            </div>
            {/* Total Miles */}
            <div>
              <Label htmlFor="total_miles" className="block font-medium mb-1">Total Miles</Label>
              <Input
                id="total_miles"
                type="text"
                {...form.register("total_miles")}
                isError={!!form.formState.errors.total_miles}
                placeholder="Enter Total Miles"
              />
              {form.formState.errors.total_miles && (
                <span className="text-error text-xs">{form.formState.errors.total_miles.message as string}</span>
              )}
            </div>
            {/* Car Body */}
            <div>
              <Label htmlFor="car_body" className="block font-medium mb-1">Car Body</Label>
              <Input
                id="car_body"
                type="text"
                {...form.register("car_body")}
                    isError={!!form.formState.errors.car_body}
                placeholder="Enter Car Body"
              />
              {form.formState.errors.car_body && (
                <span className="text-error text-xs">{form.formState.errors.car_body.message as string}</span>
              )}
            </div>
            {/* Car Type */}
            <div>
              <Label htmlFor="car_type" className="block font-medium mb-1">Car Type</Label>
              <Input
                id="car_type"
                type="text"
                {...form.register("car_type")}
                isError={!!form.formState.errors.car_type}
                placeholder="Enter Car Type"
              />
              {form.formState.errors.car_type && (
                <span className="text-error text-xs">{form.formState.errors.car_type.message as string}</span>
              )}
            </div>
            {/* Doors No */}
            <div>
              <Label htmlFor="doors_no" className="block font-medium mb-1">Doors No</Label>
              <Input
                id="doors_no"
                type="number"
                {...form.register("doors_no", { valueAsNumber: true })}
                isError={!!form.formState.errors.doors_no}
                placeholder="Enter Doors No"
              />
              {form.formState.errors.doors_no && (
                <span className="text-error text-xs">{form.formState.errors.doors_no.message as string}</span>
              )}
            </div>
            {/* Fuel Type */}
            <div>
              <Label htmlFor="fuel_type" className="block font-medium mb-1">Fuel Type</Label>
              <Input
                id="fuel_type"
                type="text"
                {...form.register("fuel_type")}
                isError={!!form.formState.errors.fuel_type}
                placeholder="Enter Fuel Type"
              />
              {form.formState.errors.fuel_type && (
                <span className="text-error text-xs">{form.formState.errors.fuel_type.message as string}</span>
              )}
            </div>
            {/* Horse Power */}
            <div>
              <Label htmlFor="horse_power" className="block font-medium mb-1">Horse Power</Label>
                <Input
                id="horse_power"
                type="number"
                {...form.register("horse_power", { valueAsNumber: true })}
                isError={!!form.formState.errors.horse_power}
                placeholder="Enter Horse Power"
              />
              {form.formState.errors.horse_power && (
                <span className="text-error text-xs">{form.formState.errors.horse_power.message as string}</span>
              )}
            </div>
            {/* Transmission */}
            <div>
              <Label htmlFor="transmission" className="block font-medium mb-1">Transmission</Label>
              <Input
                id="transmission"
                type="text"
                {...form.register("transmission")}
                isError={!!form.formState.errors.transmission}
                placeholder="Enter Transmission"
              />
              {form.formState.errors.transmission && (
                <span className="text-error text-xs">{form.formState.errors.transmission.message as string}</span>
              )}
            </div>
            {/* Regional Specs */}
            <div>
              <Label htmlFor="regional_specs" className="block font-medium mb-1">Regional Specs</Label>
              <Input
                id="regional_specs"
                type="text"
                {...form.register("regional_specs")}
                isError={!!form.formState.errors.regional_specs}
                placeholder="Enter Regional Specs"
              />
              {form.formState.errors.regional_specs && (
                <span className="text-error text-xs">{form.formState.errors.regional_specs.message as string}</span>
              )}
            </div>
            {/* Exterior Color */}
            <div>
                <Label htmlFor="ext_color" className="block font-medium mb-1">Exterior Color</Label>
              <Input
                id="ext_color"
                type="text"
                {...form.register("ext_color")}
                isError={!!form.formState.errors.ext_color}
                placeholder="Enter Exterior Color"
              />
              {form.formState.errors.ext_color && (
                <span className="text-error text-xs">{form.formState.errors.ext_color.message as string}</span>
              )}
            </div>
            {/* Interior Color */}
            <div>
              <Label htmlFor="int_color" className="block font-medium mb-1">Interior Color</Label>
              <Input
                id="int_color"
                type="text"
                {...form.register("int_color")}
                isError={!!form.formState.errors.int_color}
                placeholder="Enter Interior Color"
              />
              {form.formState.errors.int_color && (
                <span className="text-error text-xs">{form.formState.errors.int_color.message as string}</span>
              )}
            </div>
            {/* Seats */}
            <div>
              <Label htmlFor="seat_no" className="block font-medium mb-1">Seats</Label>
              <Input
                id="seat_no"
                type="number"
                {...form.register("seat_no", { valueAsNumber: true })}
                isError={!!form.formState.errors.seat_no}
                placeholder="Enter Seats"
              />
              {form.formState.errors.seat_no && (
                <span className="text-error text-xs">{form.formState.errors.seat_no.message as string}</span>
              )}
            </div>
            {/* Engine Capacity */}
            <div>
              <Label htmlFor="engine_capacity" className="block font-medium mb-1">Engine Capacity</Label>
              <Input
                id="engine_capacity"
                type="number"
                {...form.register("engine_capacity", { valueAsNumber: true })}
                isError={!!form.formState.errors.engine_capacity}
                placeholder="Enter Engine Capacity"
              />
              {form.formState.errors.engine_capacity && (
                <span className="text-error text-xs">{form.formState.errors.engine_capacity.message as string}</span>
              )}
            </div>
            {/* Cylinder No */}
            <div>
              <Label htmlFor="cylinder_no" className="block font-medium mb-1">Cylinder No</Label>
              <Input
                id="cylinder_no"
                type="number"
                {...form.register("cylinder_no", { valueAsNumber: true })}
                isError={!!form.formState.errors.cylinder_no}
                placeholder="Enter Cylinder No"
              />
              {form.formState.errors.cylinder_no && (
                <span className="text-error text-xs">{form.formState.errors.cylinder_no.message as string}</span>
              )}
            </div>
            {/* Warranty */}
            <div>
              <Label htmlFor="warranty" className="block font-medium mb-1">Warranty</Label>
              <Input
                id="warranty"
                type="text"
                {...form.register("warranty")}
                isError={!!form.formState.errors.warranty}
                placeholder="Enter Warranty"
              />
              {form.formState.errors.warranty && (
                <span className="text-error text-xs">{form.formState.errors.warranty.message as string}</span>
              )}
            </div>
            {/* Description */}
            <div className="md:col-span-2">
                <Label htmlFor="description" className="block font-medium mb-1">Description</Label>
              <Textarea
                id="description"
                {...form.register("description")}
                  isError={!!form.formState.errors.description}
                placeholder="Enter Description"
                rows={3}
              />
              {form.formState.errors.description && (
                <span className="text-error text-xs">{form.formState.errors.description.message as string}</span>
              )}
            </div>
            {/* Features */}
            <div className="md:col-span-2">
              <Label htmlFor="features" className="block font-medium mb-1">Features (comma separated)</Label>
              <Input
                id="features"
                type="text"
                {...form.register("features")}
                isError={!!form.formState.errors.features}
                placeholder="Enter Features"
              />
              {form.formState.errors.features && (
                <span className="text-error text-xs">{form.formState.errors.features.message as string}</span>
              )}
            </div>
            {/* Price */}
            <div>
              <Label htmlFor="price" className="block font-medium mb-1">Price</Label>
              <Input
                id="price"
                type="text"
                {...form.register("price")}
                isError={!!form.formState.errors.price}
                placeholder="Enter Price"
              />
              {form.formState.errors.price && (
                <span className="text-error text-xs">{form.formState.errors.price.message as string}</span>
              )}
            </div>
            {/* Images */}
            <div className="md:col-span-2">
              <Label htmlFor="images" className="block font-medium mb-1">Images</Label>
              <Input
                id="images"
                type="file"
                multiple
                {...form.register("images")}
                isError={!!form.formState.errors.images}
                placeholder="Enter Images"
              />
              {form.formState.errors.images && (
                <span className="text-error text-xs">{form.formState.errors.images.message as string}</span>
              )}
            </div>
            {/* Location */}
            <div>
              <Label htmlFor="location" className="block font-medium mb-1">Location</Label>
              <Input
                id="location"
                type="text"
                {...form.register("location")}
                isError={!!form.formState.errors.location}
                placeholder="Enter Location"
              />
              {form.formState.errors.location && (
                <span className="text-error text-xs">{form.formState.errors.location.message as string}</span>
              )}
            </div>
            {/* Longitude */}
            <div>
              <Label htmlFor="longitude" className="block font-medium mb-1">Longitude</Label>
              <Input
                id="longitude"
                type="text"
                {...form.register("longitude")}
                isError={!!form.formState.errors.longitude}
                placeholder="Enter Longitude"
              />
              {form.formState.errors.longitude && (
                <span className="text-error text-xs">{form.formState.errors.longitude.message as string}</span>
              )}
            </div>
            {/* Latitude */}
            <div>
                  <Label htmlFor="latitude" className="block font-medium mb-1">Latitude</Label>
              <Input
                id="latitude"
                type="text"
                {...form.register("latitude")}
                isError={!!form.formState.errors.latitude}
                placeholder="Enter Latitude"
              />
              {form.formState.errors.latitude && (
                <span className="text-error text-xs">{form.formState.errors.latitude.message as string}</span>
              )}
            </div>
            {/* Expires At */}
            <div>
              <Label htmlFor="expires_at" className="block font-medium mb-1">Expires At</Label>
              <Input
                id="expires_at"
                type="datetime-local"
                {...form.register("expires_at")}
                isError={!!form.formState.errors.expires_at}
                placeholder="Enter Expires At"
              />
              {form.formState.errors.expires_at && (
                <span className="text-error text-xs">{form.formState.errors.expires_at.message as string}</span>
              )}
            </div>
            {/* Status */}
            <div>
              <Label htmlFor="status" className="block font-medium mb-1">Status</Label>
              <Select
                id="status"
                {...form.register("status")}
                isError={!!form.formState.errors.status}
                options={constantCarSaleStatus}
                // placeholder="Select Status"
              />
              {form.formState.errors.status && (
                <span className="text-error text-xs">{form.formState.errors.status.message as string}</span>
              )}
            </div>
          </div>
        </ModalBody>
  );
};

export default AddAndEditCarSaleForm;
