import {
  RaceInfoProps,
  ConfirmedStatus,
  GoalDiff,
  CourseCondition,
  RecordPanel,
  RaceCourse,
} from "@/models";
import { race } from "puppeteer-core/lib/esm/third_party/rxjs/rxjs.js";
import { useState } from "react";

export const usePage = () => {
  const [raceInfo, setRaceInfo] = useState<RaceInfoProps>({
    raceCourseId: 5,
    raceNumber: 1,
    confirmedStatus: ConfirmedStatus.confirmed,
  });
  const [horseInfo, setHorseInfo] = useState<{
    horseNumbers: number[];
    goalDiffs: GoalDiff[];
  }>({
    horseNumbers: [1, 2, 3, 4, 5],
    goalDiffs: [GoalDiff.diff1, GoalDiff.diff2, GoalDiff.diff3, GoalDiff.diff4],
  });
  const [trackInfo, setTrackInfo] = useState<{
    turf: CourseCondition;
    dirt: CourseCondition;
  }>({
    turf: 0,
    dirt: 0,
  });
  const [recordTimeInfo, setRecordTimeInfo] = useState<{
    record: RecordPanel;
    time: string;
    last4: string;
    last3: string;
  }>({
    record: RecordPanel.none,
    time: "1.23.4",
    last4: "12.3",
    last3: "12.3",
  });

  // 競馬場IDをセットする
  const setRaceCourse = (raceCourseId: RaceCourse) => {
    setRaceInfo({ ...raceInfo, raceCourseId });
  };

  // レース番号をセットする
  const setRaceNumber = (raceNumber: number) => {
    setRaceInfo({ ...raceInfo, raceNumber });
  };

  // レースの確定状況をセットする
  const setConfirmedStatus = (confirmedStatus: ConfirmedStatus) => {
    setRaceInfo({ ...raceInfo, confirmedStatus });
  };

  // 馬番をセットする
  const setHorseNumber = (horseNumber: number, index: 1 | 2 | 3 | 4 | 5) => {
    const horseNumbers = [...horseInfo.horseNumbers];
    horseNumbers[index - 1] = horseNumber;
    setHorseInfo({ ...horseInfo, horseNumbers });
  };

  // 着差をセットする
  const setGoalDiff = (goalDiff: GoalDiff, index: 1 | 2 | 3 | 4) => {
    const goalDiffs = [...horseInfo.goalDiffs];
    goalDiffs[index - 1] = goalDiff;
    setHorseInfo({ ...horseInfo, goalDiffs });
  };

  // 芝の馬場状態をセットする
  const setTurf = (turf: CourseCondition) => {
    setTrackInfo({ ...trackInfo, turf });
  };

  // ダートの馬場状態をセットする
  const setDirt = (dirt: CourseCondition) => {
    setTrackInfo({ ...trackInfo, dirt });
  };

  // レコードをセットする
  const setRecord = (record: RecordPanel) => {
    setRecordTimeInfo({ ...recordTimeInfo, record });
  };

  // タイムをセットする
  const setTime = (time: string) => {
    setRecordTimeInfo({ ...recordTimeInfo, time });
  };

  // 上がり3Fをセットする
  const setLast3 = (last3: string) => {
    setRecordTimeInfo({ ...recordTimeInfo, last3 });
  };

  // 上がり4Fをセットする
  const setLast4 = (last4: string) => {
    setRecordTimeInfo({ ...recordTimeInfo, last4 });
  };

  // URIパラメータを生成する
  const generateURIParams = () => {
    // 競馬場コード-レース番号-確定-馬番2桁-着差d数字-芝-ダート-レコード-タイム-4F-3F
    const raceInfoString = [
      raceInfo.raceCourseId,
      raceInfo.raceNumber,
      raceInfo.confirmedStatus.slice(0, 1),
    ].join("-");
    const horseInfoString = [
      horseInfo.horseNumbers
        .map((horseNumber) => {
          return horseNumber.toString().padStart(2, "0");
        })
        .join(""),
      horseInfo.goalDiffs
        .map((goalDiff) => {
          switch (goalDiff) {
            case "diff1":
              return "d1";
            case "diff2":
              return "d2";
            case "diff3":
              return "d3";
            case "diff4":
              return "d4";
            case "diff5":
              return "d5";
            case "diff6":
              return "d6";
            case "diff7":
              return "d7";
            case "diff8":
              return "d8";
            case "diff9":
              return "d9";
            case "diff10":
              return "d10";
            case "diff1_2":
              return "d1_2";
            case "diff1_1_2":
              return "d1_1_2";
            case "diff1_1_4":
              return "d1_1_4";
            case "diff1_3_4":
              return "d1_3_4";
            case "diff2_1_2":
              return "d2_1_2";
            case "diff3_4":
              return "d3_4";
            case "diff3_1_2":
              return "d3_1_2";
            case "big":
              return "db";
            case "head":
              return "dh";
            case "neck":
              return "dneck";
            case "nose":
              return "dnose";
            case "photo":
              return "dp";
            case "same":
              return "ds";
            case "none":
              return "dnone";
          }
        })
        .join(""),
    ].join("-");
    const trackInfoString = [trackInfo.turf, trackInfo.dirt].join("-");
    const recordTimeInfoString = [
      recordTimeInfo.record.slice(0, 1),
      recordTimeInfo.time,
      recordTimeInfo.last4,
      recordTimeInfo.last3,
    ].join("-");

    return [
      raceInfoString,
      horseInfoString,
      trackInfoString,
      recordTimeInfoString,
    ].join("-");
  };

  return {
    raceInfo,
    horseInfo,
    trackInfo,
    recordTimeInfo,
    setRaceCourse,
    setRaceNumber,
    setConfirmedStatus,
    setHorseNumber,
    setGoalDiff,
    setTurf,
    setDirt,
    setRecord,
    setTime,
    setLast3,
    setLast4,
    generateURIParams,
  };
};
