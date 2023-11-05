import {
  ConfirmedStatus,
  GoalDiff,
  RaceInfoProps,
  RecordPanel,
} from "@/models";

export const raceInfoPropsTokyo: RaceInfoProps = {
  raceCourseId: 5,
  raceNumber: 1,
  confirmedStatus: "confirmed",
};

export const correctURIParams =
  "5-11-c-1112150503-d1d2d3ds-0-0-r-1.32.4-33.3-44.4";
export const shortURIParams = "5-11-c-1112150503-d1d2d3ds-0-0-r";
export const overURIParams =
  "5-11-c-1112150503-d1d2d3ds-0-0-r-1.32.4-33.3-44.4-55.5";

export const initialRaceInfo = {
  raceCourseId: 5,
  raceNumber: 1,
  confirmedStatus: ConfirmedStatus.confirmed,
};

export const initialHorseInfo = {
  horseNumbers: [1, 2, 3, 4, 5],
  goalDiffs: [GoalDiff.diff1, GoalDiff.diff2, GoalDiff.diff3, GoalDiff.diff4],
};

export const initialTrackInfo = {
  turf: 0,
  dirt: 0,
};

export const initialRecordTimeInfo = {
  record: RecordPanel.none,
  time: "1:23.4",
  last4: "12.3",
  last3: "12.3",
};
