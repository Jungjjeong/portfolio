import styled from '@emotion/styled';

const Nav = styled.nav`
	width: 100%;
	height: 70px;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 50px;
	gap: 50px;
	background-color: white;
`

const Logo = styled.div`
	flex-grow: 1;
`

const LinkA = styled.a`
	letter-spacing: 3px;
	font-weight: bold;
`

const S = {
	Nav, Logo, LinkA
}

export default S;