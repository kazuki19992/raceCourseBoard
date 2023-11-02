import React from "react";

import record from "./assets/record.svg";
import test from "./assets/test.svg";
import netkeiba from "./assets/netkeiba.svg";
import none from "./assets/none.svg";

import { TimePanel } from "../TimePanel";

import { RecordPanel } from "@/models";

export const TimeInfo: React.FC<{
  recordDisplayData: RecordPanel;
  time: string;
  last4: string;
  last3: string;
}> = ({ recordDisplayData, time, last4, last3 }) => {
  // キー名と画像を紐付ける
  const recordDisplayDataImage = {
    record: "/images/recordPanel/record.svg",
    test: "/images/recordPanel/test.svg",
    netkeiba: "/images/recordPanel/netkeiba.svg",
    none: "/images/recordPanel/none.svg",
  };

  return (
    <div className="flex-grow flex flex-col items-center">
      <div className="w-full flex justify-end">
        <img
          src={recordDisplayDataImage[recordDisplayData]}
          className="h-24 mx-3"
          data-testid={`${recordDisplayData}Panel`}
        />
      </div>
      <div className="w-full flex flex-col items-end gap-5 mt-3">
        <div className="w-full flex items-center justify-between">
          <p className="w-1/2 text-info text-right">タイム</p>
          <TimePanel time={time} />
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="w-1/2 text-info text-right">4F</p>
          <TimePanel time={last4} />
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="w-1/2 text-info text-right">3F</p>
          <TimePanel time={last3} />
        </div>
      </div>
    </div>
  );
};
