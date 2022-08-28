import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import S from './about.style';
import {
  HeaderSection,
  EducationSection,
  AwardsSection,
  ExperienceSection,
} from './components';

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
        <S.TechStackWrapper>
          <S.SubHeader>TECH STACK</S.SubHeader>
          <Suspense fallback={`Loading...`}>
            <DynamicTechStack />
          </Suspense>
        </S.TechStackWrapper>
        <S.EducationWrapper>
          <S.SubHeader>EDUCATION</S.SubHeader>
          <EducationSection />
        </S.EducationWrapper>
        <S.AwardsWrapper>
          <S.SubHeader>AWARDS</S.SubHeader>
          <AwardsSection />
        </S.AwardsWrapper>
        <S.ExperienceWrapper>
          <S.SubHeader>EXPERIENCE</S.SubHeader>
          <ExperienceSection />
        </S.ExperienceWrapper>
      </S.PageWrapper>
    </>
  );
};

export default AboutMePage;
