import React, { FC } from 'react';

interface ProgressBarProps {
  progressInPercentage?: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ progressInPercentage = 0 }) => {
  return (
    <div className="relative">
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-success-light">
        <div
          style={{ width: `${progressInPercentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-success"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
