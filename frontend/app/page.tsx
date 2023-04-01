'use client';

import type { NextPage } from 'next';
import { Contact } from '../components';
import { cover } from '../assets';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Home: NextPage = () => {
  const typingText = [
    "Hello! I'm Haeyum,<br />front-end<br />developer!",
    '안녕하세요 해윰입니다.<br />프론트엔드 개발을<br/>하고 있어요!',
  ];

  return (
    <div className="">
      <div className="relative">
        <div className="absolute top-[130px] left-[70px] max-w-[750px] h-[500px] z-20 text-gray text-extra tracking-[3px] font-pen">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString(typingText[0])
                .pauseFor(2500)
                .deleteAll()
                .typeString(typingText[1])
                .pauseFor(2500)
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
