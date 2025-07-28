import ModalHeader from "@/components/ModalHeader";
import { ICarRental } from "../../interfaces"
import ModalBody from "@/components/ModalBody";
import Button from "@/components/Button";
import ModalFooter from "@/components/ModalFooter";
import Status from "@/components/Status";
import dayjs from "dayjs";

function ViewCarRentalDetails({ data, hide }: IModalComponentProps) {
  const car = data as ICarRental;

  return (
    <>
      <ModalHeader title="Car Rental Details" />
      <ModalBody>
        <div className="space-y-3">
          {car.images && car.images.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {car.images.map((image, i) => (
                <img key={i} src={image as unknown as string} alt={`car-image-${i}`} className="h-40 w-40 rounded-xl object-cover" />
              ))}
            </div>
          )}
          <div className='grid grid-cols-[auto_3fr] gap-3 [&>p:empty]:hidden'>
            <h6 className='font-semibold'>Vehicle:</h6>
            <p>{car.make_name} {car.model_name} {car.year}</p>

            <h6 className='font-semibold'>Rent Amount:</h6>
            <p>{car.price} AED</p>

            <h6 className='font-semibold'>Rent Type:</h6>
            <p>{car.price_type}</p>

            <h6 className='font-semibold'>Deposit:</h6>
            <p>{car.deposit}</p>

            <h6 className='font-semibold'>Car Body:</h6>
            <p>{car.car_body}</p>

            <h6 className='font-semibold'>Fuel Type:</h6>
            <p>{car.fuel_type}</p>

            <h6 className='font-semibold'>Exterior Color:</h6>
            <p>{car.ext_color}</p>

            <h6 className='font-semibold'>Interior Color:</h6>
            <p>{car.int_color}</p>

            <h6 className='font-semibold'>Total Miles:</h6>
            <p>{car.total_miles} km</p>

            <h6 className='font-semibold'>Transmission:</h6>
            <p>{car.transmission}</p>

            <h6 className='font-semibold'>Doors No:</h6>
            <p>{car.doors_no}</p>

            <h6 className='font-semibold'>Seats:</h6>
            <p>{car.seat_no}</p>

            <h6 className='font-semibold'>Engine Capacity:</h6>
            <p>{car.engine_capacity}</p>

            <h6 className='font-semibold'>Insurance:</h6>
            <p>{car.insurance}</p>

            <h6 className='font-semibold'>Description:</h6>
            <p>{car.description}</p>

            <h6 className='font-semibold'>Features:</h6>
            <p>{car.features && car.features.length > 0 ? car.features.join(", ") : "-"}</p>

            <h6 className='font-semibold'>Address:</h6>
            <p>{car.location}</p>

            <h6 className='font-semibold'>Longitude:</h6>
            <p>{car.longitude}</p>

            <h6 className='font-semibold'>Latitude:</h6>
            <p>{car.latitude}</p>

            <h6 className='font-semibold'>Total Views:</h6>
            <p>{car.total_views}</p>

            <h6 className='font-semibold'>Expires At:</h6>
            <p>{dayjs(car.expires_at).format("MMMM D, YYYY h:mm A")}</p>

            <h6 className='font-semibold'>Created At:</h6>
            <p>{dayjs(car.created_at).format("MMMM D, YYYY h:mm A")}</p>

            <h6 className='font-semibold'>Updated At:</h6>
            <p>{dayjs(car.updated_at).format("MMMM D, YYYY h:mm A")}</p>

            <h6 className='font-semibold'>Car Status:</h6>
            <p><Status status={car.status} /></p>
          </div>
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

export default ViewCarRentalDetails