import { RenderResult, render } from "@testing-library/react";

import { TimeInfo } from "..";
import { GoalDiff as _, RecordPanel } from "@/models";

describe("TimeInfo", () => {
  const out = (
    recordDisplayData: RecordPanel,
    time: string,
    last4: string,
    last3: string
  ) => render(<TimeInfo {...{ recordDisplayData, time, last4, last3 }} />);
  let r: RenderResult;
  describe("レコードパネル", () => {
    test("レコードの画像のtestidが表示される", () => {
      r = out(RecordPanel.record, "1:12.3", "12.3", "12.3");
      expect(r.getByTestId("recordPanel")).toBeInTheDocument();
    });
    test("テスト中の画像のtestidが表示される", () => {
      r = out(RecordPanel.test, "1:12.3", "12.3", "12.3");
      expect(r.getByTestId("testPanel")).toBeInTheDocument();
    });
    test("ブランクの画像のtestidが表示される", () => {
      r = out(RecordPanel.none, "1:12.3", "12.3", "12.3");
      expect(r.getByTestId("nonePanel")).toBeInTheDocument();
    });
  });

  // describe("タイムパネル", () => {
  //   const time = "1:12.3";
  //   const last4 = "34.5";
  //   const last3 = "45.6";
  //   beforeEach(() => {
  //     r = out(RecordPanel.none, time, last4, last3);
  //   });
  //   test("タイムが表示される", () => {
  //     expect(r.getByText(time)).toBeInTheDocument();
  //   });
  //   test("4Fが表示される", () => {
  //     expect(r.getByText(last4)).toBeInTheDocument();
  //   });
  //   test("3Fが表示される", () => {
  //     expect(r.getByText(last3)).toBeInTheDocument();
  //   });
  // });
});
