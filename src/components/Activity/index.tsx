import React, { FC, useState } from 'react';
import {
  FiBell,
  FiBellOff,
  FiEdit,
  FiImage,
  FiLink2,
  FiTrash,
} from 'react-icons/fi';

import { useModal } from '@/context/ModalContext';
import {
  formatMillisToHHMMSS,
  formatTimeLeft,
  getClockTimeInMillis,
} from '@/helpers/time';
import { useTicking } from '@/hooks/useTicking';
import Button from '@/lib/Button';
import Modal from '@/lib/Modal';
import { useDispatchActivities } from '@/reducers/ActivityReducer';

import Panel from '../../lib/Panel';
import CrudAction from '@/lib/CRUDAction';

export interface ActivityPanelProps extends Activity {
  className?: string;
  groupId: string;
  onTimeLeftReachesZero?: () => void;
}

/**
 * Pure Dumb Component
 */
const ActivityPanel: FC<ActivityPanelProps> = ({
  groupId,
  className,
  onTimeLeftReachesZero,
  ...activity
}) => {
  const { title, description, alarm, url, children, time } = activity;

  const dispatcher = useDispatchActivities();

  const deleteActivity = () => {
    const payload: DeleteActivityPayload = {
      groupId,
      activityId: activity.id,
    };
    dispatcher({
      type: 'delete_activity',
      payload,
    });
  };

  return (
    <Panel
      shadow={false}
      className={`space-y-3 mt-4 w-full text-center ${className || ''}`}
    >
      <h3 className="text-lg">{title}</h3>
      <p className="italic">{activity.type} activity</p>
      <div className="flex justify-center">
        <CrudAction onDelete={deleteActivity} />
      </div>
      {description ? (
        <div>
          <p
            className="text-sm text-dark"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></p>
        </div>
      ) : null}
      {url && (
        <div>
          <a className="text-link text-sm" href={url} target="_blank">
            <FiLink2 size={14} /> Visit Link
          </a>
        </div>
      )}
      {children}
    </Panel>
  );
};

export default ActivityPanel;
