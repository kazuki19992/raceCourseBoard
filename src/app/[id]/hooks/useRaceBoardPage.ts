import { ConfirmedStatus, GoalDiff, RecordPanel } from "@/models";

// 競馬場コード-レース番号-確定-馬番2桁-着差d数字-芝-ダート-レコード-タイム-4F-3F
export const useRaceBoardPage = (id: string) => {
  const getRaceBoardInfo = () => {
    const boardInfo = id.split("-");

    if (boardInfo.length !== 11) {
      return null;
    }

    const time = boardInfo[8].split(".");
    if (time.length !== 3) {
      return null;
    }

    console.log(decodeURI(boardInfo[8]));

    const raceInfo = {
      course:
        1 <= Number(boardInfo[0]) && Number(boardInfo[0]) <= 10
          ? Number(boardInfo[0])
          : null,
      raceNumber:
        1 <= Number(boardInfo[1]) && Number(boardInfo[1]) <= 12
          ? Number(boardInfo[1])
          : null,
      confirmed: getConfirmed(boardInfo[2]),
    };

    const horseInfo = {
      horseNumbers: getHorseNumbers(boardInfo[3]),
      goalDiffs: getGoalDiffArray(boardInfo[4]),
    };

    const trackInfo = {
      turf:
        0 <= Number(boardInfo[5]) && Number(boardInfo[5]) <= 3
          ? Number(boardInfo[5])
          : null,
      dirt:
        0 <= Number(boardInfo[5]) && Number(boardInfo[5]) <= 3
          ? Number(boardInfo[5])
          : null,
    };

    const recordTimeInfo = {
      record: getRecord(boardInfo[7]),
      time: `${time[0]}:${time[1]}.${time[2]}`,
      last4: boardInfo[9],
      last3: boardInfo[10],
    };

    return {
      raceInfo,
      horseInfo,
      trackInfo,
      recordTimeInfo,
    };
  };

  const getConfirmed = (confirmedString: string): ConfirmedStatus | null => {
    if (confirmedString === "c") {
      return ConfirmedStatus.confirmed;
    }
    if (confirmedString === "d") {
      return ConfirmedStatus.deliberation;
    }
    if (confirmedString === "u") {
      return ConfirmedStatus.unconfirmed;
    }
    return null;
  };

  const getHorseNumbers = (horseNumberString: string): number[] | null => {
    const horseNumberArray = horseNumberString.match(/\d{2}/g);
    if (horseNumberArray === null) {
      return null;
    }

    const retArray = horseNumberArray.map((horseNumber) => {
      const horseNumberInt = Number(horseNumber);
      if (1 <= horseNumberInt && horseNumberInt <= 18) {
        return horseNumberInt;
      }
      return null;
    });

    if (retArray.includes(null)) {
      return null;
    }

    return retArray as number[];
  };

  const getGoalDiffArray = (goalDiffString: string): GoalDiff[] | null => {
    const goalDiffArray = goalDiffString.split("d");
    goalDiffArray.shift();

    if (goalDiffArray.length !== 4) {
      return null;
    }

    const retArray = goalDiffArray.map((goalDiff) => {
      // 数字以外の場合
      if (isNaN(Number(goalDiff.substring(0, 1)))) {
        if (goalDiff === "b") {
          return GoalDiff.big;
        }
        if (goalDiff === "h") {
          return GoalDiff.head;
        }
        if (goalDiff === "neck") {
          return GoalDiff.neck;
        }
        if (goalDiff === "nose") {
          return GoalDiff.nose;
        }
        if (goalDiff === "p") {
          return GoalDiff.photo;
        }
        if (goalDiff === "s") {
          return GoalDiff.same;
        }
        if (goalDiff === "none") {
          return GoalDiff.none;
        }
        return null;
      }

      // 数字の場合
      if (1 <= Number(goalDiff) && Number(goalDiff) <= 10) {
        return `diff${goalDiff}`;
      }
      if (goalDiff === "1_2") {
        return GoalDiff.diff1_2;
      }
      if (goalDiff === "1_1_2") {
        return GoalDiff.diff1_1_2;
      }
      if (goalDiff === "1_1_4") {
        return GoalDiff.diff1_1_4;
      }
      if (goalDiff === "1_3_4") {
        return GoalDiff.diff1_3_4;
      }
      if (goalDiff === "2_1_2") {
        return GoalDiff.diff2_1_2;
      }
      if (goalDiff === "3_4") {
        return GoalDiff.diff3_4;
      }
      if (goalDiff === "3_1_2") {
        return GoalDiff.diff3_1_2;
      }
      return null;
    });

    if (retArray.includes(null)) {
      return null;
    }

    return retArray as GoalDiff[];
  };

  const getRecord = (recordString: string): RecordPanel => {
    if (recordString === "r") {
      return RecordPanel.record;
    }
    if (recordString === "t") {
      return RecordPanel.test;
    }
    return RecordPanel.none;
  };

  return {
    getRaceBoardInfo,
  };
};
