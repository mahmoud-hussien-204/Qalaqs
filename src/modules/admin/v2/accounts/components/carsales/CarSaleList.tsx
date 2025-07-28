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

import {ICarSale} from "../../interfaces";

import DataNotFound from "@/components/DataNotFound";

const CarSaleList = ({
  data,
  totalPages,
  isLoading,
}: {
  data: ICarSale[];
  totalPages: number;
  isLoading: boolean;
}) => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Vehicle</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>
              <div className="flex flex-col">
                <span>Specs</span>
                <span className="text-xs text-gray-500">
                  [Car Type, Car Body, Fuel Type, Ext Color, Total Miles, Transmission]
                </span>
              </div>
            </TableBoxedLayoutTH>
            <TableBoxedLayoutTH>City</TableBoxedLayoutTH>
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
                <TableBoxedLayoutTD>{item.make_name} {item.model_name} {item.year}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.car_type}, {item.car_body}, {item.fuel_type}, {item.ext_color}, {item.total_miles}  km, {item.transmission}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.location}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.price} AED</TableBoxedLayoutTD>
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

export default CarSaleList;
