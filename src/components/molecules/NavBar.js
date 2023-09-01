import {
  DashboardIcon,
  ScheduleIcon,
  SettingIcon,
  TransactionIcon,
  UserIcon,
} from "@/svgs";
import { useState } from "react";

const board = [
  {
    name: "DashBoard",
    icon: <DashboardIcon />,
  },
  {
    name: "Transactions",
    icon: <TransactionIcon />,
  },
  {
    name: "Schedules",
    icon: <ScheduleIcon />,
  },
  {
    name: "Users",
    icon: <UserIcon />,
  },
  {
    name: "Settings",
    icon: <SettingIcon />,
  },
];

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("DashBoard");

  return (
    <div className="bg-[#3f84f7] rounded-md h-screen py-5 flex flex-col">
      <h2 className="text-white text-3xl px-10 font-bold py-10">Board.</h2>
      <div className="px-10 flex flex-col justify-between items-start flex-1">
        <div className="flex flex-wrap gap-5">
          {board?.map((item, index) => (
            <div
              className={`flex justify-center items-center gap-5 cursor-pointer ${
                activeItem === item.name ? "font-bold" : "font-normal"
              }`}
              key={index}
              onClick={() => setActiveItem(item.name)}
            >
              {activeItem === item.name ? (
                <div className="font-bold">{item.icon}</div>
              ) : (
                <div>{item.icon}</div>
              )}
              <p className="text-white text-start">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <p className="text-white cursor-pointer">Help</p>
          <p className="text-white cursor-pointer">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
