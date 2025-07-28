import ModalHeader from "@/components/ModalHeader";
import { IAutoShop } from "../../interfaces"
import ModalFooter from "@/components/ModalFooter";
import Button from "@/components/Button";
import ModalBody from "@/components/ModalBody";
import Status from "@/components/Status";

function ViewAutoShopDetails({ data, hide }: IModalComponentProps) {
    var autoshop = data as IAutoShop;
    return (
        <>
            <ModalHeader title="Business Details" />
            <ModalBody>
                <div className="space-y-3">
                    <span className='grid grid-cols-[auto_3fr] gap-3 [&>p:empty]:hidden'>
                        <h6 className='font-semibold'>Business Name:</h6>
                        <p className=''>{autoshop.business_name}</p>

                        <h6 className='font-semibold'>Business Description:</h6>
                        <p className=''>{autoshop.business_description}</p>

                        <h6 className='font-semibold'>Business Mobile:</h6>
                        <p className=''>{autoshop.business_phone}</p>

                        <h6 className='font-semibold'>Business Whatsapp:</h6>
                        <p className=''>{autoshop.business_whatsapp}</p>

                        <h6 className='font-semibold'>Business Address:</h6>
                        <p className=''>{autoshop.business_address}</p>

                        <h6 className='font-semibold'>Business City:</h6>
                        <p className=''>{autoshop.business_city}</p>
                        
                        <h6 className='font-semibold'>Car Status:</h6>
                        <p className=''>
                            <Status status={autoshop.status} />
                        </p>

                    </span>
                </div>
            </ModalBody>
            <ModalFooter className='border-t pt-3'>
                <Button
                    type='button'
                    className='btn-destroy ms-auto max-w-[200px] flex-1 text-white hover:bg-transparent hover:text-base-content'
                    onClick={hide}
                >
                    Close
                </Button>
            </ModalFooter>
        </>
    )
}

export default ViewAutoShopDetails