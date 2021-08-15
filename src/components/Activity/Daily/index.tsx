import { fireNotif } from '@/helpers/notification';
import {
  formatMillisToHHMMSS,
  formatTimeLeft,
  getClockTimeInMillis,
} from '@/helpers/time';
import { useAudio } from '@/hooks/useAudio';
import { useTicking } from '@/hooks/useTicking';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import React, { FC, useCallback, useState } from 'react';
import ActivityPanel, { ActivityPanelProps } from '..';

const DailyActivityPanel: FC<ActivityPanelProps> = ({ children, ...props }) => {
  const [isDone, setIsDone] = useState<boolean>(false);

  const { toggleAudioPlaying } = useAudio('/mp3/notification_xperia.mp3');

  const onTimeLeftReachesZero = useCallback(() => {
    {
      fireNotif(`Daily Activity - ${props.title}`, props.description ?? '');
      toggleAudioPlaying();
      setIsDone(true);
    }
  }, []);

  const { timeLeft } = useTicking({
    initialTimeleft: props.time - getClockTimeInMillis(new Date()),
    onFinishedTicking: onTimeLeftReachesZero,
  });

  return (
    <ActivityPanel
      className={isDone ? 'bg-muted' : ''}
      onTimeLeftReachesZero={onTimeLeftReachesZero}
      {...props}
    >
      {children}
      <div className="flex text-muted-darker justify-between text-sm">
        <p>{formatTimeLeft(timeLeft)} tersisa</p>
        <p>{formatMillisToHHMMSS(props.time)}</p>
      </div>
    </ActivityPanel>
  );
};

export default DailyActivityPanel;
