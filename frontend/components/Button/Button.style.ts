import styled from '@emotion/styled';
import Common from '../../styles/common';

interface Props {
  width: number | string;
  height: number | string;
  backgroundColor: string;
  fontColor: string;
  fontSize: number;
}

const CustomButton = styled.button`
  box-sizing: border-box;
	width: ${({ width }: Props) => typeof width === "number" ? `${width}px` : width};
  height: ${({ height }: Props) => typeof height === "number" ? `${height}px` : height};
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  color: ${({ fontColor }: Props) => fontColor};
  font-size: ${({ fontSize }: Props) => fontSize};
	font-weight: bold;
  font-family: 'Inter', sans-serif;
  padding: 10px;
	letter-spacing: 3px;
	border: none;
	border-radius: 10px;
  cursor: pointer;

	&:hover {
		background-image: ${({ backgroundColor }: Props) =>
      `linear-gradient(90deg, ${backgroundColor} 0px, rgba(255, 255, 255, 0.4) 80px, ${backgroundColor} 160px)`};
    background-size: 200% 100%;
    background-position: 0 center;
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
