'use client';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useEffect, useState } from 'react';

import Button from '../Button';


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
          aria-label="scroll to top button"
        />
      )}
    </>
  );
};
export default ScrollButton;
