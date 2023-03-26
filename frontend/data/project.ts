import { gabatshu, jungstion, linkbook, movie_search } from '../assets';

export const sideProjectData = [
  {
    id: 1,
    imageSrc: linkbook,
    title: '링북',
    description: '북마크 공유 소셜 서비스',
    period: {
      start: '2022-07',
      end: '2022-08',
    },
    devStackList: ['TypeScript', 'React.js', 'Next.js', 'Emotion', 'Axios'],
  },
  {
    id: 2,
    imageSrc: gabatshu,
    title: '가봤슈',
    description: '국내, 해외 여행 장소 추천 및 여행 일정 공유 서비스',
    period: {
      start: '2022-06',
      end: '2022-06',
    },
    devStackList: [
      'JavaScript',
      'React.js',
      'Next.js',
      'Emotion',
      'Axios',
      'Storybook',
    ],
  },
  {
    id: 3,
    imageSrc: movie_search,
    title: '지영화검색',
    description: '영화 검색 사이트',
    period: {
      start: '2022-05',
      end: '2022-05',
    },
    devStackList: ['JavaScript', 'Vue.js', 'SCSS'],
  },
  {
    id: 4,
    imageSrc: jungstion,
    title: '노션 클로닝 프로젝트',
    description: '노션 클론 개인 프로젝트',
    period: {
      start: '2022-04',
      end: '2022-04',
    },
    devStackList: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 5,
    imageSrc: linkbook,
    title: '용종 환자 식이 치료 ChatBot 개발',
    description: '용종 환자를 위한 식습관 관리/치료 ChatBot 개발',
    period: {
      start: '2021-09',
      end: '2022-02',
    },
    devStackList: ['Python', 'Flask', 'MongoDB', 'Kakao API'],
  },
  {
    id: 6,
    imageSrc: linkbook,
    title: '동급식',
    description: '유학생을 위한 학내 식당/카페 Wechat 결제 미니프로그램',
    period: {
      start: '2020-09',
      end: '2020-12',
    },
    devStackList: ['JavaScript', 'WXML', 'WXSS', 'Node.js', 'MongoDB', 'Flask'],
  },
];
