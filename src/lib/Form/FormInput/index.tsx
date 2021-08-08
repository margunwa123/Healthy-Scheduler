import { FC } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const FormInput: FC<FormInputProps> = ({
  className,
  label,
  required = false,
  ...props
}) => {
  return (
    <div className="form-input">
      {label && (
        <label className="text-xs">
          {required && <span className="text-red">* </span>}
          {label}
        </label>
      )}
      <input
        required={required}
        className={`w-full px-2 py-3 border border-grey-light rounded-lg outline-none ${className}`}
        {...props}
      />
    </div>
  );
};

export default FormInput;
