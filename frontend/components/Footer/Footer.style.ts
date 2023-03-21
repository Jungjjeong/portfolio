import styled from 'styled-components';
import Common from '../../styles/common';

const FooterWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  padding: 28px 0;
  background-color: ${Common.colors.white};
`;

const TextWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  font-weight: bold;
  font-size: ${Common.fontSize.n2};
  letter-spacing: 3px;
`;

const S = {
  FooterWrapper,
  TextWrapper,
};

export default S;
