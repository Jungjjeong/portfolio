interface ITag {
  tagName: string;
}

const Tag = ({ tagName }: ITag) => {
  return (
    <div className="w-fit h-fit py-[4px] px-[8px] rounded-[5px] bg-gray-6 dark:bg-dark-2 text-sm whitespace-nowrap">
      {tagName}
    </div>
  );
};

export default Tag;
