import styled from '@emotion/styled';
import Link from 'next/link';
import Image from '../Image';
import Common from '../../styles/common';

interface ICardProps {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  period: {
    start: string;
    end: string;
  };
  devStackList: string[];
}

const Card = ({
  id,
  imageSrc,
  title,
  description,
  period,
  devStackList,
}: ICardProps) => {
  return (
    <StyledWrapper>
      <Link href={`/projects/${id}`} passHref>
        <StyledInner>
          <Image src={imageSrc} />
          <StyledContentWrapper>
            <StyledTitleWrapper>{title}</StyledTitleWrapper>
            <StyledTextWrapper>{description}</StyledTextWrapper>
            <StyledTextWrapper>
              {period.start} ~ {period.end}
            </StyledTextWrapper>
            <StyledStackListWrapper>
              {devStackList.map((stack, index) => {
                return (
                  <StyledStackTag key={index} idx={index}>
                    {stack}
                  </StyledStackTag>
                );
              })}
            </StyledStackListWrapper>
          </StyledContentWrapper>
        </StyledInner>
      </Link>
    </StyledWrapper>
  );
};

export default Card;

const StyledWrapper = styled.div`
  display: block;
  color: inherit;
  text-decoration: none;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 2px 4px;
  border-radius: 8px;
  background: white;
  overflow: hidden;
  transition: background 100ms ease-out 0s;
  position: static;
  height: 100%;
`;

const StyledInner = styled.div`
  user-select: none;
  transition: background 120ms ease-in 0s;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

const StyledTitleWrapper = styled.div`
  max-width: 100%;
  width: auto;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 14px;
  line-height: 1.5;
  min-height: 21px;
  font-weight: 500;
  pointer-events: none;
`;

const StyledTextWrapper = styled.div`
  font-size: 12px;
  line-height: 1.2;
`;

const StyledStackListWrapper = styled.div`
  display: flex;
  min-width: 0px;
`;

const StyledStackTag = styled.div<{ idx: number }>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0px;
  height: 15px;
  border-radius: 3px;
  padding-left: 6px;
  padding-right: 6px;
  font-size: 12px;
  line-height: 120%;
  color: rgb(24, 51, 71);
  background: ${({ idx }) =>
    idx % 2 === 0
      ? Common.colors.main01_lighter
      : Common.colors.main02_lighter};
  margin: 0px 6px 0px 0px;
`;
