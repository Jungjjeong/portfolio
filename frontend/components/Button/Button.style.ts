import styled from 'styled-components';
import Common from '../../styles/common';

const CustomButton = styled.button<{
  width: number | string;
  height: number | string;
  backgroundColor: string;
  fontColor: string;
  fontSize: number;
}>`
  box-sizing: border-box;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  padding: 10px;
  color: ${({ fontColor }) => fontColor};
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize};
  font-family: 'Inter', sans-serif;
  letter-spacing: 3px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-image: ${({ backgroundColor }) =>
      `linear-gradient(90deg, ${backgroundColor} 0px, rgba(255, 255, 255, 0.4) 80px, ${backgroundColor} 160px)`};
    background-position: 0 center;
    background-size: 200% 100%;
    transition: all 0.2s ease-out;
    animation: gradation 1500ms infinite linear;
  }

  &:active {
    border: 1px solid ${Common.colors.gray03};
  }

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
`;

export default CustomButton;
