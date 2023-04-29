'use client';

import { Button, Title } from '../components';
import { cover, cover_m } from '../assets';
import Image from 'next/image';
import { useEffect } from 'react';

const Home = () => {
  // NOTE: 전체 fade In 효과 구현
  const options = { root: null, threshold: 0.1, rootMargin: '-0px' };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      const container = entry.target;
      if (entry.isIntersecting) {
        container.classList.add('animate-fadeIn');
      }
    });
  }, options);

  useEffect(() => {
    const targets = document.querySelectorAll('.fade-class');

    targets.forEach((target) => {
      observer.observe(target);
    });
  }, []);

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
                <Button text="GITHUB" styleType="dark" />
              </a>
              <a
                target="_blank"
                href="https://jungjjeong.github.io/"
                rel="noopener noreferrer"
              >
                <Button text="BLOG" styleType="dark" />
              </a>
              <a
                target="_blank"
                href="mailto:sky990106@naver.com"
                rel="noopener noreferrer"
              >
                <Button text="EMAIL" styleType="dark" />
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
      <section className="h-2/3 bg-gray-7 px-[20px]">
        <div className="w-fit h-full mx-auto flex flex-col gap-3 justify-center items-center font-bold text-white text-center text-2xl md:text-3xl fade-class">
          <p>
            <span className="whitespace-nowrap">깊이 있는 고민을 바탕으로</span>{' '}
            <span className="whitespace-nowrap">적극적인 자세를 가집니다.</span>
          </p>
          <p>
            <span className="whitespace-nowrap">배우고 기록하고</span>{' '}
            <span className="whitespace-nowrap">
              제 것으로 녹여내는 과정을 좋아합니다.
            </span>
          </p>
        </div>
      </section>

      <section className="h-screen flex justify-center px-[20px]">
        <div className="w-full max-w-[710px] mx-auto flex flex-col justify-center fade-class">
          <Title text="CONTACT WITH ME" />
          <h3 className="w-fit mx-auto text-sm font-bold">
            📮 메일은 매일 확인하고 있어요!
          </h3>
          <form className="flex flex-col gap-5 my-[40px]">
            <input
              placeholder="Name"
              className="rounded-md border p-[10px] focus:outline-gray-5"
            />
            <input
              placeholder="Email"
              className="rounded-md border p-[10px] focus:outline-gray-5"
            />
            <textarea
              placeholder="Contents"
              className="rounded-md border p-[10px] min-h-[250px] focus:outline-gray-5 align-text-top resize-none"
            />
          </form>
          <Button styleType="dark" text="SEND" type="submit" />
        </div>
      </section>
    </div>
  );
};

export default Home;
