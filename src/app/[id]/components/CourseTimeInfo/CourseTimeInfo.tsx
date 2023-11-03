import React from "react";
import { TimeInfo } from "./components";
import { CourseCondition, RecordPanel } from "@/models";

export const CourseTimeInfo: React.FC<{
  turf: CourseCondition;
  dirt: CourseCondition;
  timeInfo: RecordPanel;
  time: string;
  last4: string;
  last3: string;
}> = ({ turf, dirt, timeInfo: recordDisplayData, time, last4, last3 }) => {
  return (
    <div className="flex justify-between">
      <div className="w-1/3 flex flex-col items-center">
        <p className="text-info">芝</p>
        <p className="text-led text-horse w-24 h-fit race-number bg-zinc-900 flex items-center justify-center serif">
          {CourseCondition[turf]}
        </p>
        <p className="text-info">ダート</p>
        <p className="text-led text-horse w-24 h-fit race-number bg-zinc-900 flex items-center justify-center serif">
          {CourseCondition[dirt]}
        </p>
      </div>
      <TimeInfo {...{ recordDisplayData, time, last4, last3 }} />
    </div>
  );
};
