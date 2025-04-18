import React, { Fragment } from "react";
import { Seo, ScrollTopBtn } from "../components";
import {
  HeaderTwo,
  HeroOne,
  FeatureOne,
  AboutOne,
  TeamOne,
  FaqOne,
  ProcessOne,
  FooterOne,
} from "../containers";

const HomeOne = () => {
  return (
    <Fragment>
      <Seo title="Home Page" />
      <HeaderTwo />
      <HeroOne />
      <div
        className="background-image"
        style={{ backgroundImage: "url(images/bg/ab-bg-1-1.jpg)" }}
      >
        <FeatureOne className="space-top space-extra-bottom" />
        <AboutOne className="space-bottom" />
      </div>
      {/* <ServiceOne className="space-top space-extra-bottom" /> */}
      {/* <CounterOne /> */}
      {/* <TeamOne className="space-top space-extra-bottom" /> */}
      <FaqOne />
      {/* <AboutTwo className="space-top space-extra-bottom" /> */}
      {/* <CtaOne className="space" /> */}
      <ProcessOne className="space-top space-extra-bottom" />
      {/* <TestimonialOne className="space-top space-extra-bottom" /> */}
      {/* <BrandOne className="space-bottom" /> */}
      {/* <BlogTwo className="space-top space-extra-bottom" /> */}
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
};

export default HomeOne;
