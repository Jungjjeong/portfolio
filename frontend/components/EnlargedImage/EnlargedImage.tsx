'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import { useLockBodyScroll } from '../../hooks';

interface IEnlargedImage {
  imageData: StaticImageData;
  dimHandler: () => void;
}

const EnlargedImage = ({ imageData, dimHandler }: IEnlargedImage) => {
  const [, setLocked] = useLockBodyScroll();

  useEffect(() => {
    setLocked(true);
  }, []);

  return (
    <div className="animate-opacityIn">
      <div
        className={`opacity-40 fixed inset-y-0 right-0 w-full h-full bg-black z-40 cursor-pointer`}
        onClick={dimHandler}
      />
      <div className="max-w-[1150px] w-full h-auto p-[15px] fixed top-[50vh] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
        <Image src={imageData} alt="detail Image" />
      </div>
    </div>
  );
};

export default EnlargedImage;
