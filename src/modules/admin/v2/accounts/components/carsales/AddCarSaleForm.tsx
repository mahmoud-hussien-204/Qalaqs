import {FormProvider} from "react-hook-form";
import AddAndEditCarSaleForm from "./AddAndEditCarSaleForm";
import ModalHeader from "@/components/ModalHeader";
import ModalFooter from "@/components/ModalFooter";
import useAddCarSaleForm from "../../hooks/carsales/useAddCarSaleForm";

function AddCarSaleForm() {
  const {onSubmit, form, isPending} = useAddCarSaleForm();
  return (
    <FormProvider {...form}>
      <form noValidate id='create-car-sale-form' onSubmit={onSubmit}>
        <ModalHeader title='Create Car Sale' />
        <AddAndEditCarSaleForm form={form as any} />
        <ModalFooter title='Create' isLoading={isPending} />
      </form>
    </FormProvider>
  );
}

export default AddCarSaleForm;
