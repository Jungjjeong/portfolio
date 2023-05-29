'use client';

import Link from 'next/link';
import { MouseEventHandler, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import { useLockBodyScroll } from '../../hooks';

const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [, setIsLocked] = useLockBodyScroll();
  const pathName = usePathname();

  useEffect(() => {
    setIsLocked(isOpenMenu);
  }, [isOpenMenu]);

  const handleClickMenu: MouseEventHandler = (e) => {
    setIsOpenMenu(!isOpenMenu);
  };

  const renderHighlight = (navName: string) => {
    if (navName === pathName) return 'hidden';
    return 'block text-gray-2 dark:text-gray-4';
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
            isOpenMenu
              ? 'inset-x-0 top-0 opacity-100'
              : 'top-[-100vh] opacity-0'
          } fixed w-full h-fit z-50 bg-gray dark:bg-dark rounded-b-lg p-[20px] border-box transition-all duration-300`}
        >
          <h1 className="mb-[20px] font-medium tracking-[3px] ">MENU</h1>
          <div className="flex flex-col gap-[10px] font-medium tracking-[3px] text-sm">
            <Link
              href="/"
              prefetch={false}
              onClick={handleClickMenu}
              className={renderHighlight('/')}
            >
              <span>JIYOUNG&apos;S PORTFOLIO</span>
            </Link>
            <Link
              href="/about"
              prefetch={false}
              onClick={handleClickMenu}
              className={renderHighlight('/about')}
            >
              <span>ABOUTME</span>
            </Link>
            <Link
              href="/projects"
              prefetch={false}
              onClick={handleClickMenu}
              className={renderHighlight('/projects')}
            >
              <span>PROJECT</span>
            </Link>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-30 box-border w-full h-[50px] px-[15px] bg-gray dark:bg-dark border-b border-gray-6 dark:border-dark">
        <div className="flex items-center justify-end lg:hidden h-full">
          <div className="grow">
            <Link href="/" prefetch={false}>
              <span className="font-medium tracking-[3px]">HY</span>
            </Link>
          </div>
          <button
            className="font-medium tracking-[3px] rounded-[5px] px-[4px] py-[2px]"
            onClick={handleClickMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-[50px] lg:items-center lg:justify-center h-full px-[20px] max-w-[1240px] m-auto">
          <div className="grow">
            <Link href="/" prefetch={false}>
              <span className="font-semibold tracking-[3px]">
                JIYOUNG&apos;S PORTFOLIO
              </span>
            </Link>
          </div>
          <Link href="/about" prefetch={false}>
            <span className="font-medium tracking-[3px]">ABOUTME</span>
          </Link>
          <Link href="/projects" prefetch={false}>
            <span className="font-medium tracking-[3px]">PROJECT</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
