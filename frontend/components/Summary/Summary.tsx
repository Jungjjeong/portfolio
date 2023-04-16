interface Props {
  title: string;
  date: string;
  description?: string;
  award?: string;
}

const defaultProps = {
  title: 'Title',
  date: '2022.07.15',
};

const Summary = ({ title, date, description, award }: Props) => {
  return (
    <>
      <div className="flex gap-[20px] items-center w-full h-auto py-[5px]">
        <div className="my-[3px]">
          <p className="mb-[5px] font-bold">{title}</p>
          {description && (
            <>
              <p className="my-[5px] text-gray-3 text-sm">{description}</p>
              <p className="my-[5px] text-gray-3 text-sm">{award}</p>
            </>
          )}
        </div>
        <hr className="grow h-[1px] border-1 border-dashed border-gray-3" />
        <p className="text-gray-3 w-fit text-sm md:text-base whitespace-nowrap">
          {date}
        </p>
      </div>
    </>
  );
};

Summary.defaultProps = defaultProps;

export default Summary;
