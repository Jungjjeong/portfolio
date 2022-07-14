import { Summary } from '../../../../components';
import SectionWrapper from './EducationSection.style';

const EducationSection = () => {
  return (
    <SectionWrapper>
      <Summary
        title='프로그래머스 데브코스 프론트엔드 2기'
        date='2022.03-2022.08'
      />
      <Summary
        title='SKT와 함께하는 5G and beyond 5G 기술 특강 수료'
        date='2021.01-2021.02'
      />
      <Summary
        title='동국대학교 공과대학 정보통신공학전공'
        date='2017.03-2022.08'
      />
    </SectionWrapper>
  );
};

export default EducationSection;
