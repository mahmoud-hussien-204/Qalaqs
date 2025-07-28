import ModalHeader from "@/components/ModalHeader";
import { IAutoPart } from "../../interfaces"
import ModalBody from "@/components/ModalBody";
import Status from "@/components/Status";

function ViewAutoPartDetails({ data, hide }: IModalComponentProps) {
    const autopart = data as IAutoPart;
    return (
        <>
            <ModalHeader title="Spare Parts Details" />
            <ModalBody>
                <div className="space-y-3">
                    <span className='grid grid-cols-[auto_3fr] gap-3 [&>p:empty]:hidden'>
                        
                        <h6 className='font-semibold'>Name:</h6>
                        <p className=''>{autopart.part_name}</p>

                        <h6 className='font-semibold'>Condition:</h6>
                        <p className=''>{autopart.part_condition}</p>
                        
                        <h6 className='font-semibold'>Part Make:</h6>
                        <p className=''>{autopart.part_make}</p>
                        
                        <h6 className='font-semibold'>Part Model:</h6>
                        <p className=''>{autopart.part_model.toString()}</p>
                        
                        <h6 className='font-semibold'>Car Status:</h6>
                        <p className=''>
                            <Status status={autopart.status} />
                        </p>
                    </span>
                </div>
            </ModalBody>

        </>
    )
}

export default ViewAutoPartDetails