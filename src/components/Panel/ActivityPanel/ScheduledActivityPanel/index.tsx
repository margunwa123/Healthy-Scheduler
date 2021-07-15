import React, { FC } from 'react';
import * as Icon from 'react-feather';
import ProgressBar from '@/components/ProgressBar';
import Panel from '@/components/Panel';
import ActivityPanel from '..';

interface ScheduledActivityProps extends Activity {
  deadline: Date;
}

const ScheduledActivity: FC<ScheduledActivityProps> = ({
  deadline,
  children,
  ...props
}) => {
  return <ActivityPanel {...props}>{children}</ActivityPanel>;
};

export default ScheduledActivity;
