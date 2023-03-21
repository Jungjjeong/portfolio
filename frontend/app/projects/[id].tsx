import styled from 'styled-components';
import { NextPageContext } from 'next';

const getServerSideProps = (context: NextPageContext) => {
  const projectId = context.query.id;

  console.log(projectId);
};

const ProjectDetailPage = () => {
  return <StyledWrapper>Project Detail</StyledWrapper>;
};

export default ProjectDetailPage;

const StyledWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;
