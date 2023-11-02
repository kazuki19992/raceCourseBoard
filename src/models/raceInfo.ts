import { ConfirmedStatus } from ".";

export const RaceCourse = {
  1: "札幌",
  2: "函館",
  3: "福島",
  4: "新潟",
  5: "東京",
  6: "中山",
  7: "中京",
  8: "京都",
  9: "阪神",
  10: "小倉",
  101: "帯広",
  102: "門別",
  103: "盛岡",
  104: "水沢",
  105: "浦和",
  106: "船橋",
  107: "大井",
  108: "川崎",
  109: "金沢",
  110: "笠松",
  111: "名古屋",
  112: "園田",
  113: "姫路",
  114: "高知",
  115: "佐賀",
} as const;

export type RaceCourseName = (typeof RaceCourse)[keyof typeof RaceCourse];

export type RaceCourse = keyof typeof RaceCourse;

export const RecordPanel = {
  record: "record",
  test: "test",
  netkeiba: "netkeiba",
  none: "none",
} as const;
export type RecordPanel = keyof typeof RecordPanel;

export const CourseCondition = {
  0: "良",
  1: "稍重",
  2: "重",
  3: "不良",
} as const;
export type courseCondition = keyof typeof CourseCondition;

export type RaceInfoProps = {
  raceCourseId: RaceCourse;
  raceNumber: number;
  confirmedStatus: ConfirmedStatus;
};
