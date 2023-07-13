import { createContext, useState } from 'react';

const ModalContext = createContext<
  | {
      openAlertModal: (message: string, handleConfirm: () => void) => void;
      openHangOnModal: (message: string) => void;
      openErrorModal: () => void;
    }
  | undefined
>(undefined);

type AlertModalInfo = {
  isOpen: boolean;
  message: string;
  handleConfirm: () => void;
  handleCancel?: () => void;
};

type HangOnModalInfo = {
  isOpen: boolean;
  message: string;
};

type ErrorModalInfo = {
  isOpen: boolean;
  message: string;
  handleConfirm: () => void;
};

const alertModalInfoInit: AlertModalInfo = {
  isOpen: false,
  message: '',
  handleConfirm: () => {},
  handleCancel: () => {},
};

const hangOnModalInfoInit: HangOnModalInfo = {
  isOpen: false,
  message: '',
};

const errorModalInfoInit: ErrorModalInfo = {
  isOpen: false,
  message: '',
  handleConfirm: () => {},
};

/**
 * @todo 될 수 있으면 ModalProvider의 내부 clsoe 함수들은 빼내기. 아마 불가능하겠지만?
 */
function ModalProvider({ children }: { children: React.ReactElement }) {
  const [alertModalInfo, setAlertModalInfo] =
    useState<AlertModalInfo>(alertModalInfoInit);
  const [hangOnModalInfo, setHangOnModalInfo] =
    useState<HangOnModalInfo>(hangOnModalInfoInit);
  const [errorModalInfo, setErrorModalInfo] =
    useState<ErrorModalInfo>(errorModalInfoInit);

  // open functions
  const openAlertModal = (
    message: string,
    handleConfirm: () => void,
    handleCancel?: () => void,
  ) => {
    const updateInfo: AlertModalInfo = {
      isOpen: true,
      message,
      handleConfirm,
      handleCancel,
    };

    setAlertModalInfo(updateInfo);
  };

  const openHangOnModal = (message: string) => {
    const updateInfo: HangOnModalInfo = {
      isOpen: true,
      message,
    };

    setHangOnModalInfo(updateInfo);
  };

  const openErrorModal = (message: string, handleConfirm: () => void) => {
    const updateInfo: ErrorModalInfo = {
      isOpen: true,
      message,
      handleConfirm,
    };

    // setAlertModalInfo(updateInfo); 이거 왜 못잡음?
    setErrorModalInfo(updateInfo);
  };

  // close functions
  const closeAlertModal = () => {
    setAlertModalInfo(alertModalInfoInit);
  };

  const closeHangOnModal = () => {
    setHangOnModalInfo(hangOnModalInfoInit);
  };

  const closeErrorModal = () => {
    setErrorModalInfo(errorModalInfoInit);
  };

  // handle functions
  const handleAlertModalConfirm = () => {
    if (alertModalInfo.handleConfirm !== undefined) {
      alertModalInfo.handleConfirm();
    }

    closeAlertModal();
  };

  const handleAlertModalCancel = () => {
    if (alertModalInfo.handleCancel !== undefined) {
      alertModalInfo.handleCancel();
    }

    closeAlertModal();
  };

  const handleErrorModalConfirm = () => {
    if (errorModalInfo.handleConfirm !== undefined) {
      errorModalInfo.handleConfirm();
    }

    closeErrorModal();
  };

  /**
   * @desc hangOnModal은 클릭 버튼이 없기 때문에 사용한 곳에서 닫아줘야 함.
   */
  const handleHangOnModalClose = () => {
    closeHangOnModal();
  };

  return (
    // <ModalContext.Provider
    //   value={{
    //     openErrorModal,
    //     openHangOnModal,
    //     openAlertModal,
    //     closeHangOnModal,
    //   }}
    // >
    //   {children}
    //   <AlertModal
    //     isOpen={alertModalInfo.isOpen}
    //     bodyText={alertModalInfo.message}
    //     onConfirm={alertModalInfo.handleConfirm}
    //     onCancel={alertModalInfo.handleCancel}
    //   />
    //   <HangOnModal
    //     isOpen={hangOnModalInfo.isOpen}
    //     bodyText={hangOnModalInfo.message}
    //   />
    //   <ErrorModal
    //     isOpen={alertModalInfo.isOpen}
    //     bodyText={alertModalInfo.message}
    //     onConfirm={alertModalInfo.handleConfirm}
    //   />
    // </ModalContext.Provider>
    <></>
  );
}
