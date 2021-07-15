import Panel from '@/components/Panel';
import MainLayout from '@/layouts/MainLayout';
import { NextPage } from 'next';
import Head from 'next/head';
import * as Icon from 'react-feather';
import Image from 'next/image';
import React from 'react';
import ProgressBar from '@/components/ProgressBar';
import ActivityPanel from '@/components/Panel/ActivityPanel';
import Button from '@/components/Button';
import ActivityGroup from '@/components/ActivityGroup';
import AddActivityGroup from '@/components/AddActivityGroup';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Healthy Scheduler</title>
      </Head>
      <div className="pl-4 lg:pl-default flex space-x-7 pt-4 lg:pt-default overflow-x-auto pb-5">
        <ActivityGroup
          title="Every 1 hour"
          activities={[]}
          type="daily"
          titleIcon={<Icon.Calendar />}
        />
        <AddActivityGroup />
      </div>
    </MainLayout>
  );
};

export default Home;
