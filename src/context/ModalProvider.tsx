import React, {
  createContext,
  HTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import { ModalList } from '../components/Modal/ModalContainer';

interface ModalItem {
  type: ModalList;
}

export const ModalSetterContext = createContext<
  React.Dispatch<React.SetStateAction<ModalItem[]>>
>(() => {});
export const ModalStateContext = createContext<ModalItem[]>([]);

function ModalProvider({ children }: { children: ReactNode }) {
  const [modalList, setModalList] = useState<ModalItem[]>([]);

  return (
    <ModalSetterContext.Provider value={setModalList}>
      <ModalStateContext.Provider value={modalList}>
        {children}
      </ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
}

export default ModalProvider;
