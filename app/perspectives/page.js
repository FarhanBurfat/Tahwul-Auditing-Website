import React from "react";
import ProgressPerspectiveCard from "../components/perspectives/ProgressPerspectiveCard";
import leaderimg from "../../public/assets/icons/leaderimg.jpg";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="h-[1200px] bg-[#F5F8FA]">
      <div className="flex items-center ml-[48px] mt-[33px]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66666 8.00008H13.3333M2.66666 8.00008C2.66666 8.87875 5.99999 11.3334 5.99999 11.3334M2.66666 8.00008C2.66666 7.12141 5.99999 4.66675 5.99999 4.66675"
            stroke="#1D3557"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1 className="text-[16px] ml-[8px] text-[#1D3557] font-bold">
          Digital Transformation Strategic Planning
        </h1>
      </div>

      <div className="w-[1136px] bg-[#FFFFFF] rounded-[10px] h-[109px] mt-[26px] ml-[24px] ">
        <p className="text-[#8597A8] text-[12px] mt-[19px] ml-[26px]">
          Strategy & Planning
        </p>

        <h1 className="text-[16px] text-[#1D3557] font-bold mt-[8px] ml-[16px]">
          Digital Transformation Strategic Planning
        </h1>

        <p className="text-[#8597A8] text-[14px] font-normal mt-[8px] ml-[16px]">
          Develop comprehensive strategic plans for digital transformation
          aligned with organizational goals
        </p>
      </div>

      <div>
        <div className="flex mt-[16px] ml-[8px]">
          <ProgressPerspectiveCard />
          <div className="ml-[18px]">
            <ProgressPerspectiveCard />
          </div>

          <div className="ml-[18px]">
            <ProgressPerspectiveCard />
          </div>

          <div className="ml-[18px]">
            <ProgressPerspectiveCard />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className=" flex items-center bg-[#FFFFFF] justify-center w-[99px] ml-[27px] mt-[19px] h-[34px] rounded-[8px]">
          <p className="text-[14px] text-[#1D3557] font-normal">Overview</p>
        </div>

        <Link href="/perspective_evidence">
          <div className=" flex items-center justify-center w-[99px] ml-[6px] mt-[19px] h-[34px] rounded-[8px]">
            <p className="text-[14px] text-[#1D3557] font-normal">Evidence</p>
          </div>
        </Link>
      </div>

      <div className="w-[1136px] h-[538px] border border-[#E0E8ED] bg-[#FFFFFF] mt-[16px] ml-[24px] rounded-[10px]">
        <div className="flex">
          <div className="flex items-center w-[148px] h-[40px] border border-[#E0E8ED] mt-[18px] ml-[24px] rounded-[10px] bg-[#F5F8FA]">
            <p className="text-[16px] text-[#1D3557] ml-[16px]">Objective</p>
          </div>

          <div className="flex items-center w-[919px] h-[40px] border border-[#E0E8ED] rounded-[10px] mt-[18px] ml-[24px] bg-[#F5F8FA]">
            <p className="ml-[16px] text-[16px] text-[#1D3557] font-medium">
              Develop a digital transformation strategy aligned with the
              organization’s strategy and the objectives of Saudi Vision 2030.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex justify-center w-[148px] h-[181px]  mt-[18px] ml-[24px] rounded-[10px] bg-[#F5F8FA]">
            <p className="text-[16px] text-[#1D3557] ml-[16px] mt-[14px]">
              Implementation Requirement
            </p>
          </div>

          <div className="flex items-center w-[919px] h-[181px] rounded-[10px] mt-[18px] ml-[24px] bg-[#F5F8FA]">
            <p className="ml-[14px] mb-[23px] mt-[14px] text-[16px] text-[#1D3557] font-medium">
              Prepare a digital transformation strategy for the transition to
              electronic government transactions, including the following:{" "}
              <br /> a. The organization’s <br /> vision, mission, strategic
              pillars, and strategic objectives, and their alignment with the
              organization’s overall strategy. <br /> b. Strategic initiatives,
              programs, and performance indicators. <br /> c. A clear
              methodology for integration and coordination with relevant
              external entities to achieve the strategy’s objectives.
              <br /> d. Required competencies, capabilities, and skills
              necessary to achieve the strategy’s objectives.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center w-[148px] h-[72px] mt-[18px] ml-[24px] rounded-[10px] bg-[#F5F8FA]">
            <p className="text-[16px] text-[#1D3557] ml-[16px]">
              Evidences
              <br /> Documents
            </p>
          </div>

          <div className="flex items-center w-[919px] h-[72px] rounded-[10px] mt-[18px] ml-[24px] bg-[#F5F8FA]">
            <p className="ml-[16px] mr-[23px] text-[16px] text-[#1D3557] font-medium">
              Submit the approved digital transformation strategy that includes
              all the requirements of this standard, provided that it has been
              approved within a period not exceeding 36 months.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center w-[148px] h-[72px] mt-[18px] ml-[24px] rounded-[10px] bg-[#F5F8FA]">
            <p className="text-[16px] text-[#1D3557] ml-[16px]">
              Related <br /> Regulations
            </p>
          </div>

          <div className="flex items-center w-[919px] h-[72px] rounded-[10px] mt-[18px] ml-[24px] bg-[#F5F8FA]">
            <p className="ml-[16px] text-[16px] text-[#1D3557] font-medium">
              Council of Ministers Resolution No. (40) dated 27/2/1427H, Clause
              (16).
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center w-[148px] h-[72px] mt-[18px] ml-[24px] rounded-[10px] bg-[#F5F8FA]">
            <p className="text-[16px] text-[#1D3557] ml-[16px]">Scope</p>
          </div>

          <div className="flex items-center w-[919px] h-[72px] rounded-[10px] mt-[18px] ml-[24px] bg-[#F5F8FA]">
            <p className="ml-[16px] text-[16px] text-[#1D3557] font-medium">
              All government entities.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[1136px] h-[129px] mt-[16px] ml-[24px] rounded-[10px] bg-[#FFFFFF] border-[#E0E8ED]">
        <p className="text-[16px] text-[#1D3557] font-bold mt-[16px] ml-[16px]">
          Leaders
        </p>

        <div className="flex ml-[16px] mt-[16px]">
          <div className="flex items-center justify-center bg-[#F5F8FA] ">
            <Image
              className="w-[47px] h-[47px] ml-[12px] rounded-[50%]"
              src={leaderimg}
            />
            <div className="flex flex-col justify-center ml-[11px] mr-[9px]">
              <p className="text-[16px] text-[#1D3557]">Ahmed Al-Ali</p>
              <p className="text-[16px] text-[#8597A8]">Strategy Perspective</p>
            </div>
          </div>

          <div className="flex items-center justify-center ml-[16px] bg-[#F5F8FA] ">
            <Image
              className="w-[47px] h-[47px] ml-[12px] rounded-[50%]"
              src={leaderimg}
            />
            <div className="flex flex-col justify-center ml-[11px] mr-[9px]">
              <p className="text-[16px] text-[#1D3557]">Ahmed Al-Ali</p>
              <p className="text-[16px] text-[#8597A8]">Strategy Perspective</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
