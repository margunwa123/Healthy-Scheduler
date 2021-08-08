import React, { FC } from 'react';
import { FiPlus, FiTrash, FiEdit } from 'react-icons/fi';

interface CrudActionProps {
  onCreate?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
  size?: number;
}

const CrudAction: FC<CrudActionProps> = ({
  onCreate,
  onDelete,
  onEdit,
  size = 24,
}) => {
  return (
    <div className="flex space-x-2">
      {onCreate && (
        <FiPlus
          className="cursor-pointer text-dark opacity-80 hover:opacity-100"
          onClick={onCreate}
          size={size}
        />
      )}
      {onDelete && (
        <FiTrash
          className="cursor-pointer text-danger opacity-80 hover:opacity-100"
          onClick={onDelete}
          size={size}
        />
      )}
      {onEdit && (
        <FiEdit
          className="cursor-pointer text-warning opacity-80 hover:opacity-100"
          onClick={onEdit}
          size={size}
        />
      )}
    </div>
  );
};

export default CrudAction;
