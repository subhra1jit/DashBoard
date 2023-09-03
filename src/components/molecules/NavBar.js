import {
  DashboardIcon,
  MenuIcon,
  ScheduleIcon,
  SettingIcon,
  TransactionIcon,
  UserIcon,
} from "@/svgs";
import XIcon from "@/svgs/xIcon";
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
  const [openBar, setOpenBar] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#3f84f7] rounded-md h-screen py-5 lg:flex lg:flex-col hidden ">
        <h2 className="text-white text-3xl px-10 font-bold py-10">Board.</h2>
        <div className="px-10 flex flex-col justify-between items-start flex-1">
          <div className="lg:flex lg:flex-wrap   gap-5">
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

      {/* for mbobile device and table screen */}

      {openBar ? (
        <div className="w-full flex flex-col justify-center items-center gap-3 bg-[#3f84f7]">
          <div className="w-full flex justify-between items-center  px-3 py-3 lg:hidden rounded-md">
            <h1 className="text-white font-bold text-xl">Board.</h1>
            <div
              className="cursor-pointer"
              onClick={() => setOpenBar(!openBar)}
            >
              <XIcon />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full shadow-md rounded-md py-3">
            {board?.map((item, index) => (
              <div className="transition-all cursor-pointer w-full py-2 px-5 text-white font-bold hover:bg-white hover:text-black ">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between items-center bg-[#3f84f7] px-3 py-3 lg:hidden rounded-md">
          <h1 className="text-white font-bold text-xl">Board.</h1>
          <div className="cursor-pointer" onClick={() => setOpenBar(!openBar)}>
            <MenuIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
