import React, { FC, useMemo } from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  dashedBorder?: boolean;
  shadow?: boolean;
  bgWhite?: boolean;
  borderColor?: Variant;
  borderSize?: number;
  topColor?: string;
}

const Panel: FC<PanelProps> = ({
  children,
  dashedBorder,
  className,
  shadow = true,
  bgWhite = true,
  borderColor = 'muted',
  borderSize,
  topColor,
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
      } rounded-lg p-5 relative ${className}`}
    >
      {topColor && (
        <div
          className={`w-full h-8 absolute top-0 left-0 bg-${topColor} rounded-t-lg`}
        ></div>
      )}
      {children}
    </div>
  );
};

export default Panel;
