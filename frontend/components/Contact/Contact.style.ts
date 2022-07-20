import styled from '@emotion/styled';
import Common from '../../styles/common';

const ContactWrapper = styled.div`
	box-sizing: border-box;
  width: 100%;
  height: auto;
	padding: 180px 0;
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

const HeaderText = styled.h1`
  width: fit-content;
  margin: 0 auto;
  letter-spacing: 4px;
`;

const DescriptionText = styled.p`
  width: fit-content;
  margin: 0 auto;
	font-weight: bold;
	color: ${Common.colors.gray03};
  letter-spacing: 3px;
`;

const ButtonWrapper = styled.div`
	width: fit-content;
	margin: 25px auto;
  display: flex;
  gap: 30px;
`;

const S = {
  ContactWrapper,
  HeaderText,
  DescriptionText,
  ButtonWrapper,
};

export default S;
