import Button from '@/lib/Button';
import Form from '@/lib/Form';
import FormInput from '@/lib/Form/FormInput';
import Modal from '@/lib/Modal';
import { useModal } from '@/context/ModalContext';
import { formatHHMMSSToMillis, formatMillisToHHMMSS } from '@/helpers/time';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import React, { FC, useEffect, useMemo, useState } from 'react';

interface EditOneTimeActivityModalProps {
  groupId: string;
}

const EditOneTimeActivityModal: FC<EditOneTimeActivityModalProps> = ({
  groupId,
}) => {
  const { open, toggleOpen, modalData: activity } = useModal();
  const [deadline, setDeadline] = useState('00:00:00');
  useEffect(() => {
    setDeadline(formatMillisToHHMMSS(activity.deadline));
  }, [activity.deadline]);
  const dispatchActivity = useDispatchActivities();
  const editActivity = (item: AnyObject) => {
    const payload: ActivityPayload = {
      groupId,
      activity: {
        ...(item as Activity),
        time: formatHHMMSSToMillis(item.deadline),
        alarm: item.alarm && item.alarm === 'true' ? true : false,
      },
    };
    dispatchActivity({
      type: 'edit_activity',
      payload,
    });
  };

  return (
    <Modal
      open={open}
      title={`Edit Activity - ${activity.title}`}
      onClickClose={() => {
        if (toggleOpen) toggleOpen();
      }}
    >
      <Form onSubmitCallbackWithData={editActivity}>
        <FormInput
          defaultValue={activity.title}
          required
          placeholder="Work out"
          label="Title"
          name="title"
        />
        {deadline && (
          <FormInput
            value={deadline}
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
            required
            label="Time (HH:MM:SS)"
            placeholder="00:00:00"
            name="deadline"
          />
        )}
        <div>
          <label htmlFor="description" className="text-xs">
            Description
          </label>
          <br />
          <textarea
            className="border outline-none px-1 py-2 rounded-md border-grey-light w-full"
            name="description"
            placeholder="This is a description"
            rows={3}
          />
        </div>
        <div>
          <p className="text-xs mb-1">Notification?</p>
          <label className="mr-2">
            <input type="radio" name="notif" value="true" /> On
          </label>
          <label>
            <input type="radio" name="notif" value="false" /> Off
          </label>
        </div>
        <FormInput
          label="Image (URL)"
          placeholder="https://picsum.photos/200"
          name="image"
        />
        <FormInput
          label="URL"
          placeholder="https://www.chloeting.com/program/"
          name="url"
        />
        <Button variant="warning">Edit</Button>
      </Form>
    </Modal>
  );
};

export default EditOneTimeActivityModal;
