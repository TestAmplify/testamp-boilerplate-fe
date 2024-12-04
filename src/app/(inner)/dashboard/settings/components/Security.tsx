import { InputField } from "@/components/hook-form/InputField";
import { yupResolver } from "@hookform/resolvers/yup";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import * as Yup from "yup";
import ButtonWhite from "../../components/ButtonWhite";
import ButtonBlue from "../../components/ButtonBlue";
import { Icon } from "@iconify/react";
import { PasswordUpdate } from "@/types";

const passwordValidationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string()
    .required("New password is required")
    .min(8, "New password must be at least 8 characters long")
    .notOneOf(
      [Yup.ref("currentPassword")],
      "New password must be different from the current password"
    ),
  confirmNewPassword: Yup.string()
    .required("Please confirm your new password")
    .oneOf([Yup.ref("newPassword")], "Password must match new password"),
});

const Security = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordValidationSchema),
    mode: "onBlur",
  });

  //Persists data on reload
  useFormPersist("securityForm", {
    watch,
    setValue,
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  });

  const password = watch("newPassword");
  const confirmPassword = watch("confirmNewPassword");

  // Check if both fields are filled and no errors
  const isPasswordMatch =
    password &&
    confirmPassword &&
    !errors.newPassword &&
    !errors.confirmNewPassword &&
    password === confirmPassword;

  const onSubmit: SubmitHandler<PasswordUpdate> = async (
    data: PasswordUpdate,
    e
  ) => {
    e?.preventDefault();

    // await mutation.mutateAsync(data);
  };

  return (
    <section className="text-foundation-grey-normal dark:text-white">
      <h4 className="font-bold text-2xl">Password</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-1 lg:grid-cols-2 items-center gap-x-32 gap-y-4 my-5">
          <div>
            <label htmlFor="language" className="font-semibold text-[17px]">
              Current Password
            </label>
          </div>
          <div className="relative">
            <InputField
              registration={{ ...register("currentPassword") }}
              type={showPassword ? "text" : "password"}
              control={control}
              errorMessage={errors?.currentPassword?.message}
              isRequired
              hasError={errors.currentPassword}
              withIcon
              iconEnd={
                <span
                  className="inline-flex items-center gap-2 font-semibold text-[17px] text-foundation-grey-normal dark:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Icon
                    icon={showPassword ? "ri:eye-off-line" : "gg:eye"}
                    className="w-6 h-24"
                  />
                  <span className="">{showPassword ? "Hide" : "View"}</span>
                </span>
              }
            />
          </div>
        </section>
        <section className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-4 mt-16">
          <div>
            <h5 className="font-semibold text-[17px]">New password</h5>
            <label
              htmlFor="timeZone"
              className="text-sm text-foundation-white-dark-active dark:text-white"
            >
              Use a strong password that includes a mix of letters, numbers, and
              special characters
            </label>
          </div>
          <div>
            <InputField
              registration={{ ...register("newPassword") }}
              type="password"
              control={control}
              errorMessage={errors?.newPassword?.message}
              isRequired
              hasError={errors.newPassword}
            />
          </div>
        </section>
        <section className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-1 lg:grid-cols-2  gap-x-32 gap-y-4 mt-16 mb-1">
          <div>
            <h5 className="font-semibold text-[17px]">Confirm new password</h5>
            <label
              htmlFor="timeZone"
              className="text-sm text-foundation-white-dark-active dark:text-white"
            >
              Ensure that the password matches the new password you have used
              above
            </label>
          </div>
          <div>
            <InputField
              registration={{ ...register("confirmNewPassword") }}
              type="password"
              control={control}
              errorMessage={errors?.confirmNewPassword?.message}
              isRequired
              hasError={errors.confirmNewPassword}
            />
          </div>
        </section>
        {isPasswordMatch && (
          <div className="flex items-center justify-end gap-2 font-semibold text-dashboard-green">
            {" "}
            <Icon icon="solar:check-circle-outline" className="w-5 h-5" />
            Password match
          </div>
        )}
        <section className="flex flex-wrap justify-end gap-3 mb-5 mt-9">
          <ButtonWhite type="reset">Cancel</ButtonWhite>
          <ButtonBlue type="submit">Update Password</ButtonBlue>
        </section>
      </form>
    </section>
  );
};

export default Security;
