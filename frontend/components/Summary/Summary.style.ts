import styled from '@emotion/styled';
import Common from '../../styles/common';

const SummaryWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 650px;
  height: auto;
  padding: 5px 0;
`;

const DescriptionWrapper = styled.div`
  width: fit-content;
  margin: 3px 0;
`;

const StrongDescription = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 5px 0;
  color: ${Common.colors.gray03};
`;

const DashedLine = styled.hr`
  flex-grow: 1;
  height: 1px;
  color: ${Common.colors.gray03};
  border: 0px;
  border-top: 1px dashed;
`;

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
