import { RenderHookResult, renderHook } from "@testing-library/react";
import { useTimePanel } from "..";

type UseTimePanel = ReturnType<typeof useTimePanel>;
describe("useTimePanel", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let r: RenderHookResult<any, UseTimePanel>;
  const hook = () => renderHook(() => useTimePanel());

  // beforeEach(() => {
  //   r = hook();
  // });

  describe("generateTimeArray", () => {
    test("m:ss:Sの形式でない場合は空の配列を返す", () => {
      r = hook();
      const time = "1:2:3";
      expect(r.result.current.generateTimeArray(time)).toEqual([]);
    });

    // describe("m:ss.Sの形式の場合", () => {
    //   test("m:ss:Sの形式の場合は分, 秒, ミリ秒の配列を返す", () => {
    //     r = hook();
    //     const time = "1:02:3";
    //     expect(r.result.current.generateTimeArray(time)).toEqual([
    //       "1",
    //       "02",
    //       "3",
    //     ]);
    //   });

    //   test("m:ss:Sの形式の場合は分が0の場合は_に変換する", () => {
    //     r = hook();
    //     const time = "0:02:3";
    //     expect(r.result.current.generateTimeArray(time)).toEqual([
    //       "_",
    //       "02",
    //       "3",
    //     ]);
    //   });
    // });

    // describe("ss.Sの形式の場合", () => {
    //   test("ss:Sの形式の場合は分が_になる", () => {
    //     r = hook();
    //     const time = "02:3";
    //     expect(r.result.current.generateTimeArray(time)).toEqual([
    //       "_",
    //       "02",
    //       "3",
    //     ]);
    //   });
    // });
  });
});
