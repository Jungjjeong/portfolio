'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useLockBodyScroll } from '../../hooks';
import Button from '../Button';

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
            className={`fixed inset-y-0 right-0 z-40 size-full cursor-pointer bg-black opacity-40`}
            onClick={dimHandler}
          />
          {/* PC */}
          <div className="hidden lg:block">
            <div className="fixed left-[50%] top-[50vh] z-50 h-auto w-full max-w-[1150px] translate-x-[-50%] translate-y-[-50%] p-[15px]">
              <Image src={selectedImage} alt="detail Image" loading="eager" />
              <div className="fixed left-[50%] top-[50%] flex w-full translate-x-[-50%] translate-y-[-50%] justify-between p-[25px]">
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
          <div className="fixed left-[50%] top-0 top-[50vh] z-50 block w-full translate-x-[-50%] translate-y-[-50%] lg:invisible">
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
