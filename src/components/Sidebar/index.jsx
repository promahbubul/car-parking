import { NavLink, useNavigate } from "react-router-dom";
import { sidebarLinksData } from "../../constant/home.constant";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("https://car-parking-backend.vercel.app/logout", {
        withCredentials: true,
      })
      .then(({ data }) => {
        if (data?.success) {
          toast.success(data?.message);
          navigate("/login");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hidden lg:block w-[370px] lg:h-screen bg-base-300">
      <h1 className=" text-center py-5 text-3xl font-medium border-b border-b-accent text-accent">
        Car Parking
      </h1>
      <div className="flex flex-col justify-between h-[calc(100%-77px)]">
        <div className="flex flex-col gap-1">
          {sidebarLinksData.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-3 text-xl font-medium  dark:text-black flex flex-row  items-center gap-5 bg-accent text-black"
                  : "px-5 py-3 text-xl font-medium  dark:text-slate-200 flex flex-row  items-center gap-5 hover:bg-accent dark:bg-base-100 bg-gray-300 text-slate-800 hover:text-black"
              }
              key={item.id}
              to={item.to}
            >
              <span className="">{item.icon()}</span>
              <span className="">{item.title}</span>
            </NavLink>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="text-center flex flex-row items-center justify-center p-5 bg-error hover:bg-red-500 cursor-pointer transition-all text-white gap-5 "
        >
          <div className="text-2xl font-bold">
            <CiLogout />
          </div>
          <p className="text-lg font-medium">Logout</p>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
