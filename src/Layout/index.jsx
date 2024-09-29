import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu";

const MainLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar />
      {/* Design */}
      <div className="p-5 md:p-10 h-[calc(100vh-80px)] w-full lg:h-screen  overflow-y-auto ">
        <Outlet />
      </div>
      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
};
export default MainLayout;
