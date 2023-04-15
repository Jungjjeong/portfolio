import Image, { StaticImageData } from 'next/image';

interface IEnlargedImage {
  imageData: StaticImageData;
  onClickDim: any;
}

const EnlargedImage = ({ imageData, onClickDim }: IEnlargedImage) => {
  return (
    <>
      <div
        className={`opacity-40 fixed inset-y-0 right-0 w-full h-full bg-black z-40 cursor-pointer`}
        onClick={onClickDim}
      />
      <div className="max-w-[1150px] w-full h-auto p-[15px] fixed top-[50vh] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
        <Image src={imageData} alt="detail Image" />
      </div>
    </>
  );
};

export default EnlargedImage;
