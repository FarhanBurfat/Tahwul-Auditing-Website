"use client";

import React from "react";
import ProgressPercentageCard from "../components/dashboard/ProgressPercentageCard";
import ProgressNumbersCard from "../components/dashboard/ProgressNumbersCard";
import ProgressButtonCard from "../components/dashboard/ProgressButtonCard";
import Image from "next/image";
import leaderimg from "../../public/assets/icons/leaderimg.jpg";
import leaderimg2 from "../../public/assets/icons/leaderimg2.jpg";
import leaderimg3 from "../../public/assets/icons/leaderimg3.jpg";
import DashboardChart from "../components/charts/DashboardChart";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  ProgressNumbersCardSvg,
  ProgressOverallCriteriaSvg,
  ProgressCompletedCriteriaSvg,
  ProgressEvidenceDocumentsSvg,
  ProgressEvidenceCompletedSvg,
  ProgressUploadedSvg,
} from "../../public/assets/index";

function page() {
  const [progress, setProgress] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 0 : prevProgress + 10,
  //     );
  //   }, 800);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div className="flex flex-col items-center bg-[#F5F8FA] h-auto">
      <div className="w-[1136px] h-[159px] mt-[16px] ml-[23px] mr-[25px] rounded-[10px] h-[159px] border border-[#E0E8ED] bg-[#FFFFFF]">
        <h1 className="text-[16px] text-[#1D3557] text font-bold mt-[18px] ml-[16px]">
          Project Timeline
        </h1>
        <div className="flex w-[1103px] h-[14px] mt-[33px] ml-[16px] rounded-[10px]  border border-[#E0E8ED]">
          <div className="flex items-center w-[307px] h-[14px] bg-[#1EA54E] rounded-[10px]">
            <input className="w-[10px] h-[10px] ml-[47px] bg-white rounded-[50%]" />
            <input className="w-[10px] h-[10px] ml-[190px] bg-white rounded-[50%]" />
          </div>

          <div className="flex items-center w-[796px] h-[14px]">
            <input className="w-[10px] h-[10px] ml-[140px] bg-[#DB1F26] rounded-[50%]" />
            <input className="w-[10px] h-[10px] ml-[190px] bg-[#DB1F26] rounded-[50%]" />
            <input className="w-[10px] h-[10px] ml-[190px] bg-[#DB1F26] rounded-[50%]" />
            <input className="w-[10px] h-[10px] ml-[190px] bg-[#DB1F26] rounded-[50%]" />
          </div>
        </div>
      </div>
      <div className="flex mt-[16px] ml-[8px]">
        <ProgressNumbersCard
          numbers="78.65%"
          text="Overall Progress"
          svg={<ProgressNumbersCardSvg className="mt-[12px] mr-[12px]" />}
        />
        <ProgressNumbersCard
          numbers="95"
          text="Total Criteria"
          svg={<ProgressOverallCriteriaSvg className="mt-[12px] mr-[12px]" />}
        />
        <ProgressNumbersCard
          numbers="52"
          text="Completed Criteria"
          svg={<ProgressCompletedCriteriaSvg className="mt-[12px] mr-[12px]" />}
        />
        <ProgressNumbersCard
          numbers="386"
          text="Evidence Documents"
          svg={<ProgressEvidenceDocumentsSvg className="mt-[12px] mr-[12px]" />}
        />
        <ProgressNumbersCard
          numbers="302"
          text="Evidence (Completed)"
          svg={<ProgressEvidenceCompletedSvg className="mt-[12px] mr-[12px]" />}
        />
        <ProgressNumbersCard
          numbers="258"
          text="Uploaded to DGA"
          svg={<ProgressUploadedSvg className="mt-[12px] mr-[12px]" />}
        />
      </div>

      <div className="w-[1136px] h-[529px] mt-[16px] ml-[24px]  rounded-[10px]">
        <div className="flex justify-between">
          <p className="text-[#1D3557] text-[16px] mt-[25px] ml-[16px]">
            Progress Status
          </p>
          <p className="mr-[20px] mt-[25px]">Delayed</p>
        </div>
        <div className="flex mt-[24px] ml-[4px] mb-[24px]">
          <div>
            <ProgressPercentageCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
          </div>
          <div>
            <ProgressPercentageCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
          </div>
          <div>
            <ProgressPercentageCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
          </div>
          <div>
            <ProgressPercentageCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
          </div>
          <div>
            <ProgressPercentageCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
          </div>
          <div>
            <ProgressPercentageCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
          </div>
          <div>
            <ProgressPercentageCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
          </div>
          <div>
            <ProgressPercentageCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
          </div>
          <div>
            <ProgressPercentageCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
          </div>
          <div>
            <ProgressPercentageCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
            <ProgressButtonCard />
          </div>
        </div>
        <div className="flex">
          <div className="w-[388px] h-[283px] rounded-[10px] mt-[24px]">
            <h1 className="text-[16px] text-[#1D3557] font-bold mt-[24px] ml-[16px]">
              Overall Compliance Score
            </h1>

            <div className="relative mt-[40px] ml-[95px]">
              <Box sx={{ display: "flex", color: "#DB1F26" }}>
                <CircularProgress
                  enableTrackSlot
                  variant="determinate"
                  value={170}
                  size={180}
                  color="inherit"
                />
              </Box>

              <h1 className="text-[44px] absolute top-[49px] left-[54px] text-[#1D3557] font-bold">
                65%
              </h1>
            </div>
          </div>
          <div className="w-[388px] h-[283px] ml-[16px]  rounded-[10px] mt-[24px]">
            <h1 className="text-[16px] text-[#1D3557] font-bold mt-[24px] ml-[16px]">
              Top Performing Perspective Leaders
            </h1>
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex">
                  <Image
                    className="w-[47px] h-[47px] mt-[21px] ml-[16px] rounded-[50%]"
                    src={leaderimg}
                  />
                  <div className="flex flex-col justify-center mt-[21px] ml-[11px]">
                    <p className="text-[16px] text-[#1D3557]">Ahmed Al-Ali</p>
                    <p className="text-[16px] text-[#8597A8]">
                      Strategy Perspective
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <Image
                    className="w-[47px] h-[47px] mt-[21px] ml-[16px] rounded-[50%]"
                    src={leaderimg2}
                  />
                  <div className="flex flex-col justify-center mt-[21px] ml-[11px]">
                    <p className="text-[16px] text-[#1D3557]">
                      Sarah Al-Khaled
                    </p>
                    <p className="text-[16px] text-[#8597A8]">
                      Beneficiary Perspective
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <Image
                    className="w-[47px] h-[47px] mt-[21px] ml-[16px] rounded-[50%]"
                    src={leaderimg3}
                  />
                  <div className="flex flex-col justify-center mt-[21px] ml-[11px]">
                    <p className="text-[16px] text-[#1D3557]">
                      Mohammed Al-Mansour
                    </p>
                    <p className="text-[16px] text-[#8597A8]">IT Perspective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[388px] h-[283px] ml-[16px] rounded-[10px] mt-[24px]">
            <h1 className="text-[16px] text-[#1D3557] font-bold mt-[14px] ml-[16px]">
              Recent Activities
            </h1>
            <div>
              <div className="flex ml-[16px]">
                <input className="bg-red-600 w-[6px] mt-[37px] h-[6px] rounded-[50%]" />
                <p className="mt-[28px] ml-[12px] text-[16px] text-[#1D3557]">
                  Document “Strategy_Review.pdf” <br /> was uploaded by Ahmed
                  Khaled
                </p>
                <p className="text-[#8597A8] text-[12px] mt-[30px] ml-[19px]">
                  5 mins ago
                </p>
              </div>

              <div className="flex ml-[16px]">
                <input className="bg-red-600 w-[6px] mt-[37px] h-[6px] rounded-[50%]" />
                <p className="mt-[28px] ml-[12px] text-[16px] text-[#1D3557]">
                  Task “Review Compliance Files” <br /> was assigned to Mona
                  Hamed
                </p>
                <p className="text-[#8597A8] text-[12px] mt-[30px] ml-[19px]">
                  21 mins ago
                </p>
              </div>

              <div className="flex ml-[16px]">
                <input className="bg-red-600 w-[6px] mt-[37px] h-[6px] rounded-[50%]" />
                <p className="mt-[28px] ml-[12px] text-[16px] text-[#1D3557]">
                  New criterion “5.3 Digital Identity” <br /> was created by
                  Admin
                </p>
                <p className="text-[#8597A8] text-[12px] mt-[30px] ml-[19px]">
                  1 hour ago
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-[751px] h-[322px] mt-[16px] rounded-[10px]">
            <DashboardChart />
          </div>
          <div className="w-[368px] h-[322px] ml-[16px] mt-[16px] rounded-[10px]">
            <h1 className="text-[16px] text-[#1D3557] font-bold mt-[24px] ml-[16px]">
              Audit Readiness
            </h1>

            <div className="relative mt-[40px] ml-[95px]">
              <Box sx={{ display: "flex", color: "#1EA54E" }}>
                <CircularProgress
                  enableTrackSlot
                  variant="determinate"
                  value={280}
                  size={180}
                  color="inherit"
                />
              </Box>

              <h1 className="text-[44px] absolute top-[49px] left-[54px] text-[#1D3557] font-bold">
                80%
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
