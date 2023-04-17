interface Props {
  title: string;
  date: string;
  description?: string;
  award?: string;
}

const Summary = ({ title, date, description, award }: Props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-[20px] md:items-center w-full h-auto py-[7px]">
        <div className="my-[3px]">
          <p className="md:mb-[5px] font-bold">{title}</p>
          {description && (
            <>
              <p className="mt-[3px] md:my-[5px] text-gray-3 text-sm">
                {description}
              </p>
              <p className="md:my-[5px] text-gray-3 text-sm">{award}</p>
            </>
          )}
        </div>
        <hr className="hidden md:block grow h-[1px] border-1 border-dashed border-gray-3 min-w-[10px]" />
        <p className="w-fit text-gray-3 text-sxm md:text-sm md:text-base whitespace-nowrap">
          {date}
        </p>
      </div>
    </>
  );
};

export default Summary;
