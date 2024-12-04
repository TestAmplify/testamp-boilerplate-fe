import { ProfileUpdate } from "@/types";
import { UseFormSetValue } from "react-hook-form";
import { toast } from "react-toastify";

export const handleErrors = (err: any) => {
  const response = err.response;
  switch (response?.status) {
    case 500:
      toast.error(response.data.message);
      break;

    case 400:
    case 401:
    case 404:
    case 403:
    case 422:
      if (response.data.errors) {
        if (Array.isArray(response.data.errors)) {
          response.data.errors.forEach((each: any) => {
            toast.error(each.message);
          });
        } else if (typeof response.data.errors === "object") {
          if (response.data.errors.length > 0) {
            Object.keys(response.data.errors).forEach((field) => {
              const errors = response.data.errors[field];
              errors.forEach((errorMessage: any) => {
                toast.error(errorMessage);
              });
            });
          } else {
            toast.error(response.data.errors.message);
          }
        }
      } else if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.error(response.data.message);
      }
      break;

    default:
      toast.error(err.message);
      break;
  }
};

export const handleRemoveImage = (
  previewImage: string | null,
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>,
  setValue: UseFormSetValue<ProfileUpdate>
) => {
  if (previewImage) {
    URL.revokeObjectURL(previewImage);
  }
  setPreviewImage(null);
  setValue("profileImage", null, { shouldValidate: true });
};
