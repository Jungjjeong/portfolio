import {
  praise_up,
  praise_up_0,
  praise_up_1,
  praise_up_2,
  praise_up_3,
  praise_up_4,
  praise_up_5,
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
  gabatshu,
  gabatshu_1,
  gabatshu_10,
  gabatshu_11,
  gabatshu_12,
  gabatshu_2,
  gabatshu_3,
  gabatshu_4,
  gabatshu_5,
  gabatshu_6,
  gabatshu_7,
  gabatshu_8,
  gabatshu_9,
  movie_search,
  movie_search_1,
  movie_search_2,
  movie_search_3,
  movie_search_4,
  movie_search_5,
  jungstion,
  jungstion_1,
  jungstion_2,
  jungstion_3,
  chatbot,
  baechihaebang,
  baechihaebang_1,
  baechihaebang_2,
  baechihaebang_3,
  baechihaebang_4,
  chung,
  wechat,
  present_browser,
  panopticon,
} from '../assets';
import { IProject } from '../types/project';

export const sideProjectData: IProject[] = [
  {
    id: 0,
    imageSrc: praise_up,
    title: 'Praise Up',
    description: '이미지로 소통하는 칭찬 SNS 🔮',
    period: {
      start: '2023-11',
      end: '2024-02',
    },
    devStackList: [
      'TypeScript',
      'React.js',
      'Zustand',
      'Tanstack Query',
      'Axios',
      'Tailwind',
      'SCSS',
      'Framer',
      'Matter.js',
      'Swiper.js',
    ],
    imageList: [
      praise_up_0,
      praise_up_1,
      praise_up_2,
      praise_up_3,
      praise_up_4,
      praise_up_5,
    ],
    linkList: [
      {
        title: '🔮 Praise Up service',
        link: 'https://www.praise-up.app/',
      },
      {
        title: 'Disquiet',
        link: 'https://disquiet.io/product/praise-up',
      },
      {
        title: 'Github',
        link: 'https://github.com/depromeet/praise-up-client',
      },
    ],
    contentList: [
      {
        title: '🔮 프로젝트 소개',
        content: [
          {
            contentTitle: '1️⃣ 키워드 선택 후 칭찬받을 일상 업로드하기',
            contentDescription: '오늘의 키워드를 선택하고 일상을 공유해보세요!',
          },
          {
            contentTitle: '2️⃣ 링크 복사 후 작성한 게시물 공유하기',
            contentDescription:
              '작성된 게시물을 공유하고 칭찬 구슬을 받아보세요!',
          },
          {
            contentTitle: '3️⃣ 다른 사람이 업로드한 게시물에 칭찬 메세지 남기기',
            contentDescription: '친구의 일상에 소중한 칭찬 구슬을 남겨보세요!',
          },
          {
            contentTitle: '4️⃣ 4시간 뒤에 쌓인 칭찬 메세지 확인하기',
            contentDescription:
              '친구들이 보내준 소중한 칭찬 구슬들을 4시간 뒤에 확인할 수 있어요!',
          },
          {
            contentTitle: '5️⃣ 마이페이지에서 나의 칭찬 활동 내역 모아보기',
            contentDescription:
              '마이페이지에서 나의 일상과 칭찬 구슬들을 한눈에 확인할 수 있어요!',
          },
        ],
      },
      {
        title: '🔮 사용 기술',
        content: [
          {
            contentTitle: '💻 Web',
            contentDescription: [
              '<div>▪️ TypeScript, React.js</div>',
              '<div>▪️ Tanstack Query, Zustand</div>',
              '<div>▪️ Tailwind, Sass</div>',
              '<div>▪️ Framer, Matter.js, Swiper.js</div>',
              '<div>▪️ Vite, Pnpm</div>',
            ],
          },
        ],
      },
      {
        title: '🤼‍♀️ 이각세 팀 소개',
        content: [
          {
            contentTitle: '🖥️ Frontend',
            contentDescription:
              '<ul><li>▪️ 김현우</li><li>▪️ 이채민</li><li>▪️ 이현재</li><li>▪️ 정지영</li></ul>',
          },
          {
            contentTitle: '🦾 Backend',
            contentDescription: [
              '<a href="https://github.com/depromeet/praise-up-server"><strong>👉🏻 Praise-up backend repository</strong></a>',
              '<ul><li>▪️ 김정인</li><li>▪️ 김훈섭</li><li>▪️ 윤영</li></ul>',
            ],
          },
          {
            contentTitle: '🎨 Design',
            contentDescription: [
              '<a href="https://www.behance.net/gallery/191497631/praise-up-SNS"><strong>👉🏻 Praise-up behance</strong></a>',
              '<ul><li>▪️ 나태현</li><li>▪️ 신혜원</li><li>▪️ 홍지영</li></ul>',
            ],
          },
        ],
      },
    ],
  },
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
    youtubeList: ['fNj2mF7uA9Y'],
    linkList: [
      {
        title: 'Linkbook 서비스 링크 (서버가 문을 닫았어요 😇)',
        link: 'https://linkbook.tk/',
      },
      {
        title: 'Linkbook 프로젝트 회고록(개인 블로그)',
        link: 'https://blog.haeyum.me/devcourse/project/retrospective/LinkBook/',
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
    imageList: [
      gabatshu_1,
      gabatshu_2,
      gabatshu_3,
      gabatshu_4,
      gabatshu_5,
      gabatshu_6,
      gabatshu_7,
      gabatshu_8,
      gabatshu_9,
      gabatshu_10,
      gabatshu_11,
      gabatshu_12,
    ],
    linkList: [
      {
        title: '가봤슈 서비스 링크 (서버가 문을 닫았어요 😇)',
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
    imageList: [
      movie_search_1,
      movie_search_2,
      movie_search_3,
      movie_search_4,
      movie_search_5,
    ],
    linkList: [
      {
        title: '지영화검색 서비스 링크',
        link: 'https://musical-stroopwafel-c0b8ad.netlify.app/',
      },
      {
        title: '지영화검색 프로젝트 회고록 (개인 블로그 링크)',
        link: 'https://blog.haeyum.me/devcourse/project/retrospective/movieSearch/',
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
    imageList: [jungstion_1, jungstion_2, jungstion_3],
    linkList: [
      {
        title: '노션 클로닝 서비스 링크',
        link: 'https://notion-cloning-5kqkc79gh-jungjjeong.vercel.app/',
      },
      {
        title: '노션 클로닝 프로젝트 회고록 (개인 블로그 링크)',
        link: 'https://blog.haeyum.me/devcourse/project/retrospective/notionCloning/',
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
    imageSrc: chatbot,
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
    imageSrc: wechat,
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

// 수상 프로젝트
export const awardProjectData: IProject[] = [
  {
    id: 7,
    imageSrc: chung,
    title: '청정한 공기',
    description: '실내 공기 상태 분석을 위한 자동화 냉난방 및 환풍 시스템',
    period: {
      start: '2022-01',
      end: '2022-02',
    },
    devStackList: [
      'JavaScript',
      'Vue.js',
      'Node.js',
      'Bootstrap',
      'Express',
      'CORS',
    ],
    // imageList: [chung, chung, chung, chung],
    linkList: [
      {
        title: 'Github',
        link: 'https://github.com/Jungjjeong/Testbed-airQuality-web',
      },
    ],
    contentList: [
      {
        title: '🏆 수상 내역',
        content: [
          {
            contentTitle: '동국대학교 융합교육원 원장상',
            contentDescription: '서비스 구현분야 우수상',
          },
        ],
      },
      {
        title: '📱 프로젝트 소개',
        content: [
          {
            contentTitle: '실시간 공기 질 데이터 수집',
            contentDescription: [
              '- 5초마다 공기질 통합 감지 센서로부터 데이터를 받아와 공기질 데이터 갱신',
              '- 온도, 습도, 이산화탄소, 미세먼지, 초미세먼지 데이터 수집',
            ],
          },
          {
            contentTitle: '환기 필요 시점 알림',
            contentDescription: [
              '- 공기질 데이터의 값에 따라 좋음/보통/나쁨으로 분류하고 이를 각각 초록/노랑/빨강으로 사용자에게 랜딩',
              '- 데이터 처리 기준에 따라 적절한 조치 실시간 알림',
            ],
          },
          {
            contentTitle: '데이터 시각화',
            contentDescription: [
              '- 공기질 데이터 하루 차트 확인',
              '- 공기질 데이터 일주일 차트 확인',
            ],
          },
        ],
      },
      {
        title: '🐳 사용 기술',
        content: [
          {
            contentTitle: '',
            contentDescription: [
              '▪️ JavaScript, Vue.js, Bootstrap',
              '▪️ Node.js, CORS, Express, R/twitter anomaly detection',
            ],
          },
        ],
      },
      {
        title: '💻 시스템 구조',
        content: [
          {
            contentTitle: '',
            contentDescription:
              '<img src="https://user-images.githubusercontent.com/72294509/153754184-2a95601f-294c-4f5b-82cf-b6a79856a19f.png" alt="project architecture" />',
          },
        ],
      },
      {
        title: '👍 Convention',
        content: [
          {
            contentTitle: 'Commit Convention',
            contentDescription: [
              '<a href="https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit?pli=1">Angular JS Git Commit Message Conventions Document</a><p>- Commit Type만 영어로 작성합니다.</p><br>',
              '▪️ feat: 새로운 기능',
              '▪️ fix: 버그 수정',
              '▪️ build: 빌드 관련 파일 수정',
              '▪️ chore: 그 외 자잘한 수정',
              '▪️ ci: CI 관련 설정 수정',
              '▪️ docs: 문서 수정',
              '▪️ style: 코드 스타일 혹은 포맷 등 수정',
              '▪️ refactor: 코드 리팩토링',
              '▪️ test: 테스트 코드 수정',
            ],
          },
        ],
      },
      {
        title: '🤼‍♀️ 팀 소개',
        content: [
          {
            contentTitle: '끼리끼리',
            contentDescription:
              '<ul><li>▪️ 정지영</li><li>▪️ 서예현</li><li>▪️ 우승제</li><li>▪️ 임효빈</li></ul>',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    imageSrc: baechihaebang,
    title: '배치해방',
    description: '가구 3D 뷰어/AR 배치 어플리케이션',
    period: {
      start: '2021-06',
      end: '2022-11',
    },
    devStackList: ['JavaScript', 'Three.js', 'ARKIT', 'ARCORE'],
    youtubeList: ['Uis2hisSzoY', 'b4Uxa4gWZ9M'],
    imageList: [
      baechihaebang_1,
      baechihaebang_2,
      baechihaebang_3,
      baechihaebang_4,
    ],
    linkList: [
      {
        title: 'Github',
        link: 'https://github.com/Jungjjeong/2021-XR-Challenge',
      },
    ],
    contentList: [
      {
        title: '🏆 수상 내역',
        content: [
          {
            contentTitle: '2021 전국 XR 첼린지 장려상',
            contentDescription:
              '(3rd place in National XR Challenge Competition, Ministry of Science & ICT, Korea)',
          },
        ],
      },
      {
        title: '📱 프로젝트 소개',
        content: [
          {
            contentTitle: '3D Viewer',
            contentDescription:
              '가구의 색상, 재질 등을 3D 화면에서 자유롭게 확인 가능한 3D Viewer 제공',
          },
          {
            contentTitle: 'AR Placement',
            contentDescription:
              '가구를 "실제 크기"대로 화면에 배치해볼 수 있는 AR 배치 기능 제공',
          },
          {
            contentTitle: 'AR Ruler',
            contentDescription:
              '가구를 배치하기 위해 화면에 비치는 공간의 "실제 길이"를 측정해볼 수 있는 AR 줄자 기능 제공',
          },
        ],
      },
      {
        title: '🐳 사용 기술',
        content: [
          {
            contentTitle: '1️⃣ 3D Viewer',
            contentDescription: ['▪️ JavaScript, Three.js'],
          },
          {
            contentTitle: ' 2️⃣ AR Placement/AR Ruler',
            contentDescription: [
              '<div>▪️ JAVA, ARCORE, scnencore</div>',
              '<div>▪️ Swift, ARKIT, scenekit</div>',
            ],
          },
        ],
      },
      {
        title: '📁 서비스 흐름',
        content: [
          {
            contentTitle: '',
            contentDescription:
              '<img src="https://user-images.githubusercontent.com/72294509/142341707-3f56bd27-8b56-4255-a510-c8000791155a.png" alt="project architecture" />',
          },
        ],
      },
      {
        title: '🤼‍♀️ 팀 소개',
        content: [
          {
            contentTitle: '배치해방',
            contentDescription:
              '<ul><li>▪️ 정지영</li><li>▪️ 서예현</li><li>▪️ 정현성</li></ul>',
          },
          {
            contentTitle: 'Acknowledgments',
            contentDescription: [
              '<a href="http://www.k-hackathon.com/"><strong>👉🏻 K-hackarthon</strong></a>',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    imageSrc: panopticon,
    title: '파놉티콘',
    description: '부정행위 방지 비대면 시험 관리감독 플랫폼',
    period: {
      start: '2020-12',
      end: '2021-02',
    },
    devStackList: [
      'WebRTC',
      'JavaScript',
      'Graph.js',
      'Node.js',
      'Anyang.js',
      'Tensorflow.js',
      'Firebase',
    ],
    youtubeList: ['J4_1RKydsSU'],
    // imageList: [
    //   baechihaebang_1,
    //   baechihaebang_2,
    //   baechihaebang_3,
    //   baechihaebang_4,
    // ],
    linkList: [
      {
        title: 'Github',
        link: 'https://github.com/Jungjjeong/2021-XR-Challenge',
      },
    ],
    contentList: [
      {
        title: '🏆 수상 내역',
        content: [
          {
            contentTitle: '동국대학교 2020 겨울 캡스톤디자인 Value Up 장려상',
            contentDescription: '',
          },
        ],
      },
      {
        title: '📱 프로젝트 소개',
        content: [
          {
            contentTitle: '시험용 화상채팅 플랫폼',
            contentDescription:
              '부정행위 검출 알고리즘이 적용된 "화상채팅" 기능을 제공합니다.',
          },
          {
            contentTitle: '시험 부정행위 관리 감독',
            contentDescription: [
              '2020년 코로나 19로 인해 비대면으로 전환된 많은 교육 환경에서 만연하게 발생중인 <strong>"부정행위" 문제</strong>를 검출합니다.',
              '수험자 마다의 부정행위 점수를 실시간으로 보여주며, 점수가 높은 순으로 학생 순서를 배치합니다.',
            ],
          },
          {
            contentTitle: '데이터 시각화',
            contentDescription:
              '시험이 종료 후, 시험 시간 동안 누적된 학생 별 부정행위 점수를 시간별 그래프로 한 눈에 보여줍니다.',
          },
        ],
      },
      {
        title: '🐳 사용 기술',
        content: [
          {
            contentTitle: '1️⃣ 부정행위 검출 알고리즘',
            contentDescription: ['▪️ Annyang.js, Tensorflow.js'],
          },
          {
            contentTitle: ' 2️⃣ Video Chat Web',
            contentDescription: [
              '<div>▪️ JavaScript, Chart.js</div>',
              '<div>▪️ Node.js, WebRTC</div>',
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
              '<img src="https://github.com/Jungjjeong/2020-Winter-ValueUpProject/raw/master/img/flowchart.png" alt="project architecture" />',
          },
        ],
      },
      {
        title: '🤼‍♀️ 팀 소개',
        content: [
          {
            contentTitle: '동작그만',
            contentDescription:
              '<ul><li>▪️ 박정무</li><li>▪️ 우승제</li><li>▪️ 정지영</li><li>▪️ 서예현</li></ul>',
          },
        ],
      },
    ],
  },
];

// 발표 프로젝트
export const presentationData: IProject[] = [
  {
    id: 10,
    imageSrc: present_browser,
    title: '브라우저의 동작 원리 기술 발표',
    description: '프로그래머스 프론트엔드 데브코스 2기',
    period: {
      start: '2022-04-11',
    },
    linkList: [
      {
        title: '브라우저의 동작 원리 - present.do',
        link: 'https://present.do/documents/62543b6a12168b359e2e6867',
      },
    ],
    contentList: [
      {
        title: '기술 발표',
        content: [
          {
            contentTitle: '발표 주제',
            contentDescription: '브라우저의 동작 원리',
          },
          {
            contentTitle: '발표 목차',
            contentDescription: [
              '01. 브라우저란?',
              '02. 브라우저의 주요 기능',
              '03. 브라우저 기본 구조',
              '04. 렌더링 엔진',
              '05. 정리',
              '06. 출처',
            ],
          },
        ],
      },
      {
        title: '발표 후기',
        content: [
          {
            contentTitle: '',
            contentDescription: [
              '프로그래머스 프론트엔드 데브코스 과정에서 마음이 맞는 팀원들과 CS 스터디를 진행했습니다.',
              '좋은 기회로 프로그래머스 데브코스 present.do 계정에 발표 영상을 업로드하게 되었습니다.',
              '<br/>',
              '이번 발표를 준비하며 웹 브라우저에 대한 기초를 탄탄히 할 수 있었고, 발표를 통해 남들에게 지식을 전달하는 과정에서 한번 더 반복 학습을 할 수 있었습니다.',
            ],
          },
        ],
      },
    ],
  },
];
