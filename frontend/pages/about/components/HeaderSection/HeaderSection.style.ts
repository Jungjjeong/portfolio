import styled from '@emotion/styled';
import Common from '../../../../styles/common';

const ImageWrapper = styled.div`
	width: fit-content;
	margin: 0 auto;
`

const Header = styled.h1`
  letter-spacing: 5px;
  width: fit-content;
  margin: 20px auto;
  font-family: 'Nanum Pen Script';
  font-size: ${Common.fontSize.h1};
`;

const StrongText = styled.p`
  width: fit-content;
  margin: 20px auto 60px auto;
  font-family: 'Nanum Pen Script';
  font-size: ${Common.fontSize.b1};
`;

const MainText = styled.p`
  color: ${Common.colors.main01};
`;

const DescriptionWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  line-height: 1.8;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 80px auto;
  display: flex;
  gap: 25px;
`;

const S = {
	ImageWrapper,
  Header,
  StrongText,
  MainText,
  DescriptionWrapper,
  ButtonWrapper,
};

export default S;
