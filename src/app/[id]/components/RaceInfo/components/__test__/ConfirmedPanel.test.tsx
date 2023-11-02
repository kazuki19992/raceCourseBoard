import { render } from "@testing-library/react";

import { ConfirmedPanel } from "..";

import { ConfirmedStatus } from "@/models";

describe("ConfirmedPanel", () => {
  test(`${ConfirmedStatus.confirmed}が渡されたときにconfirmedのtestidの画像が表示される`, () => {
    const { getByTestId } = render(
      <ConfirmedPanel status={ConfirmedStatus.confirmed} />
    );
    expect(getByTestId("confirmed")).toBeInTheDocument();
  });
  test(`${ConfirmedStatus.deliberation}が渡されたときにdeliberationのtestidの画像が表示される`, () => {
    const { getByTestId } = render(
      <ConfirmedPanel status={ConfirmedStatus.deliberation} />
    );
    expect(getByTestId("deliberation")).toBeInTheDocument();
  });
  test(`${ConfirmedStatus.unconfirmed}が渡されたときにunconfirmedのtestidの画像が表示される`, () => {
    const { getByTestId } = render(
      <ConfirmedPanel status={ConfirmedStatus.unconfirmed} />
    );
    expect(getByTestId("unconfirmed")).toBeInTheDocument();
  });
});
