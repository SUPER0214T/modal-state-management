import React from 'react';
import { ModalProps } from '../../../types/modal';
import ModalReference from '../ModalReference/ModalReference';
import './AlertModal.css';

interface AlertModalProps extends ModalProps {
  body: React.ReactNode;
  onClickConfirm: () => void;
}

export function AlertModal({ body, onClickConfirm }: AlertModalProps) {
  return (
    <ModalReference className="alert-modal">
      <ModalReference.Header headerText={''} />
      <ModalReference.Body>{body}</ModalReference.Body>
      <ModalReference.Footer>
        <ModalReference.ConfirmBtn onClick={onClickConfirm}>
          확인
        </ModalReference.ConfirmBtn>
      </ModalReference.Footer>
    </ModalReference>
  );
}

export default AlertModal;
