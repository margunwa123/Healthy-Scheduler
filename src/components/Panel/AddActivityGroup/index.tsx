import React, { FC } from 'react';
import Button from '../../Button';
import Panel from '..';
import ActivityPanel from '../ActivityPanel';
import * as Icon from 'react-feather';

interface AddActivityGroupProps {
  onClickAdd: React.MouseEventHandler;
}

const AddActivityGroup: FC<AddActivityGroupProps> = ({ onClickAdd }) => {
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
      onClick={onClickAdd}
    >
      + Add activity group
    </Panel>
  );
};

export default AddActivityGroup;
