import React, { FC, useMemo } from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
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
      } rounded-lg ${className}`}
    >
      {topColor && (
        <div className={`w-full h-8 bg-${topColor} rounded-t-lg`}></div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
};

export default Panel;
