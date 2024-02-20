interface Props {
  title: string;
  date: string;
  description?: string;
  award?: string;
}

const Summary = ({ title, date, description, award }: Props) => {
  return (
    <>
      <div className="flex h-auto w-full flex-col py-[7px] md:flex-row md:items-center md:gap-[20px]">
        <div className="my-[3px]">
          <p className="font-semibold md:mb-[5px]">{title}</p>
          {description && (
            <>
              <p className="mt-[3px] text-sm text-gray-3 md:my-[5px]">
                {description}
              </p>
              <p className="text-sm text-gray-3 md:my-[5px]">{award}</p>
            </>
          )}
        </div>
        <hr className="border-1 hidden h-[1px] min-w-[10px] grow border-dashed border-gray-3 md:block" />
        <p className="w-fit whitespace-nowrap text-sm text-gray-3 lg:text-base">
          {date}
        </p>
      </div>
    </>
  );
};

export default Summary;
