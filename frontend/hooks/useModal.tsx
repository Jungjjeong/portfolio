'use client';

import { useState, useEffect } from 'react';

type TModalReturn = {
  isOpen: boolean;
  modalHandler: () => void;
  portalElement: Element | null;
};

const useModal = (): TModalReturn => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  let [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('portal'));
  }, [isOpen]);

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, modalHandler, portalElement };
};

export default useModal;
