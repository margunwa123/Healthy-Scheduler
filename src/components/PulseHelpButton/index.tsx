import React, { FC } from 'react';

interface PulseButtonProps {
  onClick?: React.MouseEventHandler;
}

const PulseButton: FC<PulseButtonProps> = ({ onClick }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 cursor-pointer rounded-full animate-ping bg-red-light w-12 h-12 lg:w-20 lg:h-20 flex justify-center items-center"></div>
      <div
        className="cursor-pointer rounded-full relative bg-red-light w-12 h-12 lg:w-20 lg:h-20 flex justify-center items-center"
        onClick={onClick}
      >
        ?
      </div>
    </div>
  );
};

export default PulseButton;
