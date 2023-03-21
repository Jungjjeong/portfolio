import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`;

const Button01Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: rotate(120deg);
`;

const Button02Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(-120deg);
`;

const Button03Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const S = {
  ButtonsWrapper,
  Button01Wrapper,
  Button02Wrapper,
  Button03Wrapper,
};

export default S;
