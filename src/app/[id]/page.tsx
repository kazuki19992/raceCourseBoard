import { ConfirmedStatus, GoalDiff } from "@/models";
import { RaceInfo, HorseNumbers, CourseTimeInfo } from "./components";

export default function RaceBoardPage() {
  const raceInfo = {
    raceCourseId: 5,
    raceNumber: 11,
    confirmedStatus: ConfirmedStatus.confirmed,
  };

  const horseNumbers = {
    horseNumbers: [1, 2, 3, 4, 5],
    goalDiffs: ["diff1", "diff2", "diff3", "diff4"],
  };

  const courseTimeInfo = {
    turf: 0,
    dirt: 0,
    timeInfo: "record",
    time: "1:55.2",
    last4: "46.1",
    last3: "34.7",
  };
  return (
    <div className="w-full ">
      <div className="aspect-[9/16] bg-black max-h-screen max-w-full text-white p-3 sm:hidden">
        <RaceInfo
          raceCourseId={raceInfo.raceCourseId as 5}
          raceNumber={raceInfo.raceNumber}
          confirmedStatus={raceInfo.confirmedStatus}
        />
        <HorseNumbers
          horseNumbers={horseNumbers.horseNumbers}
          goalDiffs={horseNumbers.goalDiffs as GoalDiff[]}
        />
        <CourseTimeInfo
          turf={0}
          dirt={0}
          timeInfo="record"
          time={"1:55.2"}
          last4="46.1"
          last3="34.7"
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
