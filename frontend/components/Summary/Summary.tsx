import S from './Summary.style';

interface Props {
  title: string;
  date: string;
  description?: string;
  award?: string;
}

const defaultProps = {
  title: 'Title',
  date: '2022.07.15',
};

const Summary = ({ title, date, description, award }: Props) => {
  return (
    <>
      <S.SummaryWrapper>
        <S.DescriptionWrapper>
          <S.StrongDescription>{title}</S.StrongDescription>
          {description && (
            <>
              <S.Description>{description}</S.Description>
              <S.Description>{award}</S.Description>
            </>
          )}
        </S.DescriptionWrapper>
        <S.DashedLine />
        <S.DateText>{date}</S.DateText>
      </S.SummaryWrapper>
    </>
  );
};

Summary.defaultProps = defaultProps;

export default Summary;
