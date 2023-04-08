'use client';

import { useEffect, useState } from 'react';
import {
  awardProjectData,
  presentationData,
  sideProjectData,
} from '../../../data/project';
import { IProject } from '../../../types/project';
import { Tag } from '../../../components';
import Image from 'next/image';
import YouTube from 'react-youtube';

interface IPageProps {
  params: { id: number };
}

const ProjectDetailPage = ({ params }: IPageProps) => {
  const [project, setProject] = useState<IProject>();
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
    getProjectData(params.id);
  }, [params.id]);

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
    preview,
    contentList,
  } = project;

  return (
    <div className="max-w-[720px] mx-auto my-[50px] flex flex-col gap-[70px] px-[15px]">
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
            {devStackList.map((stack) => (
              <Tag tagName={stack} />
            ))}
          </div>
        )}
        <Image
          src={imageSrc}
          width={800}
          height={500}
          alt="project Thumbnail"
        />
        <div>
          {linkList.map(({ link, title }, idx) => (
            <a key={idx} target="_blank" href={link} rel="noopener noreferrer">
              <h1 className="text-xl font-bold w-fit underline">👉🏻 {title}</h1>
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
        <section>
          <h1 className="text-2xl font-bold mb-[30px]">
            서비스 사진
            <hr />
          </h1>
          <div className="w-full overflow-x-scroll scroll_none">
            <div className="flex items-center gap-[20px]">
              {imageList.map((image) => (
                <div className="w-[525px] h-auto shrink-0">
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
      )}

      {/* NOTE: Content */}
      <section className="flex flex-col gap-[60px]">
        {/* intro */}
        {!!contentList && (
          <>
            {contentList.map(({ title, content }) => (
              <div>
                <h1 className="text-2xl font-bold mb-[30px]">
                  {title}
                  <hr />
                </h1>
                <div className="flex flex-col gap-[25px]">
                  {content.map(({ contentTitle, contentDescription }) => (
                    <div className="mb-[10px]">
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
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
        {!!preview && (
          <div
            dangerouslySetInnerHTML={{
              __html: preview,
            }}
          />
        )}
      </section>
    </div>
  );
};

export default ProjectDetailPage;
