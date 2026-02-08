import React from "react";
import ProgressPerspectiveCard from "../components/perspectives/ProgressPerspectiveCard";
import leaderimg from "../../public/assets/icons/leaderimg.jpg";
import Image from "next/image";

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

      <div className="w-[1136px] bg-[#FFFFFF] rounded-[10px] h-[109px] mt-[26px] ml-[24px] border border-black">
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
        <div className=" flex items-center  justify-center w-[99px] ml-[27px] mt-[19px] h-[34px] border rounded-[8px]">
          <p className="text-[14px] text-[#1D3557] font-normal">Overview</p>
        </div>

        <div className=" flex items-center bg-[#FFFFFF] justify-center w-[99px] ml-[6px] mt-[19px] h-[34px] border rounded-[8px]">
          <p className="text-[14px] text-[#1D3557] font-normal">Evidence</p>
        </div>
      </div>

      <div className="flex  w-[1136px] h-[259px] border rounded-[10px] mt-[16px] ml-[24px]">
        <div className="ml-[33px] mt-[25px]">
          <h1 className="text-[12px] text-[#1D3557] font-normal">
            Document Number
          </h1>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            5.4.1.1
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            5.4.1.1
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            5.4.1.1
          </p>
        </div>

        <div className="ml-[20px] mt-[25px]">
          <h1 className="text-[12px] text-[#1D3557] font-normal">
            Document Name
          </h1>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            Digital_Transformation_Plan.pdf
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            KPI_Framework.xlsx
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            Roadmap_Version1.docx
          </p>
        </div>

        <div className="ml-[37px] mt-[25px]">
          <h1 className="text-[12px] text-[#1D3557] font-normal">
            Document Lead
          </h1>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            Ahmed Khaled
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            Mona Hamed
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            Rami AlSharif
          </p>
        </div>

        <div className="ml-[38px] mt-[25px]">
          <h1 className="text-[12px] text-[#1D3557] font-normal">
            Document Preparer
          </h1>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            Ahmed Khaled
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            Mona Hamed
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            Rami AlSharif
          </p>
        </div>

        <div className="ml-[51px] mt-[25px]">
          <h1 className="text-[12px] text-[#1D3557] font-normal">Date</h1>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            2025-08-01
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            2025-08-01
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            2025-08-01
          </p>
        </div>

        <div className="ml-[56px] mt-[25px]">
          <h1 className="text-[12px] text-[#1D3557] font-normal">Due Date</h1>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            2025-08-01
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            2025-08-01
          </p>

          <p className="text-[14px] text-[#1D3557] font-normal mt-[31px]">
            2025-08-01
          </p>
        </div>

        <div className="ml-[56px] mt-[25px]">
          <h1 className="text-[12px] text-[#1D3557] font-normal">Status</h1>

          <p className="text-[14px] text-[#34C759] font-normal mt-[31px]">
            Approved
          </p>

          <p className="text-[14px] text-[#FFCC00] font-normal mt-[31px]">
            Pending Review
          </p>

          <p className="text-[14px] text-[#FFCC00] font-normal mt-[31px]">
            Pending Review
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="w-[753px] h-[433px] border mt-[16px] ml-[23px] rounded-[10px]">
          <h1 className="text-[16px] font-bold text-[#1D3557] mt-[24px] ml-[24px]">
            Comments
          </h1>

          <div className="flex flex-col w-[705px] mt-[16px] ml-[24px] h-[84px] border rounded-[10px]">
            <div className="flex items-center justify-between ml-[16px] mt-[16px]">
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#E0E8ED" />
                  <path
                    d="M8 17.928V7H15.264V8.84H10.208V11.496H14.304V13.304H10.208V16.088H15.264V17.928H8Z"
                    fill="#8597A8"
                  />
                </svg>

                <p className="text-[14px] ml-[10px] text-[#1D3557] font-bold">
                  Sara Ibrahim
                </p>
              </div>
              <p className="text-[#8597A8] text-[14px] font-normal mr-[16px]">
                2025-08-01
              </p>
            </div>

            <p className="text-[#1D3557] mt-[8px] ml-[16px] text-[14px] font-normal">
              Ensure the plan includes a clear governance model.{" "}
            </p>
          </div>

          <div className="flex flex-col w-[705px] mt-[16px] ml-[24px] h-[84px] border rounded-[10px]">
            <div className="flex items-center justify-between ml-[16px] mt-[16px]">
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#E0E8ED" />
                  <path
                    d="M7 16.562V7H10.108L12.04 13.384L13.93 7H17.08V16.562H15.148V9.478H14.952L12.95 16.31H11.13L9.128 9.478H8.932V16.562H7Z"
                    fill="#8597A8"
                  />
                </svg>

                <p className="text-[14px] ml-[10px] text-[#1D3557] font-bold">
                  Mona Hamed
                </p>
              </div>
              <p className="text-[#8597A8] text-[14px] font-normal mr-[16px]">
                2025-08-01
              </p>
            </div>

            <p className="text-[#1D3557] mt-[8px] ml-[16px] text-[14px] font-normal">
              Ensure the plan includes a clear governance model.{" "}
            </p>
          </div>

          <div className="relative">
            <input className="w-[705px] h-[111px] text-left border rounded-[10px] mt-[16px] ml-[24px]" />
            <svg
              className="absolute top-[110px] left-[710px]"
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 8.5L8.5 0.5"
                stroke="#8597A8"
                stroke-linecap="round"
              />
              <path d="M5 8.5L9 4.5" stroke="#8597A8" stroke-linecap="round" />
            </svg>
          </div>

          <div className="relative">
            <button className="bg-[#1D3557] mb-[16px] pl-[20px] mt-[16px] ml-[24px] text-[#FFFFFF] w-[175px] h-[34px] rounded-[8px]">
              Post Comment
            </button>

            <svg
              className="absolute top-[25px] left-[45px]"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.75199 12.1098L9.74066 12.1058L9.73066 12.1191L9.17066 12.9198L9.12199 12.9845C8.13933 14.2838 7.59333 15.0065 6.92399 15.0065L6.93066 14.9998C6.84399 14.9998 6.75733 14.9865 6.67066 14.9665C5.82399 14.7398 5.82399 13.8198 5.82399 11.9865V10.7531L5.43733 10.6198C2.63066 9.64646 1.23733 9.15979 1.16399 7.95312C1.09733 6.73646 2.43733 6.10312 5.10399 4.84246L5.12399 4.83312L10.004 2.52646C12.204 1.47979 13.3107 0.959789 14.204 1.61979C15.0973 2.27979 14.8973 3.47312 14.4973 5.84646L13.8573 9.64646L13.8527 9.67179C13.5887 11.2025 13.446 12.0291 12.7173 12.4531C12.464 12.5998 12.2107 12.6665 11.9173 12.6665L11.9107 12.6598C11.3573 12.6598 10.6893 12.4311 9.75199 12.1098ZM6.82399 11.0985V11.9865C6.82399 12.9065 6.82399 13.8531 6.96399 14.0265C7.13733 13.9598 7.76399 13.1331 8.36399 12.3331L8.76199 11.7678L6.82399 11.0985ZM5.54399 5.73312C3.48399 6.70646 2.13066 7.34646 2.15733 7.89312C2.19066 8.43312 3.60399 8.92646 5.74399 9.66646L6.01666 9.76046L10.97 4.80646C11.1633 4.61312 11.4833 4.61312 11.6767 4.80646C11.87 4.99979 11.87 5.31979 11.6767 5.51312L7.06733 10.1231L10.0107 11.1398C11.304 11.5865 11.884 11.7731 12.204 11.5865C12.5173 11.3998 12.6307 10.8131 12.8573 9.49979L13.4973 5.69312L13.5053 5.64512C13.8007 3.86512 13.9933 2.70379 13.5973 2.41312C13.1933 2.11512 12.1647 2.59979 10.46 3.40312L10.424 3.41979L5.54399 5.72646V5.73312Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="w-[368px] h-[294px] ml-[16px] border border-black rounded-[10px] mt-[16px]">
          <h1 className="text-[16px] text-[#1D3557] font-bold mt-[14px] ml-[16px]">
            Recent Activities
          </h1>
          <div>
            <div className="flex ml-[16px] border-b border-b-[#E0E8ED] border-t border-t-[#E0E8ED]">
              <input className="bg-red-600 w-[6px] mt-[37px] h-[6px] rounded-[50%]" />
              <p className="mt-[28px] ml-[12px] text-[16px] text-[#1D3557]">
                Roadmap_Version1.docx uploaded
                <br />
                by Rami AlSharif
              </p>
              <p className="text-[#8597A8] text-[12px] mt-[30px] ml-[19px]">
                5 mins ago
              </p>
            </div>

            <div className="flex ml-[16px] border-b border-b-[#E0E8ED]">
              <input className="bg-red-600 w-[6px] mt-[37px] h-[6px] rounded-[50%]" />
              <p className="mt-[28px] ml-[12px] text-[16px] text-[#1D3557]">
                KPI_Framework.xlsx uploaded by
                <br />
                Mona Hamed
              </p>
              <p className="text-[#8597A8] text-[12px] mt-[30px] ml-[19px]">
                20 mins ago
              </p>
            </div>

            <div className="flex ml-[16px] border-b border-b-[#E0E8ED]">
              <input className="bg-red-600 w-[6px] mt-[37px] h-[6px] rounded-[50%]" />
              <p className="mt-[28px] ml-[12px] text-[16px] text-[#1D3557]">
                Digital_Transformation_Plan.pdf
                <br />
                approved by Advisory Team
              </p>
              <p className="text-[#8597A8] text-[12px] mt-[30px] ml-[19px]">
                1 hour ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
