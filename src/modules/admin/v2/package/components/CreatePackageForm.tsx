import ModalHeader from "@/components/ModalHeader";
import ModalFooter from "@/components/ModalFooter";
import useCreatePackageForm from "../hooks/useCreatePackageForm";
import CreateAndEditPackageForm from "./CreateAndEditPackageForm";
import {FormProvider} from "react-hook-form";

const CreatePackageForm = () => {
  const {form, handleSubmit, isPending} = useCreatePackageForm();

  return (
    <FormProvider {...form}>
      <form
        noValidate
        name='create-package-form'
        id='create-package-form'
        onSubmit={handleSubmit}
      >
        <ModalHeader title='Create New Package' />
        <CreateAndEditPackageForm form={form} type='create' />
        <ModalFooter isLoading={isPending} title='Create Package' />
      </form>
    </FormProvider>
  );
};

export default CreatePackageForm;
