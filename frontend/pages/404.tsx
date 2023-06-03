import Link from 'next/link';
import { CSSProperties } from 'react';

export default function NotFound() {
  const headLineStyle: CSSProperties = {
    color: '#2A7BF4',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '4.8px',
  };
  const planeStyle: CSSProperties = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 'normal',
  };
  const linkButtonStyle: CSSProperties = {
    borderRadius: '5px',
    background: 'rgba(0, 0, 0, 0.73)',
    color: '#fff',
    fontWeight: 600,
    margin: '10px auto 0px auto',
    padding: '15px 35px',
    textDecoration: 'none',
    fontSize: '16px',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ width: '100%', height: '100%', marginTop: '20%' }}>
      <div style={{ width: 'fit-content', margin: '0 auto' }}>
        <h2 style={headLineStyle}>404 NOT FOUND</h2>
        <p style={planeStyle}>😯 존재하지 않는 페이지입니다.</p>
        <div style={{ margin: '40px auto 0px auto', width: 'fit-content' }}>
          <Link href="/" style={linkButtonStyle}>
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
