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

import {IAutoPart } from "../../interfaces";

import DataNotFound from "@/components/DataNotFound";

const AutoPartsList = ({
  data,
  totalPages,
  isLoading,
}: {
  data: IAutoPart[];
  totalPages: number;
  isLoading: boolean;
}) => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Make</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Model</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Condition</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Price</TableBoxedLayoutTH>
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
                <TableBoxedLayoutTD>{item.part_name}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.part_make}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.part_model.toString()}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.part_condition}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.part_price}</TableBoxedLayoutTD>
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

export default AutoPartsList;
