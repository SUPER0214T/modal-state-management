import React, { useState } from 'react';
import styled from 'styled-components';
import useModal from '../../hooks/useModal';

let a = 0;

function HangOnModal({
  onClose,
  onBeforeClose,
  onClick,
}: {
  onClose: Function;
  onClick?: Function;
  onBeforeClose?: Function;
}) {
  const { setModalOpen } = useModal();
  const [num, setNum] = useState(1);
  const upNum = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <Overlay>
      <ModalWrap>
        <Contents>
          <h1>This is a Hnag on Modal {num} </h1>
          <CloseButton onClick={() => onClose()}>Close</CloseButton>
          <Button onClick={() => setModalOpen('alertModal')}>
            open Alert modal
          </Button>
          <Button onClick={upNum}>1증가</Button>
          <Button
            onClick={() => {
              a++;
              return setModalOpen('hangOnModal');
            }}
          >
            open Hang on modal
          </Button>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 300px;
  height: fit-content;
  border-radius: 15px;
  background-color: orange;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: red;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Contents = styled.div`
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;
const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;

export default React.memo(HangOnModal);
