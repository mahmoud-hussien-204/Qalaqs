import React from "react";
import ConfirmationForm from "@/components/ConfirmationForm";
import useMutation from "@/hooks/useMutation";
import { useQueryClient } from "@tanstack/react-query";
import { ICarRental } from "../../interfaces";
import { apiDeleteCarRentalListing } from "../../services/carRentalService";

// Remove import for IModalComponentProps, use global type
declare type IModalComponentProps = {
  type: IModals | undefined;
  isOpen: boolean;
  show: (type: IModals, data?: unknown) => void;
  hide: () => void;
  data: unknown;
};

const DeleteCarRentalForm: React.FunctionComponent<IModalComponentProps> = ({ data, hide }) => {
  const carRental = data as ICarRental;
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: apiDeleteCarRentalListing,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(carRental.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["admin-get-car-rental-listings"] });
        hide();
      },
    });
  };

  return (
    <form noValidate name="delete-car-rental-form" id="delete-car-rental-form" onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message={`Are you sure you want to delete the car rental listing for ${carRental.make_name} ${carRental.model_name} ${carRental.year}?`}
      />
    </form>
  );
};

export default DeleteCarRentalForm; 