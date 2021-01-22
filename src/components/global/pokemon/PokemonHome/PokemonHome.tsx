import Header from "components/global/Header/Header";
import React from "react";
import PokemonCard from "./PokemonCard/PokemonCard";

import Styles from "./PokemonHome.styles";
import { PokemonHomeProps as Props } from "./PokemonHome.types";
import Link from "next/link";

const PokemonHome: React.FC<Props> = props => {
  const { pokemones } = props;

  const cardClickHandler = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number
  ) => {
    if ("caches" in window) {
      caches.open("user-requested").then(cache => {
        cache.add(`/pokemon/${id}`);
      });
    }
  };

  return (
    <Styles className="PokemonHome">
      <Header pageTitle="Pokemón" />
      <main className="PokemonHome__main">
        {pokemones.map(pokemon => {
          const { id } = pokemon;

          return (
            <Link key={id} href={`/pokemon/${id}`} passHref>
              <a href="*" onClick={e => cardClickHandler(e, id)}>
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              </a>
            </Link>
          );
        })}
      </main>
    </Styles>
  );
};

PokemonHome.defaultProps = {};

export default PokemonHome;
