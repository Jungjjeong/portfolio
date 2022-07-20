import { Summary } from '../../../../components';
import SectionWrapper from './ExperienceSection.style';

const ExperienceSection = () => {
  return (
    <SectionWrapper>
      <Summary title='컴퓨터 알고리즘 수업 조교' date='2021.09-2021.12' />
      <Summary title='인공지능과 미래 사회 강의 개발' date='2021.09-2021.11' />
      <Summary
        title='Hanssem 온라인 사업부 온라인 개발팀 인턴'
        date='2021.07-2021.08'
      />
      <Summary title='컴퓨터 알고리즘 강의 교안 제작' date='2021.07-2021.09' />
      <Summary title='소프트웨어 공학 강의 교안 제작' date='2021.01-2021.02' />
      <Summary
        title='모바일 소프트웨어 수업 튜터링 진행'
        date='2020.09-2020.12'
      />
      <Summary
        title='모바일 소프트웨어 강의 교안 제작'
        date='2020.07-2020.09'
      />
    </SectionWrapper>
  );
};

export default ExperienceSection;
