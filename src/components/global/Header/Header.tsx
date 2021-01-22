import React from "react";

import Styles from "./Header.styles";
import { HeaderProps as Props } from "./Header.types";
import PokebolaSVG from "../../../../public/assets/images/pokebola.svg";
import Head from "next/head";

const Header: React.FC<Props> = props => {
  const { pageTitle } = props;
  return (
    <Styles className="Header">
      <Head>
        <title>{pageTitle}</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Pokedex" />
        <link rel="apple-touch-icon" href="/assets/icons/poke-64x64.png" />
        <link rel="apple-touch-icon" href="/assets/icons/poke-72x72.png" />
        <link rel="apple-touch-icon" href="/assets/icons/poke-96x96.png" />
        <link rel="apple-touch-icon" href="/assets/icons/poke-128x128.png" />
        <link rel="apple-touch-icon" href="/assets/icons/poke-256x256.png" />
      </Head>
      <div className="Header__logo-box">
        <PokebolaSVG className="Header__logo" />
      </div>
      <div className="Header__title">Pokemón</div>
    </Styles>
  );
};

Header.defaultProps = {};

export default Header;
