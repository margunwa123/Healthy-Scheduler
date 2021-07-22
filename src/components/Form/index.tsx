import React, { FC, useRef } from 'react';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmitCallbackWithData?: (data: AnyObject) => void;
}

const Form: FC<FormProps> = ({
  className,
  children,
  onSubmit,
  onSubmitCallbackWithData,
  ...props
}) => {
  const form = useRef<HTMLFormElement>(null);
  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (onSubmitCallbackWithData) {
      const formData = new FormData(form.current as HTMLFormElement);
      const data: AnyObject = {};
      formData.forEach((value, key) => {
        if (value == '') {
          return;
        }
        data[key] = value;
      });
      onSubmitCallbackWithData(data);
    }
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form
      className={`space-y-7 ${className}`}
      {...props}
      onSubmit={submitFormHandler}
      ref={form}
    >
      {children}
    </form>
  );
};

export default Form;
