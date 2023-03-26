import { HeaderSection } from './components';
import { Summary } from '../../components';
import { awardData, educationData, experienceData } from '../../data/about';

// const DynamicTechStack = dynamic(() => import('./components/TechStack'), {
//   ssr: false,
//   suspense: true,
// });

const AboutMePage = () => {
  return (
    <>
      <div className="flex flex-col w-full pb-12">
        <div className="w-full h-auto py-[50px]">
          <HeaderSection />
        </div>
        <section className="mx-auto w-fit">
          <h2 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            TECH STACK
          </h2>
        </section>
        <section className="mx-auto w-fit">
          <h2 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            EDUCATION
          </h2>
          <div className="my-[16px] mx-[50px]">
            {educationData.map((education, idx) => {
              const { title, date } = education;
              return <Summary key={idx} title={title} date={date} />;
            })}
          </div>
        </section>
        <section className="mx-auto w-fit">
          <h2 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            AWARDS
          </h2>
          <div className="my-[16px] mx-[50px]">
            {awardData.map((award, idx) => {
              const { title, description, award: awardName, date } = award;
              return (
                <Summary
                  key={idx}
                  title={title}
                  description={description}
                  award={awardName}
                  date={date}
                />
              );
            })}
          </div>
        </section>
        <section className="mx-auto w-fit">
          <h2 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            EXPERIENCE
          </h2>
          <div className="my-[16px] mx-[50px]">
            {experienceData.map((experience, idx) => {
              const { title, date } = experience;
              return <Summary key={idx} title={title} date={date} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMePage;
