interface ITag {
  tagName: string;
}

const Tag = ({ tagName }: ITag) => {
  return (
    <div className="w-fit h-fit py-[5px] px-[7px] rounded-[5px] bg-gray-6 text-sm whitespace-nowrap">
      {tagName}
    </div>
  );
};

export default Tag;
