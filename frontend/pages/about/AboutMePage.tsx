import { Button } from '../../components';
import S from './AboutMePage.style';

const AboutMePage = () => {
  return (
    <>
      <S.PageWrapper>
        <S.IntroduceWrapper>
          <S.Header>JungJiYoung</S.Header>
          <S.StrongText>
            안녕하세요. 깊이있는 고민을 바탕으로 적극적인 자세를 가지는
            프론트엔드 개발자 지망생 정지영입니다.
          </S.StrongText>
          <S.DescriptionWrapper>
            <p>
              많은 프로젝트에 참여하며 백엔드, 프론트엔드, 어플리케이션 등
              다양한 분야의 개발을 경험했습니다.
            </p>
            <p>
              그중 사용자의 즉각적인 반응을 확인할 수 있는 프론트엔드 개발이
              가장 재미있게 느껴졌습니다.
            </p>
            <p>
              사용자들에게 서비스에 대한 후광효과를 줄 수 있는 프론트엔드 개발에
              흥미를 느껴 프론트엔드 개발자로 성장하고자 합니다.
            </p>
            <br />
            <br />
            <p>
              혼자 하는 프로젝트보다 여러 사람과 함께 하는 프로젝트를 더
              좋아합니다.
            </p>
            <p>
              프론트엔드 개발자는 기획과 백엔드 개발자의 중간다리 역할을
              수행합니다. 따라서 협업 과정에서 생각을 정중하게 전달하고 설득하는
              능력이 가장 빛을 발하는 직무라고 생각합니다.
            </p>
            <p>
              사람들을 만나고 의사소통을 좋아하는 저는 협업을 잘하는 프론트엔드
              개발자로 성장하여 많고 다양한 사람들과 협업을 진행하고 싶습니다.
            </p>
            <br />
            <br />
            <p>새로운 기술을 공부하고 빠르게 적용해 보는 것을 좋아합니다.</p>
            <p>
              프론트엔드는 빠른 트렌드의 변화로 더 많은 기술을 학습하고 새로운
              성장을 할 수 있다고 생각합니다. 좋은 개발자로 성장하기 위해서
              끊임없는 학습을 통해 변화를 주도하는 개발자로 성장하고 싶습니다.
            </p>
            <br />
            <br />
            <p>
              다양한 프론트엔드 개발 분야 내에서, 디자인과 밀접한 프론트엔드
              개발자가 되고 싶습니다.
            </p>
            <p>
              이를 위해 Figma 컴포넌트, 변수 단위 및 구현에 대해 항상 공부하며,
              프로젝트 진행 시 개발 외 디자인 업무를 맡아 왔습니다.
            </p>
          </S.DescriptionWrapper>
          <S.ButtonWrapper>
            <Button text='GITHUB' />
            <Button text='BLOG' />
          </S.ButtonWrapper>
        </S.IntroduceWrapper>
        <S.TechStackWrapper>
          <S.SubHeader>TECH STACK</S.SubHeader>
        </S.TechStackWrapper>
        <S.EducationWrapper>
          <S.SubHeader>EDUCATION</S.SubHeader>
        </S.EducationWrapper>
        <S.AwardsWrapper>
          <S.SubHeader>AWARDS</S.SubHeader>
        </S.AwardsWrapper>
        <S.ExperienceWrapper>
          <S.SubHeader>EXPERIENCE</S.SubHeader>
        </S.ExperienceWrapper>
      </S.PageWrapper>
    </>
  );
};

export default AboutMePage;
