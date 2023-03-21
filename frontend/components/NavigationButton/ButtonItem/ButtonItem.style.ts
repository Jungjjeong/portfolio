import styled from 'styled-components';

const Label = styled.p`
  width: fit-content;
  letter-spacing: 3px;
  margin: 0 auto;
`;

const Button = styled.button<{
  backgroundColor: string;
  width: string | number;
  height: string | number;
}>`
  box-sizing: border-box;
  width: 0;
  height: 0;
  border-bottom: ${({ height, backgroundColor }) =>
    typeof height === 'number'
      ? `${height}px solid ${backgroundColor}`
      : `${height} solid ${backgroundColor}`};
  border-left: ${({ width }) =>
    typeof width === 'number'
      ? `${width}px solid transparent`
      : `${width} solid transparent`};
  border-right: ${({ width }) =>
    typeof width === 'number'
      ? `${width}px solid transparent`
      : `${width} solid transparent`};

  &:hover {
    background-image: ${({ backgroundColor }) =>
      `linear-gradient(90deg, ${backgroundColor} 0px, rgba(255, 255, 255, 0.3) 80px, ${backgroundColor} 160px)`};
    background-size: 200% 100%;
    background-position: 0 center;
    transition: all 0.2s ease-out;
    animation: gradation 2s infinite linear;

    @keyframes gradation {
      0% {
        background-position-x: 100%;
      }
      50% {
        background-position-x: -100%;
      }
      100% {
        background-position-x: -100%;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;

  &:hover ${Label} {
    transform: translate(0px, -10px);
    transition: all 0.2s ease-out;
  }
`;

const S = {
  ButtonWrapper,
  Label,
  Button,
};

export default S;
