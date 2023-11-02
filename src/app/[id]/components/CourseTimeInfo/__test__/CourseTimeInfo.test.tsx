import { render } from "@testing-library/react";

import { CourseCondition, RecordPanel } from "@/models";
import { CourseTimeInfo } from "..";

describe("CourseTimeInfo", () => {
  const output = (
    turf: CourseCondition,
    dirt: CourseCondition,
    timeInfo: RecordPanel,
    time: string,
    last4: string,
    last3: string
  ) =>
    render(
      <CourseTimeInfo {...{ turf, dirt, timeInfo, time, last4, last3 }} />
    );

  describe("コース状態", () => {
    test("芝のコース状態が表示される", () => {
      const condition: keyof typeof CourseCondition = 0;
      const r = output(
        condition,
        1,
        RecordPanel.none,
        "1:12.3",
        "12.3",
        "12.3"
      );
      expect(r.getByText(CourseCondition[condition])).toBeInTheDocument();
    });

    test("ダートのコース状態が表示される", () => {
      const condition: keyof typeof CourseCondition = 1;
      const r = output(
        0,
        condition,
        RecordPanel.none,
        "1:12.3",
        "12.3",
        "12.3"
      );
      expect(r.getByText(CourseCondition[condition])).toBeInTheDocument();
    });
  });
});
