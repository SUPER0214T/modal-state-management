import React, { useContext } from 'react';
import { ModalList } from '../components/Modal/ModalContainer';
import { ModalSetterContext } from '../context/ModalProvider';

function useModal() {
  const setter = useContext(ModalSetterContext);

  const setModalOpen = (type: ModalList) => {
    setter((prev) => [...prev, { type }]);
  };

  const setModalClose = () => {
    setter((prev) => {
      const result = [...prev];
      result.pop();
      return result;
    });
  };

  return { setModalOpen, setModalClose };
}

export default useModal;
