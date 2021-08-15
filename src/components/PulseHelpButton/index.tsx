import useLocalStorage from '@/hooks/useLocalStorage';
import Modal, { ModalProps } from '@/lib/Modal';
import React, { FC, useState } from 'react';

interface HelpButtonProps {
  onHelpClicked: () => void;
  hasSeenHelp: boolean;
}

/**
 * Dumb component
 */
const HelpButton: FC<HelpButtonProps> = ({ onHelpClicked }) => {
  return (
    <div className="relative">
      <div
        className="cursor-pointer rounded-full relative bg-red-light w-12 h-12 lg:w-20 lg:h-20 flex justify-center items-center"
        onClick={onHelpClicked}
      >
        ?
      </div>
    </div>
  );
};

export default HelpButton;
