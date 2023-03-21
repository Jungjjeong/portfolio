'use client';

import styled from 'styled-components';
import Card from '../../components/Card/Card';
import Common from '../../styles/common';
import { sideProjectData } from '../../data/project';

const ProjectListPage = () => {
  return (
    <StyledPageWrapper>
      {/* NOTE : Side Project Section */}
      <SideProjectSection>
        <StyledTitle>SIDE PROJECT</StyledTitle>
        <StyledCardWrapper>
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
        </StyledCardWrapper>
      </SideProjectSection>
    </StyledPageWrapper>
  );
};

export default ProjectListPage;

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
`;

const SideProjectSection = styled.div`
  width: 100%;
  padding: 50px 16px;
`;

const StyledTitle = styled.h2`
  width: fit-content;
  margin: 0 auto;
  color: ${Common.colors.main01};
  letter-spacing: 5px;
`;

const StyledCardWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 4px;
`;
