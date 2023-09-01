import { NavBar, SideComponent } from "@/components/molecules";

const DashBoard = () => {
  return (
    <div className="px-5 py-5 flex justify-center items-center gap-5 bg-[#f8faff]">
      <div className="w-1/5">
        <NavBar />
      </div>
      <div className="w-3/4">
        <SideComponent />
      </div>
    </div>
  );
};

export default DashBoard;
