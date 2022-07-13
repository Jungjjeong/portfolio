import React from 'react';
import Link from 'next/link';
import S from './Navigation.style';

const Navigation = () => {
  return (
    <>
      <S.Nav>
        <S.Logo>
          <Link href='/' passHref>
            <S.LinkA>JIYOUNG&apos;S PORTFOLIO</S.LinkA>
          </Link>
        </S.Logo>
        <Link href='/about' passHref>
          <S.LinkA>ABOUTME</S.LinkA>
        </Link>
        <Link href='/projects' passHref>
          <S.LinkA>PROJECT</S.LinkA>
        </Link>
      </S.Nav>
    </>
  );
};

export default Navigation;
