import React from "react";
import { PatternFormat } from "react-number-format";

import { usePage } from "@/app/hooks";
import {
  RaceCourse,
  ConfirmedStatus,
  RecordPanel,
  GoalDiff,
  GoalDiffLabel,
  goalDiffArray,
} from "@/models";

export const CardForm: React.FC<{ handle: ReturnType<typeof usePage> }> = ({
  handle,
}) => {
  const {
    raceInfo,
    horseInfo,
    recordTimeInfo,
    setRaceCourse,
    setRaceNumber,
    setConfirmedStatus,
    setHorseNumber,
    setGoalDiff,
    setRecord,
    setTime,
    setLast3,
    setLast4,
  } = handle;
  return (
    <div className="w-full px-2">
      <div className="flex items-center border rounded mt-3 p-2 w-full h-72">
        <div className="w-1/6 h-72 bg-green-300 absolute z-0 ml-16" />
        <div className="w-2/5 z-10">
          <div className="flex items-baseline gap-2 w-full">
            <select
              className="font-bold text-lg rounded-none bg-white/0 text-black"
              value={raceInfo.raceCourseId}
              onChange={(e) => {
                setRaceCourse(Number(e.target.value) as RaceCourse);
              }}
            >
              {Object.keys(RaceCourse).map((key) => (
                <option value={key} key={key}>
                  {RaceCourse[Number(key) as RaceCourse]}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <select
              className="font-bold text-xl text-center text-white w-16 p-1 bg-black rounded-none"
              value={raceInfo.raceNumber}
              onChange={(e) => {
                setRaceNumber(Number(e.target.value));
              }}
            >
              {[...Array(12)].map((_, i) => (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              ))}
            </select>
            <p className="text-black serif text-xs">レース</p>
          </div>

          <div className="my-2 flex items-center gap-1">
            <select
              className="font-bold text-2xl text-center text-led w-20 bg-black rounded-none serif mt-1"
              value={raceInfo.confirmedStatus}
              onChange={(e) => {
                setConfirmedStatus(e.target.value as ConfirmedStatus);
              }}
            >
              {[
                { val: ConfirmedStatus.confirmed, label: "確" },
                { val: ConfirmedStatus.deliberation, label: "審" },
                { val: ConfirmedStatus.unconfirmed, label: "未" },
              ].map((confirmed, i) => (
                <option value={confirmed.val} key={i}>
                  {confirmed.label}
                </option>
              ))}
            </select>
            <div className="flex flex-col w-3 justify-center items-center gap-1">
              <div
                className={`rounded-full w-3 h-3 ${
                  raceInfo.confirmedStatus === ConfirmedStatus.confirmed
                    ? "bg-red-500 shadow shadow-red-500"
                    : "bg-zinc-900"
                }`}
              />
              <div
                className={`rounded-full w-3 h-3 ${
                  raceInfo.confirmedStatus === ConfirmedStatus.deliberation
                    ? "bg-cyan-500 shadow shadow-cyan-500"
                    : "bg-zinc-900"
                }`}
              />
            </div>
          </div>
          <div className="my-2 flex items-center gap-1">
            <select
              className={`text-center w-20 py-1 bg-black mt-1 rounded-none ${
                recordTimeInfo.record === RecordPanel.none
                  ? "text-white"
                  : "text-red-500"
              }`}
              value={recordTimeInfo.record}
              onChange={(e) => {
                setRecord(e.target.value as RecordPanel);
              }}
            >
              {[
                { val: RecordPanel.none, label: "無表示" },
                { val: RecordPanel.record, label: "ﾚｺｰﾄﾞ" },
                { val: RecordPanel.test, label: "ﾃｽﾄ中" },
              ].map((recordStatus, i) => (
                <option value={recordStatus.val} key={i}>
                  {recordStatus.label}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col justify-end gap-1 my-2 pr-1">
            <div className="flex items-center w-full justify-center">
              <p className="w-16">タイム</p>
              <PatternFormat
                value={recordTimeInfo.time}
                className="w-20 border border-black rounded px-1"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                format="#.##.#"
                mask="_"
              />
            </div>
            <div className="flex items-center w-full justify-end gap-2">
              <div className="flex items-center">
                <p className="w-6">4F</p>
                <PatternFormat
                  value={recordTimeInfo.last4}
                  className="w-12 border border-black rounded px-1"
                  onChange={(e) => {
                    setLast4(e.target.value);
                  }}
                  format="##.#"
                  mask="_"
                />
              </div>
            </div>
            <div className="flex items-center w-full justify-end gap-2">
              <div className="flex items-center">
                <p className="w-6">3F</p>
                <PatternFormat
                  value={recordTimeInfo.last3}
                  className="w-12 border border-black rounded px-1"
                  onChange={(e) => {
                    setLast3(e.target.value);
                  }}
                  format="##.#"
                  mask="_"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 右側 */}
        <div className="w-4/6 h-full flex items-center justify-center z-10 gap-1">
          <div className="w-1/3 flex-col h-full flex gap-3">
            {/* 馬番 */}
            {[...Array(5)].map((_, i) => (
              <div
                className="w-full flex items-center justify-center h-full"
                key={i}
              >
                <img
                  src={`/images/goalNumber/${i + 1}.svg`}
                  className="w-1/2 h-1/2"
                />
                <input
                  type="number"
                  className="w-full px-1 py-2 text-center border border-black text-sm font-bold"
                  value={horseInfo.horseNumbers[i]}
                  onChange={(e) => {
                    setHorseNumber(
                      Number(e.target.value),
                      (i + 1) as 1 | 2 | 3 | 4 | 5
                    );
                  }}
                />
              </div>
            ))}
          </div>
          <div className="w-1/2 flex-col h-full flex items-center gap-3 justify-center">
            {/* 枠番 */}
            {[...Array(4)].map((_, i) => (
              <select
                className="w-full h-12 bg-white rounded-none px-1 py-2 text-center border border-black text-sm font-bold"
                value={horseInfo.goalDiffs[i]}
                onChange={(e) => {
                  setGoalDiff(
                    e.target.value as GoalDiff,
                    (i + 1) as 1 | 2 | 3 | 4
                  );
                }}
                key={`select${i}`}
              >
                {goalDiffArray.map((key) => (
                  <option value={key} key={`option${key}`}>
                    {GoalDiffLabel[key]}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
