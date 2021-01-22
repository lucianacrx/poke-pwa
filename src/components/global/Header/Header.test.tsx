import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("renders with default props", () => {
    render(<Header pageTitle="Pokémon" />);
  });
});
