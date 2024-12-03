import { ReactElement } from "react";

const SidebarItem = ({ text, icon }: { text: string; icon: ReactElement }) => {
  return (
    <div
      className="inline-flex items-center justify-center gap-5 text-gray-700 cursor-pointer  
    hover:text-gray-500"
    >
      {icon} {text}
    </div>
  );
};

export default SidebarItem;
