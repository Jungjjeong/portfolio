import Button from '../Button';
import S from './Contact.style';

const Contact = () => {
  return (
    <>
      <S.ContactWrapper>
        <S.HeaderText>JUNGJIYOUNG</S.HeaderText>
        <S.DescriptionText>Web Frontend Developer</S.DescriptionText>
        <S.ButtonWrapper>
          <Button text='GITHUB' />
          <Button text='BLOG' />
          <Button text='EMAIL' />
        </S.ButtonWrapper>
      </S.ContactWrapper>
    </>
  );
};

export default Contact;
