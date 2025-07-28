import ConfirmationForm from "@/components/ConfirmationForm";
import { IAutoPart } from "../../interfaces";
import { useQueryClient } from "@tanstack/react-query";
import useMutation from "@/hooks/useMutation";
import { apiDeleteAutoPartListing } from "../../services/autoPartsService";
// @ts-ignore
// type IModalComponentProps = import("@/interfaces.d").IModalComponentProps;
type IModalComponentProps = import("@/interfaces.d").IModalComponentProps;

const DeleteAutoPartForm: React.FunctionComponent<IModalComponentProps> = ({ data, hide }) => {
  const autoPart = data as IAutoPart;
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: apiDeleteAutoPartListing,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(autoPart.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["admin-get-spare-parts-listings"] });
        hide();
      },
    });
  };

  return (
    <form noValidate name="delete-auto-part-form" id="delete-auto-part-form" onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message={`Are you sure you want to delete the spare part: ${autoPart.part_name}?`}
      />
    </form>
  );
};

export default DeleteAutoPartForm; 