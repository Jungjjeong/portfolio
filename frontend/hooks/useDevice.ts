import { useState } from 'react';
import { useWindowResize } from './';

export const MEDIA_TYPE = {
  MOBILE: {
    TYPE: 'mobile',
    MAXSIZE: 575,
  },
  TABLET: {
    TYPE: 'tablet',
    MINSIZE: 576,
    MAXSIZE: 1024,
  },
  DESKTOP: {
    TYPE: 'desktop',
    MINSIZE: 1025,
  },
} as const;

export const DEVICE_TYPE = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
  NONE: 'none',
} as const;
export type DEVICE_TYPE = (typeof DEVICE_TYPE)[keyof typeof DEVICE_TYPE];

const useDevice = () => {
  const [device, setDevice] = useState<DEVICE_TYPE>(DEVICE_TYPE.NONE);
  const handleResize = () => {
    const whichDevice =
      innerWidth <= MEDIA_TYPE.MOBILE.MAXSIZE
        ? MEDIA_TYPE.MOBILE.TYPE
        : innerWidth >= MEDIA_TYPE.TABLET.MINSIZE &&
          innerWidth <= MEDIA_TYPE.TABLET.MAXSIZE
        ? MEDIA_TYPE.TABLET.TYPE
        : MEDIA_TYPE.DESKTOP.TYPE;
    setDevice(whichDevice);
  };

  const innerWidth = useWindowResize(handleResize, true);

  return {
    device,
    innerWidth,
    isMobile: device === DEVICE_TYPE.MOBILE,
    isTablet: device === DEVICE_TYPE.TABLET,
    isDesktop: device === DEVICE_TYPE.DESKTOP,
    exceptMobile: device !== DEVICE_TYPE.MOBILE,
    isNone: device === DEVICE_TYPE.NONE,
  };
};

export default useDevice;
