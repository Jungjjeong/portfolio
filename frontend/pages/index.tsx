import type { NextPage } from 'next';
import { Contact } from '../components';
import { cover } from '../assets';
import S from './index.style';
import Image from 'next/image';
import useFadeIn from '../hooks/useFadeIn';

const Home: NextPage = () => {
  const { ref, style } = useFadeIn(1000, 0);
  const typingText = "Hello! \nI'm Haeyum, \nfront-end developer!";

  return (
    <div>
      <S.TypingWrapper ref={ref} style={style}>
        {[...typingText].map((char: string, index: number) => {
          const { ref, style } = useFadeIn(500, index * 100);
          if (char === '\n') return <br key={index} />;

          return (
            <span ref={ref} style={style} key={index}>
              {char}
            </span>
          );
        })}
      </S.TypingWrapper>
      <S.MainWrapper>
        <S.Dim />
        <Image src={cover} alt='Cover Image' />
      </S.MainWrapper>
      <S.ContactWrapper>
        <Contact />
      </S.ContactWrapper>
    </div>
  );
};

export default Home;
