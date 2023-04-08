import { Title } from '../../components';
import Card from '../../components/Card/Card';
import {
  awardProjectData,
  presentationData,
  sideProjectData,
} from '../../data/project';

const ProjectListPage = () => {
  return (
    <div className="flex flex-col w-full max-w-[750px] mx-auto">
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
      <section className="mx-auto w-full px=[16px] py-[50px]">
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
      <section className="mx-auto w-full px=[16px] py-[50px]">
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
