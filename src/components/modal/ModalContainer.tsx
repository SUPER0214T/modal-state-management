import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalStateContext } from '../../context/ModalProvider';
import { MODAL_LIST } from '../../constants/ModalList';
import useModal from '../../utils/hooks/useModal';

export function ModalContainer() {
  const { setModalClose } = useModal();
  const modalList = useContext(ModalStateContext);
  if (modalList.length === 0) {
    document.body.style.overflow = 'unset';
    return null;
  }
  document.body.style.overflow = 'clip';

  const renderModal = modalList?.map((modalItem) => {
    const Modal = MODAL_LIST[modalItem.modalType];

    return (
      <Modal
        id={modalItem.id}
        setModalClose={(callback: Function) =>
          setModalClose(modalItem.id, callback)
        }
        {...modalItem.props}
      />
    );
  });

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(<>{renderModal}</>, modalRoot);
}
