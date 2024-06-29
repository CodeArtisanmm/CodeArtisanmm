import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  ServiceFive,
  TestimonialOne,
  FooterOne,
  HeaderTwo,
} from "../containers";

const Service = () => (
  <Fragment>
    <Seo title="Services" />
    <HeaderTwo />
    <Breadcrumb pageName="Services" bgImage="images/breadcumb/team.jpg" />
    <ServiceFive className="space-top space-extra-bottom" />

    <TestimonialOne className="space-top space-extra-bottom" />
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default Service;
