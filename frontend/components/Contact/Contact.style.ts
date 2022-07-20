import styled from '@emotion/styled';
import Common from '../../styles/common';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 180px 0;
`;

const HeaderText = styled.h1`
  width: fit-content;
  margin: 0 auto;
  letter-spacing: 4px;
`;

const DescriptionText = styled.p`
  width: fit-content;
  margin: 0 auto;
  color: ${Common.colors.gray03};
  font-weight: bold;
  letter-spacing: 3px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: fit-content;
  margin: 25px auto;
`;

const S = {
  ContactWrapper,
  HeaderText,
  DescriptionText,
  ButtonWrapper,
};

export default S;
