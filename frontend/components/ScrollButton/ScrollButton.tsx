'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { ReactNode, useEffect, useState } from 'react';

const ScrollButton = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    setIsShow(true);
  }, []);

  const handleClickScrollButton = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isShow && (
        <Button
          text={(<FontAwesomeIcon icon={faChevronUp} size="xl" />) as ReactNode}
          styleType="round"
          onClick={handleClickScrollButton}
          className="fixed bottom-5 right-5 z-50"
        />
      )}
    </>
  );
};
export default ScrollButton;
