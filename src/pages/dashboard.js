import { NavBar, SideComponent } from "@/components/molecules";

const DashBoard = () => {
  return (
    <div className="px-5 py-5 flex lg:flex-row justify-center items-center flex-col gap-5 bg-[#f8faff]">
      <div className="lg:w-1/5 w-full">
        <NavBar />
      </div>
      <div className="lg:w-3/4 w-full">
        <SideComponent />
      </div>
    </div>
  );
};

export default DashBoard;
