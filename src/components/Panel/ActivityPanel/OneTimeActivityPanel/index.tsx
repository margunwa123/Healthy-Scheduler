import React, { FC, useEffect, useState } from 'react';

import {
  formatMillisToHHMMSS,
  formatTimeLeft,
  getClockTimeInMillis,
  ONE_SECOND,
} from '@/helpers/time';

import ActivityPanel, { ActivityPanelProps } from '../';
import { fireNotif } from '@/helpers/notification';
import { useAudio } from '@/hooks/audio';
import { useDispatchActivities } from '@/reducers/ActivityReducer';

interface OneTimeActivityPanelProps extends ActivityPanelProps {
  deadline: number;
}

let timer: NodeJS.Timeout | null = null;
const SIXTY_FIVE_SECOND = 65 * ONE_SECOND;
const FIVE_SECOND = 5 * ONE_SECOND;

const OneTimeActivityPanel: FC<OneTimeActivityPanelProps> = ({
  deadline,
  ...props
}) => {
  const [timeLeft, setTimeLeft] = useState(
    deadline - getClockTimeInMillis(new Date())
  );
  const [playing, toggleAudioPlaying] = useAudio(
    '/mp3/notification_xperia.mp3'
  );
  const [clockInterval, setClockInterval] = useState(
    timeLeft < SIXTY_FIVE_SECOND ? ONE_SECOND : FIVE_SECOND
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

  useEffect(() => {
    if (timeLeft <= 0) {
      if (timer) {
        fireNotif(
          `One Time Activity - ${props.title}`,
          props.description ?? ''
        );
        toggleAudioPlaying();
        setTimeout(() => {
          toggleAudioPlaying();
          setTimeout(() => {
            deleteActivity();
          }, 2000);
        }, 5000);
        clearTimeout(timer);
      }
    } else {
      if (clockInterval == FIVE_SECOND && timeLeft <= SIXTY_FIVE_SECOND) {
        setClockInterval(ONE_SECOND);
      }
      timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - ONE_SECOND);
      }, clockInterval);
    }
  }, [timeLeft]);

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
