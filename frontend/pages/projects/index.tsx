import styled from '@emotion/styled';
import Card from '../../components/Card/Card';

const ProjectListPage = () => {
  return (
    <StyledWrapper>
      <StyledCardWrapper>
        <Card
          id={1}
          imageSrc="https://user-images.githubusercontent.com/72294509/179054552-f408f898-0072-499d-b592-96d3afb2808f.png"
          title="링북"
          description="북마크 공유 소셜 서비스"
          period={{ start: '2022-07', end: '2022-08' }}
          devStackList={[
            'TypeScript',
            'React.js',
            'Next.js',
            'Emotion',
            'Axios',
          ]}
        />
        <Card
          id={2}
          imageSrc="https://user-images.githubusercontent.com/72294509/179054552-f408f898-0072-499d-b592-96d3afb2808f.png"
          title="가봤슈"
          description="국내, 해외 여행 장소 추천 및 여행 일정 공유 서비스"
          period={{ start: '2022-06', end: '2022-06' }}
          devStackList={[
            'JavaScript',
            'React.js',
            'Next.js',
            'Emotion',
            'Axios',
            'Storybook',
          ]}
        />
        <Card
          id={3}
          imageSrc="https://user-images.githubusercontent.com/72294509/179054552-f408f898-0072-499d-b592-96d3afb2808f.png"
          title="지영화검색"
          description="영화 검색 사이트"
          period={{ start: '2022-05', end: '2022-05' }}
          devStackList={['JavaScript', 'Vue.js', 'SCSS']}
        />
        <Card
          id={4}
          imageSrc="https://user-images.githubusercontent.com/72294509/179054552-f408f898-0072-499d-b592-96d3afb2808f.png"
          title="노션 클로닝 프로젝트"
          description="노션 클론 개인프로젝트"
          period={{ start: '2022-04', end: '2022-04' }}
          devStackList={['JavaScript', 'HTML', 'CSS']}
        />
        <Card
          id={5}
          imageSrc="https://user-images.githubusercontent.com/72294509/179054552-f408f898-0072-499d-b592-96d3afb2808f.png"
          title="용종 환자 식이 치료 ChatBot 개발"
          description="용종 환자를 위한 식습관 관리/치료 ChatBot 개발"
          period={{ start: '2021-09', end: '2022-02' }}
          devStackList={['Python', 'Flask', 'MongoDB', 'Kakao API']}
        />
        <Card
          id={6}
          imageSrc="https://user-images.githubusercontent.com/72294509/179054552-f408f898-0072-499d-b592-96d3afb2808f.png"
          title="동급식"
          description="유학생을 위한 학내 식당/카페 Wechat 결제 미니프로그램"
          period={{ start: '2020-09', end: '2020-12' }}
          devStackList={[
            'JavaScript',
            'WXML',
            'WXSS',
            'Node.js',
            'MongoDB',
            'Flask',
          ]}
        />
      </StyledCardWrapper>
    </StyledWrapper>
  );
};

export default ProjectListPage;

const StyledWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  border: 1px solid;
`;

// const StyledTitle = styled.h1`
//   font-size: ;
// `

const StyledCardWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 4px;
`;
