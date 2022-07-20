import styled from '@emotion/styled';

const ButtonsWrapper = styled.div`
  width: 350px;
  height: 350px;
  position: relative;
`;

const Button01Wrapper = styled.div`
  position: absolute;
  transform: rotate(120deg);
	right: 0;
	bottom: 0;
`;

const Button02Wrapper = styled.div`
  position: absolute;
  transform: rotate(-120deg);
	left: 0;
	bottom: 0;
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
