'use client';

import { useEffect, useState } from 'react';
import {
  awardProjectData,
  presentationData,
  sideProjectData,
} from '../../../data/project';
import { IProject } from '../../../types/project';
import { EnlargedImage, ScrollButton, Tag } from '../../../components';
import Image from 'next/image';
import YouTube from 'react-youtube';
import { useModal } from '../../../hooks';
import { createPortal } from 'react-dom';

const ProjectDetailPage = (pagePrams: any) => {
  const [project, setProject] = useState<IProject>();
  const [selectedImageIdx, setSelectedImageIdx] = useState<number>(-1);
  const { isOpen, modalHandler, portalElement } = useModal();
  const getProjectData = (id: number) => {
    if (id < 7) {
      const findProject = sideProjectData.find(
        ({ id: projectId }) => projectId === Number(id)
      );
      setProject(findProject);
      return;
    } else if (id >= 7 && id < 10) {
      const findAwardProject = awardProjectData.find(
        ({ id: projectId }) => projectId === Number(id)
      );
      setProject(findAwardProject);
      return;
    }

    const findPresentationData = presentationData.find(
      ({ id: projectId }) => projectId === Number(id)
    );
    setProject(findPresentationData);
  };
  const hrDom = <hr className="dark:border-dark-2" />;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!pagePrams) return;
    getProjectData(pagePrams.params.id);
  }, [pagePrams]);

  useEffect(() => {
    if (isOpen) return;
    setSelectedImageIdx(-1);
  }, [isOpen]);

  const handleClickImage = (idx: number) => {
    setSelectedImageIdx(idx);
    modalHandler();
  };

  if (!project) return <></>;
  const {
    id,
    imageSrc,
    title,
    description,
    period,
    devStackList,
    imageList,
    youtubeList,
    linkList,
    contentList,
  } = project;

  return (
    <>
      <ScrollButton />
      <div className="mb-[50px] md:my-[50px] flex flex-col gap-[70px] max-w-[710px] px-[20px] mx-auto pb-[50px]">
        {/* NOTE: Header */}
        <section className="flex flex-col gap-[5px] pt-[50px] animate-fadeIn">
          <p className="text-gray-3 dark:text-gray-4 text-sm">
            {period.start}
            {!!period.end && ` ~ ${period.end}`}
          </p>
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p>{description}</p>
          {!!devStackList && (
            <div className="w-full flex gap-[6px] flex-wrap mb-[5px]">
              {devStackList.map((stack, idx) => (
                <Tag tagName={stack} key={idx} />
              ))}
            </div>
          )}
          <Image
            src={imageSrc}
            width={800}
            height={500}
            alt="project Thumbnail"
          />
          <div className="flex flex-col gap-[5px] mt-[10px]">
            {linkList.map(({ link, title }, idx) => (
              <a
                key={idx}
                target="_blank"
                href={link}
                rel="noopener noreferrer"
                className="text-base font-medium underline w-fit dark:text-gray-4"
              >
                👉🏻 {title}
              </a>
            ))}
          </div>
        </section>

        {/* NOTE: Youtube section */}
        {youtubeList && (
          <section>
            <h1 className="text-2xl font-semibold mb-[30px]">
              프로젝트 영상
              {hrDom}
            </h1>
            <div className="w-full flex flex-col gap-[10px]">
              {youtubeList.map((youtube, idx) => (
                <YouTube
                  key={idx}
                  videoId={youtube}
                  opts={{
                    width: '100%',
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {/* NOTE: Service ==Image */}
        {imageList && (
          <>
            <section>
              <h1 className="text-2xl font-semibold mb-[30px]">
                서비스 사진
                {hrDom}
              </h1>
              <div className="w-full overflow-x-scroll scroll_none">
                <div className="flex items-center gap-[20px]">
                  {imageList.map((image, idx) => (
                    <div
                      className="w-[525px] h-auto shrink-0 cursor-pointer"
                      onClick={handleClickImage.bind(this, idx)}
                      key={idx}
                    >
                      <Image
                        src={image}
                        alt="service photo"
                        style={{ borderRadius: 10 }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {selectedImageIdx !== -1 && isOpen && portalElement
              ? createPortal(
                  <EnlargedImage
                    imageListData={imageList}
                    selectedIdx={selectedImageIdx}
                    idxHandler={(idx: number) => setSelectedImageIdx(idx)}
                    dimHandler={modalHandler}
                  />,
                  portalElement
                )
              : null}
          </>
        )}

        {/* NOTE: Content */}
        <section className="flex flex-col gap-[60px]">
          {/* intro */}
          {!!contentList && (
            <>
              {contentList.map(({ title, content }, idx) => (
                <div key={idx}>
                  <h1 className="text-2xl font-semibold mb-[30px]">
                    {title}
                    {hrDom}
                  </h1>
                  <div className="flex flex-col gap-[25px]">
                    {content.map(
                      ({ contentTitle, contentDescription }, contentIdx) => (
                        <div className="mb-[10px]" key={contentIdx}>
                          <h2 className="text-xl font-semibold">
                            {contentTitle}
                          </h2>
                          {typeof contentDescription === 'string' ? (
                            <div
                              className="mb-[5px]"
                              dangerouslySetInnerHTML={{
                                __html: contentDescription,
                              }}
                            />
                          ) : (
                            <div className="mb-[5px]">
                              {contentDescription.map((c, idx) => (
                                <div
                                  key={idx}
                                  dangerouslySetInnerHTML={{
                                    __html: c,
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default ProjectDetailPage;
