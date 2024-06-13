import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title> CodeArtisan - {title} </title>
    </Helmet>
  );
};

export default SEO;
