import React, { FC, useState } from 'react';
import { v4 } from 'uuid';

import Button from '@/lib/Button';
import Form, { FormProps } from '@/lib/Form';
import FormInput from '@/lib/Form/FormInput';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import Modal, { ModalProps } from '@/lib/Modal';

const CreateActivityGroupForm: FC<FormProps> = ({ ...props }) => {
  const dispatchActivity = useDispatchActivities();

  const createOneTimeActivityGroup: (item: AnyObject) => void = (item) => {
    dispatchActivity({
      type: 'add_activity_group',
      payload: {
        ...item,
        id: v4(),
        activities: [],
        type: 'one-time',
      },
    });
  };

  return (
    <Form onSubmitCallbackWithData={createOneTimeActivityGroup} {...props}>
      <FormInput name="title" label="Title" required />
      <FormInput name="description" label="Description" required />
      {/* Color selection */}
      <div className="flex space-x-4 items-center">
        <p>Color: </p>
        <div>
          <input
            defaultChecked
            type="radio"
            id="red"
            name="color"
            value="red"
            className="input-color input-red hidden"
          />
          <label htmlFor="red" className="flex items-center cursor-pointer">
            <span className="w-4 h-4 inline-block mr-1 border"></span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="green"
            name="color"
            value="green"
            className="input-color input-green hidden"
          />
          <label htmlFor="green" className="flex items-center cursor-pointer">
            <span className="w-4 h-4 inline-block mr-1 border"></span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="orange"
            name="color"
            value="orange"
            className="input-color input-orange hidden"
          />
          <label htmlFor="orange" className="flex items-center cursor-pointer">
            <span className="w-4 h-4 inline-block mr-1 border"></span>
          </label>
        </div>
      </div>

      <Button>Create</Button>
    </Form>
  );
};

const CreateActivityGroupModal: FC<ModalProps> = ({ onClickClose, open }) => {
  const [groupType, setGroupType] = useState<ActivityGroupType>('one-time');

  return (
    <Modal
      open={open}
      onClickClose={onClickClose}
      title="Create Activity Group"
    >
      <CreateActivityGroupForm onSubmit={onClickClose} />
    </Modal>
  );
};

export default CreateActivityGroupModal;
