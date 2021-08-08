import React, { FC, useState } from 'react';
import Panel from '../../lib/Panel';
import { useModal } from '@/context/ModalContext';
import Modal from '@/lib/Modal';
import {
  FiLink2,
  FiBell,
  FiImage,
  FiEdit,
  FiTrash,
  FiBellOff,
} from 'react-icons/fi';
import Button from '@/lib/Button';
import { useDispatchActivities } from '@/reducers/ActivityReducer';

export interface ActivityPanelProps extends Activity {
  groupId: string;
}

const ActivityPanel: FC<ActivityPanelProps> = ({ groupId, ...activity }) => {
  const { title, notif = true, description, image, url, children } = activity;

  return (
    <Panel shadow={false} className="space-y-3 mt-4">
      <ActivityPanelHeader
        activity={activity}
        notif={notif}
        title={title}
        groupId={groupId}
      />
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
      {image && <ImageModalComponent image={image} />}
      {children}
    </Panel>
  );
};

interface ActivityPanelHeaderProps {
  title: string;
  notif: boolean;
  groupId: string;
  activity: Activity;
}

const ActivityPanelHeader: FC<ActivityPanelHeaderProps> = ({
  notif,
  title,
  activity,
  groupId,
}) => {
  const [notifOn, setNotifOn] = useState<boolean>(Boolean(notif));
  const toggleNotif = () => setNotifOn(!notifOn);
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

  const { toggleOpen: toggleEditModal, setModalData: setEditData } = useModal();

  return (
    <div className="flex flex-col w-full items-center">
      <h3 className="text-lg mb-2">{title}</h3>
      <div className=" flex space-x-1">
        <div onClick={toggleNotif} className="cursor-pointer ">
          {notifOn ? <FiBell /> : <FiBellOff className="text-muted" />}
        </div>
        <FiEdit
          className="cursor-pointer text-warning"
          onClick={() => {
            if (setEditData) {
              setEditData(activity);
            }
            if (toggleEditModal) {
              toggleEditModal();
            }
          }}
        />
        <FiTrash
          className="cursor-pointer text-danger"
          onClick={deleteActivity}
        />
      </div>
    </div>
  );
};

interface ImageModalComponentProps {
  image: string;
}

const ImageModalComponent: FC<ImageModalComponentProps> = ({ image }) => {
  const [openImageModal, setOpenImageModal] = useState<boolean>(false);
  const toggleImageModal = () => setOpenImageModal(!openImageModal);
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  return (
    <div>
      <Modal
        title={
          <a className="text-link" href={image} target="_blank">
            {image}
          </a>
        }
        open={openImageModal}
        onClickClose={toggleImageModal}
      >
        <div className="flex justify-center">
          <img
            className="object-cover object-center"
            style={{
              height: '50vh',
            }}
            src={image}
          />
        </div>
        {/* Toolbox */}
        <div className="flex space-x-4 mt-4">
          <div>
            <Button className="flex justify-center w-full">
              <FiImage /> View Full Screen
            </Button>
          </div>
        </div>
      </Modal>
      <Button onClick={toggleImageModal}>
        <p className="text-grey">
          <FiImage color="#797979" className="inline" /> View Image
        </p>
      </Button>
    </div>
  );
};

export default ActivityPanel;
