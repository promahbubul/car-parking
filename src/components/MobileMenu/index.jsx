import { NavLink } from "react-router-dom";
import { sidebarLinksData } from "../../constant/home.constant";
import { CgPlayButtonR } from "react-icons/cg";

const MobileMenu = () => {
  return (
    <div className="h-20 w-full bg-slate-700 fixed bottom-0 justify-between items-center gap-[1px]  flex flex-row md:hidden ">
      {sidebarLinksData.map((item) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:px-5 md:py-3 text-sm sm:text-base font-medium  h-full justify-center  w-1/3 dark:text-black flex flex-col  items-center gap-1 bg-accent text-black"
              : "md:px-5 md:py-3 text-sm sm:text-base  font-medium h-full justify-center items-center w-1/3 dark:text-slate-200 flex flex-col   gap-1 hover:bg-accent dark:bg-base-300 bg-gray-300 text-slate-800 hover:text-black"
          }
          key={item.id}
          to={item.to}
        >
          <span className="text-xl">{item.icon()}</span>
          <span className="">{item.title}</span>
        </NavLink>
      ))}
      <button className="md:px-5 md:py-3 text-sm sm:text-base  font-medium h-full justify-center items-center w-1/3 dark:text-slate-200 flex flex-col   gap-1 hover:bg-accent dark:bg-base-300 bg-gray-300 text-slate-800 hover:text-black">
        {/* <span className="text-xl">{item.icon()}</span> */}
        <span className="">Logout</span>
      </button>
    </div>
  );
};
export default MobileMenu;
