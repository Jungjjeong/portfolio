import { Button } from '../components';
import { cover, cover_m } from '../assets';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="h-full">
      {/* NOTE: Main Image section */}
      <section className="relative h-full">
        <div className="absolute top-[40%] md:top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-fit mx-auto z-20">
          <div className="animate-fadeIn text-gray font-bold flex flex-col gap-[30px] lg:gap-[20px]">
            <div className="flex flex-col items-center text-2xl md:text-3xl lg:text-extra">
              <p className="whitespace-nowrap">안녕하세요 해윰입니다.</p>
              <p className="whitespace-nowrap">
                프론트엔드 개발을 하고 있어요.
              </p>
            </div>

            {/* buttons */}
            <div className="flex gap-[10px] w-fit z-20 mx-auto">
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
        </div>

        {/* NOTE: 배경 이미지 -> 중간 사이즈 UI (md)부터 분기처리 */}
        <div className="w-full overflow-hidden h-full relative">
          <div className="absolute top-0 left-0 h-full w-full bg-black/50 z-10" />
          <Image
            src={cover}
            alt="Cover Image"
            style={{ objectFit: 'cover', height: '100%' }}
            className="md:block hidden"
          />
          <Image
            src={cover_m}
            alt="Cover Image"
            style={{ objectFit: 'cover', height: '100%' }}
            className="md:hidden block"
          />
        </div>
      </section>
      {/* NOTE: Description section */}
      <section>
        <div>second section</div>
      </section>
    </div>
  );
};

export default Home;
