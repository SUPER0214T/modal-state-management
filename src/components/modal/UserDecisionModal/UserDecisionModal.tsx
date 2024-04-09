import React from 'react';
import { ModalProps } from '../../../types/modal';
import ModalReference from '../ModalReference/ModalReference';
import './UserDecisionModal.css';

interface UserDecisionModalProps extends ModalProps {
  body: React.ReactNode;
  onClickCancel: () => void;
  onClickConfirm: () => void;
}

export function UserDecisionModal({
  onClickCancel,
  onClickConfirm,
  body,
}: UserDecisionModalProps) {
  return (
    <ModalReference className="user-decision-modal">
      <ModalReference.Body>{body}</ModalReference.Body>
      <ModalReference.Footer>
        <ModalReference.CancelBtn onClick={onClickCancel}>
          취소
        </ModalReference.CancelBtn>
        <ModalReference.ConfirmBtn onClick={onClickConfirm}>
          확인
        </ModalReference.ConfirmBtn>
      </ModalReference.Footer>
    </ModalReference>
  );
}
