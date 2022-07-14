import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { Contact } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <MainContainer>Main Page</MainContainer>
      <ContactWrapper>
        <Contact />
      </ContactWrapper>
    </div>
  );
};

export default Home;

const MainContainer = styled.div`
  height: calc(100vh - 70px);
`;

const ContactWrapper = styled.footer`
  height: 500px;
`;
