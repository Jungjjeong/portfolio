import styled from '@emotion/styled';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  padding: 0 50px;
  background-color: white;
`;

const Logo = styled.div`
  flex-grow: 1;
`;

const LinkA = styled.a`
  font-weight: bold;
  letter-spacing: 3px;
`;

const S = {
  Nav,
  Logo,
  LinkA,
};

export default S;
