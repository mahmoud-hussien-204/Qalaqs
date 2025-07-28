import ModalHeader from "@/components/ModalHeader";
import ModalFooter from "@/components/ModalFooter";
import CreateAndEditPackageForm from "./CreateAndEditPackageForm";
import { FormProvider } from "react-hook-form";
import useEditPackageForm from "../hooks/useEditPackageForm";
import type { IEditPackageForm } from "../interfaces";

declare type IModalComponentProps = {
  type: any;
  isOpen: boolean;
  show: (type: any, data?: unknown) => void;
  hide: () => void;
  data: unknown;
};

const EditPackageForm = ({ data, hide }: IModalComponentProps) => {
  const pkg = data as IEditPackageForm;
  const { form, handleSubmit, isPending } = useEditPackageForm(pkg);
  const { isDirty } = form.formState;

  return (
    <FormProvider {...form}>
      <form noValidate name='edit-package-form' id='edit-package-form' onSubmit={handleSubmit}>
        <ModalHeader title='Edit Package' isCloseBtn={true} />
        <CreateAndEditPackageForm form={form} type='edit' />
        <ModalFooter isLoading={isPending} disabled={!isDirty} title='Update Package' />
      </form>
    </FormProvider>
  );
};

export default EditPackageForm; 