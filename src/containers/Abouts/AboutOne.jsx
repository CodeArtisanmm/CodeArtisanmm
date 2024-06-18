import React, { useTransition } from "react";
import {
  Button,
  ImageBoxOne,
  SecTitle,
  SecSubTitle,
  InfoMedia,
} from "../../components";
import { useTranslation } from "react-i18next";

const AboutOne = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={`position-relative ${className || ""}`}>
      <div className="about-shape1 d-none d-xl-block">CodeArtisan</div>
      <div className="container z-index-common">
        <div className="row gx-60">
          <div className="col-lg-6 col-xl-5 mb-50 mb-lg-0">
            <ImageBoxOne
              imageOne="images/about/about-1.jpg"
              imageTwo="images/about/about-2.jpg"
              video="video/about-us.mp4"
            />
          </div>
          <div className="col-lg-6 col-xl-7 align-self-center">
            <SecSubTitle>
              <i className="fas fa-bring-forward" />
              Get best It solution 2024
            </SecSubTitle>
            <SecTitle className="h1">{t("home.about.title-home")}</SecTitle>
            <p className="mb-4 mt-1 pb-3">{t("home.about.first-para")}</p>
            <InfoMedia
              image="images/icon/tel-1-1.png"
              title={t("home.about.24hours-service")}
              info={`${t("home.about.contact-us-on-viber")} +959 770 139 207`}
              className="call-media"
            />
            <Button path="/about">
              {t("about-us")}
              <i className="far fa-long-arrow-right" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
