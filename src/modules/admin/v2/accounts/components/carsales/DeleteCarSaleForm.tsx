import React from "react";
import ConfirmationForm from "@/components/ConfirmationForm";
import useMutation from "@/hooks/useMutation";
import { useQueryClient } from "@tanstack/react-query";
import { ICarSale } from "../../interfaces";
import { apiDeleteCarSaleListing } from "../../services/carSaleService";

// Use the type directly from the relative path
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
// type IModalComponentProps = import("@/interfaces.d").IModalComponentProps;
type IModalComponentProps = import("@/interfaces.d").IModalComponentProps;

const DeleteCarSaleForm: React.FunctionComponent<IModalComponentProps> = ({ data, hide }) => {
  const carSale = data as ICarSale;
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: apiDeleteCarSaleListing,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(carSale.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["admin-get-car-sale-listings"] });
        hide();
      },
    });
  };

  return (
    <form noValidate name="delete-car-sale-form" id="delete-car-sale-form" onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message={`Are you sure you want to delete the car sale listing for ${carSale.make_name} ${carSale.model_name} ${carSale.year}?`}
      />
    </form>
  );
};

export default DeleteCarSaleForm; 