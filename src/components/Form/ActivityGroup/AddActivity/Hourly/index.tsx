import { useDispatchActivities } from '@/reducers/ActivityReducer';
import React, { FC } from 'react';
import Form from '../../..';

const HourlyActivityGroupForm: FC = () => {
  const dispatchActivity = useDispatchActivities();

  return <Form>Hourly activity group form</Form>;
};

export default HourlyActivityGroupForm;
