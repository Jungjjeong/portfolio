import Button from '../Button';
import S from './Contact.style';

const Contact = () => {
  const onClickGithubButton = () => {
    window.open('https://github.com/Jungjjeong');
  };

  const onClickBlogButton = () => {
    window.open('https://jungjjeong.github.io/');
  };

  const onClickEmailButton = () => {
    window.open('mailto:sky990106@naver.com');
  };

  return (
    <>
      <S.ContactWrapper>
        <S.HeaderText>JUNGJIYOUNG</S.HeaderText>
        <S.DescriptionText>Web Frontend Developer</S.DescriptionText>
        <S.ButtonWrapper>
          <Button text='GITHUB' onClick={onClickGithubButton} />
          <Button text='BLOG' onClick={onClickBlogButton} />
          <Button text='EMAIL' onClick={onClickEmailButton} />
        </S.ButtonWrapper>
      </S.ContactWrapper>
    </>
  );
};

export default Contact;
