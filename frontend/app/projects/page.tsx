import Card from '../../components/Card/Card';
import { awardProjectData, sideProjectData } from '../../data/project';

const ProjectListPage = () => {
  return (
    <div className="flex flex-col w-full max-w-[750px] mx-auto">
      {/* NOTE : Awards Project Section */}
      <section className="mx-auto w-full px=[16px] py-[50px]">
        <h2 className="mx-auto w-fit tracking-[3px] text-main font-bold">
          AWARDS PROJECT
        </h2>
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

      {/* NOTE : Side Project Section */}
      <section className="mx-auto w-full px=[16px] py-[50px]">
        <h2 className="mx-auto w-fit tracking-[3px] text-main font-bold">
          SIDE PROJECT
        </h2>
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
    </div>
  );
};

export default ProjectListPage;
