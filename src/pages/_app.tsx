import useLocalStorage from '@/hooks/useLocalStorage';
import {
  ActivitiesProvider,
  useActivities,
  useDispatchActivities,
} from '@/reducers/ActivityReducer';
import '@styles/globals.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC, useEffect } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const dispatchActivity = useDispatchActivities();
  const { activityGroups } = useActivities();
  const [actGroups, setActGroups] = useLocalStorage<ActivityGroup[]>(
    'activity-groups',
    []
  );

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

const AppWithProviders: FC<AppProps> = (props) => {
  return (
    <ActivitiesProvider
      activityGroups={[
        {
          title: 'Every 1 hour',
          activities: [],
          type: 'hourly',
        },
      ]}
    >
      <MyApp {...props} />
    </ActivitiesProvider>
  );
};

export default AppWithProviders;
