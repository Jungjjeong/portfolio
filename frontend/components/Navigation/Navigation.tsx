'use client';

import Link from 'next/link';
import { useDevice } from '../../hooks';
import { MouseEventHandler, useState } from 'react';

const Navigation = () => {
  const { isDesktop } = useDevice();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleClickMenu: MouseEventHandler = (e) => {
    e.preventDefault();
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      {/* MENU MODAL */}
      <div>
        <div
          className={`${
            isOpenMenu ? 'opacity-40' : 'opacity-0 invisible'
          } absolute inset-y-0 w-full h-full bg-black z-40 transition-all duration-200`}
          onClick={handleClickMenu}
        />
        <div
          className={`${
            isOpenMenu ? 'inset-x-0 top-0' : 'top-[-100vh]'
          } absolute  w-full h-fit z-50 bg-gray rounded-b-lg p-[20px] border-box transition-all duration-200`}
        >
          <h1 className="mb-[20px] font-bold tracking-[3px] ">MENU</h1>
          <div className="flex flex-col gap-[10px] text-gray-2">
            <Link href="/" passHref>
              <span className="font-bold tracking-[3px] text-sm">
                JIYOUNG&apos;S PORTFOLIO
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="font-bold tracking-[3px] text-sm">ABOUTME</span>
            </Link>
            <Link href="/projects" passHref>
              <span className="font-bold tracking-[3px] text-sm">PROJECT</span>
            </Link>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-30 box-border w-full h-[70px] px-[30px] bg-gray border-b border-gray-6">
        {!isDesktop ? (
          <div className="flex items-center justify-end h-full">
            <button
              className="font-bold tracking-[3px] rounded-[5px] hover:bg-gray-6 px-[4px] py-[2px]"
              onClick={handleClickMenu}
            >
              MENU
            </button>
          </div>
        ) : (
          <div className="flex gap-[50px] items-center justify-center h-full px-[20px]">
            <div className="grow">
              <Link href="/" passHref>
                <span className="font-bold tracking-[3px]">
                  JIYOUNG&apos;S PORTFOLIO
                </span>
              </Link>
            </div>
            <Link href="/about" passHref>
              <span className="font-bold tracking-[3px]">ABOUTME</span>
            </Link>
            <Link href="/projects" passHref>
              <span className="font-bold tracking-[3px]">PROJECT</span>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
