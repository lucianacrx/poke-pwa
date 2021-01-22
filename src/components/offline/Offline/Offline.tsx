import React from "react";

import Styles from "./Offline.styles";
import { OfflineProps as Props } from "./Offline.types";
import Header from "components/global/Header/Header";

const Offline: React.FC<Props> = props => {
  return (
    <Styles className="Offline">
      <Header pageTitle="Offline" />
      <main className="Offline__main">
        <img
          src="/assets/images/offline.png"
          alt="Offline"
          className="Offline__main__img"
        />

        <h1 className="Offline__main__title">
          No se ha podido acceder a la página porque no tiene conexión a
          internet.
        </h1>
      </main>
      <footer className="Offline__footer" />
    </Styles>
  );
};

Offline.defaultProps = {};

export default Offline;
