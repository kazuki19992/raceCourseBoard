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
        {/* 着順馬番 */}
        {horseNumbers.map((horseNumber, index) => (
          <HorseNumber
            goalNumber={getGoalNumber(index) as 1 | 2 | 3 | 4 | 5}
            horseNumber={horseNumber}
            key={index}
          />
        ))}
        {/* <HorseNumber goalNumber={1} horseNumber={7} />
        <HorseNumber goalNumber={2} horseNumber={6} />
        <HorseNumber goalNumber={3} horseNumber={9} />
        <HorseNumber goalNumber={4} horseNumber={4} />
        <HorseNumber goalNumber={5} horseNumber={5} /> */}
      </div>
      <div className="w-1/2 gap-4 flex flex-col">
        {/* 着順馬番 */}
        {goalDiffs.map((goalDiff, index) => (
          <GoalDiff goalDiff={goalDiff} key={index} />
        ))}
        {/* <GoalDiff goalDiff={GoalDiffType.diff2_1_2} />
        <GoalDiff goalDiff={GoalDiffType.diff1_1_4} />
        <GoalDiff goalDiff={GoalDiffType.neck} />
        <GoalDiff goalDiff={GoalDiffType.diff2_1_2} /> */}
      </div>
    </div>
  );
};
