'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import YouTube from 'react-youtube';

import { EnlargedImage, Tag } from '../../../components';
import {
  awardProjectData,
  presentationData,
  sideProjectData,
} from '../../../data/project';
import { useModal } from '../../../hooks';
import { IProject } from '../../../types/project';



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
    <div className="mx-auto mb-[50px] flex max-w-[710px] flex-col gap-[70px] px-[20px] pb-[50px] md:my-[50px]">
      {/* NOTE: Header */}
      <section className="flex animate-fadeIn flex-col gap-[5px] pt-[50px]">
        <p className="text-sm text-gray-3 dark:text-gray-4">
          {period.start}
          {!!period.end && ` ~ ${period.end}`}
        </p>
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p>{description}</p>
        {!!devStackList && (
          <div className="mb-[5px] flex w-full flex-wrap gap-[6px]">
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
        <div className="mt-[10px] flex flex-col gap-[5px]">
          {linkList.map(({ link, title }, idx) => (
            <a
              key={idx}
              target="_blank"
              href={link}
              rel="noopener noreferrer"
              className="w-fit text-base font-medium underline dark:text-gray-4"
            >
              👉🏻 {title}
            </a>
          ))}
        </div>
      </section>

      {/* NOTE: Youtube section */}
      {youtubeList && (
        <section>
          <h1 className="mb-[30px] text-2xl font-semibold">
            프로젝트 영상
            {hrDom}
          </h1>
          <div className="flex w-full flex-col gap-[10px]">
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
            <h1 className="mb-[30px] text-2xl font-semibold">
              서비스 사진
              {hrDom}
            </h1>
            <div className="scroll_none w-full overflow-x-scroll">
              <div className="flex items-center gap-[20px]">
                {imageList.map((image, idx) => (
                  <div
                    className="h-auto w-[525px] shrink-0 cursor-pointer"
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
                <h1 className="mb-[30px] text-2xl font-semibold">
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
  );
};

export default ProjectDetailPage;
