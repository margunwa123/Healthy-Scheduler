import React, { FC } from 'react';
import * as Icon from 'react-feather';

/**
 * Modal Properties
 */
export interface ModalProps {
  title?: string;
  onClickClose?: React.MouseEventHandler;
}

/**
 * Modal Properties
 */
const Modal: FC<ModalProps> = ({ title, onClickClose, children }) => {
  return (
    <div
      className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen z-50"
      style={{
        background: 'rgba(0,0,0,0.4)',
      }}
    >
      <div
        className="px-4 w-full"
        style={{
          maxWidth: '500px',
        }}
      >
        <div className="w-full bg-white rounded-lg ">
          <ModalHeader title={title} onClickClose={onClickClose} />
          <ModalBody>{children}</ModalBody>
        </div>
      </div>
    </div>
  );
};

interface ModalHeaderProps {
  title: string;
  onClickClose: React.MouseEventHandler;
}

/**
 * Helper component for modal
 */
const ModalHeader: FC<ModalHeaderProps> = ({ title, onClickClose }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <p className="text-xl font-semibold">{title}</p>
      {!!onClickClose && (
        <Icon.X onClick={onClickClose} className="cursor-pointer" />
      )}
    </div>
  );
};

const ModalBody: FC = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default Modal;
