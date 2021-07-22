import React, { FC, useMemo } from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  dashedBorder?: boolean;
  shadow?: boolean;
  bgWhite?: boolean;
  borderColor?: Variant;
  borderSize?: number;
}

const Panel: FC<PanelProps> = ({
  children,
  dashedBorder,
  className,
  shadow = true,
  bgWhite = true,
  borderColor = 'muted',
  borderSize,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`
      ${dashedBorder ? 'border-dashed' : 'border-solid'} ${
        bgWhite ? 'bg-white' : ''
      } ${
        shadow
          ? 'shadow-panel'
          : `${
              borderSize ? `border-${borderSize}` : 'border'
            } border-${borderColor}`
      } rounded-lg p-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Panel;
