import React from "react";
import { render } from "@testing-library/react";

import Pokemon from "./Pokemon";
import { PokemonComplete } from "types/pokemon.types";

describe("Pokemon", () => {
  it("renders with default props", () => {
    const pokemon: PokemonComplete = {
      id: 143,
      name: "Snorlax",
      imageUrl: "https://pokeres.bastionbot.org/images/pokemon/143.png",
      stats: [
        { base_stat: 160, stat: { name: "hp" } },
        { base_stat: 110, stat: { name: "attack" } },
        { base_stat: 65, stat: { name: "defense" } },
        { base_stat: 30, stat: { name: "speed" } }
      ],
      types: [{ type: { name: "normal" } }]
    };

    render(<Pokemon pokemon={pokemon} />);
  });
});
