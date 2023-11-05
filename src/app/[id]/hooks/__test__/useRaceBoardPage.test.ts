import { RenderHookResult, renderHook } from "@testing-library/react";
import { useRaceBoardPage } from "..";
import {
  correctURIParams,
  overURIParams,
  shortURIParams,
} from "@/__fixtures__";

type UseRaceBoardPage = ReturnType<typeof useRaceBoardPage>;

describe("useRaceBoardPage", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let r: RenderHookResult<any, UseRaceBoardPage>;

  const hook = (uriParam: string) =>
    renderHook(() => useRaceBoardPage(uriParam));

  describe("getRaceBoardInfo", () => {
    test("uriParamが正しい場合はhooksを返す", () => {
      r = hook(correctURIParams);
      expect(r.result.current.getRaceBoardInfo()).not.toBeNull();
    });
    test("uriParamが短い場合はnullを返す", () => {
      r = hook(shortURIParams);
      expect(r.result.current.getRaceBoardInfo()).toBeNull();
    });
    test("uriParamが長い場合はnullを返す", () => {
      r = hook(overURIParams);
      expect(r.result.current.getRaceBoardInfo()).toBeNull();
    });
  });
});
