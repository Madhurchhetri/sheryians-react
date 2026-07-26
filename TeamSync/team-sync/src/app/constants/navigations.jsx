import { Building, ChartArea, File, LayoutDashboard, List, PersonStanding, Presentation, Settings, UserRound } from "lucide-react";


export let employeeNavigation = [
    {
        Path : "/home",
        title : "Dashboard",
        icon : LayoutDashboard,
    },
    {
        Path : "/home/myTask",
        title : "My-Task",
        icon : List,
    },
    {
        Path : "/home/chat",
        title : "Chats",
        icon : ChartArea,
    },
    {
        Path : "/home/attendence",
        title : "Attendence",
        icon : Presentation,
    },
    {
        Path : "/home/profile",
        title : "profile",
        icon : UserRound,
    },
    {
        Path : "/home/setting",
        title : "Setting",
        icon : Settings,
    },
];

export let adminNavigation = [
    {
        path : "/home",
        title : "Dashboard",
        icon : LayoutDashboard,
    },
    {
        path : "/home/task",
        title : "Task",
        icon : List,
    },
    {
        path : "/home/chat",
        title : "Chats",
        icon : ChartArea,
    },
    {
        path : "/home/department",
        title : "Departments",
        icon : Building,
    },
    {
        path : "/home/employee",
        title : "Employee",
        icon : PersonStanding,
    },
    {
        path : "/home/document",
        title : "Documents",
        icon : File,
    },
    {
        path : "/home/setting",
        title : "Setting",
        icon : Settings,
    },
]
