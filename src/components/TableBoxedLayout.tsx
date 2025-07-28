import AppHelper from "@/helpers/appHelper";

import useModal from "@/hooks/useModal";

import {EnumModals} from "@/enums";

import IconEdit from "./icons/IconEdit";

import IconEye from "./icons/IconEye";

import IconTrash from "./icons/IconTrash";

import {Link} from "react-router-dom";
import IconRefresh from "./icons/IconRefresh";

const confirmationModalWidth = "!max-w-[30rem]";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const TableBoxedLayoutContainer = ({children, className}: IProps) => {
  return (
    <div className='min-h-[55dvh] overflow-x-auto overflow-y-hidden'>
      <table className={AppHelper.classes("w-full min-w-min align-middle", className)}>
        {children}
      </table>
    </div>
  );
};

export const TableBoxedLayoutTHead = ({children, className}: IProps) => {
  return <thead className={className}>{children}</thead>;
};

export const TableBoxedLayoutTBody = ({children, className}: IProps) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableBoxedLayoutTR = ({children}: IProps) => {
  return <tr className='only:!bg-transparent odd:bg-base-200'>{children}</tr>;
};

export const TableBoxedLayoutTH = ({children, className}: IProps) => {
  return (
    <th
      className={AppHelper.classes(
        "h-3.5rem whitespace-nowrap px-1rem text-start text-12 font-medium text-neutral-content",
        className
      )}
    >
      {children}
    </th>
  );
};

type TableBoxedLayoutTDProps = IProps &
  React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;

export const TableBoxedLayoutTD = ({children, className, ...props}: TableBoxedLayoutTDProps) => {
  return (
    <td
      className={AppHelper.classes(
        "h-3.5rem whitespace-nowrap px-1rem text-14 text-neutral first:rounded-es-btn first:rounded-ss-btn last:rounded-ee-btn last:rounded-se-btn",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};

export const TableBoxedLayoutSkeleton = (props: Omit<TableBoxedLayoutTDProps, "children">) => {
  return (
    <TableBoxedLayoutTD {...props}>
      <div className='skeleton h-2rem w-full rounded-btn opacity-40'></div>
    </TableBoxedLayoutTD>
  );
};

export const TableBoxedLayoutFlexContent = ({children}: IProps) => {
  return <div className='flex items-center gap-0.5rem'>{children}</div>;
};

export const TableBoxedLayoutActions = ({children}: IProps) => {
  return <div className='flex items-center gap-0.75rem'>{children}</div>;
};

interface ITableBoxedLayoutActionButtonProps {
  title: string;
  modal?: IModals;
  data?: unknown;
  icon: React.ReactNode;
}
export const TableBoxedLayoutActionButton = ({
  title,
  modal,
  data,
  icon,
}: ITableBoxedLayoutActionButtonProps) => {
  const {show, setClassName} = useModal();

  return (
    <div
      className='flex cursor-pointer items-center gap-0.5rem text-12 hover:text-primary'
      onClick={() => {
        show(modal ?? "accept", data);
        if (data && typeof data === "object" && Reflect.has(data, "className")) {
          setClassName((data as {className: string}).className);
        }
      }}
    >
      {icon}
      {title}
    </div>
  );
};

interface IButtonProps {
  data?: unknown;
}

export const TableBoxedLayoutActionButtonEdit = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.edit}
      title='Edit'
      icon={
        <IconEdit
          svgProps={{
            className: "w-0.75rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonRenew = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.renew}
      title='Renew'
      icon={
        <IconRefresh
          svgProps={{
            className: "w-0.75rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonView = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.view}
      title='View'
      icon={
        <IconEye
          svgProps={{
            className: "w-0.75rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonViewLink = ({to}: {to: string}) => {
  return (
    <Link
      to={to}
      className='flex cursor-pointer items-center gap-0.75rem rounded-btn py-0.5rem text-12 transition-all hover:bg-primary hover:ps-0.75rem hover:text-primary-content'
    >
      <IconEye
        svgProps={{
          className: "w-0.75rem",
        }}
      />
      View
    </Link>
  );
};

export const TableBoxedLayoutActionButtonDelete = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.delete}
      title='Delete'
      icon={
        <IconTrash
          svgProps={{
            className: "w-0.75rem",
          }}
        />
      }
      data={{
        className: confirmationModalWidth,
        ...(data as object),
      }}
    />
  );
};

export const TableBoxedLayoutLoading = ({rows = 10, cols = 8}: {rows: number; cols: number}) => {
  return Array.from({length: rows}).map((_, index) => (
    <TableBoxedLayoutTR key={index}>
      {Array.from({length: cols}).map((_, index) => (
        <TableBoxedLayoutSkeleton key={index} />
      ))}
    </TableBoxedLayoutTR>
  ));
};
