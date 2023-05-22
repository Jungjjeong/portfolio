import { techStackData } from '../../data/about';
import Image from 'next/image';

const TechStackSection = () => {
  return (
    <div className="my-[5px] md:my-[16px]">
      {techStackData.map((techStack, idx) => {
        const { type, data } = techStack;
        return (
          <div
            key={idx}
            className="mb-[10px] mb-[15px] flex flex-col gap-[5px]"
          >
            <h1 className="my-[5px] font-medium w-fit md:mx-auto">{type}</h1>
            <div className="flex flex-wrap gap-2 items-center md:justify-center">
              {data.map((techData, techIdx) => {
                const { title, photo } = techData;
                return (
                  <div
                    key={techIdx}
                    className="relative w-14 md:w-16 h-14 md:h-16 p-[50x] border-box hover:scale-110 hover:z-10 transition-all duration-75 bg-white dark:bg-dark cursor-pointer"
                  >
                    <div
                      className="opacity-0 hover:opacity-100 absolute top-0 left-0 bg-gray/75 dark:bg-dark/75 z-10 w-full h-full flex items-center justify-center text-sxm text-center font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: title,
                      }}
                    />
                    <Image
                      src={photo}
                      alt={title}
                      className="max-h-full object-contain rounded-full border border-gray-5 dark:border-dark-1 dark:bg-dark-2"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechStackSection;
