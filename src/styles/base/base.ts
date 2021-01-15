import { css } from "styled-components";

const base = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; //16px default to 10px
  }

  body {
    box-sizing: border-box;
    margin: 0;
  }
`;

export default base;
