import clsx from "clsx";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";
import {
  FieldError,
  UseFormRegisterReturn,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

interface InputFieldProps {
  type?: "text" | "number" | "email" | "password" | "file";
  label?: string | JSX.Element | undefined;
  className?: string;
  placeholder?: string;
  iconPosition?: "start" | "end";
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  isDisabled?: boolean;
  hasError: Merge<FieldError, FieldErrorsImpl<object>> | undefined;
  withIcon?: boolean;
  canPressSpace?: boolean;
  registration: Partial<UseFormRegisterReturn>;
  min?: string;
  max?: string;
  value?: string | number;
  isRequired?: boolean;
  errorMessage?: string | undefined;
  control: unknown;
  hide?: string;
  accept?: string;
  isEditing?: boolean;
  handleImageOnBlur?: () => void;
  handleImageChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTogglePassword?: () => void;
}

export const InputField = ({
  type,
  iconStart,
  iconEnd,
  label,
  hasError,
  className,
  isRequired,
  errorMessage,
  registration,
  placeholder,
  min,
  max,
  value,
  withIcon,
  hide,
  accept,
  isEditing = true,
  handleImageOnBlur,
  handleImageChange,
  handleTogglePassword,
  isDisabled = false,
}: InputFieldProps) => {
  const {
    name,
    onChange: formOnChange,
    onBlur: formOnBlur,
    ...restRegistration
  } = registration;

  return (
    <>
      <div className="relative">
        <div className="">
          {!!label && (
            <Label htmlFor={name} id={name} isRequired={isRequired}>
              {label}
            </Label>
          )}
        </div>
        <div>
          <input
            className={clsx(
              "w-full h-[61px] px-4 mt-2 font-semibold text-[17px] dark:text-white bg-[#FBFBFB] border border-[#E1E1E1] dark:border-gray-700 dark:bg-gray-800 hover:border-foundation-grey-normal dark:hover:border-gray-600 active:border-foundation-white-dark outline-none drop-shadow-sm dark:drop-shadow-lg rounded-[8px] cursor-pointer disabled:bg-gray-100",
              isEditing
                ? " focus:border-foundation-grey-dark  dark:focus:border-blue-500"
                : "",
              hasError && "border-red-500 border-b-2",
              className,
              hide
            )}
            type={type}
            disabled={isDisabled}
            name={name}
            value={value}
            id={name}
            placeholder={placeholder}
            accept={accept}
            min={min}
            max={max}
            readOnly={!isEditing}
            {...restRegistration} // Spread all other props from registration except onChange/onBlur
            // Conditionally set onChange and onBlur for file inputs
            onChange={
              type === "file" ? (e) => handleImageChange?.(e) : formOnChange // Use react-hook-form's default onChange for other inputs
            }
            onBlur={
              type === "file" ? () => handleImageOnBlur?.() : formOnBlur // Use react-hook-form's default onBlur for other inputs
            }
          />

          {withIcon && (
            <span
              onClick={() => handleTogglePassword && handleTogglePassword()}
              className="cursor-pointer"
            >
              <span className="p-1 absolute inset-y-4 left-3">{iconStart}</span>
              <span className="p-1 absolute -inset-y-3 right-3">{iconEnd}</span>
            </span>
          )}
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </>
  );
};
