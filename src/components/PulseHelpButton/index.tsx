import useLocalStorage from '@/hooks/useLocalStorage';
import React, { FC, useState } from 'react';

const PulseButton: FC = () => {
  const [hasSeenHelp, setHasSeenHelp] = useLocalStorage('has-seen-help', false);
  const [openHelpModal, setOpenHelpModal] = useState(false);

  const toggleOpenModal = () => setOpenHelpModal(!openHelpModal);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 cursor-pointer rounded-full animate-ping bg-red-light w-12 h-12 lg:w-20 lg:h-20 flex justify-center items-center"></div>
      <div
        className="cursor-pointer rounded-full relative bg-red-light w-12 h-12 lg:w-20 lg:h-20 flex justify-center items-center"
        onClick={toggleOpenModal}
      >
        ?
      </div>
    </div>
  );
};

export default PulseButton;
