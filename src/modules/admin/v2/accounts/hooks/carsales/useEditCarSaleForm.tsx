import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useMutation from "@/hooks/useMutation";
import { ICarSale, ICarSaleForm } from "../../interfaces";
import { apiUpdateCarSaleListing } from "../../services/carSaleService";
import useModal from "@/hooks/useModal";
import { carSaleSchema } from "../../services/schemas";
import { useQueryClient } from "@tanstack/react-query";



function useEditCarSaleForm() {
  const { data, hide } = useModal();
  const car = data as ICarSale;
  const queryClient = useQueryClient();

  const form = useForm<ICarSaleForm>({
    defaultValues: {
      ...car,
      expires_at: car.expires_at ? new Date(car.expires_at).toISOString().slice(0, 16) : '',
      created_at: car.created_at ? new Date(car.created_at).toISOString() : '',
      updated_at: car.updated_at ? new Date(car.updated_at).toISOString() : '',
    },
    resolver: yupResolver(carSaleSchema as import("yup").ObjectSchema<ICarSaleForm>),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormData) => apiUpdateCarSaleListing(car.id, data),
  });

  const onSubmit = form.handleSubmit((values: ICarSaleForm) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined && value !== null) formData.append(key, value as any);
    });
    mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["admin-get-car-sale-listings"] });
        form.reset();
        hide();
      },
    });
  });

  return { onSubmit, form, isPending };
}

export default useEditCarSaleForm; 