import React from "react";
import { ProgressNumbersCardSvg } from "../../../public/assets/index";

function ProgressNumbersCard({ svg, numbers, text }) {
  return (
    <div className="flex ml-[16px] w-[176px] justify-between h-[80px] bg-[#FFFFFF] border border-black rounded-[10px]">
      <div className="flex flex-col">
        <p className="text-[#1D3557] text-[24px] mt-[12px] ml-[12px]">
          {numbers}
        </p>
        <p className="text-[13px] text-[#8597A8] mt-[8px] mb-[16px] ml-[8px]">
          {text}
        </p>
      </div>
      <div className="ml-[12px] mt-[12px]">{svg}</div>
    </div>
  );
}

export default ProgressNumbersCard;
