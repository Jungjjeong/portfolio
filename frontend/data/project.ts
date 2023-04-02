import { gabatshu, jungstion, linkbook, movie_search } from '../assets';
import { IProject } from '../types/project';

export const sideProjectData: IProject[] = [
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
    linkList: [
      {
        title: 'Linkbook 서비스 링크',
        link: 'https://linkbook.tk/',
      },
      {
        title: 'Github',
        link: 'https://github.com/Jungjjeong/LinkBook-FE',
      },
    ],
    contentList: [
      {
        title: '🐳 프로젝트 소개',
        content: [
          {
            contentTitle: '1️⃣ 크롬 익스텐션',
            contentDescription:
              '마음에 드는 사이트를 <strong>크롬 익스텐션</strong>으로 내 북마크 폴더에 등록해보세요!',
          },
          {
            contentTitle: ' 2️⃣ 북마크 폴더 등록 서비스',
            contentDescription:
              '여러 북마크를 한번에 관리해보세요.<br/><strong>북마크 여러개를 한 폴더</strong>에 넣어 한 눈에 확인할 수 있어요!',
          },
          {
            contentTitle: ' 3️⃣ 북마크 폴더 공유 서비스',
            contentDescription:
              '나에게 유용했던 북마크 폴더들을 <strong>다른 사용자들에게 공유</strong>해보세요!<br>다른 사용자들이 올린 다양한 북마크 모음 폴더도 구경하고, 마음에 드는 폴더는 <strong>내 폴더 리스트로 스크랩</strong> 할 수 있어요!',
          },
        ],
      },
      {
        title: '🐳 사용 기술',
        content: [
          {
            contentTitle: '1️⃣ Web',
            contentDescription: [
              '<div>▪️ TypeScript, Next.js, React.js</div>',
              '<div>▪️ Recoil, ContextAPI, React-hook-form, Axios</div>',
              '<div>▪️ Storybook, Emotion</div>',
              '<div>▪️ Eslint, Prettier, Git, Github, Figma</div>',
            ],
          },
          {
            contentTitle: ' 2️⃣ Extension',
            contentDescription: [
              '<div>▪️ TypeScript, React.js</div>',
              '<div>▪️ ContextAPI, Axios</div>',
              '<div>▪️ Emotion</div>',
            ],
          },
        ],
      },
      {
        title: '📁 프로젝트 구조',
        content: [
          {
            contentTitle: '',
            contentDescription:
              '<img src="https://user-images.githubusercontent.com/72294509/184610986-1cb2c6b6-01bc-486b-822a-c82b4ffd527f.png" alt="project architecture" />',
          },
        ],
      },
      {
        title: '💻 익스텐션 다운로드',
        content: [
          {
            contentTitle: '',
            contentDescription:
              '<a href="https://chrome.google.com/webstore/detail/%EB%A7%81%EB%B6%81/bplkibfnipjgpmdgjklalkpfeiogepmp?hl=ko"><strong>👉🏻 익스텐션 다운로드 링크</strong></a>',
          },
        ],
      },
      {
        title: '👍 Convention',
        content: [
          {
            contentTitle: '1️⃣ Code Convention',
            contentDescription: '<strong>Airbnb Eslint</strong>를 따릅니다.',
          },
          {
            contentTitle: '2️⃣ Commit Convention',
            contentDescription: [
              '<a href="https://udacity.github.io/git-styleguide/">유다시티의 커밋 메세지 스타일 가이드</a><p>- Commit Type만 영어로 작성합니다.</p><br>',
              '▪️ Feat: 새로운 기능 추가',
              '▪️ Fix: 버그 수정',
              '▪️ Docs: 문서 수정',
              '▪️ Style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우',
              '▪️ Refactor: 코드 리팩토링',
              '▪️ Test: 테스트 코드, 리팩토링 테스트 코드 추가',
              '▪️ Chore: 빌드 업무 수정',
              '▪️ Design: 스타일(CSS) 수정',
            ],
          },
          {
            contentTitle: '3️⃣ Issue / Branch',
            contentDescription: [
              '<strong>▪️  Dev</strong><ul><li>- 작업한 내용들이 최종적으로 합쳐지는 Branch</li><li>- Feature Branch 기능 완성 시, "rebase" 및 "PR"</li></ul>',
              '<strong>▪️  main</strong><p>- 배포를 위한 Branch</p>',
              '<strong>▪️  IssueNum/CommitType/구현 내용</strong><p>- Issue 단위로 브랜치를 생성하고 작업합니다.</p>',
            ],
          },
          {
            contentTitle: '4️⃣ Code Review',
            contentDescription: [
              '- 우선적으로 <strong>기능의 정상 동작 검사</strong>',
              '- 가독성 / 컨벤션',
            ],
          },
        ],
      },
      {
        title: '🤼‍♀️ 팀 소개',
        content: [
          {
            contentTitle: '강력 3팀 프론트엔드',
            contentDescription:
              '<ul><li>▪️ 김동언</li><li>▪️ 민상기</li><li>▪️ 유용상</li><li>▪️ 정지영</li></ul>',
          },
          {
            contentTitle: '강력 3팀 백엔드',
            contentDescription: [
              '<a href="https://github.com/prgrms-web-devcourse/Team-03-LinkBook-BE"><strong>👉🏻 링북 백엔드 레포</strong></a>',
              '<ul><li>▪️ 이창호</li><li>▪️ 이수연</li><li>▪️ 이일환</li><li>▪️ 최연호</li><li>▪️ 김수미</li></ul>',
            ],
          },
        ],
      },
    ],
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
    linkList: [
      {
        title: 'link title',
        link: 'link',
      },
      {
        title: 'link title',
        link: 'link',
      },
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
    linkList: [
      {
        title: 'link title',
        link: 'link',
      },
      {
        title: 'link title',
        link: 'link',
      },
    ],
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
    linkList: [
      {
        title: 'link title',
        link: 'link',
      },
      {
        title: 'link title',
        link: 'link',
      },
    ],
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
    linkList: [
      {
        title: 'link title',
        link: 'link',
      },
      {
        title: 'link title',
        link: 'link',
      },
    ],
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
    linkList: [
      {
        title: 'link title',
        link: 'link',
      },
      {
        title: 'link title',
        link: 'link',
      },
    ],
  },
];
