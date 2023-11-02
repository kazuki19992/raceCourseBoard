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
      expect(r.result.current.convertRaceNumber(raceNumber)).toBe("1");
    });
    test("10の場合はxを返す", () => {
      const raceNumber = 10;
      expect(r.result.current.convertRaceNumber(raceNumber)).toBe("x");
    });
    test("11の場合はyを返す", () => {
      const raceNumber = 11;
      expect(r.result.current.convertRaceNumber(raceNumber)).toBe("y");
    });
    test("12の場合はzを返す", () => {
      const raceNumber = 12;
      expect(r.result.current.convertRaceNumber(raceNumber)).toBe("z");
    });
    test("13以上の場合は0を返す", () => {
      const raceNumber = 13;
      expect(r.result.current.convertRaceNumber(raceNumber)).toBe("0");
    });
  });
});
