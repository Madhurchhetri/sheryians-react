import Department from "../../features/admin module/departments/ui/pages/Department";
import Document from "../../features/admin module/documents/ui/pages/Document";
import Employee from "../../features/admin module/employees/ui/pages/Employee";
import Task from "../../features/admin module/tasks/ui/pages/Task";
import Chat from "../../features/chats/ui/pages/Chat";
import Setting from "../../features/settings/ui/pages/Setting"

export let adminRoutes = [
    {
        path:"employee",
        element : <Employee/>
    },
    {
        path:"department",
        element : <Department/>
    },
    {
        path:"task",
        element : <Task/>
    },
    {
        path: "chat",
        element : <Chat/>
    },
     {
        path: "setting",
        element : <Setting/>
    },
    {
        path:"document",
        element : <Document/>
    },
];