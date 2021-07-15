import { ActivitiesProvider } from '@/reducers/ActivityReducer';
import '@styles/globals.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ActivitiesProvider activityGroups={[]}>
      <Component {...pageProps} />
    </ActivitiesProvider>
  );
};

export default MyApp;
