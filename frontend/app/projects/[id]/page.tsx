'use client';

import { useEffect, useState } from 'react';
import {
  awardProjectData,
  presentationData,
  sideProjectData,
} from '../../../data/project';
import { IProject } from '../../../types/project';
import { EnlargedImage, Tag } from '../../../components';
import Image from 'next/image';
import YouTube from 'react-youtube';

const ProjectDetailPage = (pagePrams: any) => {
  const [project, setProject] = useState<IProject>();
  const [selectedImageIdx, setSelectedImageIdx] = useState<number>(-1);
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

  useEffect(() => {
    if (!pagePrams) return;
    getProjectData(pagePrams.params.id);
  }, [pagePrams]);

  const handleClickImage = (idx: number) => {
    if (selectedImageIdx !== -1) {
      setSelectedImageIdx(-1);
      return;
    }

    setSelectedImageIdx(idx);
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
    <div className="my-[50px] flex flex-col gap-[70px] max-w-[710px] px-[20px] mx-auto pb-[50px]">
      {/* NOTE: Header */}
      <section className="flex flex-col gap-[5px] pt-[50px]">
        <p className="text-gray-3 text-sm">
          {period.start}
          {!!period.end && ` ~ ${period.end}`}
        </p>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>{description}</p>
        {!!devStackList && (
          <div className="w-full flex gap-[6px] flex-wrap">
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
              className="text-base font-bold underline w-fit"
            >
              👉🏻 {title}
            </a>
          ))}
        </div>
      </section>

      {/* NOTE: Youtube section */}
      {youtubeList && (
        <section>
          <h1 className="text-2xl font-bold mb-[30px]">
            프로젝트 영상
            <hr />
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
            <h1 className="text-2xl font-bold mb-[30px]">
              서비스 사진
              <hr />
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
          {selectedImageIdx !== -1 && (
            <EnlargedImage
              imageData={imageList[selectedImageIdx]}
              onClickDim={handleClickImage}
            />
          )}
        </>
      )}

      {/* NOTE: Content */}
      <section className="flex flex-col gap-[60px]">
        {/* intro */}
        {!!contentList && (
          <>
            {contentList.map(({ title, content }, idx) => (
              <div key={idx}>
                <h1 className="text-2xl font-bold mb-[30px]">
                  {title}
                  <hr />
                </h1>
                <div className="flex flex-col gap-[25px]">
                  {content.map(
                    ({ contentTitle, contentDescription }, contentIdx) => (
                      <div className="mb-[10px]" key={contentIdx}>
                        <h2 className="text-xl font-bold">{contentTitle}</h2>
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
