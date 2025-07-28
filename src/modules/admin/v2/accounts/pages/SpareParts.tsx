import TransitionPage from "@/components/TransitionPage";
import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import usePageTitle from "@/hooks/usePageTitle";
import useQuery from "@/hooks/useQuery";

import ModalProvider from "@/providers/ModalProvider";
import { getAllAutoPartsListings } from "../services/autoPartsService";
import Head from "../components/autoparts/Head";
import AutoPartsList from "../components/autoparts/AutoPartsList";
import Modal from "@/components/Modal";
import ViewAutoPartDetails from "../components/autoparts/ViewAutoPartDetails";
import DeleteAutoPartForm from "../components/autoparts/DeleteAutoPartForm";
import RenewAutoPartForm from "../components/autoparts/RenewAutoPartForm";

export const Component = () => {
  usePageTitle("Spare Parts");

  const {
    pageSearchParams: page,
    searchSearchParams: search,
    limitSearchParams: limit,
  } = useApiUrlFilter();

  const { data, isLoading } = useQuery({
    queryFn: () => getAllAutoPartsListings({ page, search, limit }),
    queryKey: ["admin-get-spare-parts-listings", page, search, limit],
  });

  const totalPages = 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <AutoPartsList
          data={data?.data || []}
          isLoading={isLoading}
          totalPages={totalPages}
        />
        <Modal
          view={ViewAutoPartDetails}
          renew={RenewAutoPartForm}
          delete={DeleteAutoPartForm}
        />
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "CarsPage";
