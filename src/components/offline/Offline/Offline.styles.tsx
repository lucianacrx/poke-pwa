import styled from "styled-components";

import { OfflineStyledProps as Props } from "./Offline.types";

const OfflineStyled = styled.div<Props>`
  min-width: var(--sizes-page-minWidth);
  max-width: var(--sizes-page-maxWidth);
  min-height: var(--sizes-page-minHeight);
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;

  .Offline {
    &__header {
    }

    &__main {
      @media only screen and (max-width: 40rem) {
        padding: 2rem 2rem;
      }

      padding: 5rem 5rem;
      display: flex;
      max-width: 100vw;
      flex-direction: column;
      align-items: center;

      &__img {
        height: auto;
        width: 100%;
        max-width: 80rem;
      }

      &__title {
        padding-top: 2.4rem;
        text-align: center;
      }

      &__link {
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
        color: #363b81;
      }
    }

    &__footer {
    }
  }
`;

export default OfflineStyled;
