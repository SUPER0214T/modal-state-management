import { MODAL_LIST } from '../constants/ModalList';

export type ModalList = keyof typeof MODAL_LIST;

export interface ModalProps {
  id: string;
  setModalClose: (callback: Function) => void;
}
