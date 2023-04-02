import { StaticImageData } from 'next/image';

export interface IProject {
  id: number;
  imageSrc: StaticImageData;
  title: string;
  description: string;
  period: {
    start: string;
    end: string;
  };
  devStackList: string[];
  linkList: {
    title: string;
    link: string;
  }[];
  contentList?: IContent[];
  preview?: string;
}

export interface IContent {
  title: string;
  content: IContentItem[];
}

export interface IContentItem {
  contentTitle: string;
  contentDescription: string | string[];
}
