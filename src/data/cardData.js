import { LikeIcon, PeopleIcon, RevenueIcon, TransactionIcon } from "@/svgs";

export const cards = [
  {
    icon: <RevenueIcon />,
    iconColor: "bg-green-400",
    smallText: "Total Revenues",
    value: "$2,129,430",
    smallNumber: "+2.5%",
  },
  {
    icon: <TransactionIcon />,
    iconColor: "bg-orange-300",
    smallText: "Total Transactions",
    value: "1520",
    smallNumber: "+1.7%",
  },
  {
    icon: <LikeIcon />,
    iconColor: "bg-rose-300",
    smallText: "Total Likes",
    value: "9721",
    smallNumber: "+1.4%",
  },
  {
    icon: <PeopleIcon />,
    iconColor: "bg-indigo-400",
    smallText: "Total Users",
    value: "9721",
    smallNumber: "+4.2%",
  },
];
