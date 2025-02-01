import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  ServiceFour,
  AboutSeven,
  TeamTwo,
  FooterOne,
  HeaderTwo,
} from "../containers";

const About = () => (
  <Fragment>
    <Seo title="About Us" />
    <HeaderTwo />
    <Breadcrumb pageName="About Us" bgImage="images/breadcumb/about-3.jpg" />
    <ServiceFour className="space-top space-extra-bottom" />
    <AboutSeven />
    {/* <TeamTwo className="space-top space-extra-bottom" /> */}
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default About;
