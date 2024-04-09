import React, { createContext, ReactNode, useState } from "react";
import { ModalList } from "../types/modal";

// @todo props 타입 개선 필요
interface ModalItem {
  modalType: ModalList;
  props: any;
  id: string;
}

export const ModalSetterContext = createContext<React.Dispatch<React.SetStateAction<ModalItem[]>>>(() => {});
export const ModalStateContext = createContext<ModalItem[]>([]);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalList, setModalList] = useState<ModalItem[]>([]);

  return (
    <ModalSetterContext.Provider value={setModalList}>
      <ModalStateContext.Provider value={modalList}>{children}</ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
}
