import ButtonItem from './ButtonItem';
import Common from '../../styles/common';
import S from './NavigationButton.style';

const NavigationButton = () => {
  return (
    <S.ButtonsWrapper>
      <S.Button01Wrapper>
        <ButtonItem labelText='ABOUTME' />
      </S.Button01Wrapper>
      <S.Button02Wrapper>
        <ButtonItem
          labelText='PROJECTS'
          backgroundColor={Common.colors.main02}
        />
      </S.Button02Wrapper>
      <S.Button03Wrapper>
        <ButtonItem
          labelText='CONTECT'
          backgroundColor={Common.colors.main01_light}
        />
      </S.Button03Wrapper>
    </S.ButtonsWrapper>
  );
};

export default NavigationButton;
