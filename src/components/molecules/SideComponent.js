import { BellIcon, SearchIcon } from "@/svgs";
import {
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { cards } from "../../data/cardData";
import Modal from "../atoms/modal";
import BarChart from "./BarChart";
import Card from "./Card";
import PieChart from "./PieChart";

const SideComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState({
    name: "",
    insta: "",
    youtube: "",
    email: "",
    phone: "",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  console.log(user);

  return (
    <div>
      <div className="flex flex-col justify-start items-center h-auto w-full py-3 lg:px-10 px-5">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-bold text-xl">DashBoard</h2>
          <div className="flex justify-center items-center gap-3">
            <div className="md:flex justify-around items-center py-1.2 bg-[#ffffff] w-full px-2 hidden">
              <input
                type="text"
                placeholder="search...."
                className="px-2 rounded-2xl text-xs py-1.5 focus:ring-0 outline-none border-0 "
              />
              <SearchIcon />
            </div>
            <BellIcon />
            <div className="w-8 h-8 relative rounded-full  cursor-pointer overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                fill
                priority
                alt="profile"
              />
            </div>
          </div>
        </div>
        <div className=" w-full py-2 flex justify-start items-center flex-wrap">
          {cards?.map((item, index) => (
            <div className="p-2 flex-grow " key={index}>
              <Card item={item} />
            </div>
          ))}
        </div>
        <div className="w-full">
          <BarChart />
        </div>
        <div className="md:flex md:flex-row flex flex-col justify-between items-center gap-3 w-full py-2 h-full">
          <div className="shadow-md rounded-md flex flex-col justify-start items-center gap-2 md:w-1/2 w-full py-3 px-10 ">
            <div className="flex justify-around w-full">
              <h2 className="text-sm font-bold">Top Products</h2>
              <p className="text-[#bbbbbb] text-xs">May-June 2021</p>
            </div>
            <div className="flex justify-around w-full  ">
              <PieChart
                title="Top Products"
                series={[20, 20, 60]}
                color={["#98d89e", "#ee8484", "#f6dc7d"]}
                className="w-1/2"
              />
              <div className="space-y-3 w-1/2">
                <div className="flex flex-wrap justify-start">
                  <div className="flex justify-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#98d89e]"></span>
                    <div className="flex flex-col justify-start gap-1">
                      <p className="text-sm font-bold ">Basic Tees</p>
                      <p className="text-[9px]">55%</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#f6dc7d]"></span>
                    <div className="flex flex-col justify-start gap-1">
                      <p className="text-sm font-bold ">Custom Shorts Pants</p>
                      <p className="text-[9px]">31%</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ee8484]"></span>
                    <div className="flex flex-col justify-start gap-1">
                      <p className="text-sm font-bold ">Super Hoodies</p>
                      <p className="text-[9px]">14%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!user?.name ? (
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center shadow-md rounded-md py-8 gap-3">
              <div
                className="flex p-4 w-16 h-16 rounded-full justify-center items-center bg-[#f5f5f5] cursor-pointer"
                onClick={openModal}
              >
                <h1 className="text-[#999ca0] text-bold text-2xl">+</h1>
              </div>
              <p className="text-xs text-[#999ca0]">Add to profile</p>
            </div>
          ) : (
            <div className="md:w-1/2 w-full flex flex-col justify-start px-5 shadow-md rounded-md py-4 gap-3">
              <h1 className="text-2xl font-semibold py-2">{user?.name}</h1>
              <div className="flex justify-around items-center gap-3 w-full ">
                <div className="flex justify-center items-center gap-3 w-full">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                  <p>{user.phone}</p>
                </div>
                <div className="flex justify-center items-center gap-3 w-full">
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                  <p>{user?.insta ?? ""}</p>
                </div>
              </div>
              <div className="flex justify-around items-center gap-3 w-full ">
                <div className="flex justify-center items-center gap-3 w-full">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                  <p>{user.email}</p>
                </div>
                <div className="flex justify-center items-center gap-3 w-full">
                  <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
                  <p>{user?.youtube ?? ""}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isOpen ? <Modal close={closeModal} setUser={setUser} /> : ""}
    </div>
  );
};

export default SideComponent;
