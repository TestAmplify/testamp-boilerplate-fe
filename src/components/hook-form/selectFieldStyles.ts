import { StylesConfig } from "react-select";
import { OptionType } from "@/types";

type CustomStylesProps = {
  hasError?: boolean;
};

const getCustomSelectStyles = ({
  hasError,
}: CustomStylesProps): StylesConfig<OptionType, false> => ({
  option: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? "#B1B0B9" : "#383938",
    cursor: "pointer",
  }),

  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    background: "#FBFBFB",
    borderColor: state.isFocused ? "#676767" : hasError ? "#EF4444" : "#E1E1E1",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#383932",
    },
  }),

  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
});

export default getCustomSelectStyles;
