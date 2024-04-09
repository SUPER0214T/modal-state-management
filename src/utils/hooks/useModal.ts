import { useContext } from "react";
import { ModalSetterContext } from "../../context/ModalProvider";
import { ModalList } from "../../types/modal";
import { MODAL_LIST } from "../../constants/ModalList";

function useModal() {
  const setter = useContext(ModalSetterContext);
  const setModalOpen = <M extends ModalList, T extends Parameters<(typeof MODAL_LIST)[M]>>(
    modalType: M,
    props: Omit<Parameters<(typeof MODAL_LIST)[M]>[0], "id" | "setModalClose">,
  ): string => {
    const id = Date.now().toString();
    setter((prev) => [
      ...prev,
      {
        modalType,
        props,
        id,
      },
    ]);

    return id;
  };
  const setModalClose = async (id: string, beforeClose: Function = () => {}): Promise<void> => {
    await beforeClose();

    setter((prev) => {
      const copy = [...prev];
      const index = copy.findIndex((modalInfo) => modalInfo.id === id);
      if (index === -1) {
        console.error(`해당 id(${id})의 modal이 존재하지 않습니다.\n해당 모달은 존재하지 않거나 이미 삭제되었습니다.`);
        return copy;
      }
      copy.splice(index, 1);

      return copy;
    });
  };

  return { setModalOpen, setModalClose };
}

export default useModal;
