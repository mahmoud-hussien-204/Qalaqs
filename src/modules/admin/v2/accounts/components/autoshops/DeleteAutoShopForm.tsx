import ConfirmationForm from "@/components/ConfirmationForm";
import useMutation from "@/hooks/useMutation";
import { useQueryClient } from "@tanstack/react-query";
import { apiDeleteAutoShop } from "../../services/autoShopsService";
import { IAutoShop } from "../../interfaces";

// type IModalComponentProps = import("@/interfaces.d").IModalComponentProps;
type IModalComponentProps = {
  type: any;
  isOpen: boolean;
  show: (type: any, data?: unknown) => void;
  hide: () => void;
  data: unknown;
};

const DeleteAutoShopForm = ({ data: dataProps, hide }: IModalComponentProps) => {
  const data = dataProps as IAutoShop;
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: apiDeleteAutoShop,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(data.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["admin-get-all-business-listings"] });
        hide();
      },
    });
  };

  return (
    <form noValidate name="delete-auto-shop-form" id="delete-auto-shop-form" onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message={`Are you sure you want to delete the auto shop: ${data.business_name}?`}
      />
    </form>
  );
};

export default DeleteAutoShopForm; 