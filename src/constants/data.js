import { ChartColumn, Home, NotepadText} from "lucide-react";

export const navbarLinks = [
    {
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
            {
                label: "Reports",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
];

export const summaryCardData = [
  {
    title: "Users",
    value: "25,154",
    percentage: "25%",
    trend: "up",
    subtitle: "Trending up this month",
  },
  {
    title: "Sales",
    value: "10,372",
    percentage: "12%",
    trend: "up",
    subtitle: "Trending up this month",
  },
  {
    title: "Revenue",
    value: "$98,276",
    percentage: "8%",
    trend: "up",
    subtitle: "Trending up this month",
  },
  {
    title: "Conversion Rate",
    value: "1,245",
    percentage: "-5%",
    trend: "down",
    subtitle: "Trending down this month",
  },
];

export const chartData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const transactionData = [
  { name: "John Doe", status: "Success", date: "2025-07-01", amount: "$250.00" },
  { name: "Jane Smith", status: "Pending", date: "2025-07-15", amount: "$140.00" },
  { name: "Alice Johnson", status: "Failure", date: "2025-06-22", amount: "$320.00" },
  { name: "Mark Wilson", status: "Success", date: "2025-07-20", amount: "$180.00" },
  { name: "Sara Lee", status: "Success", date: "2025-07-10", amount: "$210.00" },
  { name: "Tom Hardy", status: "Pending", date: "2025-07-18", amount: "$175.00" },
  { name: "Emma Watson", status: "Failure", date: "2025-06-30", amount: "$310.00" },
  { name: "Chris Evans", status: "Success", date: "2025-07-05", amount: "$275.00" },
  { name: "Olivia Brown", status: "Pending", date: "2025-07-21", amount: "$190.00" },
  { name: "Liam Davis", status: "Failure", date: "2025-06-28", amount: "$350.00" },
  { name: "Noah Wilson", status: "Success", date: "2025-07-12", amount: "$220.00" },
  { name: "Sophia Taylor", status: "Pending", date: "2025-07-19", amount: "$160.00" },
];
