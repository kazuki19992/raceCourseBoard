"use client";
import DefaultErrorPage from "next/error";

import { RaceInfo, HorseNumbers, CourseTimeInfo } from "./components";
import { useRaceBoardPage } from "./hooks/useRaceBoardPage";

import {
  ConfirmedStatus,
  GoalDiff,
  RaceCourse,
  CourseCondition,
  RecordPanel,
} from "@/models";

export default function RaceBoardPage({ params }: { params: { id: string } }) {
  const { getRaceBoardInfo } = useRaceBoardPage(params.id as string);

  const boardData = getRaceBoardInfo();

  if (boardData == null) {
    return <DefaultErrorPage statusCode={404} />;
  }

  const { raceInfo, horseInfo, trackInfo, recordTimeInfo } = boardData;

  return (
    <div className="w-full ">
      <div className="aspect-[9/16] bg-black max-h-screen max-w-full text-white p-3 sm:hidden">
        <RaceInfo
          raceCourseId={(raceInfo.course || 5) as RaceCourse}
          raceNumber={raceInfo.raceNumber || 1}
          confirmedStatus={raceInfo.confirmed || ConfirmedStatus.unconfirmed}
        />
        <HorseNumbers
          horseNumbers={horseInfo.horseNumbers || [0, 0, 0, 0, 0]}
          goalDiffs={
            horseInfo.goalDiffs || [
              GoalDiff.big,
              GoalDiff.big,
              GoalDiff.big,
              GoalDiff.big,
            ]
          }
        />
        <CourseTimeInfo
          turf={(trackInfo.turf as CourseCondition) || 0}
          dirt={(trackInfo.dirt as CourseCondition) || 0}
          timeInfo={recordTimeInfo.record || RecordPanel.none}
          time={recordTimeInfo.time || "1:23.4"}
          last4={recordTimeInfo.last4 || "12.3"}
          last3={recordTimeInfo.last3 || "12.3"}
        />
      </div>
      <div className="hidden sm:flex container mx-auto w-screen h-screen items-center justify-center">
        <p className="text-white text-2xl">
          このページはスマートフォンでのみ閲覧可能です
        </p>
      </div>
    </div>
  );
}
