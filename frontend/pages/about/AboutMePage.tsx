import S from './AboutMePage.style';
import { HeaderSection } from './components';

const AboutMePage = () => {
  return (
    <>
      <S.PageWrapper>
        <S.HeaderWrapper>
          <HeaderSection />
        </S.HeaderWrapper>
        <S.TechStackWrapper>
          <S.SubHeader>TECH STACK</S.SubHeader>
        </S.TechStackWrapper>
        <S.EducationWrapper>
          <S.SubHeader>EDUCATION</S.SubHeader>
        </S.EducationWrapper>
        <S.AwardsWrapper>
          <S.SubHeader>AWARDS</S.SubHeader>
        </S.AwardsWrapper>
        <S.ExperienceWrapper>
          <S.SubHeader>EXPERIENCE</S.SubHeader>
        </S.ExperienceWrapper>
      </S.PageWrapper>
    </>
  );
};

export default AboutMePage;
