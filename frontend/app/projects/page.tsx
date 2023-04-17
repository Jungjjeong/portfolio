// 'use client';
import { Title } from '../../components';
import Card from '../../components/Card/Card';
import {
  awardProjectData,
  presentationData,
  sideProjectData,
} from '../../data/project';

const ProjectListPage = () => {
  // NOTE: 전체 fade In 효과 구현
  // const options = { root: null, threshold: 0.1, rootMargin: '-0px' };
  // const observer = new IntersectionObserver(function (entries, observer) {
  //   entries.forEach((entry) => {
  //     const container = entry.target;
  //     if (entry.isIntersecting) {
  //       container.classList.add('animate-fadeIn');
  //     }
  //   });
  // }, options);

  // useEffect(() => {
  //   const targets = document.querySelectorAll('.fade-class');

  //   targets.forEach((target) => {
  //     observer.observe(target);
  //   });
  // }, []);

  return (
    <div className="flex flex-col w-full py-[50px] max-w-[710px] px-[20px] mx-auto">
      {/* NOTE : Side Project Section */}
      <section className="mx-auto w-full px=[16px] py-[50px]">
        <Title text="SIDE PROJECT" />
        <div className="grid grid-cols-project relative pt-4 pb-1 gap-[16px]">
          {sideProjectData.map((project) => {
            const { id, imageSrc, title, description, period, devStackList } =
              project;

            return (
              <Card
                key={id}
                id={id}
                imageSrc={imageSrc}
                title={title}
                description={description}
                period={period}
                devStackList={devStackList}
              />
            );
          })}
        </div>
      </section>

      {/* NOTE : Awards Project Section */}
      <section className="mx-auto w-full px=[16px] py-[50px] fade-class">
        <Title text="AWARDS PROJECT" />
        <div className="grid grid-cols-project relative pt-4 pb-1 gap-[16px]">
          {awardProjectData.map((project) => {
            const { id, imageSrc, title, description, period, devStackList } =
              project;

            return (
              <Card
                key={id}
                id={id}
                imageSrc={imageSrc}
                title={title}
                description={description}
                period={period}
                devStackList={devStackList}
              />
            );
          })}
        </div>
      </section>

      {/* NOTE : Presentation Project Section */}
      <section className="mx-auto w-full px=[16px] py-[50px] fade-class">
        <Title text="PRESENTATION" />
        <div className="grid grid-cols-project relative pt-4 pb-1 gap-[16px]">
          {presentationData.map((project) => {
            const { id, imageSrc, title, description, period, devStackList } =
              project;

            return (
              <Card
                key={id}
                id={id}
                imageSrc={imageSrc}
                title={title}
                description={description}
                period={period}
                devStackList={devStackList}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectListPage;
