import { techStackData } from '../../data/about';
import Image from 'next/image';

const TechStackSection = () => {
  return (
    <div className="my-[16px]">
      {techStackData.map((techStack, idx) => {
        const { type, data } = techStack;
        return (
          <div key={idx}>
            <h1>{type}</h1>
            <div className="flex flew-wrap gap-[10px] items-center justify-center">
              {data.map((techData, techIdx) => {
                const { title, photo } = techData;
                return (
                  <div
                    key={techIdx}
                    className="relative bg-black/5 rounded-full w-[60px] h-[60px] p-[50x] border-box overflow-hidden"
                  >
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
