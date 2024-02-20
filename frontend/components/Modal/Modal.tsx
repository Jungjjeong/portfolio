'use client';

import { useEffect } from 'react';

import { useLockBodyScroll } from '../../hooks';
import Button from '../Button';

interface IModal {
  modalHandler: () => void;
}

const Modal = ({ modalHandler }: IModal) => {
  const [, setLocked] = useLockBodyScroll();

  useEffect(() => {
    setLocked(true);
  }, []);

  return (
    <div className="w-full animate-opacityIn">
      <div
        className={`fixed inset-y-0 right-0 z-40 size-full cursor-pointer bg-black opacity-40`}
        onClick={modalHandler}
      />
      <div className="border-box fixed left-[50%] top-[50vh] z-50 h-auto w-full max-w-[350px] translate-x-[-50%] translate-y-[-50%] px-[15px]">
        <div className="border-box w-full rounded-lg bg-white px-[30px] pb-[20px] pt-[25px] dark:bg-dark">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-2xl font-bold">소중한 연락 감사합니다. 💌</h2>
            <p className="mb-[10px]">빠른 시일 내에 다시 연락드리겠습니다.</p>
            <Button styleType="dark" text="CLOSE" onClick={modalHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
