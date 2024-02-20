import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

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
    <div className="static block h-full overflow-hidden rounded-[15px] border border-gray-6 bg-white transition duration-[300] hover:translate-y-[-3px] dark:border-dark-2 dark:bg-dark">
      <Link href={`/projects/${id}`}>
        <div className="flex size-full cursor-pointer flex-col">
          <Image
            src={imageSrc}
            alt="project thumbnail"
            width={650}
            height={372}
          />
          <div className="box-border flex size-full flex-col gap-[5px] p-[14px]">
            <h1 className="text-[0.9em] font-semibold dark:text-gray">
              {title}
            </h1>
            {description && <p className="text-sm">{description}</p>}
            <p className="text-sm text-gray-3">
              {period.start}
              {!!period.end && ` ~ ${period.end}`}
            </p>
            {!!devStackList?.length && (
              <div className="my-[3px] flex min-w-0 flex-wrap gap-[4px]">
                {devStackList.map((stack, index) => (
                  <div
                    key={index}
                    className={`m-0 flex h-[15px] items-center rounded-[3px] bg-gray-6 px-[6px] text-sxm dark:bg-dark-2`}
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
