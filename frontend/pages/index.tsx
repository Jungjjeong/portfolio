import type { NextPage } from 'next';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <div>
      <MainContainer>Main Page</MainContainer>
      <Footer />
    </div>
  );
};

export default Home;

const MainContainer = styled.div`
  height: calc(100vh - 70px);
`;

const Footer = styled.footer`
  background-color: tomato;
  height: 500px;
`;
