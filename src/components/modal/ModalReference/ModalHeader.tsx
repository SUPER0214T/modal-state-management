import React from 'react';

interface ModalHeaderProps {
  text?: string;
  children?: React.ReactNode;
}

function ModalHeader({ text, children }: ModalHeaderProps) {
  const defaultClassName = 'modal-header';
  const defaultTextClassName = `${defaultClassName}__text`;

  return (
    <div className={defaultClassName}>
      <span className={defaultTextClassName}>{text}</span>
      {children}
    </div>
  );
}

export default ModalHeader;
