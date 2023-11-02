import React from "react";

import { useTimePanel } from "./hooks";

export const TimePanel: React.FC<{ time: string }> = ({ time }) => {
  const { generateTimeArray } = useTimePanel();

  const times = generateTimeArray(time);
  if (times.length === 0) {
    return null;
  }

  return (
    <p className="text-base text-zinc-900 bg-led race-time leading-none">
      {times[0]}
      <span className="text-white bg-black">.</span>
      {times[1]}
      {times.length > 2 && (
        <>
          <span className="text-white bg-black">.</span>
          <span>{times[2]}</span>
        </>
      )}
    </p>
  );
};
