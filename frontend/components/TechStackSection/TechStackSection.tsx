import Image from 'next/image';

import { techStackData } from '../../data/about';

const TechStackSection = () => {
  return (
    <div className="my-[5px] md:my-[16px]">
      {techStackData.map((techStack, idx) => {
        const { type, data } = techStack;
        return (
          <div key={idx} className="mb-[15px] flex flex-col gap-[5px]">
            <h1 className="my-[5px] w-fit font-medium md:mx-auto">{type}</h1>
            <div className="flex flex-wrap items-center gap-2 md:justify-center">
              {data.map((techData, techIdx) => {
                const { title, photo } = techData;
                return (
                  <div
                    key={techIdx}
                    className="border-box relative size-14 cursor-pointer bg-white p-[50x] transition-all duration-75 hover:z-10 hover:scale-110 dark:bg-dark md:size-16"
                  >
                    <div
                      className="absolute left-0 top-0 z-10 flex size-full items-center justify-center bg-gray/75 text-center text-sxm font-semibold opacity-0 hover:opacity-100 dark:bg-dark/75"
                      dangerouslySetInnerHTML={{
                        __html: title,
                      }}
                    />
                    <Image
                      src={photo}
                      alt={title}
                      className="max-h-full rounded-full border border-gray-5 object-contain dark:border-dark-1 dark:bg-dark-2"
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
