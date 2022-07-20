import styled from '@emotion/styled';
import Common from '../styles/common';

const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
`;

const TypingWrapper = styled.div`
  place-items: center;
	font-size: ${Common.fontSize.title};
  font-family: 'Nanum Pen Script';
	color: ${Common.colors.white};
	position: absolute;
	top: 150px;
	left: 70px;
	z-index: 10;
	line-height: 1.4;
  letter-spacing: 3px;
`;

// const Blink = styled.span`
// 	animation: blink 0.5s infinite;
// 	font-size: ${Common.fontSize.h1};

// 	@keyframes blink {
// 		to {
// 			opacity: 0;
// 		}
// 	}
// `

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9;
`;

const ContactWrapper = styled.footer`
  height: 500px;
`;

const S = {
  MainWrapper,
  Dim,
  TypingWrapper,
  ContactWrapper,
};

export default S;
