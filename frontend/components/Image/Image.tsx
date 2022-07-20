import React, { useState, useRef, useEffect } from 'react';
import CustomImage from './Image.styled';

interface Props {
  lazy: boolean;
  threshold: number;
  src?: string;
  placeholder: string;
  width: number | string;
  height: number | string;
  alt: string;
  mode: string;
  block: boolean;
}

const defaultProps = {
  lazy: false,
  threshold: 0.5,
  placeholder: 'https://mygbs.s3.ap-northeast-2.amazonaws.com/whiteBox.png',
  width: '300px',
  height: '300px',
  alt: 'Image',
  mode: 'cover',
  block: true,
};

let observer = null;

const onIntersection: IntersectionObserverCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent('loadImage'));
    }
  });
};

const Image = ({
  lazy,
  threshold,
  placeholder,
  src,
  width,
  height,
  alt,
  mode,
  block,
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoadImage = () => setLoaded(true);

    const imgElement = imgRef.current;
    if (imgElement) imgElement.addEventListener('loadImage', handleLoadImage);

    return () => {
      if (imgElement)
        imgElement.removeEventListener('loadImage', handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;

    observer = new IntersectionObserver(onIntersection, { threshold });
    if (imgRef.current) observer.observe(imgRef.current);
  }, [lazy, threshold]);

  return (
    <CustomImage
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      block={block}
      width={width}
      height={height}
      mode={mode}
    />
  );
};

Image.defaultProps = defaultProps;

export default Image;
