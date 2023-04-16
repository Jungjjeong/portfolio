import { Button, Contact } from '../components';
import { cover, cover_m } from '../assets';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute top-[70px] md:top-[110px] left-[50%] translate-x-[-50%] w-fit z-20 text-gray font-bold mx-auto flex flex-col gap-[30px] lg:gap-[20px]">
          <div className="flex flex-col items-center text-2xl md:text-3xl lg:text-extra">
            <p className="whitespace-nowrap">안녕하세요 해윰입니다.</p>
            <p className="whitespace-nowrap">프론트엔드 개발을 하고 있어요.</p>
          </div>

          <div className="flex gap-[10px] md:gap-[20px] w-fit z-20 mx-auto">
            <a
              target="_blank"
              href="https://github.com/Jungjjeong"
              rel="noopener noreferrer"
            >
              <Button text="GITHUB" type="dark" />
            </a>
            <a
              target="_blank"
              href="https://jungjjeong.github.io/"
              rel="noopener noreferrer"
            >
              <Button text="BLOG" type="dark" />
            </a>
            <a
              target="_blank"
              href="mailto:sky990106@naver.com"
              rel="noopener noreferrer"
            >
              <Button text="EMAIL" type="dark" />
            </a>
          </div>
        </div>
        {/* NOTE: Contact Button */}

        <div className="w-full overflow-hidden h-full relative">
          <div className="absolute top-0 left-0 h-full w-full bg-black/50 z-10" />

          {/* NOTE: 배경 이미지 -> 중간 사이즈 UI (md)부터 분기처리 */}
          <Image src={cover} alt="Cover Image" className="md:block hidden" />
          <Image src={cover_m} alt="Cover Image" className="md:hidden block" />
        </div>
      </div>
    </div>
  );
};

export default Home;
