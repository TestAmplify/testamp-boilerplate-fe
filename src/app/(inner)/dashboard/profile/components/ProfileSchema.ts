import * as Yup from "yup";
import { OptionType, ImageValues } from "@/types";

const FILE_SIZE = 25 * 1024 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
  "image/svg",
];

export const validationSchema = Yup.object().shape({
  profileImage: Yup.mixed<ImageValues>()
    .required("A file is required")
    .test("fileSize", "File is too large", (value) => {
      return value ? value.size <= FILE_SIZE : false;
    })
    .test("fileFormat", "Unsupported file format", (value) => {
      return value ? SUPPORTED_FORMATS.includes(value.type) : false;
    }),
  firstname: Yup.string().required("Enter your first name"),
  lastname: Yup.string().required("Enter your last name"),
  state: Yup.string()
    .required("Enter your State")
    .min(3, "Should contain minimum of 3 characters"),
  homeAddress: Yup.string()
    .required("Enter your address")
    .min(3, "Should contain minimum of 3 characters"),
  postalCode: Yup.string().required("Enter your post code"),
  email: Yup.string()
    .email("Wrong email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address with a proper domain"
    )
    .transform((value) => (value === "" ? undefined : value))
    .notRequired(),
  country: Yup.mixed<OptionType>().required("Select a country"),
});
