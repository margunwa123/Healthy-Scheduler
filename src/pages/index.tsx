import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC, useEffect, useState } from 'react';

import AddGroupButton from '@/components/AddGroupButton';
import MainLayout from '@/layouts/MainLayout';
import { useActivities } from '@/reducers/ActivityReducer';
import ActivityGroup from '@/components/ActivityGroup';
import CreateActivityGroupModal from '@/components/ActivityGroup/Modal/Create';

const Home: NextPage = () => {
  const { activityGroups } = useActivities();

  const [openCreateGroupModal, setOpenCreateGroupModal] =
    useState<boolean>(false);
  useEffect(() => {
    Notification.requestPermission();
  }, []);
  const toggleOpenModal = () => {
    setOpenCreateGroupModal(!openCreateGroupModal);
  };

  return (
    <MainLayout>
      <Head>
        <title>Healthy Scheduler</title>
      </Head>
      <div className="pl-4 lg:pl-default flex pt-4 lg:pt-default flex-wrap pb-5">
        {activityGroups.map((activityGroup, idx) => (
          <ActivityGroup key={activityGroup.id} {...activityGroup} />
        ))}
        <AddGroupButton toggleOpenModal={toggleOpenModal} />
        <CreateActivityGroupModal
          open={openCreateGroupModal}
          onClickClose={toggleOpenModal}
        />
      </div>
    </MainLayout>
  );
};

export default Home;
