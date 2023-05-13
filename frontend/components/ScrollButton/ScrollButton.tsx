'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../';
import { ReactNode } from 'react';

const ScrollButton = () => {
  const handleClickScrollButton = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button
      text={(<FontAwesomeIcon icon={faChevronUp} size="xl" />) as ReactNode}
      styleType="round"
      onClick={handleClickScrollButton}
      className="fixed bottom-5 right-5 z-50"
    />
  );
};
export default ScrollButton;
