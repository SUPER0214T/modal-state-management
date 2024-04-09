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

  return (
    <div className="app">
      <div
        onClick={handleOpenModalClick}
        className="app__btn app__open-alert-btn"
      >
        Alert 모달 열기
      </div>
      <div
        onClick={handleOpenModalClick}
        className="app__btn app__open-user-decision-btn"
      >
        UserDecision 모달 열기
      </div>
      <ModalContainer />
    </div>
  );
}

export default App;
