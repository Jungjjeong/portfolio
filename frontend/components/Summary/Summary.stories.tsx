import Summary from './Summary';

export default {
  title: 'Component/Summary',
  component: Summary,
};

export const Default = () => {
  return (
    <Summary
      title='2022 테스트베드 데이터 수집, 활용, 확산을 위한 스마트 캠퍼스 헤커톤'
      date='2022.02.16'
    />
  );
};

export const DescriptionTest = () => {
  return (
    <Summary
      title='2022 테스트베드 데이터 수집, 활용, 확산을 위한 스마트 캠퍼스 헤커톤'
      date='2022.02.16'
      description='실내 공기 상태 분석을 위한 자동화 냉난방 및 환풍 Web'
      award='우수상 - 동국대학교'
    />
  );
};
