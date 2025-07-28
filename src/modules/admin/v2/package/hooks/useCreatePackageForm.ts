import useModal from "@/hooks/useModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ICreatePackageForm } from "../interfaces";
import * as Yup from "yup";
import useMutation from "@/hooks/useMutation";
import { apiCreatePackage } from "../services";
import { useQueryClient } from "@tanstack/react-query";

export const schema: Yup.ObjectSchema<ICreatePackageForm> = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  currency: Yup.string().required("Currency is required"),
  price: Yup.number().typeError("Price must be a number").required("Price is required"),
  validity: Yup.number().typeError("Validity must be a number").required("Validity is required"),
  category: Yup.string().required("Category is required"),
});

const useCreatePackageForm = () => {
  const { hide } = useModal();
  const form = useForm<ICreatePackageForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: apiCreatePackage,
    mutationKey: ["admin-create-package"],
  });
  const handleSubmit = form.handleSubmit((values: ICreatePackageForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["admin-get-packages"] });
        hide();
      },
    });
  });
  return { form, handleSubmit, isPending };
};

export default useCreatePackageForm; 