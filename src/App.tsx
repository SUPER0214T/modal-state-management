import { ModalContainer } from './components/modal/ModalContainer';
import useModal from './utils/hooks/useModal';
import './App.css';

function App() {
  const { setModalClose, setModalOpen } = useModal();
  const handleOpenModalClick = () => {
    const modalId = setModalOpen('AlertModal', {
      body: 'Alert Modal',
      onClickConfirm: () => {
        setModalClose(modalId);
      },
    });
  };

  const handleOpenUserDecisionModalClick = () => {
    const modalId = setModalOpen('UserDecisionModal', {
      body: 'User Decision Modal',
      onClickConfirm: () => {
        setModalClose(modalId);
      },
      onClickCancel: () => {
        setModalClose(modalId);
      },
    });
  };

  return (
    <div className="app">
      <div onClick={handleOpenModalClick} className="app__btn">
        AlertModal
      </div>
      <div onClick={handleOpenUserDecisionModalClick} className="app__btn">
        UserDecisionModal
      </div>
      <ModalContainer />
    </div>
  );
}

export default App;
