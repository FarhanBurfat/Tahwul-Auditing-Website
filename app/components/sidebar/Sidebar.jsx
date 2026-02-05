"use client";
import Image from "next/image";
import logo from "../../../public/assets/icons/logo.png";
import {
  DashboardSvgIcon,
  SidebarDocumentsSvg,
  SidebarIconSvg,
  SidebarPerspectiveSvg,
  SidebarReportsSvg,
  SidebarTasksSvg,
  SidebarUserSvg,
} from "../../../public/assets/index";
import SidebarCards from "../../components/sidebar/SidebarCards";

function Sidebar() {
  return (
    <div className="relative w-[256px] h-[1000px] bg-[#1D3557]">
      <Image
        className="w-[100px] h-[40px] mt-[10px] ml-[23px] cursor-pointer"
        src={logo}
        alt="logo"
      />
      <SidebarIconSvg
        className={`absolute left-[210px] top-[15px] cursor-pointer`}
      />

      <div className="mt-[26px]">
        <SidebarCards
          className="cursor-pointer"
          svg={<DashboardSvgIcon className={`ml-[12px] cursor-pointer`} />}
          text="Dashboard"
        />
        <SidebarCards
          svg={<SidebarPerspectiveSvg className={`ml-[12px] cursor-pointer`} />}
          text="Perspectives"
        />
        <SidebarCards
          svg={<SidebarTasksSvg className={`ml-[12px] cursor-pointer`} />}
          text="Tasks"
        />
        <SidebarCards
          svg={<SidebarDocumentsSvg className={`ml-[12px] cursor-pointer`} />}
          text="Documents"
        />
        <SidebarCards
          svg={<SidebarReportsSvg className={`ml-[12px] cursor-pointer`} />}
          text="Reports"
        />
        <SidebarCards
          svg={<SidebarUserSvg className={`ml-[12px] cursor-pointer`} />}
          text="User & Roles"
        />
      </div>
    </div>
  );
}

export default Sidebar;
