import React, { Fragment } from "react";
import Privacy from "../containers/PrivacyPolicy/Privacy";
import { ScrollTopBtn, Seo } from "../components";
import { FooterOne, HeaderTwo } from "../containers";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Seo title="Privay and Policy Page" />
      <HeaderTwo />
      <Privacy />
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
};

export default PrivacyPolicy;
