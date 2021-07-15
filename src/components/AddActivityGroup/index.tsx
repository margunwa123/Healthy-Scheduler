import React, { FC } from 'react';
import Button from '../Button';
import Panel from '../Panel';
import ActivityPanel from '../Panel/ActivityPanel';
import * as Icon from 'react-feather';

const AddActivityGroup: FC = () => {
  return (
    <Panel
      style={{
        width: '325px',
        height: '315px',
      }}
      dashedBorder
      bgWhite={false}
      shadow={false}
      className="space-y-5 font-medium flex justify-center items-center hover:bg-white-darker transition-colors cursor-pointer"
    >
      + Add activity group
    </Panel>
  );
};

export default AddActivityGroup;
