import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalList } from '../components/Modal/ModalContainer';
import { ModalSetterContext } from '../context/ModalProvider';

function useModal() {
  const setter = useContext(ModalSetterContext);
  const navigate = useNavigate();

  const setModalOpen = (type: ModalList) => {
    setter((prev) => [...prev, { type }]);
  };

  const setModalClose = (goTo?: string) => {
    setter((prev) => {
      const result = [...prev];
      result.pop();
      return result;
    });

    if (goTo !== undefined) {
      navigate(goTo);
    }
  };

  return { setModalOpen, setModalClose };
}

export default useModal;
