import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

import AddActivityGroup from '@/components/Panel/AddActivityGroup';
import DailyActivityGroupPanel from '@/components/Panel/ActivityGroup/DailyActivityGroup';
import HourlyActivityGroupPanel from '@/components/Panel/ActivityGroup/HourlyActivityGroup';
import OneTimeActivityGroupPanel from '@/components/Panel/ActivityGroup/OneTimeActivityGroup';
import MainLayout from '@/layouts/MainLayout';
import { useActivities } from '@/reducers/ActivityReducer';
import Modal from '@/components/Modal';
import CreateActivityGroupModal from '@/components/Modal/CreateActivityGroupModal';

const Home: NextPage = () => {
  const { activityGroups } = useActivities();
  const [openCreateGroupModal, setOpenCreateGroupModal] =
    useState<boolean>(false);

  const toggleOpenModal = () => {
    setOpenCreateGroupModal(!openCreateGroupModal);
  };

  return (
    <MainLayout>
      <Head>
        <title>Healthy Scheduler</title>
      </Head>
      <div className="pl-4 lg:pl-default flex pt-4 lg:pt-default flex-wrap pb-5">
        {activityGroups.map((activityGroup, idx) => {
          if (activityGroup.type === 'daily') {
            return (
              <DailyActivityGroupPanel
                key={idx}
                {...(activityGroup as DailyActivityGroup)}
              />
            );
          } else if (activityGroup.type === 'hourly') {
            return (
              <HourlyActivityGroupPanel
                key={idx}
                {...(activityGroup as HourlyActivityGroup)}
              />
            );
          } else if (activityGroup.type === 'one-time') {
            return (
              <OneTimeActivityGroupPanel
                key={idx}
                {...(activityGroup as OneTimeActivityGroup)}
              />
            );
          }
        })}
        <AddActivityGroup onClickAdd={toggleOpenModal} />
      </div>
      <CreateActivityGroupModal
        open={openCreateGroupModal}
        onClickClose={toggleOpenModal}
      />
    </MainLayout>
  );
};

export default Home;
