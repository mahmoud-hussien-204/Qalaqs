import usePageTitle from "@/hooks/usePageTitle";
import { useQuery } from "@tanstack/react-query";
import { apiGetPackages } from "../services";
import TransitionPage from "@/components/TransitionPage";
import Head from "../components/Head";
import ModalProvider from "@/providers/ModalProvider";

import {
  TableBoxedLayoutActionButtonDelete,
  TableBoxedLayoutActionButtonEdit,
  TableBoxedLayoutActionButtonView,
  TableBoxedLayoutActions,
  TableBoxedLayoutContainer,
  TableBoxedLayoutSkeleton,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";
import Box from "@/components/Box";
import dayjs from "dayjs";
import DataNotFound from "@/components/DataNotFound";
import PageLimit from "@/components/PageLimit";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import CreatePackageForm from "../components/CreatePackageForm";
import DeletePackageForm from "../components/DeletePackageForm";
import ViewPackageDetails from "../components/ViewPackageDetails";
import EditPackageForm from "../components/EditPackageForm";

export const Component = () => {
  usePageTitle("Packages");

  const {data, isLoading} = useQuery({
    queryFn: apiGetPackages,
    queryKey: ["admin-get-packages"],
  });

  const packagesList = data?.data || [];

  const totalPages = 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <Box>
            <TableBoxedLayoutContainer>
              <TableBoxedLayoutTHead>
                <TableBoxedLayoutTR>
                  <TableBoxedLayoutTH>Name</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Description</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Category</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Price</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Validity</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Updated at</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
                </TableBoxedLayoutTR>
              </TableBoxedLayoutTHead>

              <TableBoxedLayoutTBody>
                {isLoading ? (
                  Array.from({length: 3}).map((_, index) => (
                    <TableBoxedLayoutTR key={index}>
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                    </TableBoxedLayoutTR>
                  ))
                ) : packagesList.length > 0 ? (
                  packagesList.map((item) => (
                    <TableBoxedLayoutTR key={item.id}>
                      <TableBoxedLayoutTD>{item.name}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.description}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.category}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.price} {item.currency}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.validity}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.updated_at).format("MMMM D, YYYY h:mm A")}
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <TableBoxedLayoutActions>
                          <TableBoxedLayoutActionButtonView data={item} />
                          <TableBoxedLayoutActionButtonEdit data={item} />
                          <TableBoxedLayoutActionButtonDelete data={item} />
                        </TableBoxedLayoutActions>
                      </TableBoxedLayoutTD>
                    </TableBoxedLayoutTR>
                  ))
                ) : (
                  <DataNotFound colSpan={6} />
                )}
              </TableBoxedLayoutTBody>
            </TableBoxedLayoutContainer>

            <div className='mt-2rem flex items-center justify-between'>
              <PageLimit />
              <Pagination totalPages={totalPages} />
            </div>
          </Box>
        </div>
      </TransitionPage>
      <Modal add={CreatePackageForm} edit={EditPackageForm} view={ViewPackageDetails}  delete={DeletePackageForm} />
    </ModalProvider>
  );
};

Component.displayName = "PackagePage";