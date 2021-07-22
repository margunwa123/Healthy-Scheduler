import React, { FC, useState } from 'react';
import * as Icon from 'react-feather';

import OneTimeActivityForm from '@/components/Form/Activity/OneTime';

import ActivityGroupPanel from '../';
import OneTimeActivityPanel from '../../ActivityPanel/OneTimeActivityPanel';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import { ModalProvider } from '@/context/ModalContext';
import EditOneTimeActivityModal from '@/components/Modal/Activity/OneTime/Edit';

interface OneTimeActivityGroupProps extends OneTimeActivityGroup {}

const OneTimeActivityGroupPanel: FC<OneTimeActivityGroupProps> = ({
  title,
  id,
  activities,
}) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const toggleOpenAddModal = () => {
    setOpenAddModal(!openAddModal);
  };
  const dispatchActivity = useDispatchActivities();
  const deleteActivityGroup = () => {
    dispatchActivity({
      type: 'delete_activity_group',
      payload: {
        id,
      },
    });
  };

  return (
    <ActivityGroupPanel
      id={id}
      title={title}
      type="one-time"
      activities={activities}
      alarmType="notification_xperia"
      titleIcon={<Icon.Globe />}
    >
      {/* Provider for edit activity */}
      <ModalProvider>
        <ActivityPanels activities={activities} groupId={id} />
      </ModalProvider>

      <Button onClick={toggleOpenAddModal}>+ Add more activity</Button>
      <Button
        variant="danger"
        className="flex items-center space-x-1 justify-center"
        onClick={deleteActivityGroup}
      >
        <Icon.Trash size={16} />
      </Button>

      <div>
        <Modal
          title={`Add One Time Activity`}
          open={openAddModal}
          onClickClose={toggleOpenAddModal}
        >
          <OneTimeActivityForm groupId={id} onSubmit={toggleOpenAddModal} />
        </Modal>
      </div>
    </ActivityGroupPanel>
  );
};

interface ActivityPanelsProps {
  groupId: string;
  activities: OneTimeActivity[];
}

const ActivityPanels: FC<ActivityPanelsProps> = ({ activities, groupId }) => {
  return (
    <div>
      {activities.map((activity) => (
        <OneTimeActivityPanel {...activity} groupId={groupId} />
      ))}
      <EditOneTimeActivityModal groupId={groupId} />
    </div>
  );
};

export default OneTimeActivityGroupPanel;
