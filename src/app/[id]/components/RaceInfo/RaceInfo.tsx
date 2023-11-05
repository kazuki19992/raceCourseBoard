import { ConfirmedPanel } from "./components";
import { useRaceInfo } from "./hooks";

import { RaceInfoProps } from "@/models";
import { RaceCourse } from "@/models";

export const RaceInfo: React.FC<RaceInfoProps> = ({
  raceCourseId,
  raceNumber,
  confirmedStatus,
}) => {
  const { convertRaceNumber } = useRaceInfo();

  return (
    <div
      className="w-full flex justify-between items-start"
      data-testid="raceInfo"
    >
      <div className="flex items-center gap-2 flex-grow">
        <p className="vertical-rl text-base font-semibold">
          {RaceCourse[raceCourseId]}
        </p>
        <div className="w-14 h-14 bg-zinc-800 flex items-center justify-center">
          <p className="text-led text-raceNumber race-number">
            {convertRaceNumber(raceNumber)}
          </p>
        </div>
        <p className="text-base font-semibold">R</p>
      </div>
      <div className="w-1/2">
        <ConfirmedPanel status={confirmedStatus} />
      </div>
    </div>
  );
};
