import React, { FC } from 'react';
import * as Icon from 'react-feather';
import ActivityGroupPanel from '..';
import ScheduledActivity from '../../ActivityPanel/ScheduledActivityPanel';

interface HourlyActivityGroupProps extends HourlyActivityGroup {}

const HourlyActivityGroupPanel: FC<HourlyActivityGroupProps> = ({
  title,
  activities,
}) => {
  return (
    <ActivityGroupPanel
      title={title}
      type="daily"
      activities={activities}
      alarmType="notification_xperia"
      titleIcon={<Icon.Clock />}
    >
      {activities.map((activity) => (
        <ScheduledActivity {...activity} />
      ))}
    </ActivityGroupPanel>
  );
};

export default HourlyActivityGroupPanel;
