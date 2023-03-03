import React from 'react';
import logo from './logo.svg';
import './App.css';
import useModal from './hooks/useModal';
import ModalContainer from './components/Modal/ModalContainer';
import styled from 'styled-components';

function App() {
  const { setModalOpen, setModalClose } = useModal();

  return (
    <div className="App">
      <button onClick={() => setModalOpen('alertModal')}>
        open AlertModal
      </button>
      <button
        style={{ backgroundColor: 'orange' }}
        onClick={() => setModalOpen('hangOnModal')}
      >
        open HangOnModal
      </button>
      <hr />
      <button onClick={() => setModalClose()}>close pop</button>
      <ModalContainer />
    </div>
  );
}

export default App;
