import Status from "@/components/Status";

import {
  TableBoxedLayoutActionButtonDelete,
  TableBoxedLayoutActionButtonRenew,
  TableBoxedLayoutActionButtonView,
  TableBoxedLayoutActions,
  TableBoxedLayoutContainer,
  TableBoxedLayoutLoading,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import dayjs from "dayjs";

import {IAutoShop } from "../../interfaces";

import DataNotFound from "@/components/DataNotFound";

const AutoShopList = ({
  data,
  totalPages,
  isLoading,
}: {
  data: IAutoShop[];
  totalPages: number;
  isLoading: boolean;
}) => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Business Name</TableBoxedLayoutTH>
            {/* <TableBoxedLayoutTH>Business email</TableBoxedLayoutTH> */}
            <TableBoxedLayoutTH>Phone number</TableBoxedLayoutTH>
            {/* <TableBoxedLayoutTH>Address</TableBoxedLayoutTH> */}
            <TableBoxedLayoutTH>City</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Expires At</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {isLoading ? (
            <TableBoxedLayoutLoading cols={8} rows={10} />
          ) : data.length > 0 ? (
            data.map((item, index) => (
              <TableBoxedLayoutTR key={index}>
                <TableBoxedLayoutTD>{item.business_name}</TableBoxedLayoutTD>
                {/* <TableBoxedLayoutTD>{item.business_email}</TableBoxedLayoutTD> */}
                <TableBoxedLayoutTD>{item.business_phone}</TableBoxedLayoutTD>
                {/* <TableBoxedLayoutTD>{item.business_address}</TableBoxedLayoutTD> */}
                <TableBoxedLayoutTD>{item.business_city}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(item.expires_at).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <Status status={item.status} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD className='relative'>
                  <TableBoxedLayoutActions>
                    <TableBoxedLayoutActionButtonView data={item} />
                    <TableBoxedLayoutActionButtonRenew data={item} />
                    <TableBoxedLayoutActionButtonDelete data={item} />
                  </TableBoxedLayoutActions>
                </TableBoxedLayoutTD>
              </TableBoxedLayoutTR>
            ))
          ) : (
            <DataNotFound colSpan={8} />
          )}
        </TableBoxedLayoutTBody>
      </TableBoxedLayoutContainer>

      <div className='mt-2rem flex items-center justify-between'>
        <PageLimit />
        <Pagination totalPages={totalPages} />
      </div>
    </Box>
  );
};

export default AutoShopList;
