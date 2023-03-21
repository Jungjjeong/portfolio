import styled from 'styled-components';
import Common from '../../../../styles/common';

const ImageWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Header = styled.h1`
  width: fit-content;
  margin: 10px auto;
  font-size: ${Common.fontSize.h1};
  font-family: 'Nanum Pen Script';
  letter-spacing: 5px;
`;

const StrongText = styled.p`
  width: fit-content;
  margin: 20px auto 40px auto;
  font-size: ${Common.fontSize.b1};
  font-family: 'Nanum Pen Script';
`;

const MainText = styled.p`
  color: ${Common.colors.main01};
  font-weight: bold;
  line-height: 1.7;
`;

const DescriptionWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  line-height: 1.5;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 25px;
  width: fit-content;
  margin: 80px auto;
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
