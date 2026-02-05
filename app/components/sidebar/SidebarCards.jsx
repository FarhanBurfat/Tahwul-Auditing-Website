import { DashboardSvgIcon } from "../../../public/assets/index";

function SidebarCards({ text, svg }) {
  return (
    <div className="w-[208px] cursor-pointer flex items-center h-[40px] mt-[8px] ml-[23px] mr-[25px] rounded-[8px] border-1 border-black">
      {svg}
      <p className="text-[14px] ml-[10px] text-[#FFFFFF]">{text}</p>
    </div>
  );
}

export default SidebarCards;
