// // ========================================
// // UPDATED AddEmployee.jsx
// // WITH REACT HOOK FORM
// // ========================================

// import { useForm } from "react-hook-form";
// import { useSearchParams, useNavigate } from "react-router-dom";

// import AddEmployeeHeader from "../components/addEmployee/AddEmployeeHeader";
// import EmploymentDetailsForm from "../components/addEmployee/EmploymentDetailsForm";
// import FormActions from "../components/addEmployee/FormActions";
// import PersonalInfoForm from "../components/addEmployee/PersonalInfoForm";
// import { createEmployee , updateEmployee } from "../../api/employeeApi";

// const AddEmployee = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const employeeId = searchParams.get("edit");

//   // REACT HOOK FORM
//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       bio: "",
//       department: "",
//       role: "",
//       joiningDate: "",
//       status: "active",
//       avatar: "",
//       password: "12345678",
//     },
//   });

//   // SUBMIT
//   const onSubmit = async (data) => {
//     // console.log("FORM DATA =>", data);
//     try {
//       if (employeeId) {
//         // UPDATE
//         let res = await updateEmployee(employeeId, data);

//         console.log(res);

//         alert("Employee updated");

//         navigate("/home/employees");
//       } else {
//         // CREATE
//         let res = await createEmployee(data);

//         console.log(res);

//         alert("Employee created");

//         reset();
//       }
//     } catch (error) {
//       console.log("error in api", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[var(--bg-main)] p-8">
//       <div className="mx-auto">
//         {/* HEADER */}
//         <AddEmployeeHeader />

//         {/* FORM */}
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* PERSONAL INFO */}
//           <PersonalInfoForm
//             register={register}
//             errors={errors}
//             setValue={setValue}
//             watch={watch}
//           />

//           {/* EMPLOYMENT DETAILS */}
//           <EmploymentDetailsForm register={register} errors={errors} />

//           {/* ACTIONS */}
//           <FormActions />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddEmployee;

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";

import AddEmployeeHeader from "../components/addEmployee/AddEmployeeHeader";
import EmploymentDetailsForm from "../components/addEmployee/EmploymentDetailsForm";
import FormActions from "../components/addEmployee/FormActions";
import PersonalInfoForm from "../components/addEmployee/PersonalInfoForm";

import { createEmployee } from "../../api/employeeApi";
import { useEmployee } from "../../hooks/useEmployees";

const AddEmployee = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const employeeId = searchParams.get("edit");

  // =========================
  // EMPLOYEE HOOK
  // =========================

  const {
    employee,
    isEmployeeLoading,
    handleUpdateEmployee,
    isUpdating,
  } = useEmployee(employeeId);

  // =========================
  // REACT HOOK FORM
  // =========================

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      department: "",
      role: "",
      joiningDate: "",
      status: "active",
      avatar: "",
      password: "",
    },
  });

  // =========================
  // FILL FORM IN EDIT MODE
  // =========================

  useEffect(() => {
    if (employeeId && employee) {
      reset({
        name: employee.name || "",
        email: employee.email || "",
        bio: employee.bio || "",
        department: employee.department || "",
        role: employee.role || "",

        joiningDate: employee.joiningDate
          ? employee.joiningDate.split("T")[0]
          : "",

        status: employee.status || "active",
        avatar: employee.avatar || "",

        // Password ko existing employee ka nahi bharna
        password: "",
      });
    }
  }, [employee, employeeId, reset]);

  // =========================
  // SUBMIT
  // =========================

  const onSubmit = async (data) => {
    try {
      // =========================
      // UPDATE
      // =========================

      if (employeeId) {
        handleUpdateEmployee(employeeId, data);

        alert("Employee updated");

        navigate("/home/employees");

        return;
      }

      // =========================
      // CREATE
      // =========================

      let res = await createEmployee(data);

      console.log(res);

      alert("Employee created");

      reset();
    } catch (error) {
      console.log("error in api", error);
    }
  };

  // =========================
  // LOADING SINGLE EMPLOYEE
  // =========================

  if (employeeId && isEmployeeLoading) {
    return <h1>Loading employee...</h1>;
  }

  return (
    <div>
      {/* HEADER */}
      <AddEmployeeHeader />

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* PERSONAL INFO */}
        <PersonalInfoForm
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
          isEditMode={!!employeeId}
        />

        {/* EMPLOYMENT DETAILS */}
        <EmploymentDetailsForm
          register={register}
          errors={errors}
        />

        {/* ACTIONS */}
        <FormActions  isEditMode={!!employeeId} />
      </form>
    </div>
  );
};

export default AddEmployee;