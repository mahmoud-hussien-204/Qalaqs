import {UseFormReturn} from "react-hook-form";

import {ICreatePackageForm, IEditPackageForm} from "../interfaces";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import Label from "@/components/Label";
import ModalBody from "@/components/ModalBody";
import Select from "@/components/Select";

type CreateProps = {
  form: UseFormReturn<ICreatePackageForm>;
  type: "create";
};
type EditProps = {
  form: UseFormReturn<IEditPackageForm>;
  type: "edit";
};
type IProps = CreateProps | EditProps;

const CATEGORY_OPTIONS = [
  { value: "AutoShop", label: "AutoShop" },
  { value: "AutoPart", label: "AutoPart" },
  { value: "CarSale", label: "CarSale" },
  { value: "CarRental", label: "CarRental" },
];

const CreateAndEditPackageForm = (props: IProps) => {
  const { form, type } = props;
  if (type === "create") {
    return (
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='create-package-form-name'>Name</Label>
          <Input
            type='text'
            {...form.register("name")}
            placeholder='Enter Name'
            id='create-package-form-name'
            isError={!!form.formState.errors.name}
          />
          <ErrorMessage>{form.formState.errors.name?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='create-package-form-description'>Description</Label>
          <Input
            type='text'
            {...form.register("description")}
            placeholder='Enter Description'
            id='create-package-form-description'
            isError={!!form.formState.errors.description}
          />
          <ErrorMessage>{form.formState.errors.description?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='create-package-form-currency'>Currency</Label>
          <Input
            type='text'
            {...form.register("currency")}
            placeholder='Enter Currency'
            id='create-package-form-currency'
            isError={!!form.formState.errors.currency}
          />
          <ErrorMessage>{form.formState.errors.currency?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='create-package-form-price'>Price</Label>
          <Input
            type='number'
            {...form.register("price")}
            placeholder='Enter Price'
            id='create-package-form-price'
            isError={!!form.formState.errors.price}
          />
          <ErrorMessage>{form.formState.errors.price?.message}</ErrorMessage>
        </div>
        {type === "create" && (() => {
          const createForm = form as UseFormReturn<ICreatePackageForm>;
          return (
            <div className='mb-1.25rem'>
              <Label htmlFor='create-package-form-category'>Category</Label>
              <Select
                {...createForm.register("category")}
                id='create-package-form-category'
                options={CATEGORY_OPTIONS}
                isError={!!createForm.formState.errors.category}
              />
              <ErrorMessage>{createForm.formState.errors.category?.message}</ErrorMessage>
            </div>
          );
        })()}
        <div className='mb-1.25rem'>
          <Label htmlFor='create-package-form-validity'>Validity</Label>
          <Input
            type='number'
            {...form.register("validity")}
            placeholder='Enter Validity'
            id='create-package-form-validity'
            isError={!!form.formState.errors.validity}
          />
          <ErrorMessage>{form.formState.errors.validity?.message}</ErrorMessage>
        </div>
      </ModalBody>
    );
  } else {
    return (
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='create-package-form-name'>Name</Label>
          <Input
            type='text'
            {...form.register("name")}
            placeholder='Enter Name'
            id='create-package-form-name'
            isError={!!form.formState.errors.name}
          />
          <ErrorMessage>{form.formState.errors.name?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='create-package-form-description'>Description</Label>
          <Input
            type='text'
            {...form.register("description")}
            placeholder='Enter Description'
            id='create-package-form-description'
            isError={!!form.formState.errors.description}
          />
          <ErrorMessage>{form.formState.errors.description?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='create-package-form-currency'>Currency</Label>
          <Input
            type='text'
            {...form.register("currency")}
            placeholder='Enter Currency'
            id='create-package-form-currency'
            isError={!!form.formState.errors.currency}
          />
          <ErrorMessage>{form.formState.errors.currency?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='create-package-form-price'>Price</Label>
          <Input
            type='number'
            {...form.register("price")}
            placeholder='Enter Price'
            id='create-package-form-price'
            isError={!!form.formState.errors.price}
          />
          <ErrorMessage>{form.formState.errors.price?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='create-package-form-validity'>Validity</Label>
          <Input
            type='number'
            {...form.register("validity")}
            placeholder='Enter Validity'
            id='create-package-form-validity'
            isError={!!form.formState.errors.validity}
          />
          <ErrorMessage>{form.formState.errors.validity?.message}</ErrorMessage>
        </div>
      </ModalBody>
    );
  }
};

export default CreateAndEditPackageForm;    