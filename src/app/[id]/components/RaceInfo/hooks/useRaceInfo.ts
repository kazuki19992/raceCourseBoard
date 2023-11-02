export const useRaceInfo = () => {
  /**
   * レース番号を表示用に変換する
   * @param raceNumber レース番号(数字)
   * @returns 表示用のレース番号
   */
  const convertRaceNumber = (raceNumber: number): string => {
    if (raceNumber < 10) {
      return String(raceNumber);
    }
    switch (raceNumber) {
      case 10: {
        return "x";
      }
      case 11: {
        return "y";
      }
      case 12: {
        return "z";
      }
      default: {
        return "0";
      }
    }
  };
  return {
    convertRaceNumber,
  };
};
