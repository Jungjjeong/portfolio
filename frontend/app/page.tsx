'use client';

import type { NextPage } from 'next';
import { Contact } from '../components';
import { cover } from '../assets';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import Common from '../styles/common';

const Home: NextPage = () => {
  // const { ref, style } = useFadeIn(1000, 0);
  const typingText = "Hello! \nI'm Haeyum, \nfront-end developer!";

  return (
    <div>
      <TypingWrapper>
        {/* NOTE : 타이핑 라이브러리 사용으로 변경 */}
        {/* {[...typingText].map((char: string, index: number) => {
          const { ref, style } = useFadeIn(500, index * 100);
          if (char === '\n') return <br key={index} />;

          return (
            <span ref={ref} style={style} key={index}>
              {char}
            </span>
          );
        })} */}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(typingText)
              .pauseFor(2500)
              // .deleteAll()
              .start();
          }}
        />
      </TypingWrapper>
      <MainWrapper>
        <Dim />
        <Image src={cover} alt="Cover Image" fill />
      </MainWrapper>
      <ContactWrapper>
        <Contact />
      </ContactWrapper>
    </div>
  );
};

export default Home;

const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
`;

const TypingWrapper = styled.div`
  position: absolute;
  top: 150px;
  left: 70px;
  max-width: 750px;
  z-index: 10;
  color: ${Common.colors.white};
  font-size: ${Common.fontSize.title};
  font-family: 'Nanum Pen Script';
  line-height: 1.4;
  letter-spacing: 3px;
  place-items: center;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: rgba(0, 0, 0, 0.6);
`;

const ContactWrapper = styled.footer`
  height: 500px;
`;
