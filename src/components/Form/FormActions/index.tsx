import Button from '@/components/Button';
import React, { FC } from 'react';
import * as Icon from 'react-feather';

interface FormActionProps {
  onCancel?: () => void;
  onCreate?: () => void;
}

const FormActions: FC<FormActionProps> = ({ onCancel, onCreate }) => {
  return (
    <div className="w-full flex justify-between">
      {onCancel && (
        <Button variant="danger" onClick={onCancel}>
          <Icon.XCircle /> Cancel
        </Button>
      )}
      {onCreate && (
        <Button variant="primary" onClick={onCreate}>
          <Icon.Send /> Create
        </Button>
      )}
    </div>
  );
};

export default FormActions;
