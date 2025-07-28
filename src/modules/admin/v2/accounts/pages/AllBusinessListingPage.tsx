import TransitionPage from "@/components/TransitionPage";
import useApiUrlFilter from "@/hooks/useApiUrlFilter";
import usePageTitle from "@/hooks/usePageTitle";
import useQuery from "@/hooks/useQuery";
import ModalProvider from "@/providers/ModalProvider";
import { getAllAutoShopsListings } from "../services/autoShopsService";
import Head from "../components/autoshops/Head";
import AutoShopList from "../components/autoshops/AutoShopList";
import Modal from "@/components/Modal";
import ViewAutoShopDetails from "../components/autoshops/ViewAutoShopDetails";
import DeleteAutoShopForm from "../components/autoshops/DeleteAutoShopForm";
import RenewAutoShopForm from "../components/autoshops/RenewAutoShopForm";

export const Component = () => {
  usePageTitle("All Business Listing");

  const {
    pageSearchParams: page,
    searchSearchParams: search,
    limitSearchParams: limit,
  } = useApiUrlFilter();

  const { data, isLoading } = useQuery({
    queryFn: () => getAllAutoShopsListings({ page, search, limit }),
    queryKey: ["admin-get-all-business-listings", page, search, limit],
  });

  const totalPages = 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <AutoShopList
          data={data?.data || []}
          isLoading={isLoading}
          totalPages={totalPages}
        />
        <Modal
          view={ViewAutoShopDetails}
          renew={RenewAutoShopForm}
          delete={DeleteAutoShopForm}
        />
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "CarsPage";
