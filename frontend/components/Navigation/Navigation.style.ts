import styled from '@emotion/styled';

const Nav = styled.nav`
	width: 100%;
	height: 70px;
	box-sizing: border-box;
	border: 1px solid black;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 50px;
	gap: 50px;
`

const Logo = styled.div`
	flex-grow: 1;
`

const LinkA = styled.a`
	letter-spacing: 5px;
	font-weight: bold;
`

const S = {
	Nav, Logo, LinkA
}

export default S;