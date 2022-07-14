import styled from '@emotion/styled';
import Common from '../../styles/common';

const SummaryWrapper = styled.div`
	height: auto;
	display: flex;
	align-items: center;
	width: 650px;
	gap: 20px;
	padding: 5px 0;
`

const DescriptionWrapper = styled.div`
	width: fit-content;
`

const StrongDescription = styled.p`
  font-weight: bold;
	margin-bottom: 5px;
`;

const Description = styled.p`
	color: ${Common.colors.gray03};
`

const DashedLine = styled.hr`
	height: 1px;
	flex-grow: 1;
	border: 0px;
	border-top: 1px dashed ;
	color: ${Common.colors.gray03};
`

const DateText = styled.p`
  color: ${Common.colors.gray03};
`;

const S = {
	SummaryWrapper,
	DescriptionWrapper,
  StrongDescription,
	Description,
	DashedLine,
  DateText,
};

export default S;
