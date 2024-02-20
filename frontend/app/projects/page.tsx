// 'use client';
import { Title } from '../../components';
import Card from '../../components/Card/Card';
import {
  awardProjectData,
  presentationData,
  sideProjectData,
} from '../../data/project';

const ProjectListPage = () => {
  return (
    <>
      <div className="mx-auto mb-[50px] flex w-full max-w-[710px] flex-col px-[20px] md:my-[50px]">
        {/* NOTE : Side Project Section */}
        <section className="px=[16px] mx-auto w-full animate-fadeIn py-[50px]">
          <Title text="SIDE PROJECT" />
          <div className="relative grid grid-cols-project gap-[16px] pb-1 pt-4">
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
        <section className="px=[16px] fade-class mx-auto w-full py-[50px]">
          <Title text="AWARDS PROJECT" />
          <div className="relative grid grid-cols-project gap-[16px] pb-1 pt-4">
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
        <section className="px=[16px] fade-class mx-auto w-full py-[50px]">
          <Title text="PRESENTATION" />
          <div className="relative grid grid-cols-project gap-[16px] pb-1 pt-4">
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
    </>
  );
};

export default ProjectListPage;
