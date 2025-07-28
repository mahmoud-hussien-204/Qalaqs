import { FormProvider } from "react-hook-form";
import ModalHeader from "@/components/ModalHeader";
import ModalFooter from "@/components/ModalFooter";
import useEditCarSaleForm from "../../hooks/carsales/useEditCarSaleForm";
import AddAndEditCarSaleForm from "./AddAndEditCarSaleForm";

function EditCarSaleForm() {
  const { onSubmit, form, isPending } = useEditCarSaleForm();
  return (
    <FormProvider {...form}>
      <form noValidate id="edit-car-sale-form" onSubmit={onSubmit}>
        <ModalHeader title="Edit Car Sale" />
        <AddAndEditCarSaleForm form={form} />
        <ModalFooter title="Edit" isLoading={isPending} />
      </form>
    </FormProvider>
  );
}

export default EditCarSaleForm; 