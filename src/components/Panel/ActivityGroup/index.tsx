import React, { FC } from 'react';

import Panel from '../';

interface ActivityGroupProps extends ActivityGroup {
  titleIcon: JSX.Element;
}

const ActivityGroupPanel: FC<ActivityGroupProps> = ({
  title,
  titleIcon,
  children,
}) => {
  return (
    <Panel
      style={{
        width: '325px',
        minWidth: '325px',
      }}
      className="space-y-5 mr-5 my-4 h-min-content"
    >
      <div className="flex  space-x-2 w-full justify-center items-center">
        {titleIcon}
        <h2 className="font-semibold break-words text-lg">{title}</h2>
      </div>
      {children}
    </Panel>
  );
};

export default ActivityGroupPanel;
