import useModal from "@/hooks/useModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IEditPackageForm } from "../interfaces";
import * as Yup from "yup";
import useMutation from "@/hooks/useMutation";
import { apiUpdatePackage } from "../services";
import { useQueryClient } from "@tanstack/react-query";

export const schema: Yup.ObjectSchema<IEditPackageForm> = Yup.object().shape({
  id: Yup.string().required(),
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  currency: Yup.string().required("Currency is required"),
  price: Yup.number().typeError("Price must be a number").required("Price is required"),
  validity: Yup.number().typeError("Validity must be a number").required("Validity is required"),
});

const useEditPackageForm = (defaultValues: IEditPackageForm) => {
  const { hide } = useModal();
  const form = useForm<IEditPackageForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues,
  });
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: apiUpdatePackage,
    mutationKey: ["admin-update-package"],
  });
  const handleSubmit = form.handleSubmit((values: IEditPackageForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["admin-get-packages"] });
        hide();
      },
    });
  });
  return { form, handleSubmit, isPending };
};

export default useEditPackageForm; 