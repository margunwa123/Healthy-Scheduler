import useLocalStorage from '@/hooks/useLocalStorage';
import {
  ActivitiesProvider,
  useActivities,
  useDispatchActivities,
} from '@/reducers/ActivityReducer';
import '@styles/style.css';
import '@styles/form.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC, useEffect } from 'react';
import 'moment/locale/id';
import { askNotificationPermission } from '@/helpers/notification';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const dispatchActivity = useDispatchActivities();
  const { activityGroups } = useActivities();
  const [actGroups, setActGroups] = useLocalStorage<ActivityGroup[]>(
    'activity-groups',
    []
  );

  useEffect(() => {
    askNotificationPermission();
  }, []);

  useEffect(() => {
    if (actGroups && actGroups !== []) {
      dispatchActivity({
        type: 'initiate',
        payload: actGroups,
      });
    }
  }, []);

  useEffect(() => {
    setActGroups(activityGroups);
  }, [activityGroups]);

  return <Component {...pageProps} />;
};

const initialActivityGroups: ActivityGroup[] = [];

const AppWithProviders: FC<AppProps> = (props) => {
  return (
    <ActivitiesProvider activityGroups={initialActivityGroups}>
      <MyApp {...props} />
    </ActivitiesProvider>
  );
};

export default AppWithProviders;
