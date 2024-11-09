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
      <div className="mx-auto text-sm w-fit md:text-center">
        부드러운 탐색 경험과 같은 유려한 UX 경험을 지향합니다. <br />
        팀원들과의 원활한 소통을 통해, 신뢰를 기반으로 한 단단하고 유연한 협업을
        이끌어냅니다.
        <br />
        비즈니스 성과를 창출하는 것에 집중하기 위해 프로덕트 레벨에서의 투명한
        소통을 중요하게 생각합니다.
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
