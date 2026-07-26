import Attendence from "../../features/employee module/Attendence/ui/pages/Attendence";
import MyTask from "../../features/employee module/MyTask/ui/pages/MyTask";
import Profile from "../../features/employee module/profile/ui/pages/Profile";

export let employeeRoutes = [
    {
        path:"myTask",
        element :<MyTask/>
    },
    {
        path:"attendence",
        element :<Attendence/>
    },
    {
        path:"profile",
        element :<Profile/>
    }
]