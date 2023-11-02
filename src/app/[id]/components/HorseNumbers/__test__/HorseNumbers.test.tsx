import { render } from "@testing-library/react";

import { HorseNumbers } from "..";
import { GoalDiff } from "@/models";

describe("HorseNumbers", () => {
  const out = (horseNumbers: number[], goalDiffs: GoalDiff[]) =>
    render(<HorseNumbers {...{ horseNumbers, goalDiffs }} />);
  let r;
  test("着順馬番が表示される", () => {
    r = out(
      [7, 6, 9, 4, 5],
      [GoalDiff.diff1, GoalDiff.diff1, GoalDiff.diff1, GoalDiff.diff1]
    );
    expect(r.getByText("7")).toBeInTheDocument();
    expect(r.getByText("6")).toBeInTheDocument();
    expect(r.getByText("9")).toBeInTheDocument();
    expect(r.getByText("4")).toBeInTheDocument();
    expect(r.getByText("5")).toBeInTheDocument();
  });
});
