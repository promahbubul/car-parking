import { NavLink, useNavigate } from "react-router-dom";
import { sidebarLinksData } from "../../constant/home.constant";
import axios from "axios";
import { CiLogout } from "react-icons/ci";
import toast from "react-hot-toast";

const MobileMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("https://car-parking-system.shadhin-bangla.com/logout", {
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
    <div className="h-14  w-full bg-slate-700 fixed  bottom-0 justify-between items-center gap-[1px]  flex flex-row lg:hidden ">
      {sidebarLinksData.map((item) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:px-5 md:py-3 text-xs sm:text-base font-normal  h-full justify-center  w-1/3 dark:text-black flex flex-col  items-center gap-1 bg-accent text-black"
              : "md:px-5 md:py-3 text-sm sm:text-base  font-medium h-full justify-center items-center w-1/3 dark:text-slate-200 flex flex-col   gap-1 hover:bg-accent dark:bg-base-300 bg-gray-300 text-slate-800 hover:text-black"
          }
          key={item.id}
          to={item.to}
        >
          <span className="text-lg">{item.icon()}</span>
          <span className="">{item.title}</span>
        </NavLink>
      ))}
      <button
        onClick={handleLogout}
        className="md:px-2 md:py-2 text-xs  sm:text-base   h-full justify-center items-center w-[70px] dark:text-slate-200 flex flex-col font-light  gap-1 bg-error text-slate-800 hover:text-black"
      >
        <span className="text-xl">
          <CiLogout />
        </span>
        <span className="">Logout</span>
      </button>
    </div>
  );
};
export default MobileMenu;
