import styled from '@emotion/styled';
import Common from '../../styles/common';

const FooterWrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 70px;
	background-color: ${Common.colors.white};
	padding: 28px 0;
`

const TextWrapper = styled.div`
	width: fit-content;
	letter-spacing: 3px;
	font-weight: bold;
	font-size: ${Common.fontSize.n1};
	margin: 0 auto;
`

const S = {
	FooterWrapper, TextWrapper
}

export default S;