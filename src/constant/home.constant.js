import { MdSpaceDashboard } from "react-icons/md";
import { FaCarSide } from "react-icons/fa6";
import { PiListChecksFill } from "react-icons/pi";

const sidebarLinksData = [
  { id: 1, to: "/", title: "Dashboard", icon: MdSpaceDashboard },
  { id: 2, to: "add-cars", title: "Add Cars", icon: FaCarSide },
  { id: 3, to: "list-cars", title: "List Cars", icon: PiListChecksFill },
];

export { sidebarLinksData };
