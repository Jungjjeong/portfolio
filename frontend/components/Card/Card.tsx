import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ICardProps {
  id: number;
  imageSrc: string | StaticImageData;
  title: string;
  description?: string;
  period: {
    start: string;
    end?: string;
  };
  devStackList?: string[];
}

const Card = ({
  id,
  imageSrc,
  title,
  description,
  period,
  devStackList,
}: ICardProps) => {
  return (
    <div className="block border border-gray-6 dark:border-dark-2 rounded-[15px] bg-white dark:bg-dark overflow-hidden transition duration-[300] static h-full hover:translate-y-[-3px]">
      <Link href={`/projects/${id}`}>
        <div className="cursor-pointer w-full flex flex-col h-full">
          <Image
            src={imageSrc}
            alt="project thumbnail"
            width={650}
            height={372}
          />
          <div className="flex flex-col gap-[5px] w-full h-full box-border p-[14px]">
            <h1 className="font-semibold text-[0.9em] dark:text-gray">
              {title}
            </h1>
            {description && <p className="text-sm">{description}</p>}
            <p className="text-sm text-gray-3">
              {period.start}
              {!!period.end && ` ~ ${period.end}`}
            </p>
            {!!devStackList?.length && (
              <div className="flex min-w-0 flex-wrap gap-[4px] my-[3px]">
                {devStackList.map((stack, index) => (
                  <div
                    key={index}
                    className={`flex items-center h-[15px] rounded-[3px] px-[6px] text-sxm bg-gray-6 dark:bg-dark-2 m-0`}
                  >
                    {stack}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
