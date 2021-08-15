import CrudAction from '@/lib/CRUDAction';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import React, { FC, useState } from 'react';

import Panel from '../../lib/Panel';
import DailyActivityPanel from '../Activity/Daily';
import CreateActivityModal from '../Activity/Modal/Create';
import OneTimeActivityPanel from '../Activity/OneTime';

interface ActivityGroupProps extends ActivityGroup {}

const ActivityGroup: FC<ActivityGroupProps> = ({
  title,
  children,
  id,
  activities,
  color,
  description,
}) => {
  const [openCreateActivityModal, setOpenCreateActivityModal] =
    useState<boolean>(false);
  const toggleCreateActivityModal = () => {
    setOpenCreateActivityModal(!openCreateActivityModal);
  };

  const [openEditActivityModal, setOpenEditActivityModal] =
    useState<boolean>(false);
  const toggleEditActivityModal = () => {
    setOpenEditActivityModal(!openEditActivityModal);
  };

  const dispatch = useDispatchActivities();
  const deleteGroup = () => {
    dispatch({
      type: 'delete_activity_group',
      payload: id,
    });
  };

  return (
    <Panel
      topColor={color}
      className="space-y-5 mr-5 mb-4 h-min-content w-full md:w-80"
    >
      <div className="flex flex-col space-y-2 w-full justify-center items-center">
        <h2 className="font-semibold break-words text-lg">{title}</h2>
        <p>{description}</p>
        <CrudAction
          onCreate={toggleCreateActivityModal}
          onEdit={toggleEditActivityModal}
          onDelete={deleteGroup}
        />
        {activities.map((activity) =>
          activity.type === 'one-time' ? (
            <OneTimeActivityPanel
              groupId={id}
              key={activity.id}
              {...activity}
            />
          ) : (
            <DailyActivityPanel groupId={id} key={activity.id} {...activity} />
          )
        )}
        <CreateActivityModal
          open={openCreateActivityModal}
          groupId={id}
          onClickClose={toggleCreateActivityModal}
        />
      </div>
      {children}
    </Panel>
  );
};

export default ActivityGroup;
