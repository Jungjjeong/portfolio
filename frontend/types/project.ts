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
}
