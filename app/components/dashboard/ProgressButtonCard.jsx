import React from "react";

function ProgressButtonCard() {
  return (
    <div>
      <div className="w-[96px] h-[109px] flex flex-col items-center rounded-[10px] mt-[8px] ml-[15px] border border-[#E0E8ED]">
        <p className="text-[10px] mt-[4px] text-[#1D3557] text-center">
          Digital Transformation
        </p>

        <div className="flex gap-x-[5px] mt-[33px]">
          <div className="flex justify-center w-[24px] bg-[#1EA54E] h-[24px] text-white rounded-[50%]">
            1
          </div>

          <div className="flex justify-center w-[24px] bg-[#F59F0A] h-[24px] text-white rounded-[50%]">
            2
          </div>

          <div className="flex justify-center w-[24px] bg-[#1EA54E] h-[24px] text-white rounded-[50%]">
            3
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressButtonCard;
