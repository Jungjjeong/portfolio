import Button from '../Button';
import S from './Contact.style';

const Contact = () => {
  return (
    <>
      <S.ContactWrapper>
        <S.HeaderText>JUNGJIYOUNG</S.HeaderText>
        <S.DescriptionText>Web Frontend Developer</S.DescriptionText>
        <S.ButtonWrapper>
          <a
            target="_blank"
            href="https://github.com/Jungjjeong"
            rel="noopener noreferrer"
          >
            <Button text="GITHUB" />
          </a>
          <a
            target="_blank"
            href="https://jungjjeong.github.io/"
            rel="noopener noreferrer"
          >
            <Button text="BLOG" />
          </a>
          <a
            target="_blank"
            href="mailto:sky990106@naver.com"
            rel="noopener noreferrer"
          >
            <Button text="EMAIL" />
          </a>
        </S.ButtonWrapper>
      </S.ContactWrapper>
    </>
  );
};

export default Contact;
