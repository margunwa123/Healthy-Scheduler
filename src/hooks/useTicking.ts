import { ONE_SECOND } from '@/helpers/time';
import { useEffect, useMemo, useState } from 'react';

interface UseTickingConfig {
  initialTimeleft: number;
  onFinishedTicking?: () => void;
}

type UseTicking = (config: UseTickingConfig) => {
  timeLeft: number;
  isFinished: boolean;
};

const SIXTY_FIVE_SECOND = 65 * ONE_SECOND;
const FIVE_SECOND = 5 * ONE_SECOND;

export const useTicking: UseTicking = ({
  initialTimeleft,
  onFinishedTicking,
}) => {
  const [timer, setTimer] = useState<null | NodeJS.Timeout>(null);
  const [timeLeft, setTimeLeft] = useState(initialTimeleft);
  const [isFinished, setIsFinished] = useState(false);
  const [clockInterval, setClockInterval] = useState(
    timeLeft < SIXTY_FIVE_SECOND ? ONE_SECOND : FIVE_SECOND
  );

  useEffect(() => {
    setTimeLeft(initialTimeleft);
  }, [initialTimeleft]);

  useEffect(() => {
    console.log(timeLeft);
    if (timeLeft <= 0) {
      if (timer) {
        if (onFinishedTicking) {
          console.log('finished ticking');
          onFinishedTicking();
        }
        setIsFinished(true);
        clearTimeout(timer);
      }
    } else {
      if (clockInterval == FIVE_SECOND && timeLeft <= SIXTY_FIVE_SECOND) {
        setClockInterval(ONE_SECOND);
      }
      setTimer(
        setTimeout(() => {
          setTimeLeft((prevTime) => prevTime - ONE_SECOND);
        }, clockInterval)
      );
    }
  }, [timeLeft]);

  return {
    timeLeft,
    isFinished,
  };
};
