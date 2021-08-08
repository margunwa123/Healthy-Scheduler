import Button from '@/lib/Button';
import React, { FC } from 'react';
import { FiXCircle, FiSend } from 'react-icons/fi';

interface FormActionProps {
  onCancel?: () => void;
  onCreate?: () => void;
}

const FormActions: FC<FormActionProps> = ({ onCancel, onCreate }) => {
  return (
    <div className="w-full flex justify-between">
      {onCancel && (
        <Button variant="danger" onClick={onCancel}>
          <FiXCircle /> Cancel
        </Button>
      )}
      {onCreate && (
        <Button variant="primary" onClick={onCreate}>
          <FiSend /> Create
        </Button>
      )}
    </div>
  );
};

export default FormActions;
