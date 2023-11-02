import { RenderHookResult, renderHook } from "@testing-library/react";
import { useHorseNumbers } from "..";
import { GoalDiff } from "@/models";

type UseHorseNumbers = ReturnType<typeof useHorseNumbers>;
describe("useHorseNumbers", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let r: RenderHookResult<any, UseHorseNumbers>;
  const hook = () =>
    renderHook(() =>
      useHorseNumbers([
        GoalDiff.same,
        GoalDiff.diff1,
        GoalDiff.diff2,
        GoalDiff.diff3,
      ])
    );

  beforeEach(() => {
    r = hook();
  });

  describe("getGoalNumber", () => {
    test("indexが0の場合は1を返す", () => {
      const index = 0;
      expect(r.result.current.getGoalNumber(index)).toBe(1);
    });

    test("同着の場合はindexをそのまま返す", () => {
      const index = 1;
      expect(r.result.current.getGoalNumber(index)).toBe(1);
    });

    test("同着ではない場合はindex+1を返す", () => {
      const index = 2;
      expect(r.result.current.getGoalNumber(index)).toBe(3);
    });
  });
});
