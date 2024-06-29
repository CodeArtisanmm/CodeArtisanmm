import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import { ContactTwo, FooterOne, HeaderTwo } from "../containers";

const Contact = () => (
  <Fragment>
    <Seo title="Contact Us" />
    <HeaderTwo />
    <Breadcrumb pageName="Contact Us" bgImage="images/breadcumb/contact.jpg" />
    <ContactTwo className="space-top space-extra-bottom" />
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default Contact;
