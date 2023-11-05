import React from "react";
import { GoalDiff, HorseNumber } from "./components";
import { GoalDiff as GoalDiffType } from "@/models";
import { useHorseNumbers } from "./hooks";

export const HorseNumbers: React.FC<{
  horseNumbers: number[];
  goalDiffs: GoalDiffType[];
}> = ({ horseNumbers, goalDiffs }) => {
  const { getGoalNumber } = useHorseNumbers(goalDiffs);
  return (
    <div
      className="flex justify-between items-center mt-2"
      data-testid="horseNumber"
    >
      <div className="w-1/2 gap-4 flex flex-col">
        {/* 着順番号 */}
        {horseNumbers.map((horseNumber, index) => (
          <HorseNumber
            goalNumber={getGoalNumber(index) as 1 | 2 | 3 | 4 | 5}
            horseNumber={horseNumber}
            key={index}
          />
        ))}
      </div>
      <div className="w-1/2 gap-4 flex flex-col">
        {/* 着順馬番 */}
        {goalDiffs.map((goalDiff, index) => (
          <GoalDiff goalDiff={goalDiff} key={index} />
        ))}
      </div>
    </div>
  );
};
