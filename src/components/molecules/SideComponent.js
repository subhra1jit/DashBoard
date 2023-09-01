import { BellIcon, SearchIcon } from "@/svgs";
import Image from "next/image";

const SideComponent = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen w-full py-5">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-bold text-xl">DashBoard</h2>
        <div className="flex justify-center items-center gap-3">
          <div className="flex justify-around items-center py-1.2 bg-[#ffffff] w-full px-2">
            <input
              type="text"
              placeholder="search...."
              className="px-2 rounded-2xl text-xs py-1.5 focus:ring-0 outline-none border-0 "
            />
            <SearchIcon />
          </div>
          <BellIcon />
          <div className="w-8 h-8 rounded-full relative overflow-hidden cursor-pointer">
            <Image
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              fill
              priority
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideComponent;
