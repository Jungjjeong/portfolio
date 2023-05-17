'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { useLockBodyScroll } from '../../hooks';
import Button from '../Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';

interface IEnlargedImage {
  imageListData: StaticImageData[];
  selectedIdx: number;
  idxHandler: (idx: number) => void;
  dimHandler: () => void;
}

const EnlargedImage = ({
  imageListData,
  selectedIdx,
  idxHandler,
  dimHandler,
}: IEnlargedImage) => {
  const [isShow, setIsShow] = useState<boolean>();
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [swiperOptions, setSwiperOptions] = useState<unknown>(null);
  const [, setLocked] = useLockBodyScroll();

  const SwiperEle = Swiper;
  const SwiperSlideEle = SwiperSlide;

  useEffect(() => {
    if (isShow === undefined) {
      setIsShow(true);
    }
  }, [isShow]);

  useEffect(() => {
    setLocked(true);

    return () => {
      setSwiperOptions(null);
    };
  }, []);

  useEffect(() => {
    if (selectedIdx === -1 || !imageListData.length) return;
    setSelectedImage(imageListData[selectedIdx]);
  }, [selectedIdx, imageListData]);

  useEffect(() => {
    if (!swiperOptions) {
      setSwiperOptions({
        className: 'swiper-container',
        slidesPerView: 1,
        centeredSlides: true,
        initialSlide: selectedIdx,
      });
    }
  }, [swiperOptions, selectedIdx]);

  const handleClickPrevButton = () => {
    if (selectedIdx <= 0) return;
    idxHandler(selectedIdx - 1);
  };

  const handleClickNextButton = () => {
    if (selectedIdx >= imageListData.length - 1) return;
    idxHandler(selectedIdx + 1);
  };

  if (!selectedImage) return null;
  // pc: 버튼 핸들링
  // mo: 스와이프 형식
  return (
    <>
      {!!isShow && (
        <div className="animate-opacityIn">
          <div
            className={`opacity-40 fixed inset-y-0 right-0 w-full h-full bg-black z-40 cursor-pointer`}
            onClick={dimHandler}
          />
          {/* PC */}
          <div className="hidden lg:block">
            <div className="max-w-[1150px] w-full h-auto p-[15px] fixed top-[50vh] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
              <Image src={selectedImage} alt="detail Image" loading="eager" />
              <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex justify-between p-[25px]">
                <Button
                  text="◀️"
                  onClick={handleClickPrevButton}
                  styleType="round"
                  className={selectedIdx > 0 ? 'visible' : 'invisible'}
                />
                <Button
                  text="▶️"
                  onClick={handleClickNextButton}
                  styleType="round"
                  className={
                    selectedIdx < imageListData.length - 1
                      ? 'visible'
                      : 'invisible'
                  }
                />
              </div>
            </div>
          </div>

          {/* MO */}
          <div className="block lg:invisible z-50 fixed top-0 w-full fixed top-[50vh] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {swiperOptions && !!imageListData.length ? (
              <SwiperEle onSwiper={setSwiper} {...swiperOptions}>
                {imageListData.map((image, idx) => (
                  <SwiperSlideEle key={idx}>
                    <Image src={image} alt="detail Image" />
                  </SwiperSlideEle>
                ))}
              </SwiperEle>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EnlargedImage;
