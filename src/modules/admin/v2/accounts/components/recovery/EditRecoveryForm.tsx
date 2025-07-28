import {FormProvider} from "react-hook-form";
import ModalHeader from "@/components/ModalHeader";
import ModalFooter from "@/components/ModalFooter";
import useEditRecoveryForm from "../../hooks/recovery/useEditRecoveryForm";
import AddAndEditRecoveryForm from "./AddAndEditRecoveryForm";

function EditRecoveryForm() {
  const {onSubmit, form, isPending} = useEditRecoveryForm();
  return (
    <FormProvider {...form}>
      <form noValidate id='edit-recovery-form' onSubmit={onSubmit}>
        <ModalHeader title='Edit Service' />
        <AddAndEditRecoveryForm form={form} />
        <ModalFooter title='Edit' isLoading={isPending} />
      </form>
    </FormProvider>
  );
}

export default EditRecoveryForm;
