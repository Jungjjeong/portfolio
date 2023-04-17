import { StaticImageData } from 'next/image';

export interface IProject {
  id: number;
  imageSrc: StaticImageData;
  imageList?: StaticImageData[];
  youtubeList?: string[];
  title: string;
  description: string;
  period: {
    start: string;
    end?: string;
  };
  devStackList?: string[];
  linkList: {
    title: string;
    link: string;
  }[];
  contentList?: IContent[];
}

export interface IContent {
  title: string;
  content: IContentItem[];
}

export interface IContentItem {
  contentTitle: string;
  contentDescription: string | string[];
}
