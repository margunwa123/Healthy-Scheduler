import React, { FC } from 'react';
import { FiX } from 'react-icons/fi';

/**
 * Modal Properties
 */
export interface ModalProps {
  open?: boolean;
  title?: string | JSX.Element;
  onClickClose?: () => void;
}

/**
 * Modal Properties
 */
const Modal: FC<ModalProps> = ({
  title,
  onClickClose,
  children,
  open = true,
}) => {
  return (
    <div
      className={`${
        open ? '' : 'hidden'
      } fixed flex justify-center items-center top-0 left-0 w-screen h-screen z-50"`}
      style={{
        background: 'rgba(0,0,0,0.4)',
        margin: '0',
      }}
    >
      <div
        className={`px-4 w-full z-20`}
        style={{
          maxWidth: '1000px',
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
  title?: JSX.Element | string;
  onClickClose?: React.MouseEventHandler;
}

/**
 * Helper component for modal
 */
const ModalHeader: FC<ModalHeaderProps> = ({ title, onClickClose }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-xl font-semibold">{title}</div>
      {!!onClickClose && (
        <FiX onClick={onClickClose} className="cursor-pointer" />
      )}
    </div>
  );
};

const ModalBody: FC = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default Modal;
