import React from "react";
import { render } from "@testing-library/react";

import PokemonHome from "./PokemonHome";

describe("PokemonHome", () => {
  it("renders with default props", () => {
    render(<PokemonHome pokemones={[]} />);
  });
});
