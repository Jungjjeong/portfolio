import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ICardProps {
  id: number;
  imageSrc: string | StaticImageData;
  title: string;
  description?: string;
  period: {
    start: string;
    end: string;
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
    <div className="block drop-shadow-md rounded-[15px] bg-white overflow-hidden transition duration-[300] static h-full hover:translate-y-[-3px]">
      <Link href={`/projects/${id}`} passHref>
        <div className="cursor-pointer w-full flex flex-col h-full">
          <Image
            src={imageSrc}
            alt="project thumbnail"
            width={700}
            height={700}
          />
          <div className="flex flex-col gap-[5px] w-full h-full box-border p-[14px]">
            <h1 className="font-bold text-[0.9em]">{title}</h1>
            {description && <p className="text-sm">{description}</p>}
            <p className="text-sm">
              {period.start} ~ {period.end}
            </p>
            {!!devStackList?.length && (
              <div className="flex min-w-0 gap-[4px]">
                {devStackList.map((stack, index) => {
                  const bgColor = index % 2 === 0 ? 'bg-main-5' : 'bg-main-6';
                  return (
                    <div
                      key={index}
                      className={`flex items-center h-[15px] rounded-[3px] px-[6px] text-sm ${bgColor} m-0`}
                    >
                      {stack}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
