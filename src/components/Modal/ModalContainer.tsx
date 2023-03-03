import React, { ReactNode, useContext } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalSetterContext,
  ModalStateContext,
} from '../../context/ModalProvider';
import useModal from '../../hooks/useModal';
import AlertModal from './AlertModal';
import HangOnModal from './HangOnModal';

const MODAL_LIST = {
  alertModal: AlertModal,
  hangOnModal: HangOnModal,
};

export type ModalList = keyof typeof MODAL_LIST;

function ModalContainer() {
  const modalList = useContext(ModalStateContext);
  const { setModalOpen, setModalClose } = useModal();

  if (modalList.length === 0) {
    return null;
  }

  const renderModal = modalList?.map((modalItem) => {
    const Component = MODAL_LIST[modalItem.type];
    return (
      <Component onClose={setModalClose}>
        <h1>안녕 나는 Alert 모달이야</h1>
      </Component>
    );
  });

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;
  return createPortal(<>{renderModal}</>, modalRoot);
}

export default ModalContainer;
