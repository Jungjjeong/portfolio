import type { NextPage } from 'next';
import { Contact } from '../components';
import { cover } from '../assets';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Home: NextPage = () => {
  const typingText = "Hello! \nI'm Haeyum, \nfront-end developer!";

  return (
    <div className="">
      <div className="relative">
        <div className="absolute top-[130px] left-[70px] max-w-[750px] z-20 text-gray text-extra tracking-[3px] font-pen">
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
