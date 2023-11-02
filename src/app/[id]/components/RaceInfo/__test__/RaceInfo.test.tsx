import { RenderResult, render } from "@testing-library/react";
import { RaceInfo } from "..";
import { RaceCourse, RaceInfoProps } from "@/models";
import { raceInfoPropsTokyo } from "@/__fixtures__";

describe("RaceInfo", () => {
  const output = (props: RaceInfoProps) => render(<RaceInfo {...props} />);
  let r: RenderResult;
  beforeEach(() => {
    r = output(raceInfoPropsTokyo);
  });

  test("競馬場名が表示されている", () => {
    expect(
      r.getByText(RaceCourse[raceInfoPropsTokyo.raceCourseId])
    ).toBeInTheDocument();
  });

  test("レース番号が表示されている", () => {
    expect(r.getByText(raceInfoPropsTokyo.raceNumber)).toBeInTheDocument();
  });

  test("確定パネルが表示されている", () => {
    expect(
      r.getByTestId(raceInfoPropsTokyo.confirmedStatus)
    ).toBeInTheDocument();
  });
});
