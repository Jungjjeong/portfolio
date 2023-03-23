'use client';

import type { NextPage } from 'next';
import { Contact } from '../components';
import { cover } from '../assets';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Home: NextPage = () => {
  // const { ref, style } = useFadeIn(1000, 0);
  const typingText = "Hello! \nI'm Haeyum, \nfront-end developer!";

  return (
    <div className="">
      <div className="relative">
        {/* 폰트 추후 적용 예정 (Nanum Pen Script) */}
        <div className='absolute top-[130px] left-[70px] max-w-[750px] z-20 text-gray text-5xl font-["Nanum Pen Script"] tracking-[3px]'>
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
        </div>
        <div className="w-full overflow-hidden h-5/6">
          <div className="absolute top-0 left-0 h-full w-full bg-black/50 z-10" />
          <Image src={cover} alt="Cover Image" />
        </div>
      </div>
      <div className="h-[500px]">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
