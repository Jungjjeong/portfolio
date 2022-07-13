import { NextPageContext } from 'next';

const getServerSideProps = (context: NextPageContext) => {
  const projectId = context.query.id;

  console.log(projectId);
};

const ProjectDetailPage = () => {
  return <div>Project Detail</div>;
};

export default ProjectDetailPage;
