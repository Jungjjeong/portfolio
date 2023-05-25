interface ITitle {
  text: string;
}

const Title = ({ text }: ITitle) => {
  return (
    <h1 className="mx-auto w-fit tracking-[3px] text-main font-semibold text-2xl my-2">
      {text}
    </h1>
  );
};

export default Title;
