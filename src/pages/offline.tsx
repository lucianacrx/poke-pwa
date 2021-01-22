import React from "react";
import { GetStaticProps } from "next";

import Offline from "components/offline/Offline/Offline";

interface Props {}

const OfflinePage = (props: Props) => {
  return <Offline />;
};

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {} // will be passed to the page component as props
  };
};

export default OfflinePage;
