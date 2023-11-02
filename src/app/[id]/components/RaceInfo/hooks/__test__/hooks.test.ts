import { RenderHookResult, renderHook } from "@testing-library/react";
import { useRaceInfo } from "..";

type UseRaceInfo = ReturnType<typeof useRaceInfo>;

describe("useRaceInfo", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let r: RenderHookResult<any, UseRaceInfo>;

  const hook = () => renderHook(() => useRaceInfo());

  beforeEach(() => {
    r = hook();
  });

  describe("convertRaceNumber", () => {
    test("10未満の場合はそのまま文字列に変換して返す", () => {
      const raceNumber = 1;
    });
  });
});
