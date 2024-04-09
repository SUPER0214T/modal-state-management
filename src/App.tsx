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
    <div>
      <div onClick={handleOpenModalClick} style={{ border: '1px solid black' }}>
        모달 열기
      </div>
      <ModalContainer />
    </div>
  );
}

export default App;
