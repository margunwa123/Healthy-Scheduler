export const ONE_SECOND = 1000;
export const ONE_MINUTE = ONE_SECOND * 60;
export const ONE_HOUR = ONE_MINUTE * 60;
export const ONE_DAY = ONE_HOUR * 24;
export const ONE_WEEK = ONE_DAY * 7;

/**
 * @param timeInHHMMSS => HH:MM:SS format (separator colon)
 */
export const formatHHMMSSToMillis = (timeInHHMMSS: string) => {
  const res = timeInHHMMSS.split(':').map((str) => Number(str));
  const [HH, MM, SS] = res;
  if (HH == null || MM == null || SS == null) {
    throw Error('Time format is not correct');
  }
  return HH * ONE_HOUR + MM * ONE_MINUTE * SS * ONE_SECOND;
};

export const formatMillisToHHMMSS = (millis: number) => {
  const [hour, restHour] = [
    addZeroIfOneDigit(Math.floor(millis / ONE_HOUR)),
    millis % ONE_HOUR,
  ];
  const [minute, restMinute] = [
    addZeroIfOneDigit(Math.floor(restHour / ONE_MINUTE)),
    restHour % ONE_MINUTE,
  ];
  const [second] = [addZeroIfOneDigit(Math.floor(restMinute / ONE_SECOND))];
  return `${hour}:${minute}:${second}`;
};

const addZeroIfOneDigit = (num: number) => {
  if (Math.floor(num / 10) === 0) {
    return `0${num}`;
  }
  return num.toString();
};

export const getClockTimeInMillis = (date: Date): number => {
  return (
    date.getHours() * ONE_HOUR +
    date.getMinutes() * ONE_MINUTE +
    date.getSeconds() * ONE_SECOND
  );
};

// format to
// 13 menit tersisa, 14 jam tersisa, 40 detik tersisa, dst.
export const formatTimeLeft = (timeLeft: number) => {
  if (timeLeft > ONE_HOUR) {
    return `${Math.round(timeLeft / ONE_HOUR)} jam`;
  }
  if (timeLeft > ONE_MINUTE) {
    return `${Math.round(timeLeft / ONE_MINUTE)} menit`;
  }
  if (timeLeft > ONE_SECOND) {
    return `${Math.round(timeLeft / ONE_SECOND)} detik`;
  } else {
    return '0 detik';
  }
};
