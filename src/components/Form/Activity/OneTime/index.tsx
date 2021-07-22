import Button from '@/components/Button';
import Form, { FormProps } from '@/components/Form';
import FormInput from '@/components/Form/FormInput';
import { formatHHMMSSToMillis } from '@/helpers/time';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import React, { FC } from 'react';
import { v4 } from 'uuid';

interface AddOneTimeActivityFormProps extends FormProps {
  groupId: string;
  type?: 'add' | 'edit';
}

const AddOneTimeActivityForm: FC<AddOneTimeActivityFormProps> = ({
  groupId,
  type = 'add',
  ...props
}) => {
  const dispatchActivity = useDispatchActivities();
  const createActivity = (item: AnyObject) => {
    try {
      const payload: ActivityPayload = {
        groupId,
        activity: {
          ...(item as Activity),
          id: v4(),
          deadline: formatHHMMSSToMillis(item.deadline),
          notif: item.notif && item.notif === 'true' ? true : false,
        },
      };
      dispatchActivity({
        type: 'add_activity',
        payload,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmitCallbackWithData={createActivity} {...props}>
      <FormInput required placeholder="Work out" label="Title" name="title" />
      <FormInput
        required
        label="Time (HH:MM:SS)"
        placeholder="00:00:00"
        name="deadline"
      />
      <div>
        <label htmlFor="description" className="text-xs">
          Description
        </label>
        <br />
        <textarea
          className="border outline-none px-1 py-2 rounded-md border-grey-light w-full"
          id="description"
          name="description"
          placeholder="This is a description"
          rows={3}
        />
      </div>
      <div>
        <p className="text-xs mb-1">Notification (alarm)</p>
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
      <Button variant="primary">Create</Button>
    </Form>
  );
};

export default AddOneTimeActivityForm;
