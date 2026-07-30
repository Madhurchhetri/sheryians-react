// import { User } from "lucide-react";

// import UploadPhoto from "./UploadPhoto";
// import FormInput from "./FormInput";
// import FormTextarea from "./FormTextarea";

// const PersonalInfoForm = ({
//   register,
//   errors,
//   setValue,
//   watch,
// }) => {
//   return (
//     <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl p-8">

//       {/* TITLE */}
//       <div className="flex items-center gap-4 pb-6 border-b border-[var(--border-color)]">

//         <User
//           size={28}
//           className="text-[var(--primary)]"
//         />

//         <h2 className="text-4xl font-bold text-[var(--text-primary)]">
//           Personal Information
//         </h2>

//       </div>

//       {/* CONTENT */}
//       <div className="grid grid-cols-[220px_1fr] gap-10 mt-8">

//         {/* IMAGE */}
//         <UploadPhoto
//           setValue={setValue}
//           watch={watch}
//         />

//         {/* FORM */}
//         <div>

//           <div className="grid grid-cols-2 gap-6">

//             <FormInput
//               label="Full Name *"
//               placeholder="e.g. Sarah Jenkins"
//               register={register}
//               name="name"
//               errors={errors}
//             />

//             <FormInput
//               label="Email Address *"
//               placeholder="sarah@gmail.com"
//               type="email"
//               register={register}
//               name="email"
//               errors={errors}
//             />

//           </div>

//           <div className="mt-6">

//             <FormTextarea
//               label="Bio / About"
//               placeholder="Tell us about employee..."
//               register={register}
//               name="bio"
//             />

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default PersonalInfoForm;

import { User } from "lucide-react";

import UploadPhoto from "./UploadPhoto";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

const PersonalInfoForm = ({
  register,
  errors,
  setValue,
  watch,
  isEditMode,
}) => {
  return (
    <div>
      {/* TITLE */}
      <div className="flex items-center gap-4 pb-6 border-b border-[var(--border-color)]">
        <User
          size={28}
          className="text-[var(--primary)]"
        />

        <h2 className="text-4xl font-bold text-[var(--text-primary)]">
          Personal Information
        </h2>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-[220px_1fr] gap-10 mt-8">

        {/* IMAGE */}
        <UploadPhoto
          setValue={setValue}
          watch={watch}
        />

        {/* FORM */}
        <div>

          <div className="grid grid-cols-2 gap-6">

            {/* NAME */}
            <FormInput
              label="Full Name *"
              placeholder="e.g. Sarah Jenkins"
              register={register}
              name="name"
              errors={errors}
            />

            {/* EMAIL */}
            <FormInput
              label="Email Address *"
              placeholder="sarah@gmail.com"
              type="email"
              register={register}
              name="email"
              errors={errors}
            />

          </div>

          {/* BIO */}
          <div className="mt-6">
            <FormTextarea
              label="Bio / About"
              placeholder="Tell us about employee..."
              register={register}
              name="bio"
            />
          </div>

          {/* PASSWORD */}
          {!isEditMode && (
            <div className="mt-6">
              <FormInput
                label="Password *"
                placeholder="Enter employee password"
                type="password"
                register={register}
                name="password"
                errors={errors}
                validation={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                }}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;