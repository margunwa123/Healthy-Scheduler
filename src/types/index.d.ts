type Variant =
  | 'success'
  | 'danger'
  | 'warning'
  | 'white'
  | 'muted'
  | 'primary'
  | 'dark';
type Activity = {
  id: string;
  title: string;
  type: 'one-time' | 'daily';
  description?: string;
  alarm?: boolean;
  url?: string;
  time: number;
};

interface ScheduledActivity extends Activity {}

interface OneTimeActivity extends Activity {
  time: number;
}

type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

type ActivityGroupType = 'daily' | 'hourly' | 'one-time';

interface ActivityGroup {
  id: string;
  title: string;
  activities: Activity[];
  description?: string;
  color: string;
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

type ActivityPayload = {
  groupId: string;
  activity: Activity;
};

type DeleteActivityPayload = {
  groupId: string;
  activityId: string;
};

type DeleteGroupPayload = {
  id: string;
};

interface AnyObject {
  [key: string]: any;
}
