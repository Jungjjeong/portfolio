'use client';

import { useEffect, useState } from 'react';
import { sideProjectData } from '../../../data/project';
import { IProject } from '../../../types/project';
import Image from 'next/image';

interface IPageProps {
  params: { id: number };
}

const ProjectDetailPage = ({ params }: IPageProps) => {
  const [project, setProject] = useState<IProject>();
  const getProjectData = (id: number) => {
    const findProject = sideProjectData.find(
      ({ id: projectId }) => projectId === Number(id)
    );

    setProject(findProject);
  };

  useEffect(() => {
    getProjectData(params.id);
  }, [params.id]);

  if (!project) return <></>;
  const { id, imageSrc, title, description, period, devStackList } = project;

  return (
    <div className="max-w-[750px] mx-auto my-[50px]">
      {/* NOTE: Header */}
      <div>
        <p className="text-gray-3 text-sm">
          {period.start} ~ {period.end}
        </p>
        <h1 className="text-4xl font-bold">{title}</h1>

        <p>{description}</p>
        <Image
          src={imageSrc}
          width={800}
          height={500}
          alt="project Thumbnail"
        />
      </div>

      {/* NOTE: Content */}
      <div>content Area</div>
    </div>
  );
};

export default ProjectDetailPage;
