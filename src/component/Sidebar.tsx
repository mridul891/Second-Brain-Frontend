import LogoIcon from "../icons/LogoIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="h-full bg-white w-72  py-4">
      <div className="text-4xl font-bold text-purple-600 text-center inline-flex items-center gap-4 justify-center w-full">
        <LogoIcon />
        Brainly
      </div>
      <div className="mt-10 flex flex-col gap-10 font-semibold text-2xl justify-center ">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
};

export default Sidebar;
