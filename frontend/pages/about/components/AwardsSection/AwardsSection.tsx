import { Summary } from '../../../../components';
import SectionWrapper from './AwardsSection.style';

const AwardsSection = () => {
  return (
    <SectionWrapper>
      <Summary
        title='2022 테스트베드 데이터 수집, 활용, 확산을 위한 스마트 캠퍼스 헤커톤'
        description='실내 공기 상태 분석을 위한 자동화 냉난방 및 환풍 Web'
        award='우수상 - 동국대학교'
        date='2022.02.16'
      />
      <Summary
        title='2021 지역 XR Challenge'
        description='가구 3D/AR 배치 어플리케이션'
        award='장려상 - 소프트웨어교육혁신센터'
        date='2021.11.11'
      />
      <Summary
        title='2021 여름 캡스톤 디자인 Value Up'
        description='WebGL 활용 이커머스 상품정보 XR 쇼룸 구축'
        award='우수상 - 동국대학교'
        date='2021.09.23'
      />
      <Summary
        title='2021 여름 ICIP & 캡스톤 디자인'
        description='WebGL 활용 이커머스 상품정보 3D/AR Player/Viewer 구축'
        award='우수상 - 동국대학교'
        date='2021.06.18'
      />
      <Summary
        title='2020 겨울 캡스톤 디자인 Value Up'
        description='부정행위 방지 비대면 시험 관리감독 플랫폼'
        award='장려상 - 동국대학교'
        date='2021.02.23'
      />
    </SectionWrapper>
  );
};

export default AwardsSection;
