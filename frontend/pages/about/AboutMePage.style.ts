import styled from '@emotion/styled';
import Common from '../../styles/common';

const PageWrapper = styled.div`
	width: 100%;
`;

const IntroduceWrapper = styled.div`
	width: 100%;
	height: auto;
	padding: 100px 0;
`;

const Header = styled.h1`
	letter-spacing: 5px;
	width: fit-content;
	margin: 20px auto;
`;

const StrongText = styled.p`
	width: fit-content;
	font-weight: bold;
	margin: 20px auto 50px auto;
`;
const DescriptionWrapper = styled.div`
	width: fit-content;
	margin: 0 auto;
	text-align: center;
`;

const ButtonWrapper = styled.div`
	width: fit-content;
	margin: 80px auto;
	display: flex;
	gap: 25px;
`

const SubHeader = styled.h2`
	color: ${Common.colors.main01};
	letter-spacing: 5px;
	width: fit-content;
	margin: 0 auto;
`

const TechStackWrapper = styled.div``;

const EducationWrapper = styled.div``;

const AwardsWrapper = styled.div``;

const ExperienceWrapper = styled.div``;

const S = {
  PageWrapper,
  IntroduceWrapper,
  Header,
	StrongText,
  DescriptionWrapper,
	ButtonWrapper,
	SubHeader,
  TechStackWrapper,
  EducationWrapper,
  AwardsWrapper,
  ExperienceWrapper,
};

export default S;
