import {
  HeaderSection,
  Summary,
  TechStackSection,
  Title,
} from '../../components';
import {
  awardData,
  certificateData,
  educationData,
  experienceData,
  publishingData,
  workExperienceData,
} from '../../data/about';

const AboutMePage = () => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[710px] flex-col gap-20 px-[20px] py-[50px] pb-12">
        <div className="h-auto w-full pb-[20px] pt-[10px] md:pb-[40px] md:pt-[50px]">
          <HeaderSection />
        </div>

        {/* 기술 스택 */}
        <section className="mx-auto w-full">
          <Title text="TECH STACK" />
          <TechStackSection />
        </section>

        {/* 업무 경력 */}
        <section className="mx-auto w-full">
          <Title text="WORK EXPERIENCE" />
          <div className="my-[16px]">
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
        <section className="mx-auto w-full">
          <Title text="EDUCATION" />
          <div className="my-[16px]">
            {educationData.map((education, idx) => {
              const { title, date } = education;
              return <Summary key={idx} title={title} date={date} />;
            })}
          </div>
        </section>

        {/* 수상 기록 */}
        <section className="mx-auto w-full">
          <Title text="AWARDS" />
          <div className="my-[16px]">
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
        <section className="mx-auto w-full">
          <Title text="CERTIFICATE" />
          <div className="my-[16px]">
            {certificateData.map((certificate, idx) => {
              const { title, date } = certificate;
              return <Summary key={idx} title={title} date={date} />;
            })}
          </div>
        </section>

        {/* 기타 경험 */}
        <section className="mx-auto w-full">
          <Title text="EXPERIENCE" />
          <div className="my-[16px]">
            {experienceData.map((experience, idx) => {
              const { title, date } = experience;
              return <Summary key={idx} title={title} date={date} />;
            })}
          </div>
        </section>

        {/* 출판 기록 */}
        <section className="mx-auto w-full">
          <Title text="PUBLISHING" />
          <div className="my-[16px]">
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
