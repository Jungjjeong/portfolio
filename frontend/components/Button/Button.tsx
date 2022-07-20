import { MouseEventHandler } from 'react';
import Common from '../../styles/common';
import CustomButton from './Button.style';

interface Props {
  width: number | string;
  height: number | string;
  backgroundColor: string;
  fontColor: string;
  fontSize: number;
  text: string;
  onClick?: MouseEventHandler;
}

const defaultProps = {
  width: '130px',
  height: '50px',
  backgroundColor: Common.colors.gray04,
  fontColor: Common.colors.white,
  fontSize: Common.fontSize.n1,
  text: 'Button',
};

const Button = ({
  width,
  height,
  backgroundColor,
  fontColor,
  fontSize,
  text,
  onClick,
}: Props) => {
  return (
    <CustomButton
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      fontSize={fontSize}
      onClick={onClick && onClick}
    >
      {text}
    </CustomButton>
  );
};

Button.defaultProps = defaultProps;

export default Button;
