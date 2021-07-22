import Button from '@/components/Button';
import FormInput from '@/components/Form/FormInput';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import React, { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Form, { FormProps } from '../../..';

const OneTimeActivityGroupForm: FC<FormProps> = ({ ...props }) => {
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
      <Button>Create</Button>
    </Form>
  );
};

export default OneTimeActivityGroupForm;
