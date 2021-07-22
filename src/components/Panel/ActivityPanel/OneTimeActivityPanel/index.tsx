import React, { FC, useState } from 'react';

import ProgressBar from '@/components/ProgressBar';

import ActivityPanel from '../';
import { formatTimeLeft, getClockTimeInMillis } from '@/helpers/time';
import { useModal } from '@/context/ModalContext';

interface OneTimeActivityPanelProps extends Activity {
  deadline: number;
}

const OneTimeActivityPanel: FC<OneTimeActivityPanelProps> = ({
  deadline,
  ...props
}) => {
  const [timeLeft, setTimeLeft] = useState(
    deadline - getClockTimeInMillis(new Date())
  );

  return (
    <ActivityPanel {...props} deadline={deadline}>
      <div>
        <p className="text-muted-darker text-sm">
          {formatTimeLeft(timeLeft)} tersisa
        </p>
        <ProgressBar progressInPercentage={30} />
      </div>
    </ActivityPanel>
  );
};

export default OneTimeActivityPanel;
