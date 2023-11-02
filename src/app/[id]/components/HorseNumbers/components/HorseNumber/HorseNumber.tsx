import React from "react";

export const HorseNumber: React.FC<{
  goalNumber: 1 | 2 | 3 | 4 | 5;
  horseNumber: number;
}> = ({ goalNumber, horseNumber }) => {
  const goalNumberImage = {
    1: "/images/goalNumber/1.svg",
    2: "/images/goalNumber/2.svg",
    3: "/images/goalNumber/3.svg",
    4: "/images/goalNumber/4.svg",
    5: "/images/goalNumber/5.svg",
  };

  return (
    <div className="flex items-center gap-8">
      <img
        src={goalNumberImage[goalNumber]}
        alt="goalNumber"
        className="w-32 h-32"
        data-testid={`goalNumber${goalNumber}`}
      />
      <p className="text-led text-big w-96 h-48 race-number bg-zinc-900 flex items-center justify-end">
        {horseNumber}
      </p>
    </div>
  );
};
