import { Icon } from "@iconify/react";

export const Loader = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="font-semibold text-[32px] text-foundation-grey-normal dark:text-white md:px-10 px-5 py-6">
        {title}
      </h2>
      <div className="flex justify-center items-center h-[80vh]">
        <Icon
          icon="eos-icons:bubble-loading"
          className="w-20 h-20 text-foundation-primary-normal dark:text-[#1E40AF]"
        />
      </div>
    </div>
  );
};

export default Loader;
