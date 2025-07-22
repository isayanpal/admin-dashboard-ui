import { ChartColumn, Home, NotepadText} from "lucide-react";

export const navbarLinks = [
    {
        title: "Dashboard",
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
    title: "Total Products",
    value: "25,154",
    percentage: "25%",
    trend: "up",
    subtitle: "Trending up this month",
    description: "Products added in the last 6 months",
  },
  {
    title: "Orders",
    value: "10,372",
    percentage: "12%",
    trend: "up",
    subtitle: "Trending up this month",
    description: "Orders processed in the last 6 months",
  },
  {
    title: "Revenue",
    value: "$98,276",
    percentage: "8%",
    trend: "up",
    subtitle: "Trending up this month",
    description: "Total revenue in the last 6 months",
  },
  {
    title: "Returns",
    value: "1,245",
    percentage: "-5%",
    trend: "down",
    subtitle: "Trending down this month",
    description: "Returned items in the last 6 months",
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
  { name: "John Doe", status: "Paid", date: "2025-07-01", amount: "$250.00" },
  { name: "Jane Smith", status: "Pending", date: "2025-07-15", amount: "$140.00" },
  { name: "Alice Johnson", status: "Overdue", date: "2025-06-22", amount: "$320.00" },
  { name: "Mark Wilson", status: "Paid", date: "2025-07-20", amount: "$180.00" },
  { name: "Sara Lee", status: "Paid", date: "2025-07-10", amount: "$210.00" },
  { name: "Tom Hardy", status: "Pending", date: "2025-07-18", amount: "$175.00" },
  { name: "Emma Watson", status: "Overdue", date: "2025-06-30", amount: "$310.00" },
  { name: "Chris Evans", status: "Paid", date: "2025-07-05", amount: "$275.00" },
  { name: "Olivia Brown", status: "Pending", date: "2025-07-21", amount: "$190.00" },
  { name: "Liam Davis", status: "Overdue", date: "2025-06-28", amount: "$350.00" },
  { name: "Noah Wilson", status: "Paid", date: "2025-07-12", amount: "$220.00" },
  { name: "Sophia Taylor", status: "Pending", date: "2025-07-19", amount: "$160.00" },
];
