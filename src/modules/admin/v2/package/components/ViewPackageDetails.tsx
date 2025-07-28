import ModalBody from "@/components/ModalBody";
import Label from "@/components/Label";
import { IPackage } from "../interfaces";
import dayjs from "dayjs";
import ModalHeader from "@/components/ModalHeader";
// Remove import, use global type
declare type IModalComponentProps = {
  type: any;
  isOpen: boolean;
  show: (type: any, data?: unknown) => void;
  hide: () => void;
  data: unknown;
};

const ViewPackageDetails = ({ data, hide }: IModalComponentProps) => {
  const pkg = data as IPackage;
  return (
    <>
      <ModalHeader title="Package Details" isCloseBtn={true} />
      <ModalBody>
        <div className="mb-1.25rem">
          <Label>Name</Label>
          <div>{pkg.name}</div>
        </div>
        <div className="mb-1.25rem">
          <Label>Description</Label>
          <div>{pkg.description}</div>
        </div>
        <div className="mb-1.25rem">
          <Label>Currency</Label>
          <div>{pkg.currency}</div>
        </div>
        <div className="mb-1.25rem">
          <Label>Price</Label>
          <div>{pkg.price}</div>
        </div>
        <div className="mb-1.25rem">
          <Label>Category</Label>
          <div>{pkg.category}</div>
        </div>
        <div className="mb-1.25rem">
          <Label>Validity</Label>
          <div>{pkg.validity}</div>
        </div>
        <div className="mb-1.25rem">
          <Label>Created At</Label>
          <div>{dayjs(pkg.created_at).format("MMMM D, YYYY h:mm A")}</div>
        </div>
        <div className="mb-1.25rem">
          <Label>Updated At</Label>
          <div>{dayjs(pkg.updated_at).format("MMMM D, YYYY h:mm A")}</div>
        </div>
      </ModalBody>
    </>
  );
};

export default ViewPackageDetails; 