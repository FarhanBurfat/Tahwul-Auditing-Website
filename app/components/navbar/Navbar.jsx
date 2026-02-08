import { SearchbarSvgIcon } from "@/public/assets";
import Image from "next/image";
import userimg from "../../../public/assets/icons/userimg.jpg";

function Navbar() {
  return (
    <div className="flex justify-between h-[60px] w-full border-1 border-[#E0E8ED]">
      <div className="ml-[56px] mt-[13px]">
        <SearchbarSvgIcon className={`absolute left-[330px] top-[22px]`} />
        <input
          className="border border-[#E0E8ED] w-[318px] h-[34px] rounded-[18px] pl-[40px]"
          placeholder="Search"
        />
      </div>
      <div className="flex mt-[19px] mb-[17px] mr-[25px] items-center">
        <svg
          className="cursor-pointer"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99996 14C6.53063 14.4147 7.23196 14.6667 7.99996 14.6667C8.76796 14.6667 9.4693 14.4147 9.99996 14M1.68663 9.59604C1.54463 10.498 2.17863 11.124 2.95463 11.436C5.92996 12.6327 10.07 12.6327 13.0453 11.436C13.8213 11.124 14.4553 10.498 14.3133 9.59604C14.2266 9.04137 13.7953 8.58004 13.476 8.12937C13.058 7.53137 13.0166 6.88004 13.016 6.18604C13.0166 3.50671 10.7713 1.33337 7.99996 1.33337C5.22863 1.33337 2.9833 3.50671 2.9833 6.18671C2.9833 6.88004 2.94196 7.53204 2.5233 8.12937C2.20463 8.58004 1.77396 9.04137 1.68663 9.59604Z"
            stroke="#8597A8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Image
          className="w-[24px] h-[24px] cursor-pointer rounded-[100%] ml-[28px]"
          src={userimg}
        />
        <p className="ml-[8px]">Mohamed</p>
        <svg
          className="ml-[12px] cursor-pointer"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0155 4.76528L6.26552 8.51528C6.23069 8.55014 6.18934 8.5778 6.14381 8.59667C6.09829 8.61555 6.04949 8.62526 6.00021 8.62526C5.95093 8.62526 5.90213 8.61555 5.85661 8.59667C5.81108 8.5778 5.76972 8.55014 5.7349 8.51528L1.9849 4.76528C1.91453 4.69491 1.875 4.59948 1.875 4.49996C1.875 4.40045 1.91453 4.30502 1.9849 4.23465C2.05526 4.16429 2.1507 4.12476 2.25021 4.12476C2.34972 4.12476 2.44516 4.16429 2.51552 4.23465L6.00021 7.71981L9.4849 4.23465C9.51974 4.19981 9.5611 4.17217 9.60662 4.15332C9.65214 4.13446 9.70094 4.12476 9.75021 4.12476C9.79948 4.12476 9.84827 4.13446 9.8938 4.15332C9.93932 4.17217 9.98068 4.19981 10.0155 4.23465C10.0504 4.26949 10.078 4.31086 10.0969 4.35638C10.1157 4.4019 10.1254 4.45069 10.1254 4.49996C10.1254 4.54924 10.1157 4.59803 10.0969 4.64355C10.078 4.68907 10.0504 4.73044 10.0155 4.76528Z"
            fill="#17181C"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
