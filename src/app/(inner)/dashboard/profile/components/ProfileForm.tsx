import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormPersist from "react-hook-form-persist";
import ImageUpload from "./ImageUpload";
import ProfileInputFields from "./ProfileInputFields";
import ButtonBlue from "../../components/ButtonBlue";
import ButtonWhite from "../../components/ButtonWhite";
import { validationSchema } from "./ProfileSchema";
import { ProfileUpdate, OptionType, UserInfo, ImageValues } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { UseMutationResult } from "@tanstack/react-query";
import { handleRemoveImage } from "../helperFunctions";

interface Props {
  userInfo: any;
  countries: OptionType[];
  mutation: UseMutationResult<UserInfo, Error, FormData, unknown>;
}

const ProfileForm = ({ userInfo, countries, mutation }: Props) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const {
    control,
    register,
    watch,
    setValue,
    reset,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileUpdate>({
    resolver: yupResolver<ProfileUpdate>(validationSchema),
    mode: "onSubmit",
  });

  //Set input fields when component mounts and userInfo is updated
  useEffect(() => {
    if (userInfo) {
      reset({
        firstname: userInfo.firstname || "",
        lastname: userInfo.lastname || "",
        email: userInfo.email || "",
        state: userInfo.state || "",
        homeAddress: userInfo.homeAddress || "",
        postalCode: userInfo.postalCode || "",
        profileImage: userInfo.profileImage || null,
        country: userInfo.country || "",
      });
    }
  }, [userInfo, reset]);

  // Persist new entered info on reload
  useFormPersist("profileForm", {
    watch,
    setValue,
    exclude: ["profileImage"],
  });

  //Text to display while submitting updated data
  const renderSubmitButton = () => {
    if (mutation.isPending) {
      return (
        <span className="flex items-center justify-center">
          <Icon icon="line-md:loading-twotone-loop" className="w-5 h-5 mr-2" />
          Updating...
        </span>
      );
    }
    return "Update";
  };

  const handleEditClick = () => {
    setIsEditing((currentEdit) => !currentEdit);
    setTimeout(() => {
      setFocus("firstname");
    }, 20); // Ensure focus happens after state update
  };

  const onSubmit: SubmitHandler<ProfileUpdate> = async (
    data: ProfileUpdate,
    e
  ) => {
    e?.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("country", (data.country as OptionType).value as string);
    formData.append("state", data.state);
    formData.append("homeAddress", data.homeAddress);
    formData.append("postalCode", data.postalCode);
    formData.append("profileImage", (data.profileImage as ImageValues).name);

    await mutation.mutateAsync(formData);
    if (mutation.isSuccess) {
      // reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleRemoveImage(previewImage, setPreviewImage, setValue);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-5">
      <ImageUpload
        control={control}
        register={register}
        errors={errors}
        setValue={setValue}
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
      />
      <ProfileInputFields
        control={control}
        register={register}
        errors={errors}
        isEditing={isEditing}
        countries={countries as OptionType[]}
        handleEditClick={handleEditClick}
      />
      <section className="flex flex-wrap justify-end gap-3 mb-5 mt-9">
        <ButtonWhite type="reset">Cancel</ButtonWhite>
        <ButtonBlue type="submit">{renderSubmitButton()}</ButtonBlue>
      </section>
    </form>
  );
};

export default ProfileForm;
