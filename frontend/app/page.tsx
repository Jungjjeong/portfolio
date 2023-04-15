import { Contact } from '../components';
import { cover, cover_m } from '../assets';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute top-[50px] md:top-[110px] left-[35px] md:left-[70px] w-fit h-auto z-20 text-gray text-2xl md:text-3xl lg:text-extra font-bold">
          <p>안녕하세요 해윰입니다.</p>
          <p>프론트엔드 개발을 하고 있어요.</p>
        </div>
        <div className="w-full overflow-hidden max-h-5/6 hidden md:block relative">
          <div className="absolute top-0 left-0 h-full w-full bg-black/50 z-10" />
          <Image src={cover} alt="Cover Image" />
        </div>
        <div className="w-full overflow-hidden max-h-5/6 block md:hidden relative">
          <div className="absolute top-0 left-0 h-full w-full bg-black/50 z-10" />
          <Image src={cover_m} alt="Cover Image" />
        </div>
      </div>
      <div className="h-[500px]">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
