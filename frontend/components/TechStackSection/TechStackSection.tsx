import { techStackData } from '../../data/about';

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
                    className="bg-black/5 rounded-full max-w-[60px] max-h-[60px]"
                  >
                    <div>Image Area</div>
                    <div>{photo}</div>
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
