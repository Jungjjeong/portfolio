import { MouseEventHandler } from 'react';
import Common from '../../../styles/common';
import S from './ButtonItem.style';

interface Props {
  labelText: string;
  backgroundColor: string;
  onClick?: MouseEventHandler;
  width: string | number;
  height: string | number;
}

const defaultProps = {
  labelText: 'label',
  backgroundColor: Common.colors.main01,
  width: '300px',
  height: '100px',
};

const ButtonItem = ({
  labelText,
  backgroundColor,
  onClick,
  width,
  height,
}: Props) => {
  return (
    <S.ButtonWrapper>
      <S.Label>{labelText}</S.Label>
      <S.Button
        backgroundColor={backgroundColor}
        onClick={onClick}
        width={width}
        height={height}
      />
    </S.ButtonWrapper>
  );
};

ButtonItem.defaultProps = defaultProps;

export default ButtonItem;
