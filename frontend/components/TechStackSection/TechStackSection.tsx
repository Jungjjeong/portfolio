import { techStackData } from '../../data/about';
import Image from 'next/image';

const TechStackSection = () => {
  return (
    <div className="my-[5px] md:my-[16px]">
      {techStackData.map((techStack, idx) => {
        const { type, data } = techStack;
        return (
          <div key={idx}>
            {/* <h1 className="my-[5px] font-bold">{type}</h1> */}
            <div className="flex flex-wrap gap-2 items-center md:justify-center">
              {data.map((techData, techIdx) => {
                const { title, photo } = techData;
                return (
                  <div
                    key={techIdx}
                    className="my-[10px] relative rounded-full border border-gray-5 w-14 md:w-16 h-14 md:h-16 p-[50x] border-box overflow-hidden hover:scale-110 transition-all duration-75"
                  >
                    <div
                      className="opacity-0 hover:opacity-100 absolute top-0 left-0 bg-black/50 z-10 w-full h-full flex items-center justify-center text-sxm text-gray text-center"
                      dangerouslySetInnerHTML={{
                        __html: title,
                      }}
                    />
                    <Image
                      src={photo}
                      alt={title}
                      className="max-h-full object-contain"
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
