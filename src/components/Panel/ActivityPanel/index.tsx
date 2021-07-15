import React, { FC, useState } from 'react';
import Panel from '..';
import * as Icon from 'react-feather';
import ProgressBar from '@/components/ProgressBar';

const ActivityPanel: FC<Activity> = ({
  title,
  notif = true,
  description,
  image,
  url,
  children,
}) => {
  const [openImageModal, setOpenImageModal] = useState<boolean>(false);
  const toggleImageModal = () => setOpenImageModal(!openImageModal);

  return (
    <Panel shadow={false} className="space-y-4">
      <ActivityPanelHeader notif={notif} title={title} />
      {url && <a className="text-link">{url}</a>}
      {image && (
        <div
          className="p-1 border border-grey-light cursor-pointer rounded-full"
          onClick={toggleImageModal}
        >
          <Icon.Image color="#797979" />
          <p className="text-grey">View Image</p>
        </div>
      )}
      {description ? (
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>
      ) : (
        <p className="italic text-sm text-muted">No description</p>
      )}
    </Panel>
  );
};

interface ActivityPanelHeaderProps {
  title: string;
  notif?: boolean;
}

const ActivityPanelHeader: FC<ActivityPanelHeaderProps> = ({
  notif,
  title,
}) => {
  const [notifOn, setNotifOn] = useState<boolean>(Boolean(notif));
  const toggleNotif = () => setNotifOn(!notifOn);

  return (
    <div className="flex justify-between w-full items-center">
      <h3 className="text-lg ">{title}</h3>
      <div onClick={toggleNotif} className="cursor-pointer">
        {notifOn ? <Icon.Bell /> : <Icon.BellOff color="red" />}
      </div>
    </div>
  );
};

export default ActivityPanel;
