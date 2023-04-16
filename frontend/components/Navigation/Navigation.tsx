'use client';

import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleClickMenu: MouseEventHandler = (e) => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      {/* MENU MODAL */}
      <div>
        <div
          className={`${
            isOpenMenu ? 'opacity-40' : 'opacity-0 invisible'
          } fixed inset-y-0 w-full h-full bg-black z-40 transition-all duration-200`}
          onClick={handleClickMenu}
        />
        <div
          className={`${
            isOpenMenu ? 'inset-x-0 top-0' : 'top-[-100vh]'
          } fixed w-full h-fit z-50 bg-gray rounded-b-lg p-[20px] border-box transition-all duration-200`}
        >
          <h1 className="mb-[20px] font-bold tracking-[3px] ">MENU</h1>
          <div className="flex flex-col gap-[10px] text-gray-2">
            <Link href="/" prefetch={false} onClick={handleClickMenu}>
              <span className="font-bold tracking-[3px] text-sm">
                JIYOUNG&apos;S PORTFOLIO
              </span>
            </Link>
            <Link href="/about" prefetch={false} onClick={handleClickMenu}>
              <span className="font-bold tracking-[3px] text-sm">ABOUTME</span>
            </Link>
            <Link href="/projects" prefetch={false} onClick={handleClickMenu}>
              <span className="font-bold tracking-[3px] text-sm">PROJECT</span>
            </Link>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-30 box-border w-full h-[50px] px-[15px] bg-gray border-b border-gray-6">
        <div className="flex items-center justify-end lg:hidden h-full">
          <button
            className="font-bold tracking-[3px] rounded-[5px] hover:bg-gray-6 px-[4px] py-[2px]"
            onClick={handleClickMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-[50px] lg:items-center lg:justify-center h-full px-[20px]">
          <div className="grow">
            <Link href="/" prefetch={false}>
              <span className="font-bold tracking-[3px]">
                JIYOUNG&apos;S PORTFOLIO
              </span>
            </Link>
          </div>
          <Link href="/about" prefetch={false}>
            <span className="font-bold tracking-[3px]">ABOUTME</span>
          </Link>
          <Link href="/projects" prefetch={false}>
            <span className="font-bold tracking-[3px]">PROJECT</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
