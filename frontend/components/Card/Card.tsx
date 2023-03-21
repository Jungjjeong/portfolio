import styled from '@emotion/styled';
import Link from 'next/link';
import Image from '../Image';

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
      <Link href="/projects/1" passHref>
        <StyledInner>
          <Image src={imageSrc} />
          <div>{title}</div>
          <div>{description}</div>
          <div>
            {period.start} ~ {period.end}
          </div>
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
