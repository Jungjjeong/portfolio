import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import S from './about.style';
import { HeaderSection } from './components';
import { Summary } from '../../components';
import { awardData, educationData, experienceData } from '../../data/about';

const DynamicTechStack = dynamic(() => import('./components/TechStack'), {
  ssr: false,
  suspense: true,
});

const AboutMePage = () => {
  return (
    <>
      <S.PageWrapper>
        <S.HeaderWrapper>
          <HeaderSection />
        </S.HeaderWrapper>
        <S.SectionWrapper>
          <S.SubTitle>TECH STACK</S.SubTitle>
          <Suspense fallback={`Loading...`}>
            <DynamicTechStack />
          </Suspense>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.SubTitle>EDUCATION</S.SubTitle>
          <S.SectionContentWrapper>
            {educationData.map((education, idx) => {
              const { title, date } = education;
              return <Summary key={idx} title={title} date={date} />;
            })}
          </S.SectionContentWrapper>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.SubTitle>AWARDS</S.SubTitle>
          <S.SectionContentWrapper>
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
          </S.SectionContentWrapper>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.SubTitle>EXPERIENCE</S.SubTitle>
          <S.SectionContentWrapper>
            {experienceData.map((experience, idx) => {
              const { title, date } = experience;
              return <Summary key={idx} title={title} date={date} />;
            })}
          </S.SectionContentWrapper>
        </S.SectionWrapper>
      </S.PageWrapper>
    </>
  );
};

export default AboutMePage;
