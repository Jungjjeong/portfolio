'use client';

import { useEffect, useState } from 'react';
import { sideProjectData } from '../../../data/project';
import { IProject } from '../../../types/project';
import Image from 'next/image';
import { Tag } from '../../../components';

interface IPageProps {
  params: { id: number };
}

const ProjectDetailPage = ({ params }: IPageProps) => {
  const [project, setProject] = useState<IProject>();
  const getProjectData = (id: number) => {
    const findProject = sideProjectData.find(
      ({ id: projectId }) => projectId === Number(id)
    );

    setProject(findProject);
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
    linkList,
    preview,
    contentList,
  } = project;

  return (
    <div className="max-w-[750px] mx-auto my-[50px] flex flex-col gap-[60px]">
      {/* NOTE: Header */}
      <section className="flex flex-col gap-[5px]">
        <p className="text-gray-3 text-sm">
          {period.start} ~ {period.end}
        </p>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="w-full flex gap-[6px]">
          {devStackList.map((stack) => (
            <Tag tagName={stack} />
          ))}
        </div>
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

      {/* NOTE: Content */}
      <section className="flex flex-col gap-[50px]">
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
                          dangerouslySetInnerHTML={{
                            __html: contentDescription,
                          }}
                        />
                      ) : (
                        <div>
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
