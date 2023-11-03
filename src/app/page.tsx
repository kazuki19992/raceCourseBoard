"use client";
import {
  ConfirmedStatus,
  CourseCondition,
  GoalDiff,
  RaceCourse,
  RaceInfoProps,
  RecordPanel,
} from "@/models";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
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
    time: "1:23.4",
    last4: "12.3",
    last3: "12.3",
  });
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col text-black items-center justify-between w-screen h-screen bg-white">
        <div className="py-4 w-full flex flex-col items-center justify-center shadow-lg bg-green-600 ">
          <p className="text-white text-xl font-bold">
            着順掲示板ジェネレーター
          </p>
          <p className="text-white text-sm">racing results board generator</p>
        </div>

        {/* 着順掲示板フォーム */}
        <div className="flex items-center border rounded mt-3 p-2 w-80 h-60">
          <div className="w-1/6 h-60 bg-green-300 absolute z-0 ml-16" />
          <div className="w-1/3 z-10">
            <div className="flex items-baseline gap-2 w-full">
              <select
                className="font-bold text-lg"
                value={raceInfo.raceCourseId}
                onChange={(e) => {
                  setRaceInfo({
                    ...raceInfo,
                    raceCourseId: Number(e.target.value) as RaceCourse,
                  });
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
                className="font-bold text-xl text-center text-white w-14 p-1 bg-black"
                value={raceInfo.raceNumber}
                onChange={(e) => {
                  setRaceInfo({
                    ...raceInfo,
                    raceNumber: Number(e.target.value),
                  });
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
                className="font-bold text-2xl text-center text-led w-11 bg-black serif mt-1"
                value={raceInfo.confirmedStatus}
                onChange={(e) => {
                  setRaceInfo({
                    ...raceInfo,
                    confirmedStatus: e.target.value as ConfirmedStatus,
                  });
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
                className={`text-center w-20 py-1 bg-black mt-1 ${
                  recordTimeInfo.record === RecordPanel.none
                    ? "text-white"
                    : "text-red-500"
                }`}
                value={recordTimeInfo.record}
                onChange={(e) => {
                  setRecordTimeInfo({
                    ...recordTimeInfo,
                    record: e.target.value as RecordPanel,
                  });
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
            <div className="flex items-center"></div>
          </div>
          {/* 右側 */}
          <div className="w-4/6 h-full flex flex-col items-center justify-center z-10 gap-1">
            <div className="w-full flex-col flex-grow flex items-center">
              <div className="w-full h-2/3 flex justify-center items-center gap-1">
                {/* 馬番 */}
                <div className="w-1/6 flex flex-col items-center justify-center h-full">
                  <img
                    src="/images/goalNumber/1.svg"
                    className="w-full h-1/2"
                  />
                  <input
                    type="text"
                    className="w-full px-1 py-2 text-center border border-black text-sm font-bold"
                    value={horseInfo.horseNumbers[0]}
                  />
                </div>
                <div className="w-1/6 flex flex-col items-center justify-center h-full">
                  <img
                    src="/images/goalNumber/2.svg"
                    className="w-full h-1/2"
                  />
                  <input
                    type="text"
                    className="w-full px-1 py-2 text-center border border-black text-sm font-bold"
                    value={horseInfo.horseNumbers[1]}
                  />
                </div>
                <div className="w-1/6 flex flex-col items-center justify-center h-full">
                  <img
                    src="/images/goalNumber/3.svg"
                    className="w-full h-1/2"
                  />
                  <input
                    type="text"
                    className="w-full px-1 py-2 text-center border border-black text-sm font-bold"
                    value={horseInfo.horseNumbers[2]}
                  />
                </div>
                <div className="w-1/6 flex flex-col items-center justify-center h-full">
                  <img
                    src="/images/goalNumber/4.svg"
                    className="w-full h-1/2"
                  />
                  <input
                    type="text"
                    className="w-full px-1 py-2 text-center border border-black text-sm font-bold"
                    value={horseInfo.horseNumbers[3]}
                  />
                </div>
                <div className="w-1/6 flex flex-col items-center justify-center h-full">
                  <img
                    src="/images/goalNumber/5.svg"
                    className="w-full h-1/2"
                  />
                  <input
                    type="text"
                    className="w-full px-1 py-2 text-center border border-black text-sm font-bold"
                    value={horseInfo.horseNumbers[4]}
                  />
                </div>
              </div>
              <div className="w-full flex-grow border flex justify-center items-center gap-1">
                <input
                  type="text"
                  className="w-1/6 px-1 py-2 text-center border border-black text-sm font-bold"
                />
                <input
                  type="text"
                  className="w-1/6 px-1 py-2 text-center border border-black text-sm font-bold"
                />
                <input
                  type="text"
                  className="w-1/6 px-1 py-2 text-center border border-black text-sm font-bold"
                />
                <input
                  type="text"
                  className="w-1/6 px-1 py-2 text-center border border-black text-sm font-bold"
                />
              </div>
            </div>
            <div className="w-full h-16 flex flex-col items-center gap-1">
              <div className="flex items-center w-full justify-center">
                <p className="w-16">タイム</p>
                <input
                  type="text"
                  value={recordTimeInfo.time}
                  className="w-32 border border-black rounded px-1"
                />
              </div>
              <div className="flex items-center w-full justify-center gap-2">
                <div className="flex items-center gap-1">
                  <p className="w-6">4F</p>
                  <input
                    type="text"
                    value={recordTimeInfo.last4}
                    className="w-16 border border-black rounded px-1"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <p className="w-6">3F</p>
                  <input
                    type="text"
                    value={recordTimeInfo.last3}
                    className="w-16 border border-black rounded px-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="rounded-full bg-green-500 text-white px-5 py-2 shadow-lg shadow-green-300 mt-3 mb-4"
          href="/5-11-c-1112150503-d1d2d3ds-0-0-r-1.32.4-33.3-44.4"
        >
          着順掲示板を生成する！
        </Link>
        <a className="rounded-full bg-black text-sm text-white px-5 py-2 shadow-lg shadow-black/50">
          着順掲示板を共有する
        </a>
        <div className="flex-grow" />
      </div>
      <div className="hidden sm:flex container mx-auto  items-center justify-center">
        <p className="text-white text-2xl">
          このページはスマートフォンでのみ閲覧可能です
        </p>
      </div>
    </div>
  );
}
