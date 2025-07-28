import TransitionPage from "@/components/TransitionPage";
import usePageTitle from "@/hooks/usePageTitle";
import ModalProvider from "@/providers/ModalProvider";
import Head from "../components/carsales/Head";
// import CarRentalList from "../components/carrentals/CarRentalList";
import useApiUrlFilter from "@/hooks/useApiUrlFilter";
import useQuery from "@/hooks/useQuery";
// import { getAllCarRentalListings } from "../services/carRentalService";
import CarSaleList from "../components/carsales/CarSaleList";
import { getAllCarSaleListings } from "../services/carSaleService";
import Modal from "@/components/Modal";
import ViewCarSaleDetails from "../components/carsales/ViewCarSaleDetails";
import EditCarSaleForm from "../components/carsales/EditCarSaleForm";
import DeleteCarSaleForm from "../components/carsales/DeleteCarSaleForm";
import AddCarSaleForm from "../components/carsales/AddCarSaleForm";
import RenewCarSaleForm from "../components/carsales/RenewCarSaleForm";

export const Component = () => {
  usePageTitle("Cars Sales");
  const {
    pageSearchParams: page,
    searchSearchParams: search,
    limitSearchParams: limit,
  } = useApiUrlFilter();

  const { data, isLoading } = useQuery({
    queryFn: () => getAllCarSaleListings({ page, search, limit }),
    queryKey: ["admin-get-car-sale-listings", page, search, limit],
  });

  const totalPages = 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <CarSaleList
          data={data?.data || []}
          isLoading={isLoading}
          totalPages={totalPages}
        />

        <Modal
          view={ViewCarSaleDetails}
          renew={RenewCarSaleForm}
          delete={DeleteCarSaleForm}
        />
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "CarsPage";
