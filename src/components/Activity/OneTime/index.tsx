import React, { FC, useCallback, useState } from 'react';

import { fireNotif } from '@/helpers/notification';
import {
  formatMillisToHHMMSS,
  formatTimeLeft,
  getClockTimeInMillis,
} from '@/helpers/time';
import { useAudio } from '@/hooks/useAudio';
import { useDispatchActivities } from '@/reducers/ActivityReducer';

import ActivityPanel, { ActivityPanelProps } from '../';
import Button from '@/lib/Button';
import { useTicking } from '@/hooks/useTicking';

const OneTimeActivityPanel: FC<ActivityPanelProps> = ({ time, ...props }) => {
  const { toggleAudioPlaying } = useAudio('/mp3/notification_xperia.mp3');

  const onTimeLeftReachesZero = useCallback(() => {
    {
      fireNotif(`One Time Activity - ${props.title}`, props.description ?? '');
      toggleAudioPlaying();
      setIsDone(false);
    }
  }, []);

  const { timeLeft } = useTicking({
    initialTimeleft: time - getClockTimeInMillis(new Date()),
    onFinishedTicking: onTimeLeftReachesZero,
  });

  const [done, setIsDone] = useState<boolean | null>(
    timeLeft <= 0 ? false : null
  );

  const dispatcher = useDispatchActivities();
  const deleteActivity = () => {
    const payload: DeleteActivityPayload = {
      groupId: props.groupId,
      activityId: props.id,
    };
    dispatcher({
      type: 'delete_activity',
      payload,
    });
  };
  return (
    <ActivityPanel
      {...props}
      time={time}
      onTimeLeftReachesZero={onTimeLeftReachesZero}
    >
      <div className="flex text-muted-darker justify-between text-sm">
        <p>{formatTimeLeft(timeLeft)} tersisa</p>
        <p>{formatMillisToHHMMSS(time)}</p>
      </div>
      {done !== null && !done && (
        <Button onClick={deleteActivity} variant="success">
          Done?
        </Button>
      )}
    </ActivityPanel>
  );
};

export default OneTimeActivityPanel;
