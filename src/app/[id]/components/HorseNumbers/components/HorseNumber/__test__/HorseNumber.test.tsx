import { RenderResult, render } from "@testing-library/react";
import { HorseNumber } from "..";

describe("HorseNumber", () => {
  const out = (goalNumber: 1 | 2 | 3 | 4 | 5, horseNumber: number) =>
    render(<HorseNumber {...{ goalNumber, horseNumber }} />);

  let r: RenderResult;

  test("馬番が表示される", () => {
    const horseNumber = 5;
    r = out(1, horseNumber);
    expect(r.getByText(horseNumber)).toBeInTheDocument();
  });

  test("ゴール番号が表示される", () => {
    const goalNumber = 1;
    r = out(goalNumber, 5);
    expect(r.getByTestId(`goalNumber${goalNumber}`)).toBeInTheDocument();
  });
});
