import { GoalDiff } from "@/models";

export const useHorseNumbers = (goalDiffs: GoalDiff[]) => {
  /**
   * ゴール番号を取得する
   */
  const getGoalNumber = (index: number): number => {
    if (index === 0) {
      return index + 1;
    }
    // 同着の場合は同じゴール番号にする
    if (goalDiffs[index - 1] === GoalDiff.same) {
      return index;
    }
    return index + 1;
  };

  return {
    getGoalNumber,
  };
};
