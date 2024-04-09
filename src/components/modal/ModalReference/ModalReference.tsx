import React, { createContext, useContext, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import ModalHeader from './ModalHeader';
import './ModalReference.css';

type ModalReferenceProps = {
  children: React.ReactNode;
  className?: string;
};

const ModalReferenceContext = createContext<{ defaultClassName: string }>({
  defaultClassName: '',
});

function ModalReference({
  children,
  className = 'modal',
}: ModalReferenceProps) {
  const [defaultClassName, setDefaultClassName] = useState('');
  const value = { defaultClassName };

  useEffect(() => {
    setDefaultClassName(className);
  }, [className]);

  return (
    <ReactModal
      className={defaultClassName}
      overlayClassName={`${defaultClassName}-overlay`}
      isOpen
    >
      <ModalReferenceContext.Provider value={value}>
        {children}
      </ModalReferenceContext.Provider>
    </ReactModal>
  );
}

function Header({
  headerText,
  children,
}: {
  headerText: string;
  children?: React.ReactNode;
}) {
  return <ModalHeader text={headerText}>{children}</ModalHeader>;
}

function Body({ children }: { children: React.ReactNode }) {
  const { defaultClassName } = useContext(ModalReferenceContext);

  return <div className={`${defaultClassName}-body`}>{children}</div>;
}

function Footer({ children }: { children: React.ReactNode }) {
  return <div className="footer">{children}</div>;
}

function CancelBtn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div className="footer__btn footer__cancel-btn" onClick={onClick}>
      {children}
    </div>
  );
}

function ConfirmBtn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div className="footer__btn footer__confirm-btn" onClick={onClick}>
      {children}
    </div>
  );
}

ModalReference.Header = Header;
ModalReference.Body = Body;
ModalReference.Footer = Footer;
ModalReference.CancelBtn = CancelBtn;
ModalReference.ConfirmBtn = ConfirmBtn;

export default ModalReference;
