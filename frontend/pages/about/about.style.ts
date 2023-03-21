import styled from '@emotion/styled';
import Common from '../../styles/common';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 0;
`;

const SubTitle = styled.h2`
  width: fit-content;
  margin: 0 auto;
  color: ${Common.colors.main01};
  letter-spacing: 5px;
`;

const SectionWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const SectionContentWrapper = styled.div`
  margin: 16px 50px;
`;

const S = {
  PageWrapper,
  HeaderWrapper,
  SubTitle,
  SectionWrapper,
  SectionContentWrapper,
};

export default S;
