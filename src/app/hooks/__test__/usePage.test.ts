import { RenderHookResult, renderHook } from "@testing-library/react";
import { usePage } from "..";
import {
  initialHorseInfo,
  initialRaceInfo,
  initialRecordTimeInfo,
  initialTrackInfo,
} from "@/__fixtures__";

type UsePage = ReturnType<typeof usePage>;

describe("usePage", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let r: RenderHookResult<any, UsePage>;

  beforeEach(() => {
    r = renderHook(() => usePage());
  });
  describe("初期値", () => {
    test("raceInfoの初期値", () => {
      expect(r.result.current.raceInfo).toEqual(initialRaceInfo);
    });
    test("horseInfoの初期値", () => {
      expect(r.result.current.horseInfo).toEqual(initialHorseInfo);
    });
    test("trackInfoの初期値", () => {
      expect(r.result.current.trackInfo).toEqual(initialTrackInfo);
    });
    test("recordTimeInfoの初期値", () => {
      expect(r.result.current.recordTimeInfo).toEqual(initialRecordTimeInfo);
    });
  });
});
