import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormSelect from "../../components/User/form/FormSelect";
import FormInput from "../../components/User/form/FormInput";
import ImageUploadCard from "../../components/User/form/ImageUploadCard";

const PersonalDetails = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const sexualOrientations = [
    "Heterosexual",
    "Homosexual",
    "Bisexual",
    "Pansexual",
    "Asexual",
  ];
  const dummyHobbies = [
    "Reading",
    "Traveling",
    "Photography",
    "Cooking",
    "Gaming",
  ];

  const [photos, setPhotos] = useState(Array.from({ length: 6 }, () => null));

  const handlePhotoUpload = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const updatedPhotos = [...photos];
      updatedPhotos[index] = reader.result;
      setPhotos(updatedPhotos);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index] = null;
    setPhotos(updatedPhotos);
  };

  const handleSkip = () => {
    console.log("Skipped");
  };

  return (
    <>
      <div className="bg-gray-900 pt-3 text-white flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold">Create Account</h1>
        <hr className="border-t border-white my-4 min-w-full" />
      </div>
      <div className="bg-gray-900 p-8 flex flex-wrap justify-center items-start">
        <div className="flex-1 mr-8">
          <div className="text-center mb-8">
            <h1 className="text-white text-2xl font-bold">Personal Details</h1>
          </div>
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            control={control}
            rules={{ required: "First name is required" }}
            errors={errors}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            control={control}
            rules={{ required: "Email is required" }}
            errors={errors}
          />
          <FormInput
            label="Birthday"
            name="birthday"
            type="date"
            placeholder="Select your birthday"
            control={control}
            rules={{ required: "Birthday is required" }}
            errors={errors}
          />
          <FormSelect
            label="Gender"
            name="gender"
            options={["", "Male", "Female", "Other"]}
            control={control}
            rules={{ required: "Gender is required" }}
            errors={errors}
          />
          <FormSelect
            label="Interested In"
            name="interestedIn"
            options={["", "Men", "Women", "Everyone"]}
            control={control}
            rules={{ required: "Interest is required" }}
            errors={errors}
          />
          <FormSelect
            label="Looking For"
            name="lookingFor"
            options={[
              "",
              "Long-term partner",
              "Short-term open to long",
              "Short-term fun",
              "New friends",
              "Still figuring it out",
            ]}
            control={control}
            rules={{ required: "Looking for is required" }}
            errors={errors}
          />
          <FormSelect
            label="Sexual Orientation"
            name="sexualOrientation"
            options={["", ...sexualOrientations]}
            control={control}
            rules={{ required: "Sexual orientation is required" }}
            errors={errors}
          />
          <FormSelect
            label="Hobbies"
            name="hobbies"
            options={["", ...dummyHobbies]}
            control={control}
            rules={{ required: "Hobbies are required" }}
            errors={errors}
          />
        </div>

        <div className="flex-1 flex flex-wrap justify-center">
          <div className="text-center w-full mb-8">
            <h2 className="text-white text-2xl font-bold">Profile Photos</h2>
          </div>
          {photos.map((photo, index) => (
            <div key={index} className="mt-4" style={{ width: "30%" }}>
              <ImageUploadCard
                photo={photo}
                onUpload={(event) => handlePhotoUpload(event, index)}
                onRemove={() => handleRemovePhoto(index)}
              />
            </div>
          ))}
        </div>

        <div className="w-full text-center mt-8">
          <div className="flex justify-between">
            <button
              onClick={handleSkip}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-3xl mr-4"
            >
              Skip
            </button>
            <button
              onClick={handleSubmit(onSubmit)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-3xl mr-4"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
