import React, { forwardRef } from "react";
import { Controller, UseFormRegisterReturn } from "react-hook-form";
import Select from "react-select";
import { ErrorMessage } from "./ErrorMessage";
import { Label } from "./Label";
import { useTheme } from "@/contexts/ThemeContext";
import {
  CustomOption,
  SingleValue,
  Control,
  Menu,
} from "./CustomSelectComponents";
import getCustomSelectStyles from "./selectFieldStyles";
import { OptionType } from "@/types";

type HasErrorType = any;

interface Props {
  label?: string;
  control: any;
  isRequired?: boolean;
  placeholder?: string;
  hasError?: HasErrorType | undefined;
  errorMessage?: string;
  options?: OptionType[];
  registration: Partial<UseFormRegisterReturn>;
  disabled?: boolean;
  icon?: boolean;
  isEditing?: boolean;
}

const SelectField = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      control,
      registration,
      isRequired,
      placeholder,
      hasError,
      errorMessage,
      options,
      isEditing = true,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref
  ) => {
    const { name } = registration;
    const { darkMode } = useTheme();

    const customTheme = (theme: any) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: darkMode ? "#4b5563" : "#f0f0f0",
        primary: "",
      },
    });

    return (
      <div>
        {label && (
          <Label htmlFor={name} isRequired={isRequired}>
            {label}
          </Label>
        )}

        <Controller
          name={name as string}
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <Select
              name={name as string}
              options={options}
              value={value}
              placeholder={placeholder}
              isDisabled={!isEditing}
              onChange={onChange}
              onBlur={onBlur}
              styles={getCustomSelectStyles({ hasError: !!hasError })}
              components={{
                IndicatorSeparator: () => null,
                Option: CustomOption,
                SingleValue,
                Control,
                Menu,
              }}
              theme={customTheme}
              noOptionsMessage={({ inputValue }) =>
                `No result found for "${inputValue}"`
              }
            />
          )}
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
);

SelectField.displayName = "SelectField";
export default SelectField;
