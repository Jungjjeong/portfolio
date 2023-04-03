import {
  gabatshu,
  jungstion,
  linkbook,
  linkbook_1,
  linkbook_10,
  linkbook_11,
  linkbook_2,
  linkbook_3,
  linkbook_4,
  linkbook_5,
  linkbook_6,
  linkbook_7,
  linkbook_8,
  linkbook_9,
  movie_search,
} from '../assets';
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
    devStackList: ['TypeScript', 'React.js', 'Next.js', 'Axios', 'Emotion'],
    imageList: [
      linkbook_1,
      linkbook_2,
      linkbook_3,
      linkbook_4,
      linkbook_5,
      linkbook_6,
      linkbook_7,
      linkbook_8,
      linkbook_9,
      linkbook_10,
      linkbook_11,
    ],
    linkList: [
      {
        title: 'Linkbook 서비스 링크',
        link: 'https://linkbook.tk/',
      },
      {
        title: 'Linkbook 프로젝트 회고록(개인 블로그)',
        link: 'https://jungjjeong.github.io/devcourse/project/retrospective/LinkBook/',
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
      'Storybook',
      'Axios',
    ],
    linkList: [
      {
        title: '가봤슈 서비스 링크',
        link: 'https://www.gabatshu.xyz/',
      },
      {
        title: 'Github',
        link: 'https://github.com/Jungjjeong/FEDC2_GBS_Hwarang',
      },
    ],
    contentList: [
      {
        title: '🚩 프로젝트 소개',
        content: [
          {
            contentTitle: '1️⃣ 여행 장소 추천 서비스',
            contentDescription:
              '여행 계획 짜기 힘드시죠? <br>해당 지역에 먼저 방문해본 여러 가봤슈 사용자들에게 물어보세요!',
          },
          {
            contentTitle: ' 2️⃣ 여행 일정 공유 서비스',
            contentDescription:
              '여행 장소와 더불어 여행지 방문 순서를 여러 사용자에게 공유합니다. <br>처음 방문하는 지역도 마치 가 본 것처럼, 자신에게 적합한 일정을 손쉽게 계획해 보세요!',
          },
        ],
      },
      {
        title: '📚 사용 기술',
        content: [
          {
            contentTitle: '1️⃣ Web',
            contentDescription: [
              '<div>▪️ JavaScript, React.js</div>',
              '<div>▪️ Recoil, ContextAPI, React-hook-form, React-router-dom, Axios</div>',
              '<div>▪️ Storybook, Emotion</div>',
              '<div>▪️ Docker, Nginx, Jenkins</div>',
              '<div>▪️ Eslint, Prettier, Git, Github, Figma</div>',
            ],
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
              '<strong>▪️  Branch Flow</strong><img src="https://user-images.githubusercontent.com/72294509/175350390-7bdfff86-f5d5-4eec-97f3-d291c8021389.png" alt="branch flow" />',
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
            contentTitle: '개발 화라리',
            contentDescription:
              '<ul><li>▪️ 진연주</li><li>▪️ 신승연</li><li>▪️ 유승범</li><li>▪️ 유용상</li><li>▪️ 정지영</li></ul>',
          },
        ],
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
        title: '지영화검색 서비스 링크',
        link: 'https://musical-stroopwafel-c0b8ad.netlify.app/',
      },
      {
        title: '지영화검색 프로젝트 회고록 (개인 블로그 링크)',
        link: 'https://jungjjeong.github.io/devcourse/project/retrospective/movieSearch/',
      },
      {
        title: 'Github',
        link: 'https://github.com/Jungjjeong/Movie-search-site',
      },
    ],
    contentList: [
      {
        title: '👉🏻 프로젝트 소개',
        content: [
          {
            contentTitle: '',
            contentDescription:
              'OMDB 영화 검색 API를 사용하여 만든 영화 검색 사이트입니다.',
          },
        ],
      },
      {
        title: '👉🏻 구현 사항',
        content: [
          {
            contentTitle: '',
            contentDescription: [
              '1. OMDB 영화 검색 API 활용',
              '2. API 요청에 따른 로딩 처리',
              '3. 페이지별로 최적화된 이미지를 렌더링하여 렌더링 성능 개선',
            ],
          },
        ],
      },
      {
        title: '🤼‍♀️ 팀 소개',
        content: [
          {
            contentTitle: '개인 프로젝트',
            contentDescription: '▪️ 정지영',
          },
        ],
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
        title: '노션 클로닝 서비스 링크',
        link: 'https://notion-cloning-5kqkc79gh-jungjjeong.vercel.app/',
      },
      {
        title: '노션 클로닝 프로젝트 회고록 (개인 블로그 링크)',
        link: 'https://jungjjeong.github.io/devcourse/project/retrospective/notionCloning/',
      },
      {
        title: 'Github',
        link: 'https://github.com/Jungjjeong/Notion-cloning-Jungsion',
      },
    ],
    contentList: [
      {
        title: '👉🏻 프로젝트 소개',
        content: [
          {
            contentTitle: '',
            contentDescription:
              'vanillaJS를 사용해 만든 노션 클론 사이트 입니다.',
          },
        ],
      },
      {
        title: '👉🏻 구현 사항',
        content: [
          {
            contentTitle: '기능 구현',
            contentDescription: [
              '- 디바운싱 사용한 Document 업데이트',
              '- localStorage를 사용하여 임시 저장 기능 구현',
              '- Markdown Preview 기능 구현',
              '- HistoryAPI, FetchAPI 사용 라우팅 처리',
            ],
          },
          {
            contentTitle: '추가 구현',
            contentDescription: [
              '- 독립적인 컴포넌트 지향, 컴포넌트의 재사용성 고려하여 세분화',
              '- 데이터 흐름 App -> 각 페이지 -> 페이지에서 사용하는 컴포넌트 (단방향)',
              '- 각 컴포넌트의 데이터 타입과 new 키워드 Validation 체크',
            ],
          },
        ],
      },
      {
        title: '🤼‍♀️ 팀 소개',
        content: [
          {
            contentTitle: '개인 프로젝트',
            contentDescription: '▪️ 정지영',
          },
        ],
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
        title: 'Github',
        link: 'https://github.com/Jungjjeong/2021-2-DietTherapyChatbot',
      },
    ],
    contentList: [
      {
        title: '👉🏻 프로젝트 소개',
        content: [
          {
            contentTitle: '',
            contentDescription:
              '용종 환자 식이 치료를 위한 식단 입력 및 솔루션 제공 Chatbot 개발',
          },
        ],
      },
      {
        title: '📁 프로젝트 구조',
        content: [
          {
            contentTitle: '',
            contentDescription:
              '<img src="https://user-images.githubusercontent.com/72294509/154957567-acfb8f5b-e9da-4348-97fe-0d3c33b38e2f.png" alt="project architecture" />',
          },
        ],
      },
      {
        title: '👉🏻 구현 사항',
        content: [
          {
            contentTitle: '기능 구현',
            contentDescription: [
              '- 용종 환자의 첫 병원 내원 시, 생활 식습관 및 기본 정보 조사 기능',
              '- 1년 생활 식습관 기준 솔루션 제공 기능',
              '- 용종 환자의 매 식단 추적 및 솔루션 제공 기능',
              '- 환자별 생활 식습관 저장 및 엑셀 출력 기능',
            ],
          },
          {
            contentTitle: '추가 구현',
            contentDescription: [
              '- 카카오톡 플러스 친구 + 챗봇 오픈빌더 기능 + Flask 서버 + MongoDB 연동',
            ],
          },
        ],
      },
      {
        title: '🤼‍♀️ 팀 소개',
        content: [
          {
            contentTitle:
              '동국대학교 소프트웨어 / 서울대학교 식품영양학 협업 프로젝트',
            contentDescription: [
              '- 동국대학교 소프트웨어 연구원 정지영',
              '- 서울대학교 식품영양학 연구실',
              '- 동국대학교(경주) 의과대학',
            ],
          },
        ],
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
        title: 'Github',
        link: 'https://github.com/Jungjjeong/2020-2-ESCD-RUStudent',
      },
    ],
    contentList: [
      {
        title: '👉🏻 프로젝트 소개',
        content: [
          {
            contentTitle: '',
            contentDescription: [
              '- 유학생의 학내 식당, 카페에서의 간편 주문을 위한 Wechat Miniprogram 개발',
              '- 자리에서 결제가 가능하도록 Wechat pay 연동',
            ],
          },
        ],
      },
      {
        title: '👉🏻 구현 사항',
        content: [
          {
            contentTitle: '',
            contentDescription: [
              '- Wechat Miniprogram developer tools를 사용한 "동급식" 어플리케이션 프론트엔드 개발',
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
              '<img src="https://user-images.githubusercontent.com/72294509/136492614-63b6548f-3370-4142-b461-c8c5e8f6e784.JPG" alt="project architecture" />',
          },
        ],
      },
      {
        title: '🤼‍♀️ 팀 소개',
        content: [
          {
            contentTitle: 'RUStudent?',
            contentDescription:
              '<ul><li>▪️ 정지영</li><li>▪️ 우승제</li><li>▪️ 서예현</li><li>▪️ 황채환</li><li>▪️ 배성규</li></ul>',
          },
        ],
      },
    ],
  },
];
