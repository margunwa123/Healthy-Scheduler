import React, { FC, useEffect, useState } from 'react';

import {
  formatMillisToHHMMSS,
  formatTimeLeft,
  getClockTimeInMillis,
  ONE_SECOND,
} from '@/helpers/time';

import ActivityPanel, { ActivityPanelProps } from '..';
import { fireNotif } from '@/helpers/notification';
import { useAudio } from '@/hooks/useAudio';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import { useTicking } from '@/hooks/useTicking';

interface OneTimeActivityPanelProps extends ActivityPanelProps {
  deadline: number;
}

const OneTimeActivityPanel: FC<OneTimeActivityPanelProps> = ({
  deadline,
  ...props
}) => {
  const [playing, toggleAudioPlaying] = useAudio(
    '/mp3/notification_xperia.mp3'
  );
  const { timeLeft, isFinished } = useTicking({
    initialTimeleft: deadline - getClockTimeInMillis(new Date()),
    onFinishedTicking: () => {
      fireNotif(`One Time Activity - ${props.title}`, props.description ?? '');
      toggleAudioPlaying();
      setTimeout(() => {
        toggleAudioPlaying();
        setTimeout(() => {
          deleteActivity();
        }, 2000);
      }, 5000);
    },
  });

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
    <ActivityPanel {...props} deadline={deadline}>
      <div className="flex text-muted-darker justify-between text-sm">
        <p>{formatTimeLeft(timeLeft)} tersisa</p>
        <p>{formatMillisToHHMMSS(deadline)}</p>
      </div>
    </ActivityPanel>
  );
};

export default OneTimeActivityPanel;
