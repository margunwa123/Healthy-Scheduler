import React, { FC, useState } from 'react';
import Button from '../Button';
import Panel from '../Panel';
import ActivityPanel from '../Panel/ActivityPanel';
import * as Icon from 'react-feather';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import OneTimeActivityPanel from '../Panel/ActivityPanel/OneTimeActivityPanel';

interface ActivityGroupProps extends ActivityGroup {
  titleIcon: JSX.Element;
}

const ActivityGroupPanel: FC<ActivityGroupProps> = ({
  title,
  type,
  activities,
  alarmType,
  titleIcon,
  children,
}) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const toggleOpenAddModal = () => {
    setOpenAddModal(!openAddModal);
  };

  return (
    <Panel
      style={{
        width: '325px',
      }}
      className="space-y-5 h-min-content"
    >
      <div className="flex space-x-2 w-full justify-center items-center">
        {titleIcon}
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>
      {activities.map((activity) =>
        type === 'one-time' ? (
          <OneTimeActivityPanel {...(activity as OneTimeActivity)} />
        ) : (
          <ActivityPanel {...(activity as ScheduledActivity)} />
        )
      )}
      {children}
      <Button onClick={toggleOpenAddModal}>+ Add more activity</Button>
    </Panel>
  );
};

export default ActivityGroupPanel;
