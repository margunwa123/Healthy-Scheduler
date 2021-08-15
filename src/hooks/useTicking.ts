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

export const useTicking: UseTicking = ({
  initialTimeleft,
  onFinishedTicking,
}) => {
  const [timer, setTimer] = useState<null | NodeJS.Timeout>(null);
  const [timeLeft, setTimeLeft] = useState(initialTimeleft);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setTimeLeft(initialTimeleft);
  }, [initialTimeleft]);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (Boolean(timer)) {
        if (onFinishedTicking) {
          onFinishedTicking();
        }
        setIsFinished(true);
        setTimer(null);
      }
      return;
    } else {
      setTimer(
        setTimeout(() => {
          setTimeLeft((prevTime) => prevTime - ONE_SECOND);
        }, ONE_SECOND)
      );
    }

    return () => setTimer(null);
  }, [timeLeft]);

  return {
    timeLeft,
    isFinished,
  };
};
