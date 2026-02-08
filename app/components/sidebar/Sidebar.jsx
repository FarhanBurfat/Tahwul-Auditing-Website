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
import { SidebarContext } from "../context/SidebarContext";
import { useContext } from "react";
import Link from "next/link";

function Sidebar() {
  const { expanded, setExpanded } = useContext(SidebarContext);

  const handleToggled = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${expanded ? "relative w-[256px] h-auto bg-[#1D3557]" : "w-[55px] bg-[#1D3557]"} transition-all duration-200`}
    >
      <div className="h-[40px]">
        <Image
          className={`${expanded ? "w-[100px] h-[40px] mt-[10px] ml-[23px] cursor-pointer" : "hidden"}`}
          src={logo}
          alt="logo"
        />
      </div>

      <button onClick={handleToggled}>
        <SidebarIconSvg
          className={`${expanded ? "left-[235px]" : "left-[35px] rotate-180"} absolute  top-[15px] cursor-pointer`}
        />
      </button>

      <div className="mt-[26px]">
        <div className="">
          <Link href="/">
            <SidebarCards
              className="cursor-pointer bg-[#98AEC01A] border-1 border-black bg-white"
              svg={<DashboardSvgIcon className={`cursor-pointer`} />}
              text="Dashboard"
            />
          </Link>
        </div>

        <Link href="/perspectives">
          <SidebarCards
            svg={<SidebarPerspectiveSvg className={`cursor-pointer`} />}
            text="Perspectives"
          />
        </Link>

        <SidebarCards
          svg={<SidebarTasksSvg className={` cursor-pointer`} />}
          text="Tasks"
        />
        <SidebarCards
          svg={<SidebarDocumentsSvg className={` cursor-pointer`} />}
          text="Documents"
        />
        <SidebarCards
          svg={<SidebarReportsSvg className={` cursor-pointer`} />}
          text="Reports"
        />
        <SidebarCards
          svg={<SidebarUserSvg className={` cursor-pointer`} />}
          text="User & Roles"
        />
      </div>
    </div>
  );
}

export default Sidebar;
