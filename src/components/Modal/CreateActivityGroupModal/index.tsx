import DailyActivityGroupForm from '@/components/Form/ActivityGroup/AddActivity/Daily';
import HourlyActivityGroupForm from '@/components/Form/ActivityGroup/AddActivity/Hourly';
import OneTimeActivityGroupForm from '@/components/Form/ActivityGroup/AddActivity/OneTime';
import React, { FC, useState } from 'react';
import Modal, { ModalProps } from '..';

interface CreateActivityGroupModalProps extends ModalProps {}

const CreateActivityGroupModal: FC<CreateActivityGroupModalProps> = ({
  onClickClose,
  open,
}) => {
  const [groupType, setGroupType] = useState<ActivityGroupType>('one-time');

  return (
    <Modal
      open={open}
      onClickClose={onClickClose}
      title="Create Activity Group"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="type">Type: </label> <br />
          <select
            name="cars"
            id="type"
            defaultValue="one-time"
            className="w-full outline-none rounded-lg bg-white border px-2 py-2 border-grey"
            onChange={(e) => {
              setGroupType(e.target.value as ActivityGroupType);
            }}
          >
            <option value="one-time">One Time</option>
            <option value="daily">Daily</option>
            <option value="hourly">Hourly</option>
          </select>
        </div>
        {groupType === 'one-time' ? (
          <OneTimeActivityGroupForm onSubmit={onClickClose} />
        ) : groupType === 'daily' ? (
          <DailyActivityGroupForm />
        ) : (
          <HourlyActivityGroupForm />
        )}
      </div>
    </Modal>
  );
};

export default CreateActivityGroupModal;
