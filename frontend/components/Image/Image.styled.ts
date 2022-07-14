import styled from '@emotion/styled';

interface Props {
	block: boolean;
	width: number | string;
	height: number | string;
	mode: string;
}

const CustomImage = styled.img`
	display: ${({block}: Props) => block && 'block'};
	width: ${({width}: Props) => width};
	height: ${({height}: Props) => height};
	object-fit: ${({mode}: Props) => mode};
`

export default CustomImage;