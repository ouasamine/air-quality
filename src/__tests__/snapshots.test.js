import { render } from "@testing-library/react"
import React from "react";
import Details from "../pages/Details";
import Main from "../pages/Main";

describe("Testing Snapshots Of All Components", () => {
  test("Main Snapshot Test", () => {
    const view = render(<Main />);
    expect(view).toMatchSnapshot();
  })
  test("Details Snapshot Test", () => {
    const view = render(<Details />);
    expect(view).toMatchSnapshot();
  })
})