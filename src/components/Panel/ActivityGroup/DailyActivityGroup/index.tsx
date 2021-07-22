import React, { FC } from 'react';
import * as Icon from 'react-feather';
import ActivityGroupPanel from '..';
import ScheduledActivity from '../../ActivityPanel/ScheduledActivityPanel';

interface DailyActivityGroupProps extends DailyActivityGroup {}

const DailyActivityGroupPanel: FC<DailyActivityGroupProps> = ({
  title,
  activities,
}) => {
  return (
    <ActivityGroupPanel
      title={title}
      type="daily"
      activities={activities}
      alarmType="notification_xperia"
      titleIcon={<Icon.Calendar />}
    >
      {activities.map((activity) => (
        <ScheduledActivity {...activity} />
      ))}
    </ActivityGroupPanel>
  );
};

export default DailyActivityGroupPanel;
