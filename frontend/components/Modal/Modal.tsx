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
    <div className="w-full">
      <div
        className={`opacity-40 fixed inset-y-0 right-0 w-full h-full bg-black z-40 cursor-pointer`}
        onClick={modalHandler}
      />
      <div className="fixed top-[50vh] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-full h-auto max-w-[400px] px-[15px] border-box">
        <div className="bg-white rounded-lg w-full p-[30px] border-box">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-2xl font-bold">💌 소중한 메일 감사합니다.</h2>
            <p className="mb-[10px]">빠른 시일 내에 답변을 드릴게요.</p>
            <Button styleType="dark" text="CLOSE" onClick={modalHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
