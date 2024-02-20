interface ITitle {
  text: string;
}

const Title = ({ text }: ITitle) => {
  return (
    <h1 className="mx-auto my-2 w-fit text-2xl font-semibold tracking-[3px] text-main">
      {text}
    </h1>
  );
};

export default Title;
