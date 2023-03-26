import { Button } from '../../../../components';
import Image from 'next/image';

const HeaderSection = () => {
  return (
    <>
      <div className="w-fit mx-auto">
        <Image
          src="https://user-images.githubusercontent.com/72294509/179054552-f408f898-0072-499d-b592-96d3afb2808f.png"
          alt="header Image"
          width={250}
          height={250}
        />
      </div>
      <h1 className="w-fit mx-auto my-[5px] tracking-[5px] text-3xl font-pen">
        JungJiYoung
      </h1>
      <p className="w-fit mb-[40px] mx-auto font-pen text-3xl">
        안녕하세요. 주니어 프론트엔드 개발자 정지영입니다.
      </p>
      <div className="w-fit mx-auto text-center">
        꾸준함의 가치를 알기에 학습한 지식을 Github에 남기고 기술 블로그를
        운영하고 있습니다.
        <br />
        함께 성장하는 경험에 관심이 많아 CS 스터디, 프로그래머스 데브코스 등
        다양한 개발 커뮤니티에 참여했습니다.
        <br />
        사용하기 좋은 인터페이스를 구현하는 것을 좋아하며, 이를 보여주기 위한 웹
        디자인에도 관심이 많습니다.
      </div>
      <div className="flex gap-[25px] w-fit my-[50px] mx-auto">
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
      </div>
    </>
  );
};

export default HeaderSection;