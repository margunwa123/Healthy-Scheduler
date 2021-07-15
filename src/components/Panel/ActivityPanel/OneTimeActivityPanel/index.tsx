import React, { FC } from 'react';
import * as Icon from 'react-feather';
import ProgressBar from '@/components/ProgressBar';
import Panel from '@/components/Panel';
import ActivityPanel from '..';

interface OneTimeActivityPanelProps extends Activity {
  deadline: Date;
}

const OneTimeActivityPanel: FC<OneTimeActivityPanelProps> = ({
  deadline,
  ...props
}) => {
  return (
    <ActivityPanel {...props}>
      <p className="text-muted-darker text-sm">13 menit lagi</p>
      <ProgressBar progressInPercentage={30} />
    </ActivityPanel>
  );
};

export default OneTimeActivityPanel;
