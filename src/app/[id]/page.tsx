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
    <div className="aspect-[9/16] bg-black max-h-screen max-w-full text-white p-3">
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
  );
}
