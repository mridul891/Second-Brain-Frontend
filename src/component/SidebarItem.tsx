import { ReactElement } from "react";

const SidebarItem = ({ text, icon }: { text: string; icon: ReactElement }) => {
  return (
    <div className="flex  items-center justify-evenly text-slate-700">
      <div>{icon}</div>
      {text}
    </div>
  );
};

export default SidebarItem;
