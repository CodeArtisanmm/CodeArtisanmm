import React from "react";
import { SecSubTitle, SecTitle, InfoMedia, Button } from "../../components";
import { useTranslation } from "react-i18next";

const AboutSeven = () => {
  const { t } = useTranslation();
  return (
    <div className="background-image">
      <div className="container container-style1">
        <div className="row flex-row-reverse align-items-center gx-70">
          <div className="col-lg-6 col-xl">
            <img src="images/about/ab-7-1.png" alt="aboutthumb" />
          </div>
          <div className="col-lg-6 col-xl-auto">
            <div className="about-box2">
              <SecSubTitle>
                <i className="fas fa-bring-forward" />
                Get best It solution 2024
              </SecSubTitle>
              <SecTitle className="text-capitalize h1">
                {t("home.about.title-about")}
              </SecTitle>
              <p> {t("home.about.second-para")} </p>
              <div className="row gx-0 align-items-center flex-row-reverse justify-content-end mt-sm-3 pt-sm-3 mb-30 pb-10">
                {/* <div className="col-sm-auto">
                  <p className="author-degi">Founder & CEO</p>
                  <h3 className="h5 author-name">Mr. Min Thurein</h3>
                </div> */}
                <div className="col-sm-auto">
                  <InfoMedia
                    className="about-call"
                    icon="fas fa-phone-alt"
                    title={`${t("about.contact")}`}
                    info={<a href="09770139207"> 09770139207 </a>}
                  />
                </div>
              </div>
              <Button path="/service">
                {t("about.order-service")}
                <i className="far fa-long-arrow-right" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSeven;
