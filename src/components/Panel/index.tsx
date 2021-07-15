import React, { FC } from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  dashedBorder?: boolean;
  shadow?: boolean;
  bgWhite?: boolean;
}

const Panel: FC<PanelProps> = ({
  children,
  dashedBorder,
  className,
  shadow = true,
  bgWhite = true,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`
      ${dashedBorder ? 'border-dashed' : 'border-solid'} ${
        bgWhite ? 'bg-white' : ''
      } ${
        shadow ? 'shadow-panel' : 'border border-grey-light'
      } rounded-lg p-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Panel;
