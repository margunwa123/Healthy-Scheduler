interface Activity {
  title: string;
  notif?: boolean;
  description?: string;
  image?: string;
  url?: string;
  deadline?: Date;
}

interface ScheduledActivity extends Activity {}

interface OneTimeActivity extends Activity {
  deadline: Date;
}

type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

type ActivityGroupType = 'daily' | 'hourly' | 'one-time';

interface ActivityGroup {
  title: string;
  type: ActivityGroupType;
  activities: Activity[];
  alarmType?: string;
}

// all in milliseconds
interface HourlyActivityGroup extends ActivityGroup {
  type: 'hourly';
  interval: number;
  activities: ScheduledActivity[];
  from: number;
  to: number;
  daysActive: Day[] | 'everyday';
}

interface DailyActivityGroup extends ActivityGroup {
  type: 'daily';
  daysActive: Day[] | 'everyday';
  activities: ScheduledActivity[];
  time: number;
}

interface OneTimeActivityGroup extends ActivityGroup {
  type: 'one-time';
  activities: OneTimeActivity[];
}

// reducer action type
interface DispatchActionType {
  type: string;
  payload?: any;
}

// reducer dispatch action
interface ReducerDispatchAction<T = DispatchActionType> {
  (action: T): void;
}

interface ActivityPayload {
  activityGroupTitle: string;
  activity: Activity;
}
