"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "./weather";

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) {}

const chartSetting = {
  yAxis: [
    {
      width: 60,
    },
  ],
  series: [{ dataKey: "seoul", valueFormatter }],
  height: 300,
  margin: { left: 0 },
};

export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState("middle");

  return (
    <div style={{ width: "100%" }}>
      <BarChart
        dataset={dataset}
        xAxis={[{ dataKey: "month", tickLabelPlacement }]}
        {...chartSetting}
      />
    </div>
  );
}
