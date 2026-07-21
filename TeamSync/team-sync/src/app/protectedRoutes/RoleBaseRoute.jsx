import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const RoleBaseRoute = ({ allowedRoles }) => {
  let { employee } = useSelector((store) => store.auth);

  console.log("Employee:", employee);
  console.log("Role:", employee?.role);
  console.log("Allowed:", allowedRoles);
  console.log("Access:", allowedRoles.includes(employee?.role));

  if (!allowedRoles.includes(employee?.role)) {
    return <Navigate to={"/unauthorized"} />;
  }

  return <Outlet />;
};

export default RoleBaseRoute;