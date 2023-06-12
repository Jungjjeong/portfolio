'use client';

import { Button, Modal, ThemeButton, Title } from '../components';
import { cover, cover_m, profile, projects_lg, projects_mb } from '../assets';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useModal } from '../hooks';
import { createPortal } from 'react-dom';
import Link from 'next/link';

const Home = () => {
  const [isSend, setIsSend] = useState<boolean>(false);
  const [initialHeight, setInitialHeight] = useState<number>(0);
  const [calcScrollVal, setCalcScrollVal] = useState<number>(1);
  const { isOpen, modalHandler, portalElement } = useModal();
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (!initialHeight) return;

    const options = { root: null, threshold: 0.3 };
    observer.current = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
          container.classList.add('animate-fadeIn');
        }
      });
    }, options);

    const targets = document.querySelectorAll('.fade_class');

    targets.forEach((target) => {
      observer.current && observer.current.observe(target);
    });
  }, [initialHeight]);

  useEffect(() => {
    if (!initialHeight) return;
    if (!isSend) return;

    const inputList =
      document.body.querySelector('#contactForm')?.querySelectorAll('input') ||
      [];
    const textArea = document.body.querySelector(
      '#umessage'
    ) as HTMLTextAreaElement;
    const emptyInputList = [...inputList].filter(
      (input) => !input.value.length
    );

    if (!!emptyInputList.length || !textArea.value.length) {
      alert('모든 정보를 입력해주세요');
      setIsSend(false);
      return;
    }

    modalHandler();
  }, [isSend, initialHeight]);

  useEffect(() => {
    if (!initialHeight) return;
    if (isOpen) return;

    const inputList =
      document.body.querySelector('#contactForm')?.querySelectorAll('input') ||
      [];
    const textArea = document.body.querySelector(
      '#umessage'
    ) as HTMLTextAreaElement;

    inputList.forEach((input) => (input.value = ''));
    textArea.value = '';
    setIsSend(false);
  }, [isOpen, initialHeight]);

  useEffect(() => {
    if (!window.innerHeight) return;
    setInitialHeight(window.innerHeight);
  }, []);

  const calcScrollStyle = useCallback(() => {
    if (innerWidth > 700 || !initialHeight) return;

    // screen size section * 2, 0.6 screen size section * 1, header height 제외
    const sectionStartY = initialHeight * 2 + initialHeight * 0.6 - 50;
    const startY = sectionStartY - 200;
    const endY = sectionStartY + 200;
    if (scrollY < startY || scrollY >= endY) return;

    const curCalcScrollVal = (endY - scrollY) / (endY - startY);
    setCalcScrollVal(curCalcScrollVal);
  }, [initialHeight]);

  useEffect(() => {
    window.addEventListener('scroll', calcScrollStyle);

    return () => window.removeEventListener('scroll', calcScrollStyle);
  }, [calcScrollStyle, initialHeight]);

  return (
    <>
      {!!initialHeight && (
        <div className="h-full">
          {/* NOTE: Main Image section */}
          <section className="relative h-full">
            <div className="absolute top-[15px] md:top-[20px] right-[15px] md:right-[20px]">
              <ThemeButton />
            </div>

            <div className="absolute top-[40%] md:top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-fit mx-auto z-20">
              <div className="animate-fadeIn text-gray font-semibold flex flex-col gap-[30px] lg:gap-[20px]">
                <div className="flex flex-col items-center text-2xl md:text-3xl lg:text-extra">
                  <p className="whitespace-nowrap">안녕하세요 해윰입니다.</p>
                  <p className="whitespace-nowrap">
                    프론트엔드 개발을 하고 있어요.
                  </p>
                </div>

                {/* buttons */}
                <div className="flex gap-[10px] w-fit z-20 mx-auto">
                  <a
                    target="_blank"
                    href="https://github.com/Jungjjeong"
                    rel="noopener noreferrer"
                  >
                    <Button text="GITHUB" styleType="dark" />
                  </a>
                  <a
                    target="_blank"
                    href="https://blog.haeyum.me/"
                    rel="noopener noreferrer"
                  >
                    <Button text="BLOG" styleType="dark" />
                  </a>
                  <a
                    target="_blank"
                    href="mailto:sky990106@naver.com"
                    rel="noopener noreferrer"
                  >
                    <Button text="EMAIL" styleType="dark" />
                  </a>
                </div>
              </div>
            </div>

            {/* NOTE: 배경 이미지 -> 중간 사이즈 UI (md)부터 분기처리 */}
            <div
              className="w-full overflow-hidden relative"
              style={{ height: initialHeight - 50 }}
            >
              <div className="absolute top-0 left-0 h-full w-full bg-black/50 z-10" />
              <Image
                src={cover}
                alt="Cover Image"
                style={{ objectFit: 'cover', height: '100%' }}
                className="md:block hidden animate-scaleUp"
              />
              <Image
                src={cover_m}
                alt="Cover Image"
                style={{ objectFit: 'cover', height: '100%' }}
                className="md:hidden block animate-scaleUp"
              />
            </div>
          </section>

          {/* NOTE: Description section */}
          <section
            className="bg-[#f9fafb] dark:bg-dark-1 dark:text-gray px-[20px]"
            style={{ height: initialHeight * 0.6 }}
          >
            <div className="w-fit h-full mx-auto flex flex-col gap-2 justify-center items-center font-semibold text-center text-2xl md:text-3xl fade_class">
              <p>
                <span className="whitespace-nowrap">
                  깊이 있는 고민을 바탕으로
                </span>{' '}
                <span className="whitespace-nowrap">
                  적극적인 자세를 가집니다.
                </span>
              </p>
              <p>
                <span className="whitespace-nowrap">배우고 기록하고</span>{' '}
                <span className="whitespace-nowrap">
                  제 것으로 녹여내는 과정을 좋아합니다.
                </span>
              </p>
            </div>
          </section>

          {/* 소개 1 : About me */}
          <section
            className="flex justify-center px-[20px]"
            style={{ height: initialHeight }}
          >
            <div className="w-full max-w-[730px] mx-auto flex flex-col-reverse md:flex-row justify-center md:justify-between items-center fade_class gap-5 md:gap-0">
              <div className="text-2xl md:text-3xl font-semibold flex flex-col gap-5 text-center md:text-start whitespace-nowrap">
                <div>
                  <p>안녕하세요.</p>
                  <p>주니어 프론트엔드 개발자</p>
                  <p>정지영 입니다.</p>
                </div>
                <Link href="/about" className="w-fit m-auto md:m-0">
                  <Button text="ABOUTME" styleType="dark" />
                </Link>
              </div>
              <div>
                <Image
                  src={profile}
                  alt="about me introduce Image"
                  width={330}
                  height={345}
                />
              </div>
            </div>
          </section>

          {/* 소개 2: Projects */}
          <section
            className="md:h-screen flex justify-center md:px-[20px] bg-[#f9fafb] dark:bg-dark-1 py-10 md:py-0"
            style={{
              minHeight: initialHeight,
            }}
          >
            <div className="w-full max-w-[730px] mx-auto flex flex-col-reverse md:flex-row justify-center md:justify-between items-center overflow-hidden fade_class gap-10 md:gap-0">
              <Image
                src={projects_lg}
                alt="projects introduce Image"
                width={470}
                height={1266}
                className="pt-96 hidden md:block"
              />
              <div className="w-[700px]">
                <Image
                  src={projects_mb}
                  alt="projects introduce Image"
                  className="block md:hidden z-10"
                  style={{
                    transform: `translate3d(calc(((700px - 100vw) * ${calcScrollVal}) - (700px - 100vw) * 0.5), 0px, 0px)`,
                  }}
                />
              </div>

              <div className="text-2xl md:text-3xl font-semibold flex flex-col gap-5 items-end text-center md:text-end whitespace-nowrap">
                <div>
                  <p>저는 지금까지</p>
                  <p>이러한 프로젝트들을</p>
                  <p>함께 해왔어요.</p>
                </div>
                <Link href="/projects" className="w-fit m-auto md:m-0">
                  <Button text="PROJECTS" styleType="dark" />
                </Link>
              </div>
            </div>
          </section>

          <section
            className="flex justify-center px-[20px]"
            style={{ height: initialHeight }}
          >
            <div className="w-full max-w-[710px] mx-auto flex flex-col justify-center fade_class">
              <Title text="CONTACT WITH ME" />
              <h3 className="w-fit mx-auto text-sm font-medium">
                📮 매일 확인하고 있어요!
              </h3>
              <form
                className="flex flex-col gap-5 my-[40px]"
                method="POST"
                data-email="sky990106@naver.com"
                action="https://script.google.com/macros/s/AKfycbxT2ToXg_Qimhx1WNeF_j8NkIvSgI8IQqpncd2WIYoe9HQRTl2HmfE2H0XIVZVMXM8tvA/exec"
                target="frAttachFiles"
                id="contactForm"
                onSubmit={() => setIsSend(true)}
              >
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  id="uname"
                  className="rounded-md border p-[10px] focus:outline-gray-5 dark:border-dark-1 dark:bg-dark-1 dark:focus:outline-dark-1"
                />
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="uemail"
                  className="rounded-md border p-[10px] focus:outline-gray-5 dark:border-dark-1 dark:bg-dark-1 dark:focus:outline-dark-1"
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  id="umessage"
                  className="rounded-md border p-[10px] min-h-[250px] focus:outline-gray-5 align-text-top resize-none dark:border-dark-1 dark:bg-dark-1 dark:focus:outline-dark-1"
                />
              </form>
              <Button
                styleType="dark"
                text="SEND"
                type="submit"
                form="contactForm"
              />
            </div>
          </section>
          <iframe name="frAttachFiles" className="hidden" />
          {isOpen && portalElement
            ? createPortal(<Modal modalHandler={modalHandler} />, portalElement)
            : null}
        </div>
      )}
    </>
  );
};

export default Home;
