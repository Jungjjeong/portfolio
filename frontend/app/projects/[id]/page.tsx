'use client';

interface IPageProps {
  params: { id: number };
}

const ProjectDetailPage = ({ params }: IPageProps) => {
  return <div className="max-w-[750px] mx-auto">{params.id}</div>;
};

export default ProjectDetailPage;
