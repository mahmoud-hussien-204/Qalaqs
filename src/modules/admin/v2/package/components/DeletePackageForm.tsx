import ConfirmationForm from "@/components/ConfirmationForm";
import useMutation from "@/hooks/useMutation";
import { useQueryClient } from "@tanstack/react-query";
import { apiDeletePackage } from "../services";
import { IPackage } from "../interfaces";

const DeletePackageForm = ({ data: dataProps, hide }: IModalComponentProps) => {
  const data = dataProps as IPackage;
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: apiDeletePackage,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(data.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["admin-get-packages"] });
        hide();
      },
    });
  };
  return (
    <form
      noValidate
      name='delete-package-form'
      id='delete-package-form'
      onSubmit={handleSubmit}
    >
      <ConfirmationForm
        isLoading={isPending}
        message={`Are you sure you want to delete this ${data.name} package?`}
        subTitle="This action cannot be undone."
      />
    </form>
  );
};

export default DeletePackageForm; 