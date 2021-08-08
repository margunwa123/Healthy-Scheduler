import { useModal } from '@/context/ModalContext';
import Modal, { ModalProps } from '@/lib/Modal';
import React, { FC, useEffect, useState } from 'react';

import Panel from '../../lib/Panel';
import CreateActivityGroupForm from '../ActivityGroup/Modal/Create';

interface AddGroupButtonProps {
  toggleOpenModal: () => void;
}

const AddGroupButton: FC<AddGroupButtonProps> = ({ toggleOpenModal }) => {
  return (
    <Panel
      style={{
        width: '325px',
        height: '315px',
      }}
      dashedBorder
      borderColor="dark"
      bgWhite={false}
      shadow={false}
      className="space-y-5 font-medium flex justify-center items-center hover:bg-primary-light transition-colors cursor-pointer"
      onClick={toggleOpenModal}
    >
      + Add activity group
    </Panel>
  );
};

export default AddGroupButton;
