import Image from 'next/image';

import { Button } from '..';
import { profile } from '../../assets';

const HeaderSection = () => {
  return (
    <div className="animate-fadeIn">
      <div className="mx-auto mb-[30px] w-fit overflow-hidden rounded-full">
        <Image src={profile} alt="header Image" width={250} height={261} />
      </div>
      {/* <h1 className="w-fit mx-auto mt-[20px] tracking-[5px] text-2xl font-semibold">
        JungJiYoung
      </h1> */}
      <p className="mx-auto my-[20px] w-fit text-center text-xl font-semibold md:text-2xl">
        <span>안녕하세요.</span>{' '}
        <span className="whitespace-nowrap">
          주니어 프론트엔드 개발자 정지영입니다.
        </span>
      </p>
      <div className="mx-auto w-fit text-sm md:text-center">
        꾸준함의 가치를 알기에 학습한 지식을 Github에 남기고 기술 블로그를
        운영하고 있습니다.
        <br />
        함께 성장하는 경험에 관심이 많아 CS 스터디, 프로그래머스 데브코스 등
        다양한 개발 커뮤니티에 참여했습니다.
        <br />
        사용하기 좋은 인터페이스를 구현하는 것을 좋아하며, 이를 보여주기 위한 웹
        디자인에도 관심이 많습니다.
      </div>
      <div className="mx-auto my-[50px] flex w-fit gap-[10px]">
        <a
          target="_blank"
          href="https://github.com/Jungjjeong"
          rel="noopener noreferrer"
        >
          <Button text="GITHUB" styleType="dark" />
        </a>
        <a
          target="_blank"
          href="https://blog.haeyum.me/"
          rel="noopener noreferrer"
        >
          <Button text="BLOG" styleType="dark" />
        </a>
      </div>
    </div>
  );
};

export default HeaderSection;
