interface ITag {
  tagName: string;
}

const Tag = ({ tagName }: ITag) => {
  return (
    <div className="size-fit whitespace-nowrap rounded-[5px] bg-gray-6 px-[8px] py-[4px] text-sm dark:bg-dark-2">
      {tagName}
    </div>
  );
};

export default Tag;
