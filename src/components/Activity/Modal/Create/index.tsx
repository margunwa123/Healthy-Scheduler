import React, { FC, useState } from 'react';
import { v4 } from 'uuid';

import Button from '@/lib/Button';
import Form, { FormProps } from '@/lib/Form';
import FormInput from '@/lib/Form/FormInput';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import Modal, { ModalProps } from '@/lib/Modal';
import { isActivity } from '@/helpers/validator';
import { formatHHMMSSToMillis } from '@/helpers/time';

interface CreateActivityModalProps extends ModalProps {
  groupId: string;
}

const CreateActivityModal: FC<CreateActivityModalProps> = ({
  onClickClose,
  open,
  groupId,
}) => {
  return (
    <Modal open={open} onClickClose={onClickClose} title="Create Activity">
      <CreateActivityForm onSubmit={onClickClose} groupId={groupId} />
    </Modal>
  );
};

interface CreateActivityFormProps extends FormProps {
  groupId: string;
}

const CreateActivityForm: FC<CreateActivityFormProps> = ({
  groupId,
  ...props
}) => {
  const dispatchActivity = useDispatchActivities();

  const createActivity = (item: AnyObject) => {
    item.id = v4();
    item.time = formatHHMMSSToMillis(item.time as string);
    console.log(item);
    if (!isActivity(item)) {
      return;
    }

    dispatchActivity({
      type: 'add_activity',
      payload: {
        groupId,
        activity: { ...item },
      },
    });
  };

  return (
    <Form onSubmitCallbackWithData={createActivity} {...props}>
      <div className="form-input">
        <label className="text-xs">
          <span className="text-red">* </span>
          Type
        </label>
        <select
          name="type"
          className={`w-full px-2 py-3 border border-grey-light rounded-lg outline-none bg-white`}
        >
          <option value="one-time">One Time</option>
          <option value="daily">Daily</option>
        </select>
      </div>
      <FormInput name="title" label="Title" placeholder="Make Food" required />
      <FormInput name="time" label="Time" placeholder="00:00:00" required />
      <FormInput
        name="description"
        label="Description"
        placeholder="Creating food"
      />
      <FormInput
        name="alarm"
        type="checkbox"
        label="Alarm"
        className="ml-2"
        defaultChecked={false}
      />
      <FormInput name="url" label="URL" placeholder="www.google.com" />

      <Button>Create</Button>
    </Form>
  );
};

export default CreateActivityModal;
