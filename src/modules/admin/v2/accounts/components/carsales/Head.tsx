import Button from "@/components/Button";

import IconPlus from "@/components/icons/IconPlus";

import PageFilterSelect from "@/components/PageFilterSelect";

import Search from "@/components/Search";

import {EnumModals} from "@/enums";

import useModal from "@/hooks/useModal";


const Head = () => {
  const {show} = useModal();

  return (
    <div className='flex flex-wrap items-center justify-between gap-1.25rem'>
      <div className='flex items-center gap-1.5rem'>
        <div className='w-full max-w-full sm:w-[300px]'>
          <Search placeholder='Search in Car Sales' />
        </div>
        {/* <PageFilterSelect options={} /> */}
      </div>
      <Button type='button' onClick={() => show(EnumModals.add)} className='min-w-[200px]'>
        <IconPlus />
        Add new Car Sale
      </Button>
    </div>
  );
};

export default Head;
