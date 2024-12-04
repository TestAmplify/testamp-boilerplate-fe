import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CircularProgress = ({ value }: { value: number }) => (
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 transform rotate-180 origin-center">
      <CircularProgressbar
        value={value}
        styles={buildStyles({
          pathColor: "#34C759",
          trailColor: "lightgray",
        })}
        strokeWidth={12}
      />
    </div>
    <span className="font-medium text-foundation-white-dark dark:text-white">{`${value}%`}</span>
  </div>
);
