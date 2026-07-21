import { createBrowserRouter } from "react-router-dom";

import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";

import AuthLayout from "../layouts/AuthLayout";
import DashBoardLayout from "../layouts/DashBoardLayout";

import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import { commonRoutes } from "./CommonRoutes";
import RoleBaseRoute from "../protectedRoutes/RoleBaseRoute";
import { adminRoutes } from "./AdminRoutes";
import { employeeRoutes } from "./EmployeeRoutes";


const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path:"",
        element: <DashBoardLayout />,
        children: [
            ...commonRoutes, 
            {
                element : <RoleBaseRoute allowedRoles={['admin']}/>,
                children : adminRoutes,
            },
            {
                element : <RoleBaseRoute allowedRoles={['employee']}/>,
                children : employeeRoutes
            }
        ]
      },
    ],
  },
]);

export default router;