import styled from '@emotion/styled';
import Common from '../../styles/common';

interface Props {
  width: number | string;
  height: number;
  backgroundColor: string;
  fontColor: string;
  fontSize: number;
}

const CustomButton = styled.button`
  box-sizing: border-box;
  width: ${({ width }: Props) => width};
  height: ${({ height }: Props) => height};
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  color: ${({ fontColor }: Props) => fontColor};
  font-size: ${({ fontSize }: Props) => fontSize};
	font-weight: bold;
  padding: 10px;
	letter-spacing: 3px;
	border: none;
	border-radius: 10px;
  cursor: pointer;

	&:hover {
		background-color: ${Common.colors.gray03};
	}
`;

export default CustomButton;
