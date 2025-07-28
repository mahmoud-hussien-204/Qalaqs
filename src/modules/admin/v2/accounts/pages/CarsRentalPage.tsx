import TransitionPage from "@/components/TransitionPage";
import usePageTitle from "@/hooks/usePageTitle";
import ModalProvider from "@/providers/ModalProvider";
import Head from "../components/carrentals/Head";
import useApiUrlFilter from "@/hooks/useApiUrlFilter";
import useQuery from "@/hooks/useQuery";
import CarRentalList from "../components/carrentals/CarRentalList";
import { getAllCarRentalListings } from "../services/carRentalService";
import Modal from "@/components/Modal";
import ViewCarRentalDetails from "../components/carrentals/ViewCarRentalDetails";
import DeleteCarRentalForm from "../components/carrentals/DeleteCarRentalForm";
import RenewCarRentalForm from "../components/carrentals/RenewCarRentalForm";

export const Component = () => {
  usePageTitle("Cars Rental");
  const {
    pageSearchParams: page,
    searchSearchParams: search,
    limitSearchParams: limit,
  } = useApiUrlFilter();

  const { data, isLoading } = useQuery({
    queryFn: () => getAllCarRentalListings({ page, search, limit }),
    queryKey: ["admin-get-car-rental-listings", page, search, limit],
  });

  const totalPages = 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <CarRentalList
          data={data?.data || []}
          isLoading={isLoading}
          totalPages={totalPages}
        />

        <Modal
          view={ViewCarRentalDetails}
          renew={RenewCarRentalForm}
          delete={DeleteCarRentalForm}
        />
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "CarsPage";
