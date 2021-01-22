import React from "react";
import { render } from "setupTests";

import Offline from "./Offline";

describe("Offline page", () => {
  it("renders without crashing", () => {
    render(<Offline />);
  });
});
