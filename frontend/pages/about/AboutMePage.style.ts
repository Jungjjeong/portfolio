import styled from '@emotion/styled';
import Common from '../../styles/common';

const PageWrapper = styled.div`
  width: 100%;
	display: flex;
	flex-direction: column;
	gap: 100px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 100px 0;
`;

const SubHeader = styled.h2`
  color: ${Common.colors.main01};
  letter-spacing: 5px;
  width: fit-content;
  margin: 0 auto;
`;

const TechStackWrapper = styled.div``;

const EducationWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const AwardsWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const ExperienceWrapper = styled.div``;

const S = {
  PageWrapper,
  HeaderWrapper,
  SubHeader,
  TechStackWrapper,
  EducationWrapper,
  AwardsWrapper,
  ExperienceWrapper,
};

export default S;
