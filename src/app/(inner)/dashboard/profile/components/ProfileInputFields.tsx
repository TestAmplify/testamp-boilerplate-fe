import { Control, UseFormRegister, FieldErrors } from "react-hook-form";
import { InputField } from "@/components/hook-form/InputField";
import SelectField from "@/components/hook-form/SelectField";
import { OptionType, ProfileUpdate } from "@/types";
import { Icon } from "@iconify/react";

interface Props {
  control: Control<ProfileUpdate>;
  register: UseFormRegister<ProfileUpdate>;
  errors: FieldErrors<ProfileUpdate>;
  countries: OptionType[];
  isEditing: boolean;
  handleEditClick: () => void;
}

const ProfileInputFields: React.FC<Props> = ({
  control,
  register,
  errors,
  countries,
  isEditing,
  handleEditClick,
}) => {
  return (
    <>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-foundation-grey-normal"
          onClick={handleEditClick}
        >
          <Icon icon="circum:edit" className="w-6 h-6" />
        </button>
      </div>
      <section className="grid sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] grid-cols-1 lg:grid-cols-2 items-center gap-x-16 gap-y-8">
        <InputField
          registration={{ ...register("firstname") }}
          label="First Name"
          placeholder="Your First Name"
          control={control}
          errorMessage={errors.firstname?.message}
          isRequired
          isEditing={isEditing}
          hasError={errors.firstname}
        />
        <InputField
          registration={{ ...register("lastname") }}
          label="Last Name"
          placeholder="Your Last Name"
          control={control}
          errorMessage={errors.lastname?.message}
          isRequired
          isEditing={isEditing}
          hasError={errors.lastname}
        />
        <InputField
          registration={{ ...register("email") }}
          type="text"
          control={control}
          errorMessage={errors.email?.message}
          label="Email"
          placeholder="Enter your email"
          isEditing={false}
          hasError={errors.email}
        />
        <SelectField
          registration={{ ...register("country") }}
          label="Country of residence"
          control={control}
          options={countries}
          errorMessage={errors.country?.message}
          hasError={errors.country}
          isRequired
          isEditing={isEditing}
        />
        <InputField
          registration={{ ...register("state") }}
          type="text"
          control={control}
          errorMessage={errors.state?.message}
          label="State of residence"
          isRequired
          isEditing={isEditing}
          hasError={errors.state}
        />
        <InputField
          registration={{ ...register("homeAddress") }}
          type="text"
          control={control}
          errorMessage={errors.homeAddress?.message}
          label="Home address"
          isRequired
          isEditing={isEditing}
          hasError={errors.homeAddress}
        />
        <InputField
          registration={{ ...register("postalCode") }}
          type="text"
          control={control}
          errorMessage={errors.postalCode?.message}
          label="Postal Code"
          isRequired
          isEditing={isEditing}
          hasError={errors.postalCode}
        />
      </section>
    </>
  );
};

export default ProfileInputFields;
