import { HeaderSection } from './components';
import { Summary, Tag } from '../../components';
import {
  awardData,
  certificateData,
  educationData,
  experienceData,
  publishingData,
  techStackData,
  workExperienceData,
} from '../../data/about';

const AboutMePage = () => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[750px] mx-auto pb-12 gap-[50px] my-[50px]">
        <div className="w-full h-auto py-[50px]">
          <HeaderSection />
        </div>
        {/* 기술 스택 */}
        <section className="mx-auto w-full">
          <h1 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            TECH STACK
          </h1>
          <div className="my-[16px] mx-[50px] flex flex-col gap-[10px]">
            {techStackData.map((tech, idx) => {
              const { type, data } = tech;

              return (
                <div key={`${idx}-${tech}`} className="w-full">
                  <h3 className="font-bold mb-[6px]">{type}</h3>
                  <div className="flex gap-[6px] w-full">
                    {data.map((name, idx) => (
                      <Tag key={idx} tagName={name} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 업무 경력 */}
        <section className="mx-auto w-fit">
          <h1 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            WORK EXPERIENCE
          </h1>
          <div className="my-[16px] mx-[50px]">
            {workExperienceData.map((workEx, idx) => {
              const { title, description, date } = workEx;
              return (
                <Summary
                  key={idx}
                  title={title}
                  description={description}
                  date={date}
                />
              );
            })}
          </div>
        </section>

        {/* 기타 교육 (+학력) */}
        <section className="mx-auto w-fit">
          <h1 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            EDUCATION
          </h1>
          <div className="my-[16px] mx-[50px]">
            {educationData.map((education, idx) => {
              const { title, date } = education;
              return <Summary key={idx} title={title} date={date} />;
            })}
          </div>
        </section>

        {/* 수상 기록 */}
        <section className="mx-auto w-fit">
          <h1 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            AWARDS
          </h1>
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

        {/* 자격증 */}
        <section className="mx-auto w-fit">
          <h1 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            CERTIFICATE
          </h1>
          <div className="my-[16px] mx-[50px]">
            {certificateData.map((certificate, idx) => {
              const { title, date } = certificate;
              return <Summary key={idx} title={title} date={date} />;
            })}
          </div>
        </section>

        {/* 기타 경험 */}
        <section className="mx-auto w-fit">
          <h1 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            EXPERIENCE
          </h1>
          <div className="my-[16px] mx-[50px]">
            {experienceData.map((experience, idx) => {
              const { title, date } = experience;
              return <Summary key={idx} title={title} date={date} />;
            })}
          </div>
        </section>

        {/* 출판 기록 */}
        <section className="mx-auto w-fit">
          <h1 className="mx-auto w-fit tracking-[3px] text-main font-bold">
            PUBLISHING
          </h1>
          <div className="my-[16px] mx-[50px]">
            {publishingData.map((published, idx) => {
              const { title, description, award: uID, date } = published;
              return (
                <Summary
                  key={idx}
                  title={title}
                  description={description}
                  award={uID}
                  date={date}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMePage;
