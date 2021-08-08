import React, { FC } from 'react';
import ActivityPanel from '..';

interface ScheduledActivityProps extends Activity {}

const ScheduledActivity: FC<ScheduledActivityProps> = ({
  deadline,
  children,
  ...props
}) => {
  return <ActivityPanel {...props}>{children}</ActivityPanel>;
};

export default ScheduledActivity;
